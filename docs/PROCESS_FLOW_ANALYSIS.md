# VecroMS process-flow analysis and React migration notes

## 1. What exists today (PHP/vanilla app)

- **Entry points:** `index.php` (dashboard), `login/index.php`, `customers/*`, `vehicles/*`,
  `jobs/*`, `bookings/*`, `inspections/*`, `services/*`, `reports/*`, `manage/*`,
  `management/*`, `projects/{garagepro,autovin,lagride}`, `user/*`.
- **Data layer:** MySQL via `assets/php/connect.php` (mysqli). Schema in `ams.sql`.
  No ORM, no migrations, no seed data in the dump.
- **Auth:** none. Pages are directly reachable; `login/index.php` is a static form.
- **State:** server-rendered HTML tables with hardcoded sample rows; forms POST to
  `assets/php/g_insert.php` etc. with no validation, no CSRF, no feedback beyond `alert()`.
- **Coupling:** business logic, SQL and HTML are interleaved; `g_search.php` echoes
  fragments; `garageprousers.php` is included into pages.

## 2. Process-flow gaps and risks

1. **No authentication / authorization.** Every route is public; user identity is a
   hardcoded "Ada" in the navbar. Role-based access (admin vs. technician vs. customer)
   is not enforced anywhere.
2. **SQL injection.** `g_insert.php`, `g_search.php` concatenate `$_POST`/`$_GET`
   directly into SQL. No prepared statements, no input validation, no output encoding.
3. **No data integrity.** `customers`/`vehicles`/`jobs` tables have no foreign keys;
   `cust_name` is denormalized into `bookings`, `vehicles`, `invoices`, leading to
   stale data. No transactions around multi-table writes (job → invoice → payment).
4. **No API boundary.** The frontend is server-rendered; there is no JSON API, so a
   React client cannot consume the backend. Reusable components and caching are
   impossible.
5. **No validation or error handling.** Forms accept any input; failures are silent
   (`error_reporting(0)`). No field-level messages, no retry.
6. **Hardcoded sample data.** Tables show duplicated rows instead of real queries;
   counts (customers, revenue) are static.
7. **Secrets in source.** DB creds (`root`/empty password) and a Google Maps API key
   were committed; rotated to env vars in this branch.
8. **No tests, linting, or CI.** No unit/integration/e2e coverage; no type safety.
9. **Asset bloat.** `assets/vendor` ships full copies of Bootstrap, jQuery, Chart.js,
   FontAwesome, Prism, etc. (~MBs) even though only a subset is used.
10. **Mixed concerns in `projects/*`.** GaragePro/AUTOVIN/LAGRIDE are separate
    mini-apps with their own copies of the layout, causing drift.
11. **No pagination/filtering on the server.** All filtering is client-side text boxes
    with no backend support.
12. **Dark mode / a11y.** Vanilla app is light-only; ARIA usage is inconsistent.

## 3. Proposed React (Vite) architecture

Created under `client/`:

- **Build:** Vite + React 18 + TypeScript, Tailwind v3 with the generated design-system
  preset (`tailwind.preset.js` + `tokens.css`). Single source of truth remains
  `design-system/tokens/tokens.json`.
- **Routing:** React Router with a shared `Layout` (sidebar + topbar) for authenticated
  routes and a standalone `/login`. All legacy modules mapped to routes.
- **Data:** TanStack Query for server state, Axios client for a future REST API.
  Mock data (`src/data/mock.ts`) mirrors `ams.sql` until the API exists.
- **Forms:** Zod schemas + controlled components (to be wired per page).
- **Auth:** JWT access/refresh tokens in httpOnly cookies, route guards, role-based
  nav filtering.
- **State:** URL as source of truth for filters/pagination; Zustand for UI-only state.

## 4. Incomplete / to-do in the React conversion

- API integration: pages currently use mock data; need a REST/JSON backend (or BFF)
  exposing customers, vehicles, jobs, bookings, inspections, services, users.
- Form submissions, validation messages, optimistic updates.
- Auth flow (login, session refresh, logout) and protected routes.
- Customer detail page (`/customers/:id`) with vehicles/invoices/bookings tabs.
- Inspection checklist form and status transitions.
- Reports charts (Chart.js/Recharts) and exports.
- Pagination, sorting, and server-side filtering.
- Tests (Vitest + Testing Library + Playwright) and CI.
- Accessibility audit (keyboard nav, focus management, contrast in dark mode).
- Remove legacy PHP and `assets/vendor` once parity is reached.

## 5. Migration order (recommended)

1. Stand up API (read-only) for customers + vehicles; swap mock data in `Customers`/`Vehicles`.
2. Add auth + route guards; protect all routes except `/login`.
3. Migrate jobs + bookings with create/update flows and validation.
4. Migrate inspections + services.
5. Reports, manage, user profile/settings.
6. Projects modules (Garage Pro / AUTOVIN / LAGRIDE) as feature flags.
7. Remove PHP app and vendor assets; update deploy to serve `client/dist`.
EOF