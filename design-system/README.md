# VecroMS Design System

The single reference for colour, type, spacing, elevation, motion, accessibility and component behaviour in the VecroMS React rebuild.

**Start here →** [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) · **Components →** [`COMPONENTS.md`](./COMPONENTS.md) · **See it →** [`styleguide.html`](./styleguide.html)

---

## Quick start

```bash
# 1. Rebuild CSS variables and the Tailwind preset after editing tokens.json
node design-system/tokens/build.mjs

# 2. Open the living style guide
open design-system/styleguide.html
```

**In a React app**

```tsx
// main.tsx
import "./design-system/tokens/tokens.css";
```

```js
// tailwind.config.js (optional adapter)
module.exports = {
  presets: [require("./design-system/tokens/tailwind.preset.js")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};
```

```tsx
// Any component — consume semantic tokens, never hex
<button className="h-control-md rounded-md bg-primary px-4 text-body font-medium text-primary-fg hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-line-focus">
  Create job
</button>
```

```tsx
// Charts and canvas need concrete values
import { chartColors } from "./design-system/tokens";
const colors = chartColors("light");
```

---

## File map

```
design-system/
├── README.md                 ← you are here
├── DESIGN_SYSTEM.md          ← foundations and rules
├── COMPONENTS.md             ← 39 component specs + status taxonomy
├── styleguide.html           ← interactive visual reference (light/dark)
├── assets/
│   ├── styleguide.css        ← styles for the reference only
│   └── styleguide.js         ← theme toggle, tabs, modal, toast, copy
└── tokens/
    ├── tokens.json           ← SINGLE SOURCE OF TRUTH
    ├── build.mjs             ← generates the two files below
    ├── tokens.css            ← generated CSS variables (do not edit)
    ├── tailwind.preset.js    ← generated Tailwind adapter (do not edit)
    └── index.ts              ← typed access for charts, canvas, tests
```

**Rule:** edit `tokens.json`, run the build, commit both source and generated files. Never hand-edit `tokens.css` or `tailwind.preset.js`.

---

## What is in the system

| Area | Defined |
| --- | --- |
| Colour | Brand green (11 steps), brand yellow (10), neutral (13), navy (3), 6 status tones × 4 roles × 2 themes, 8 chart series × 2 themes |
| Typography | Inter + Open Sans fallback, JetBrains Mono, 14-step scale with line-height/weight/tracking |
| Spacing | 4px base, 14 steps |
| Radius | 8 steps |
| Elevation | 6 shadows + 2 focus rings |
| Layout | 5 breakpoints, app shell, 6 page templates, 3 control density rows |
| Motion | 5 durations, 4 easings, reduced-motion rules |
| Components | 39 specs with variants, sizes, states, tokens, a11y, content, do/don’t |
| Theming | Light + dark, semantic aliases, legacy Argon mapping |

---

## The five decisions that matter

These were inferred from the existing product. Change them before building components if they are wrong.

1. **Brand green is the primary colour.** The logo is green/yellow, but the current Argon UI is indigo (`#5e72e4`). The system uses `#00863A` for actions and keeps indigo out. If the indigo is intentional brand equity, say so and we swap the primary scale.
2. **`#00863A`, not the logo `#00923F`, is the action green.** The logo green is 4.05:1 on white and fails AA for body text; `#00863A` is 4.70:1. The logo keeps its exact green.
3. **Inter replaces Open Sans.** Open Sans remains the fallback, so the layout degrades gracefully. If the team wants zero font change, swap `font.sans` in `tokens.json` and rebuild.
4. **Yellow is an accent, never text on light.** It is 1.15:1 on white. It is used for brand highlights, the “awaiting approval” tone, and dark-surface emphasis.
5. **Locale is `en-NG`, currency `NGN`, timezone `Africa/Lagos`.** Dates use `9 Nov 2026` in UI and ISO in APIs; plates and VINs are uppercase mono.

---

## Assumptions to confirm

- **Product name:** the repo and React app are **VecroMS (Vehicle Reporting and Organization Management Systems)**. The current logo still carries a legacy wordmark; the system uses VecroMS and keeps the car symbol until a new wordmark exists.
- **React stack:** the token layer is framework-agnostic. The component guidance assumes React + Radix + CVA + Tailwind, but the CSS variables work with CSS Modules, vanilla-extract or styled-components without change.
- **Dark mode:** fully tokenised, but the vanilla app is light-only. Treat dark as P1 unless the product needs it at launch.
- **Domain statuses:** the job/booking/vehicle/invoice status lists in `COMPONENTS.md` are inferred from the existing pages. Validate them with operations before wiring the API.
- **Currency:** `₦` and `NGN` assume Nigeria. If the product serves multiple markets, currency becomes a runtime format, not a token.

---

## Contributing

1. Check whether an existing semantic token or component covers the need.
2. If not, add a token to `tokens.json` with a role-based name.
3. Run `node design-system/tokens/build.mjs`.
4. Update `DESIGN_SYSTEM.md` / `COMPONENTS.md` if the rule changed.
5. Add a specimen to `styleguide.html`.
6. Open a PR against `react-development`. Colour, type and spacing changes need design review.

Versioning is semver: new token = minor, rename/remove = major with a migration note. Never silently change a token’s meaning.
