# VecroMS

**VecroMS (Vehicle Reporting and Organization Management Systems)** is a fleet and workshop management platform.

## React app (Vite)

The React rebuild lives in [`client/`](./client). Run:

```bash
cd app
npm install
npm run dev
```

Build with `npm run build`. See [`docs/PROCESS_FLOW_ANALYSIS.md`](./docs/PROCESS_FLOW_ANALYSIS.md)
for migration status and process-flow analysis.

## Design system

The colour, typography, spacing, elevation, motion and component specification for the React rebuild lives in [`design-system/`](./design-system/README.md).

- **[Foundations](./design-system/DESIGN_SYSTEM.md)** — brand, colour, type, layout, accessibility, content
- **[Components](./design-system/COMPONENTS.md)** — 39 component specs, states and the domain status taxonomy
- **[Living style guide](./design-system/styleguide.html)** — open it in a browser, light and dark
- **[Tokens](./design-system/tokens/tokens.json)** — single source of truth; run `node design-system/tokens/build.mjs` after editing

```bash
open design-system/styleguide.html
```
