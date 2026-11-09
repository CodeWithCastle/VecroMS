# VecroMS Design System — Foundations

**Version 1.0 · 9 November 2026**

This is the contract for every screen, component and state in the VecroMS React rebuild. It exists so that two developers (or a developer and a designer) make the same decision without asking.

- **Canonical source:** [`tokens/tokens.json`](./tokens/tokens.json)
- **Runtime CSS:** [`tokens/tokens.css`](./tokens/tokens.css) (generated — never edit by hand)
- **Tailwind adapter:** [`tokens/tailwind.preset.js`](./tokens/tailwind.preset.js)
- **Component specs:** [`COMPONENTS.md`](./COMPONENTS.md)
- **Living reference:** [`styleguide.html`](./styleguide.html)

If a value is not in this system, **do not hardcode it**. Propose a token, get it reviewed, add it to `tokens.json`, rebuild. A one-off hex is a bug.

---

## 1. Principles

1. **Operational clarity first.** A dispatcher should understand a screen in under three seconds. Decoration never competes with data.
2. **One primary action per view.** Everything else is secondary, ghost or a link.
3. **Calm surfaces, confident accents.** Neutrals carry the layout; green carries action; yellow is a highlight, never a surface.
4. **Status is never colour alone.** Every status pill has a label and a dot or icon.
5. **Dense, but breathable.** Tables can be compact; spacing still follows the 4px scale.
6. **Accessible by default.** WCAG 2.2 AA is the floor, not an enhancement.
7. **Tokens, not hex.** Components consume semantic tokens so dark mode and rebrands are one file away.
8. **Consistency beats novelty.** A new pattern needs a reason, a spec and a token — not a new component.

---

## 2. Brand

### 2.1 The mark

The existing product mark is a green car outline with yellow windows and road dashes. The palette in this system is sampled directly from it:

| Role | Hex | Source |
| --- | --- | --- |
| Brand green | `#00923F` | Car body / wordmark |
| Brand yellow | `#FFF500` | Windows / road dashes |

The repository and the React product are **VecroMS (Vehicle Reporting and Organization Management Systems)**. Until a new wordmark exists, keep the car symbol and replace only the wordmark; do not redraw or recolour the symbol.

**Clearspace:** at least `0.5 ×` the height of the mark on every side.
**Minimum width:** 96px digital, 24mm print.
**On dark:** use the white wordmark; the green symbol stays green. Never place the green wordmark on navy.

**Don't**
- Recolour the mark, add gradients, or outline it.
- Stretch, rotate or crop it.
- Put yellow text on white — it is a 1.15:1 contrast.
- Place the mark on a busy vehicle photo without a scrim.

### 2.2 Brand attributes

| We are | We are not |
| --- | --- |
| Precise, operational, dependable | Corporate, cold, bureaucratic |
| Confident and direct | Loud, playful, gimmicky |
| Fast to scan | Dense for the sake of density |
| Human about mistakes | Blaming or cute |

### 2.3 Voice

Write like a competent service manager: short sentences, concrete nouns, active verbs.

- Buttons: **verb + object** — “Create job”, “Assign technician”, “Mark complete”.
- Empty states: **why it is empty + the next action**.
- Errors: **what happened + how to fix it**, never “Invalid input”.
- Destructive actions: **name the object** — “Delete booking BK-1042?”.
- No exclamation marks. No “Oops”. No “Please”.

---

## 3. Colour

### 3.1 How the palette is layered

```
Primitive        Semantic                     Component
#00863A    →     --vms-primary           →    --vms-button-height-md
#E8F7EF    →     --vms-primary-subtle    →    --vms-badge-radius
```

Product code consumes **semantic** tokens. Primitives are for brand marks and chart series. Component tokens exist for geometry (heights, padding, radii), not for colour.

### 3.2 Brand green

The logo green `#00923F` is 4.05:1 on white — fine for large text, icons and the mark, **not** for body copy. The action green `#00863A` is 4.70:1 and is the default for buttons, links and focus.

| Token | Hex | Use |
| --- | --- | --- |
| `brand.green.50` | `#E8F7EF` | Tinted backgrounds, selected rows |
| `brand.green.100` | `#C6EEDA` | Hover on tinted surfaces |
| `brand.green.200` | `#91DFB7` | Chart fills, illustrations |
| `brand.green.300` | `#57CD92` | Dark-mode hover, chart series |
| `brand.green.400` | `#20B96E` | Dark-mode primary |
| `brand.green.500` | `#00923F` | **Brand mark**, large accents |
| `brand.green.600` | `#00863A` | **Primary action**, links, focus |
| `brand.green.700` | `#007A33` | Primary hover |
| `brand.green.800` | `#006A2D` | Primary active / pressed |
| `brand.green.900` | `#005424` | Deep text on tint |
| `brand.green.950` | `#00381A` | Darkest accent |

### 3.3 Brand yellow

Yellow is a **highlight**, not a UI surface. It is 1.15:1 on white and 16.3:1 on the dark canvas.

| Token | Hex | Use |
| --- | --- | --- |
| `brand.yellow.50` | `#FFFDE6` | Accent tint background |
| `brand.yellow.100` | `#FFFBBD` | Hover on accent tint |
| `brand.yellow.200` | `#FFF580` | Illustration, highlight |
| `brand.yellow.300` | `#FFF13D` | Chart accent |
| `brand.yellow.400` | `#FFF500` | **Brand yellow** (mark, dark-surface highlight) |
| `brand.yellow.500–900` | `#E6DC00` → `#474400` | Borders, pressed states, text on tint |

**Rules**
- Never set body text in yellow on a light background.
- On light surfaces, use the accent tint (`accent.bg`) with `accent.fg` (`#6B6300`, 6.00:1) — not raw yellow.
- Maximum one yellow accent per screen.

### 3.4 Neutrals

A cool grey scale, tuned to sit next to the green without turning mint.

| Token | Hex | Use |
| --- | --- | --- |
| `neutral.0` | `#FFFFFF` | Cards, modals, inputs |
| `neutral.25` | `#FCFDFE` | Subtle raised surface |
| `neutral.50` | `#F6F9FC` | App canvas (light) |
| `neutral.100` | `#F2F4F7` | Sunken areas, disabled fills |
| `neutral.200` | `#E9ECEF` | Dividers, skeletons |
| `neutral.300` | `#D0D5DD` | Default border |
| `neutral.400` | `#98A2B3` | Disabled text, placeholder |
| `neutral.500` | `#667085` | Tertiary text |
| `neutral.600` | `#475467` | Secondary text |
| `neutral.700` | `#344054` | Strong text, icons |
| `neutral.800` | `#1D2939` | Headings on tint |
| `neutral.900` | `#101828` | Primary text |
| `neutral.950` | `#0B1220` | Dark canvas |

### 3.5 Semantic colour roles

| Role | Light | Dark | Notes |
| --- | --- | --- | --- |
| `--vms-primary` | `#00863A` | `#20B96E` | Actions, links, active nav |
| `--vms-primary-hover` | `#007A33` | `#57CD92` | Hover |
| `--vms-primary-active` | `#006A2D` | `#91DFB7` | Pressed |
| `--vms-primary-subtle` | `#E8F7EF` | `#0C2B1D` | Selected rows, tinted badges |
| `--vms-primary-fg` | `#FFFFFF` | `#052E1B` | Text on solid primary |
| `--vms-primary-fg-subtle` | `#006A2D` | `#91DFB7` | Text on subtle primary |
| `--vms-bg-canvas` | `#F6F9FC` | `#0B1220` | Page background |
| `--vms-bg-surface` | `#FFFFFF` | `#111A2C` | Cards, inputs, modals |
| `--vms-bg-surface-subtle` | `#F9FAFB` | `#0E1626` | Table headers, inset panels |
| `--vms-bg-surface-sunken` | `#F2F4F7` | `#0A101C` | Wells, code blocks |
| `--vms-bg-surface-raised` | `#FFFFFF` | `#17233A` | Dropdowns, popovers |
| `--vms-bg-inverse` | `#172B4D` | `#F6F9FC` | Inverse cards |
| `--vms-text-primary` | `#101828` | `#E6EAF2` | Body and headings |
| `--vms-text-secondary` | `#475467` | `#B6C2D9` | Supporting copy |
| `--vms-text-tertiary` | `#667085` | `#93A1BA` | Captions, metadata |
| `--vms-text-disabled` | `#98A2B3` | `#5A6B85` | Disabled only |
| `--vms-border-subtle` | `#E9ECEF` | `#1B2740` | Dividers |
| `--vms-border-default` | `#D0D5DD` | `#25324B` | Inputs, cards |
| `--vms-border-strong` | `#98A2B3` | `#344563` | Hover, emphasis |
| `--vms-border-focus` | `#00863A` | `#57CD92` | Focus ring |

**Contrast (measured)**

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `text-primary` on `surface` | 17.75 | AAA |
| `text-secondary` on `surface` | 7.69 | AAA |
| `text-tertiary` on `surface` | 4.97 | AA |
| `primary` on white | 4.70 | AA |
| white on `primary` | 4.70 | AA |
| white on `danger-solid-strong` | 4.83 | AA |
| `primary-fg-subtle` on `primary-subtle` | 6.12 | AA |
| `text-primary` on `canvas` | 16.80 | AAA |
| Dark `text-primary` on dark surface | 14.42 | AAA |
| Dark `primary` on dark canvas | 7.33 | AAA |

> `primary` on `primary-subtle` is 4.25:1 — do not use it for small text. Use `primary-fg-subtle`.

### 3.6 Status colours

Each status has four roles: `solid` (dot, icon, bar), `bg`, `border`, `fg`. Use the tinted trio for badges, alerts and inline messages; use `solid` for dots, chart series and 2px indicators.

Danger adds a fifth role, `solid-strong` (`#D92D20`). `solid` (`#F04438`) is 3.76:1 with white text, so it is only for indicators; a filled danger **button** uses `solid-strong` (4.83:1 with white).

| Status | Light bg / fg | Dark bg / fg | Contrast (light / dark) |
| --- | --- | --- | --- |
| Success | `#ECFDF3` / `#067647` | `#0C2B1D` / `#6CE9A6` | 5.40 / 10.04 |
| Warning | `#FFFAEB` / `#B54708` | `#2B1D05` / `#FEC84B` | 5.20 / 10.60 |
| Danger | `#FEF3F2` / `#B42318` | `#2B0F0D` / `#FDA29B` | 6.05 / 9.19 |
| Info | `#EFF8FF` / `#175CD3` | `#0B1D33` / `#84CAFF` | 5.57 / 9.59 |
| Neutral | `#F2F4F7` / `#344054` | `#1D2939` / `#D0D5DD` | 9.49 / 9.97 |
| Accent | `#FFFDE6` / `#6B6300` | `#2B2900` / `#FFF580` | 6.00 / 13.12 |

**Rules**
- Success and primary are both green. They are not interchangeable: primary means *act*, success means *state*. Never use `success` for a primary button.
- Warning is amber, not brand yellow. Brand yellow is decorative.
- A destructive action uses `danger` for the button only when the action is irreversible; otherwise use a secondary button + confirmation.
- Status must include text. A coloured dot alone fails WCAG 1.4.1.

### 3.7 Data visualisation

| # | Light | Dark | Use |
| --- | --- | --- | --- |
| 1 | `#00863A` | `#20B96E` | Primary series |
| 2 | `#2E90FA` | `#53B1FD` | Secondary |
| 3 | `#F79009` | `#FDB022` | Tertiary / warning |
| 4 | `#7A5AF8` | `#A48AFB` | Quaternary |
| 5 | `#06AED4` | `#22CCEE` | Comparison |
| 6 | `#F04438` | `#F97066` | Negative / risk |
| 7 | `#84CC16` | `#A6EF67` | Positive secondary |
| 8 | `#667085` | `#98A2B3` | Baseline / other |

Rules: max 5 series on one chart; label units; use direct labels before legends; grid lines `neutral.200`; axis text `text-tertiary` at 12px; no 3D, no gradients, no drop shadows on data. For critical series, add a pattern or direct label so colour is not the only channel.

### 3.8 Legacy Argon mapping

The vanilla app uses Argon Dashboard. Map it rather than copying it.

| Argon | VecroMS | Note |
| --- | --- | --- |
| `#5e72e4` primary | `#00863A` | Brand green replaces indigo |
| `#172b4d` default | `#101828` / `#172B4D` | Text vs inverse surface |
| `#f8f9fe` body bg | `#F6F9FC` | Canvas |
| `#8898aa` muted | `#667085` | Tertiary text (was 2.95:1) |
| `#525f7f` body text | `#475467` | Secondary text |
| `#32325d` heading | `#101828` | Primary text |
| `.card` `0 0 2rem` shadow | `shadow.sm` + 1px border | Flatter, crisper |
| `.375rem` radius (6px) | `8px` | Buttons and inputs |
| `.icon-shape` | `StatCard` icon tile | 40px tinted square |
| `.badge` | `StatusPill` | Dot + label |
| Open Sans | Inter | Open Sans remains fallback |
| Nucleo / FontAwesome | Lucide | 1.5px stroke |

---

## 4. Typography

### 4.1 Families

| Token | Stack | Use |
| --- | --- | --- |
| `--vms-font-sans` | `Inter, "Open Sans", -apple-system, …` | Everything by default |
| `--vms-font-mono` | `"JetBrains Mono", ui-monospace, …` | VIN, plates, IDs, codes |

Load Inter 400/500/600/700 with `font-display: swap`. Do not load more than four weights. If Inter fails, Open Sans is the legacy fallback — the layout must survive it.

Why Inter: tall x-height for 13–14px table text, true tabular figures, and a neutral tone that lets the green carry the brand.

### 4.2 Scale

| Token | Size / line | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| `display-xl` | 48 / 56 | 700 | −0.02em | Marketing, auth hero |
| `display-lg` | 40 / 48 | 700 | −0.02em | Page hero |
| `display-md` | 36 / 44 | 700 | −0.02em | Section hero |
| `h1` | 30 / 38 | 700 | −0.01em | Page title |
| `h2` | 24 / 32 | 700 | −0.01em | Card / section title |
| `h3` | 20 / 28 | 600 | −0.01em | Sub-section |
| `h4` | 18 / 26 | 600 | −0.01em | Card title |
| `body-lg` | 16 / 24 | 400 | 0 | Auth, prose, onboarding |
| `body` | 14 / 22 | 400 | 0 | Default UI text |
| `body-sm` | 13 / 20 | 400 | 0 | Table cells, helper text |
| `caption` | 12 / 16 | 500 | 0.01em | Metadata, timestamps |
| `overline` | 11 / 16 | 600 | 0.08em | Group labels, eyebrows (uppercase) |
| `metric` | 30 / 36 | 700 | −0.02em | Stat card value |
| `metric-lg` | 40 / 48 | 700 | −0.02em | Dashboard hero metric |

### 4.3 Rules

- **Sentence case** for titles, labels, buttons and menu items. Uppercase is reserved for `overline`.
- Body text is **14px** by default. Never go below 12px. Table cells may be 13px.
- Use **no more than three type sizes** inside one card.
- Line length: 60–75 characters for prose; `max-width: 680px` (`size.prose-max`).
- Headings use 600/700; body uses 400. Avoid 500 for long copy.
- Numbers in tables, metrics and money use `font-variant-numeric: tabular-nums`.
- Do not use `text-transform: uppercase` on data (names, plates, statuses) — it hurts scanning.
- Truncate with ellipsis only when a tooltip or detail view reveals the full value.

---

## 5. Spacing, sizing and layout

### 5.1 Spacing scale

A 4px base. Every margin, padding and gap comes from this table.

| Token | px | Common use |
| --- | --- | --- |
| `space.0` | 0 | Reset |
| `space.1` | 4 | Icon ↔ label, badge dot |
| `space.2` | 8 | Button gap, tight stacks |
| `space.3` | 12 | Input padding, table cell y |
| `space.4` | 16 | Default gap, card padding (compact) |
| `space.5` | 20 | Card padding |
| `space.6` | 24 | Section gap, card padding (comfortable) |
| `space.8` | 32 | Page section gap |
| `space.10` | 40 | Large section gap |
| `space.12` | 48 | Page header bottom |
| `space.16` | 64 | Auth / hero spacing |
| `space.20` | 80 | Marketing section |
| `space.24` | 96 | Marketing section |
| `space.32` | 128 | Hero |

### 5.2 Control heights

| Size | Height | Font | Use |
| --- | --- | --- | --- |
| `xs` | 28 | 12 | Dense table actions |
| `sm` | 32 | 13 | Toolbars, filters |
| `md` | 40 | 14 | **Default** |
| `lg` | 48 | 16 | Auth, mobile primary |
| `xl` | 56 | 16 | Hero search |

Icon sizes: 14 / 16 / 20 / 24 / 32. Avatars: 24 / 32 / 40 / 48 / 64.

### 5.3 Breakpoints

| Token | Min width | Layout behaviour |
| --- | --- | --- |
| `sm` | 640 | 2-column stat cards |
| `md` | 768 | Sidebar can appear; 2-column forms |
| `lg` | 1024 | Persistent sidebar; 3-column cards |
| `xl` | 1280 | 4-column stat cards; side panels |
| `2xl` | 1536 | Max content width; wider tables |

### 5.4 App shell

```
┌──────────────────────────────────────────────────────────────┐
│ Topbar 64px · search · notifications · avatar                 │
├───────────────┬──────────────────────────────────────────────┤
│ Sidebar       │ Page canvas  (#F6F9FC)                       │
│ 264 / 76px    │  ┌────────────────────────────────────────┐  │
│               │  │ Page header: title + actions           │  │
│  Brand        │  ├────────────────────────────────────────┤  │
│  Nav groups   │  │ Content (max 1440px, gutter 24/32)     │  │
│  Footer user  │  │ Cards · tables · forms                 │  │
│               │  └────────────────────────────────────────┘  │
└───────────────┴──────────────────────────────────────────────┘
```

- Sidebar: 264px expanded, 76px collapsed, `surface` background, 1px right border.
- Topbar: 64px, sticky, `surface`, 1px bottom border. Search max 320px.
- Content: max 1440px, page gutter 16 (mobile) / 24 (tablet) / 32 (desktop).
- Below 1024px the sidebar becomes a drawer; the topbar shows the menu button.
- Tables scroll horizontally inside their card; the page never scrolls sideways.

### 5.5 Page templates

| Template | Structure |
| --- | --- |
| **Dashboard** | Page header → 4 stat cards → 2 chart cards → recent activity table |
| **List** | Page header → filter bar → table card (toolbar, table, pagination) |
| **Detail** | Breadcrumb → summary header (title, status, actions) → 2-column: main + side panel → tabs (Overview, Activity, Files) |
| **Form** | Breadcrumb → title → single column max 640px, sections of 2 columns at `lg` → sticky footer (Cancel / Save) |
| **Settings** | Left sub-nav + content sections; save per section, not one global save |
| **Auth** | Centred card max 420px on a tinted/gradient canvas; logo above; one primary action |

---

## 6. Radius, borders and elevation

### 6.1 Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius.xs` | 4 | Checkbox, tag |
| `radius.sm` | 6 | Tooltip, small badge |
| `radius.md` | 8 | **Buttons, inputs, selects** |
| `radius.lg` | 12 | **Cards, panels** |
| `radius.xl` | 16 | Modals, drawers |
| `radius.2xl` | 24 | Hero cards |
| `radius.full` | 9999 | Pills, avatars, dots |

### 6.2 Borders

| Token | Value | Use |
| --- | --- | --- |
| `borderWidth.1` | 1px | Cards, inputs, dividers |
| `borderWidth.2` | 2px | Active tab, selected item, focus |
| `borderWidth.4` | 4px | Alert accent, progress |

### 6.3 Elevation

| Token | Value | Use |
| --- | --- | --- |
| `shadow.xs` | `0 1px 2px rgba(16,24,40,.05)` | Inputs, subtle separation |
| `shadow.sm` | `0 1px 3px …` | **Cards** (with 1px border) |
| `shadow.md` | `0 4px 8px -2px …` | Hover cards, dropdowns |
| `shadow.lg` | `0 12px 16px -4px …` | Popovers, sticky bars |
| `shadow.xl` | `0 20px 24px -4px …` | Modals, drawers |
| `shadow.2xl` | `0 24px 48px -12px …` | Command palette |
| `shadow.focus` | `0 0 0 3px rgba(0,134,58,.30)` | Focus ring (light) |
| `shadow.focus-dark` | `0 0 0 3px rgba(87,205,146,.35)` | Focus ring (dark) |

**Rules**
- A card uses **1px border + `shadow.sm`**, not a heavy shadow. Elevation communicates layering, not decoration.
- Never stack shadows on nested cards. Use a subtle background instead.
- Focus is a 2px solid `border-focus` ring with a 2px offset, plus the soft `shadow.focus` halo. Never remove the outline without a replacement.
- In dark mode, borders do more work than shadows.

---

## 7. Motion

| Token | Value | Use |
| --- | --- | --- |
| `duration.fast` | 120ms | Hover, colour, icon |
| `duration.base` | 180ms | Dropdown, tooltip, tab |
| `duration.moderate` | 240ms | Modal, drawer, toast |
| `duration.slow` | 320ms | Page / large panel |
| `ease.standard` | `cubic-bezier(.2,0,0,1)` | Default |
| `ease.enter` | `cubic-bezier(0,0,.2,1)` | Elements entering |
| `ease.exit` | `cubic-bezier(.4,0,1,1)` | Elements leaving |
| `ease.spring` | `cubic-bezier(.34,1.56,.64,1)` | Small playful accents only |

- Animate `transform` and `opacity`, never `width`, `height`, `top` or `left`.
- Page transitions: 180ms fade + 4px rise. No sliding pages.
- Modals: 240ms scale from 0.98 + fade. Drawers: 240ms translate.
- Loading: skeleton shimmer, not spinners, for initial content. Spinners only for button-level actions.
- `prefers-reduced-motion: reduce` → remove transforms and parallax; keep opacity fades at 0ms. Never remove focus or state feedback.

---

## 8. Iconography

- **Library:** [Lucide](https://lucide.dev) for React (`lucide-react`).
- **Stroke:** 1.5px at 24px; 1.5px at 20px; 1.75px at 16px if it looks thin.
- **Sizes:** 16 (inline), 20 (buttons, nav), 24 (page actions), 32 (empty states).
- **Colour:** `currentColor`. Icons inherit text colour; never hardcode a fill.
- **Labelling:** icon-only buttons require `aria-label` and a tooltip. Icons never replace a visible label for a primary action.
- **Legacy mapping:** Nucleo `ni-*` and FontAwesome `fa-*` → the closest Lucide icon. Keep a mapping file during migration.

Common set: `LayoutDashboard`, `ClipboardList`, `CalendarDays`, `Users`, `Car`, `Wrench`, `FileText`, `Search`, `Bell`, `Settings`, `Plus`, `ChevronDown`, `Check`, `AlertTriangle`, `X`, `ArrowUpRight`, `Gauge`, `CircleDollarSign`.

---

## 9. Imagery

- **Vehicle photos:** 4:3, `object-fit: cover`, radius 8, neutral background. Always include `alt` text with plate + model.
- **Avatars:** photo or initials. Initials use a tinted background from a fixed 5-colour set (`primary-subtle`, `info-bg`, `warning-bg`, `danger-bg`, `neutral-bg`) and `700` text of the matching `fg`.
- **Empty states:** simple line illustration, green + yellow accents, no stock photography.
- **Auth / marketing:** use the brand background (`assets/img/brand/background.jpeg`) with a dark scrim; never place text directly on a busy photo.
- **Charts:** no images, no 3D, no decorative gradients.

---

## 10. Accessibility

Target: **WCAG 2.2 AA**.

| Requirement | Rule |
| --- | --- |
| Text contrast | ≥ 4.5:1 normal, ≥ 3:1 large (≥ 24px or 19px bold) |
| UI contrast | ≥ 3:1 for borders, icons, focus, chart lines |
| Focus | Always visible; 2px ring + 2px offset; `:focus-visible` only |
| Keyboard | Every interactive element reachable; logical order; no traps |
| Targets | ≥ 24×24px (WCAG 2.2); 44×44 recommended on touch |
| Forms | Visible label; `aria-describedby` for help/error; `aria-invalid`; error summary at top |
| Tables | `<caption>`, `scope`, `aria-sort`; numeric columns right-aligned |
| Dialogs | `role="dialog"`, `aria-modal`, labelled; focus trap; Esc; return focus |
| Toasts | `role="status"` / `aria-live="polite"`; errors `assertive`; dismissible |
| Motion | Respect `prefers-reduced-motion` |
| Colour | Never the only signal; status = dot + text; charts = labels + patterns |
| Zoom | Usable at 200%; reflow at 320px without horizontal page scroll |
| Images | Meaningful `alt`; decorative `alt=""` / `aria-hidden` |
| Language | `<html lang="en-NG">`; announce route changes |

**Testing:** axe-core in unit tests, keyboard-only pass, VoiceOver/NVDA spot check, 200% zoom, high-contrast mode.

---

## 11. Content and locale

### 11.1 Glossary (use these words)

| Use | Not |
| --- | --- |
| Job | Task, ticket, work item |
| Booking | Appointment, reservation |
| Customer | Client, account |
| Vehicle | Car, unit |
| Inspection | Check, audit |
| Service | Repair, maintenance (unless specific) |
| Estimate | Quote (in UI), proposal |
| Invoice | Bill |
| Technician | Mechanic, staff (when specific) |

### 11.2 Formats

| Data | Format | Example |
| --- | --- | --- |
| Date (UI) | `d MMM yyyy` | `9 Nov 2026` |
| Date (table) | `dd/MM/yyyy` | `09/11/2026` |
| Date-time | `d MMM yyyy, HH:mm` | `9 Nov 2026, 14:30` |
| Time | 24-hour, WAT | `14:30 WAT` |
| Currency | `₦` + thousands, no decimals unless needed | `₦1,250,000` |
| Currency (export) | ISO code | `NGN 1,250,000.00` |
| Number | Thousands separators, tabular | `12,480` |
| Percent | One decimal max | `49.7%` |
| Phone | `+234 801 234 5678` | |
| Plate | Uppercase, mono | `LAG-482-XY` |
| VIN | Uppercase, mono, 17 chars | `1HGCM82633A004352` |
| File size | Binary, one decimal | `2.4 MB` |

Locale: `en-NG`, timezone `Africa/Lagos`, currency `NGN`. Keep ISO values in APIs; format at the edge.

### 11.3 Microcopy patterns

| Situation | Pattern |
| --- | --- |
| Empty list | “No jobs yet. Create the first job to start tracking work.” + primary action |
| Filtered empty | “No jobs match these filters.” + “Clear filters” |
| Error | “We couldn’t save this job. Check your connection and try again.” + retry |
| Field error | “Enter a plate number.” (not “Required”) |
| Destructive | “Delete booking BK-1042? This can’t be undone.” + danger button |
| Success toast | “Job JB-1042 created.” + “View job” |
| Loading button | “Saving…” with spinner; keep the button width stable |
| Permission | “You don’t have permission to edit jobs. Ask an admin for access.” |

---

## 12. Theming and tokens

### 12.1 Layers and naming

```
--vms-color-brand-green-600     primitive   (never in product UI)
--vms-primary                   semantic    (use this)
--vms-button-height-md          component   (geometry only)
```

Semantic names describe **role**, not appearance: `primary`, `danger`, `bg-surface`, `text-secondary`. Do not create `green-button` or `light-grey-border`.

### 12.2 Files

```
design-system/
├── DESIGN_SYSTEM.md          ← this file
├── COMPONENTS.md             ← component specs
├── README.md                 ← quick start + decisions
├── styleguide.html           ← living visual reference
├── assets/
│   ├── styleguide.css
│   └── styleguide.js
└── tokens/
    ├── tokens.json           ← source of truth
    ├── build.mjs             ← generator
    ├── tokens.css            ← generated (do not edit)
    ├── tailwind.preset.js    ← generated (do not edit)
    └── index.ts              ← typed access for charts/tests
```

### 12.3 Build

```bash
node design-system/tokens/build.mjs
```

Run after any change to `tokens.json`. Commit both the source and the generated files so the app builds without a pre-step.

### 12.4 React integration

**Option A — CSS variables (default, framework-agnostic)**

```tsx
import "design-system/tokens/tokens.css";

<button className="vms-button vms-button--primary">Create job</button>
```

```css
.vms-button {
  height: var(--vms-button-height-md);
  padding-inline: var(--vms-button-padding-x-md);
  border-radius: var(--vms-button-radius);
  background: var(--vms-primary);
  color: var(--vms-primary-fg);
  font: var(--vms-font-weight-medium) var(--vms-font-size-body) / var(--vms-line-height-body)
    var(--vms-font-sans);
}
.vms-button:hover { background: var(--vms-primary-hover); }
.vms-button:focus-visible { outline: 2px solid var(--vms-border-focus); outline-offset: 2px; }
```

**Option B — Tailwind**

```js
// tailwind.config.js
module.exports = {
  presets: [require("./design-system/tokens/tailwind.preset.js")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
```

```tsx
<button className="h-control-md rounded-md bg-primary px-4 text-body font-medium text-primary-fg hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-focus">
  Create job
</button>
```

**Component conventions**

- `class-variance-authority` (CVA) for variants; `clsx` + `tailwind-merge` for class merging.
- Radix primitives for Dialog, DropdownMenu, Select, Tabs, Tooltip, Toast, Checkbox, Switch.
- `forwardRef` on every interactive primitive; spread `...props`; accept `className`.
- Variant props: `variant`, `size`, `tone`, `isLoading`, `isDisabled`, `leftIcon`, `rightIcon`, `fullWidth`.
- Use `asChild` (Radix Slot) for link-styled buttons.
- No inline hex. No `style={{ color: "#..." }}` except chart series from `tokens/index.ts`.

### 12.5 Dark mode

- Set `<html data-theme="dark">` (or omit it to follow the OS preference).
- Persist the user choice in `localStorage` under `vms-theme`.
- Never hardcode light values in a component; use semantic tokens so both themes work.
- Test every component in both themes, including charts, focus rings, disabled states and skeletons.
- Dark surfaces use borders, not heavy shadows. Images get a subtle `brightness(.9)` only if needed.

### 12.6 Adding or changing a token

1. Check whether an existing semantic token covers the need.
2. Add the value to `tokens.json` with a clear role name.
3. Run `node design-system/tokens/build.mjs`.
4. Update `DESIGN_SYSTEM.md` and `COMPONENTS.md` if usage rules change.
5. Add a swatch/specimen to `styleguide.html`.
6. Open a PR. Colour, type and spacing changes need design review.

Versioning: semver. Adding a token = minor. Renaming/removing = major with a migration note. Never silently change a token’s meaning.

---

## 13. Definition of done (component)

- [ ] Uses semantic tokens only — no raw hex, no magic spacing.
- [ ] All variants, sizes and states implemented: default, hover, active, focus-visible, disabled, loading, error (where relevant).
- [ ] Keyboard operable; focus visible; correct roles and ARIA.
- [ ] Contrast checked in light and dark.
- [ ] Responsive at 320, 768, 1024, 1440.
- [ ] Storybook story per variant/state, plus a docs page.
- [ ] Unit test + axe test.
- [ ] Copy reviewed against the glossary and microcopy patterns.
- [ ] Reduced-motion behaviour verified.
- [ ] No layout shift on load or state change.
