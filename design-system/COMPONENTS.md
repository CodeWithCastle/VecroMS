# VecroMS Design System — Component Specification

**Version 1.0 · 9 November 2026**

Every component below is specified by **purpose → anatomy → variants → sizes → states → tokens → accessibility → content → do/don’t**. If an implementation disagrees with this file, the implementation is wrong until this file is changed.

Foundations (colour, type, spacing, motion, accessibility) live in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). Token names refer to `tokens/tokens.json` and the generated CSS variables.

---

## Index

| # | Component | Category | Priority |
| --- | --- | --- | --- |
| 1 | Button | Action | P0 |
| 2 | IconButton | Action | P0 |
| 3 | Link | Action | P0 |
| 4 | ButtonGroup | Action | P1 |
| 5 | FormField | Form | P0 |
| 6 | Input | Form | P0 |
| 7 | Textarea | Form | P0 |
| 8 | Select | Form | P0 |
| 9 | Checkbox | Form | P0 |
| 10 | RadioGroup | Form | P0 |
| 11 | Switch | Form | P1 |
| 12 | SearchField | Form | P0 |
| 13 | DatePicker | Form | P0 |
| 14 | FileUpload | Form | P1 |
| 15 | Card | Surface | P0 |
| 16 | StatCard | Surface | P0 |
| 17 | DataTable | Data | P0 |
| 18 | StatusPill | Data | P0 |
| 19 | Avatar | Data | P0 |
| 20 | Alert | Feedback | P0 |
| 21 | Toast | Feedback | P0 |
| 22 | Modal | Overlay | P0 |
| 23 | ConfirmDialog | Overlay | P0 |
| 24 | Drawer | Overlay | P1 |
| 25 | DropdownMenu | Navigation | P0 |
| 26 | Tabs | Navigation | P0 |
| 27 | Breadcrumb | Navigation | P0 |
| 28 | Pagination | Navigation | P0 |
| 29 | Sidebar | Navigation | P0 |
| 30 | Topbar | Navigation | P0 |
| 31 | PageHeader | Pattern | P0 |
| 32 | FilterBar | Pattern | P0 |
| 33 | EmptyState | Pattern | P0 |
| 34 | Skeleton | Feedback | P1 |
| 35 | Tooltip | Feedback | P1 |
| 36 | Progress | Feedback | P1 |
| 37 | ChartCard | Data | P1 |
| 38 | ActivityTimeline | Data | P2 |
| 39 | Status taxonomy | Pattern | P0 |

---

## 1. Button

**Purpose:** Trigger an action. One primary button per view.

**Anatomy:** optional left icon · label · optional right icon · optional loading spinner.

**Variants**

| Variant | Use | Background | Text | Border |
| --- | --- | --- | --- | --- |
| `primary` | The single main action | `--vms-primary` | `--vms-primary-fg` | none |
| `secondary` | Supporting actions | `--vms-bg-surface` | `--vms-text-primary` | 1px `--vms-border-default` |
| `ghost` | Toolbars, low emphasis | transparent | `--vms-text-secondary` | none |
| `danger` | Irreversible destructive action | `--vms-danger-solid-strong` | `#FFFFFF` | none |
| `danger-ghost` | Destructive in a dense row | transparent | `--vms-danger-fg` | none |
| `link` | Inline navigation | transparent | `--vms-text-link` | none |

**Sizes**

| Size | Height | Padding x | Font | Icon | Radius |
| --- | --- | --- | --- | --- | --- |
| `xs` | 28 | 10 | 12/16 | 14 | 8 |
| `sm` | 32 | 12 | 13/20 | 16 | 8 |
| `md` | 40 | 16 | 14/22 | 16 | 8 |
| `lg` | 48 | 20 | 16/24 | 20 | 8 |

**States**

| State | Treatment |
| --- | --- |
| Hover | Primary/secondary darken one step; ghost gets `bg-surface-sunken` |
| Active | Darken two steps; no transform |
| Focus-visible | 2px `--vms-border-focus` outline, 2px offset + `--vms-shadow-focus` |
| Disabled | `bg-surface-sunken`, `text-disabled`, `cursor: not-allowed`, no shadow |
| Loading | Spinner replaces left icon, label becomes “Saving…”, width locked, `aria-busy="true"`, disabled |
| Full width | `width: 100%`; label centred |

**Tokens:** `--vms-button-height-*`, `--vms-button-padding-x-*`, `--vms-button-gap`, `--vms-button-radius`, `--vms-primary*`, `--vms-danger-*`.

**Accessibility:** native `<button>`; `type="button"` unless submitting; never use a `<div>`; loading keeps an accessible name; icon-only is `IconButton`.

**Content:** verb + object, sentence case, ≤ 3 words (“Create job”, “Assign technician”, “Mark complete”). No “OK”, “Submit”, “Click here”.

**Do / Don’t**
- ✅ Put the primary action at the far right of a page header or form footer.
- ✅ Keep the button width stable while loading.
- ❌ Two primary buttons side by side.
- ❌ A danger button without a confirmation step.

---

## 2. IconButton

**Purpose:** A compact action with no visible label.

**Anatomy:** square button · 16/20px icon · optional tooltip.

**Variants:** `ghost` (default), `secondary`, `danger-ghost`. **Sizes:** 28, 32, 40, 48 (square).

**States:** same as Button. The hit area must be at least 32×32; 44×44 on touch.

**Tokens:** button height tokens; icon `size.icon`.

**Accessibility:** `aria-label` is mandatory and must describe the action (“Edit job JB-1042”); add a tooltip for sighted users; never use an icon as the only label for a destructive action.

**Do / Don’t**
- ✅ Row actions: view, edit, delete.
- ❌ More than three icon buttons in one row — move the rest into a `DropdownMenu`.

---

## 3. Link

**Purpose:** Navigate without changing state.

**Variants:** inline (underlined on hover), standalone (green, medium), subtle (secondary text), inverse (on dark).

**States:** default `--vms-text-link`; hover `--vms-text-link-hover` + underline; visited same as default (do not purple); focus ring.

**Tokens:** `--vms-text-link`, `--vms-text-link-hover`.

**Accessibility:** descriptive text, never “click here”; external links get an icon + `rel="noreferrer"`; use `<a>` for navigation and `<button>` for actions.

---

## 4. ButtonGroup

**Purpose:** Group related actions with shared geometry.

**Anatomy:** horizontal or vertical group; 8px gap for separate actions, 0 gap with joined borders for segmented controls.

**Rules:** max 3 visible actions; primary last; overflow into a `DropdownMenu` beyond 3; never mix sizes inside a group.

---

## 5. FormField

**Purpose:** The wrapper that makes an input accessible and consistent.

**Anatomy (top to bottom):** label (13/20, 500) · optional hint (12/16, tertiary) · control · helper text or error (12/16) · optional counter.

**Spacing:** label ↔ control 6px; control ↔ helper 6px; field ↔ field 16px; section ↔ section 32px.

**Rules**
- Label is always visible. Placeholder is an example, never the label.
- Required fields show a `*` with `<span class="sr-only">required</span>`.
- Error text replaces helper text and uses `--vms-danger-fg` + `aria-invalid="true"`.
- One error per field; the summary at the top links to the first invalid field.
- Do not use `float-label` patterns — they hurt scanning and autofill.

**Accessibility:** `<label for>`; `aria-describedby` for hint/error; `aria-errormessage` where supported; group related radios with `<fieldset><legend>`.

---

## 6. Input

**Purpose:** Single-line text, number, email, phone, password, plate, VIN.

**Anatomy:** optional left icon · input · optional right icon/clear · optional suffix (unit).

**Sizes:** 32 / 40 (default) / 48. Padding x 12. Radius 8. Font 14/22.

**States**

| State | Border | Background | Notes |
| --- | --- | --- | --- |
| Default | `--vms-border-default` | `--vms-bg-surface` | |
| Hover | `--vms-border-strong` | surface | |
| Focus | `--vms-border-focus` | surface | + `--vms-shadow-focus` |
| Filled | default | surface | |
| Disabled | `--vms-border-subtle` | `--vms-bg-surface-sunken` | `text-disabled` |
| Read-only | `--vms-border-subtle` | `--vms-bg-surface-subtle` | selectable text |
| Error | `--vms-danger-solid` | surface | + error text |
| Success | `--vms-success-solid` | surface | optional check icon |

**Tokens:** `--vms-input-height-*`, `--vms-input-padding-x`, `--vms-input-radius`.

**Content:** align numeric input right only in tables; use `inputmode` (`numeric`, `tel`, `email`); autocomplete tokens (`given-name`, `tel`, `plate` not standard → `off`).

**Accessibility:** never block paste; show password toggle with `aria-label`; error announced via live region; min touch target 44 on mobile.

---

## 7. Textarea

**Purpose:** Multi-line notes, job descriptions, inspection findings.

**Spec:** min-height 96px; auto-grow to 240px; resize vertical; same border/focus/error tokens as Input; character counter at 12/16 tertiary, turns warning at 90%, danger at 100%.

**Accessibility:** `aria-describedby` includes the counter; announce the remaining count only on focus/blur, not every keystroke.

---

## 8. Select

**Purpose:** Choose one option from a known list.

**Variants:** single (default), searchable (> 8 options), multi-select with chips (max 3 visible + “+N more”), grouped (optgroup).

**Sizes:** 32 / 40 / 48; radius 8; menu radius 8; menu shadow `lg`; max height 320px with scroll.

**States:** default, hover, focus, open, disabled, error, loading (skeleton rows).

**Rules**
- Use a native `<select>` on mobile when possible; use a custom listbox on desktop for search/multi.
- Menu opens below by default; flip above when there is no room.
- Selected option shows a check; keyboard: ↑↓, Home/End, Enter, Esc, type-ahead.
- Empty state inside the menu: “No results for ‘…’” + “Clear search”.

**Accessibility:** combobox pattern (`role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`); label always associated; multi-select announces count.

---

## 9. Checkbox

**Purpose:** Independent on/off choice, or “select all” in a table.

**Spec:** 20×20 box, radius 4, 1px border; checked = `--vms-primary` fill + white check; indeterminate = dash; label 14/22 with 8px gap; hit area 44×44 on touch.

**States:** default, hover, focus, checked, indeterminate, disabled, error.

**Accessibility:** native `<input type="checkbox">` visually hidden but focusable; `aria-checked="mixed"` for indeterminate; group with `<fieldset>` when related.

---

## 10. RadioGroup

**Purpose:** Choose exactly one option when all options should be visible.

**Spec:** 20×20 circle; selected = primary dot; 8px gap to label; vertical stack with 12px gap (horizontal only for ≤ 3 short options).

**Accessibility:** `<fieldset><legend>`; arrow keys move selection; `role="radiogroup"` if custom.

**Rule:** more than 5 options → use `Select`.

---

## 11. Switch

**Purpose:** Immediate on/off setting (no save button).

**Spec:** track 40×24, radius full, knob 20 with 2px inset; off = `neutral.300`, on = `primary`; label to the right, 14/22; optional helper below.

**States:** default, hover, focus, on, off, disabled, loading (knob spinner).

**Accessibility:** `role="switch"`, `aria-checked`; Space/Enter toggles; label click toggles; announce the new state.

**Rule:** never use a switch for a destructive or irreversible change.

---

## 12. SearchField

**Purpose:** Find records across a page or the app.

**Anatomy:** search icon (16) · input · clear button (appears with text) · optional keyboard hint (`⌘K`).

**Spec:** height 40 (toolbar) or 32 (compact); radius 8; placeholder “Search jobs, customers, plates…”; debounce 250ms; show a spinner inside the field while searching; Esc clears.

**States:** idle, typing, loading, results, no results, error.

**Accessibility:** `role="searchbox"`; `aria-label="Search"`; announce result count via live region; keyboard shortcut documented and discoverable.

---

## 13. DatePicker

**Purpose:** Pick a date or date range for bookings, jobs and reports.

**Anatomy:** input with calendar icon · popover calendar · optional time select · range presets (Today, This week, This month, Custom).

**Spec:** calendar width 280; day cell 36×36; radius 6; selected = primary; today = 1px primary border; outside month = tertiary; range = primary-subtle band; footer with “Clear” and “Apply”.

**Rules:** display format `d MMM yyyy`; API value ISO `yyyy-MM-dd`; disable invalid dates (past for new bookings, blocked workshop days); timezone `Africa/Lagos`.

**Accessibility:** full keyboard grid (arrows, PageUp/Down, Home/End, Enter, Esc); `aria-label` on each day with the full date; announce the selected date.

---

## 14. FileUpload

**Purpose:** Attach photos, documents, inspection images.

**Anatomy:** drop zone (dashed 1px border, radius 12, 24px padding) · icon · “Drag files here or browse” · accepted types/size · file list with progress and remove.

**Spec:** accepted types shown explicitly; max size 10 MB per file; image previews 40×40 radius 6; upload progress bar; retry per file; error per file.

**Accessibility:** the drop zone is a `<button>` or has `role="button"` + keyboard activation; `input[type=file]` is visually hidden but labelled; announce upload completion.

---

## 15. Card

**Purpose:** Group related content on a surface.

**Anatomy:** optional header (title + actions) · body · optional footer · optional media.

**Spec:** background `--vms-bg-surface`; 1px `--vms-border-subtle`; radius 12; shadow `sm`; padding 20 (default) / 24 (comfortable); header padding 16–20 with optional bottom divider.

**Variants:** default, interactive (hover: `shadow.md`, translateY(−1px), border `default`), flush (table fills edge-to-edge), inverse (navy `#172B4D`, white text), tinted (`primary-subtle`).

**Rules:** one idea per card; no nested cards; a card is not a button unless the whole surface is clickable and has a visible focus ring.

**Accessibility:** if interactive, use `<a>`/`<button>` wrapping the card, not a click handler on a `<div>`; heading level follows the page outline.

---

## 16. StatCard

**Purpose:** Show one KPI with context.

**Anatomy:** overline label · metric value · delta (arrow + %) · comparison text · optional icon tile · optional sparkline.

**Spec:** card padding 20; label `overline` tertiary; value `metric` (30/36) primary text, tabular; delta 13/20 medium, success/danger; icon tile 40×40 radius full or 10, tinted background, 20px icon; sparkline 48px tall, no axes.

**Rules:** the delta must say what it compares to (“vs last month”); never show a delta without a baseline; 4 cards per row at `xl`, 2 at `sm`, 1 on mobile; keep values to 5 characters where possible.

**Accessibility:** do not rely on green/red arrows alone — include the sign and the comparison text; the sparkline needs a text summary.

---

## 17. DataTable

**Purpose:** The primary surface for jobs, bookings, customers, vehicles, invoices.

**Anatomy:** card wrapper · toolbar (title, count, search, filters, columns, export) · table · footer (selection summary, pagination).

**Spec**

| Property | Value |
| --- | --- |
| Header | 12/16, 600, `overline`-like uppercase, tracking .04em, `text-tertiary`, `bg-surface-subtle` |
| Row height | compact 40 · default 48 · comfortable 56 |
| Cell padding | 12–16 x, 12 y |
| Border | bottom 1px `border-subtle` |
| Hover | `bg-surface-hover` |
| Selected | `bg-primary-subtle` |
| Numeric | right-aligned, tabular |
| Actions | last column, 2–3 icon buttons, overflow menu |
| Empty | `EmptyState` inside the table area |
| Loading | 5 skeleton rows matching column widths |
| Sticky | header sticky inside the scroll container |

**Rules**
- Sortable headers show a chevron; only one sort at a time unless the UI says otherwise.
- Column visibility is user-controlled and persisted.
- Bulk actions appear only when rows are selected; show “N selected” and “Clear”.
- Pagination: 25 default, options 10/25/50/100; show “1–25 of 348”.
- Never truncate the primary identifier (job number, plate) — truncate the description instead.
- Mobile: horizontal scroll with the first column sticky, or a card list for ≤ 4 columns.

**Accessibility:** `<caption class="sr-only">`, `scope="col"`, `aria-sort`, select-all with an accessible label, row actions labelled with the record ID.

---

## 18. StatusPill

**Purpose:** Show a state at a glance.

**Anatomy:** dot (6px) or icon (12px) · label (12/16, 500) · optional count.

**Variants:** `neutral`, `success`, `warning`, `danger`, `info`, `primary`, `accent`. Tinted background + 1px border + `fg` text.

**Sizes:** sm 20px height, md 24px height; padding x 8; radius full.

**Rules:** sentence case; the label is the source of truth; the dot is never the only signal; do not use a pill for a non-status tag (use a neutral tag with no dot); max 2 pills per row cell, then “+N”.

**Accessibility:** text is read; the dot is `aria-hidden`; if the colour carries extra meaning, include it in the label (“Overdue by 3 days”).

---

## 19. Avatar

**Purpose:** Represent a person or a vehicle.

**Spec:** sizes 24 / 32 / 40 / 48 / 64; circle; image `object-fit: cover`; initials fallback 600 weight, tinted background; 2px surface ring in groups; status dot 8px bottom-right.

**AvatarGroup:** max 4 visible, overlap −8px, “+N” chip; tooltip with names.

**Accessibility:** `alt` = person’s name; initials have an accessible name; decorative avatars are `alt=""`.

---

## 20. Alert

**Purpose:** Persistent inline message about the page or a section.

**Anatomy:** icon · title (optional) · body · action (optional) · dismiss (optional).

**Variants:** info, success, warning, danger, neutral. Background `*-bg`, border `*-border`, icon/text `*-fg`, radius 10, padding 12–16.

**Rules:** use for persistent context, not transient success (use Toast); max one alert per section; danger alerts are not dismissible if the problem persists; include a recovery action when possible.

**Accessibility:** `role="alert"` for danger/warning, `role="status"` for info/success; do not move focus.

---

## 21. Toast

**Purpose:** Transient confirmation or failure after an action.

**Anatomy:** tone icon · message · optional action · close.

**Spec:** width 360 max; radius 12; shadow `xl`; padding 12–16; bottom-right desktop, top-center mobile; stack max 3; auto-dismiss 5s (success/info), 8s (warning), never auto-dismiss danger; pause on hover/focus.

**Variants:** success, info, warning, danger.

**Accessibility:** container `aria-live="polite"`; errors `assertive`; the close button is labelled; toasts never contain the only path to a critical action.

---

## 22. Modal

**Purpose:** Focused task or decision that must interrupt.

**Anatomy:** overlay (`bg-overlay`) · dialog · header (title + close) · body · footer (secondary + primary).

**Spec:** widths 400 (confirm), 560 (form), 720 (complex), 960 (table/detail); radius 16; padding 24; shadow `xl`; max height 90vh with body scroll; footer sticky.

**Rules:** one primary action; Esc closes unless the task is destructive and unsaved; click-outside closes only for non-destructive; focus moves to the first field or the title; focus returns to the trigger; body scroll locked.

**Accessibility:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`; focus trap; `inert` the background; no nested modals.

---

## 23. ConfirmDialog

**Purpose:** Confirm a destructive or irreversible action.

**Anatomy:** danger icon · title naming the object · consequence sentence · Cancel (secondary) + Delete (danger).

**Rules:** title = “Delete booking BK-1042?”; body explains what is lost; the confirm button repeats the verb (“Delete booking”); for high-risk actions (delete customer with history, void invoice) require typing the record ID; never auto-focus the danger button.

**Accessibility:** initial focus on Cancel; `aria-describedby` includes the consequence; announce the result via toast.

---

## 24. Drawer

**Purpose:** Detail or edit without losing the list context.

**Anatomy:** overlay · right-side panel · header (title, close) · body · footer actions.

**Spec:** widths 400 / 560 / 720; full-screen below `md`; radius 0 on mobile, 16 on the left corners at desktop; shadow `xl`; slide 240ms.

**Rules:** use for job detail, customer quick-view, filters on mobile; do not nest drawers; Esc closes; focus trap; return focus.

---

## 25. DropdownMenu

**Purpose:** Secondary actions and navigation.

**Anatomy:** trigger · menu · items (icon + label + optional shortcut) · dividers · danger item at the bottom.

**Spec:** min width 180, max 320; radius 8; shadow `lg`; padding 4; item height 36; 12px padding x; 16px icon; danger item `danger-fg`.

**Rules:** max 8 items before grouping; destructive item last, separated by a divider; keyboard: ↑↓, Home/End, Enter, Esc; type-ahead; close on select; submenus only one level.

**Accessibility:** `role="menu"` / `menuitem`; `aria-haspopup`, `aria-expanded`; focus moves into the menu; return focus to trigger.

---

## 26. Tabs

**Purpose:** Switch between views of the same record.

**Variants:** underline (page sections), pill (filters/segmented).

**Spec:** height 44; label 14/22 medium; active underline 2px `primary`; inactive text `secondary`; hover `text-primary`; count badge optional; overflow scroll with edge fade on mobile.

**Rules:** 2–7 tabs; the URL reflects the active tab; do not use tabs for sequential steps (use a stepper); do not hide critical actions inside a tab.

**Accessibility:** `role="tablist"`, `tab`, `tabpanel`; arrow keys; `aria-selected`; panel labelled by the tab.

---

## 27. Breadcrumb

**Purpose:** Show location in the hierarchy.

**Spec:** 13/20; links `text-tertiary` hover `text-link`; separator chevron 16; current page `text-secondary` not a link; max 4 levels, collapse the middle with “…”.

**Accessibility:** `<nav aria-label="Breadcrumb">` + ordered list; `aria-current="page"` on the last item.

---

## 28. Pagination

**Purpose:** Move through large result sets.

**Anatomy:** range text (“1–25 of 348”) · page size select · prev/next · page numbers with ellipsis.

**Spec:** buttons 32 (sm) / 36 (md); radius 6; active `primary-subtle` + `primary-fg-subtle`; disabled `text-disabled`; show first, last, current ±1, ellipsis.

**Rules:** keep the page size in the URL/localStorage; changing filters resets to page 1; announce the new range.

**Accessibility:** `<nav aria-label="Pagination">`; `aria-current="page"`; prev/next labelled; disabled buttons are `disabled`, not just styled.

---

## 29. Sidebar

**Purpose:** Primary navigation for the app shell.

**Anatomy:** brand (64px) · nav groups · items (icon + label + optional badge) · footer (user card, collapse).

**Spec:** 264 expanded / 76 collapsed; background `surface`; right border `border-subtle`; item height 40; padding x 12; gap 8; radius 8; icon 20; active = `primary-subtle` background + `primary-fg-subtle` text + 3px left bar; hover = `surface-hover`; group label `overline` tertiary with 16px top margin.

**Rules:** max 7 top-level items; group related items; the active item is derived from the route; badges show counts, not decoration; collapse persists.

**Accessibility:** `<nav aria-label="Main">`; `aria-current="page"`; the collapse button has `aria-expanded`; below 1024px it becomes a drawer with a focus trap.

---

## 30. Topbar

**Purpose:** Global context and account actions.

**Anatomy:** menu button (mobile) · breadcrumb/page title · search · notifications · avatar menu.

**Spec:** height 64; sticky; background `surface`; bottom border `border-subtle`; search max 320; icon buttons 40; avatar 32.

**Rules:** do not duplicate the page title and the topbar title; notifications use a dot for unread, not a count over 9; the avatar menu contains profile, settings, theme, sign out.

---

## 31. PageHeader

**Purpose:** The consistent top of every page.

**Anatomy:** breadcrumb (optional) · title (24/32 or 30/38) · subtitle (14/22 secondary) · actions (secondary then primary).

**Spacing:** bottom 24; title ↔ subtitle 4; header ↔ content 24.

**Rules:** one title; one primary action; actions wrap below the title on mobile; include a status pill next to the title for detail pages; no cards inside the header.

---

## 32. FilterBar

**Purpose:** Narrow a list without leaving the page.

**Anatomy:** search · filter chips/selects · date range · “Clear all” · result count.

**Spec:** height 40 controls; gap 8; wrap on mobile; active filters shown as removable chips; count updates live (“24 jobs”).

**Rules:** filters are reflected in the URL; “Clear all” appears only when a filter is active; advanced filters open a drawer on mobile; never hide the search behind an icon on desktop.

---

## 33. EmptyState

**Purpose:** Explain why a surface is empty and what to do next.

**Anatomy:** icon/illustration 48 · title 18/26 600 · body 14/22 secondary (max 380px) · primary action · optional secondary link.

**Variants:** first-use (create), no-results (clear filters), error (retry), permission (request access).

**Rules:** never blame the user; always offer a next step; keep the illustration monochrome green/yellow; do not use an empty state for loading (use Skeleton).

---

## 34. Skeleton

**Purpose:** Preserve layout while data loads.

**Spec:** background `surface-sunken`; radius 6 (text) / 12 (cards); shimmer 1.6s; match the final element’s dimensions; 5 rows for tables; no spinner for initial page loads.

**Accessibility:** `aria-busy="true"` on the region; `aria-hidden` on the shapes; announce “Loading jobs” once.

---

## 35. Tooltip

**Purpose:** Explain an icon or a truncated value.

**Spec:** background `#101828`; text white 12/16; radius 6; padding 6/8; max width 240; offset 6; delay 300ms; hide on Esc; no interactive content.

**Accessibility:** trigger has `aria-describedby`; tooltips never contain essential information; touch users get the label via a long-press or visible text.

---

## 36. Progress

**Purpose:** Show determinate progress (upload, import) or an indeterminate wait.

**Spec:** track 8px, radius full, `surface-sunken`; fill `primary`; label above (13/20) with percentage; indeterminate uses a 30% shimmering bar.

**Accessibility:** `role="progressbar"`, `aria-valuenow/min/max`, `aria-label`; announce completion via toast.

---

## 37. ChartCard

**Purpose:** Wrap a chart with a title, context and controls.

**Anatomy:** header (overline, title, legend, range tabs) · chart · footer (source, last updated).

**Spec:** card padding 20–24; chart height 240–320; grid `border-subtle`; axis 12/16 tertiary; legend 12/16 with 8px swatches; tooltip surface + shadow `md`; no 3D.

**Rules:** always label units; max 5 series; use the chart palette in order; provide a table alternative or a text summary for accessibility; empty state inside the card.

---

## 38. ActivityTimeline

**Purpose:** Show the history of a job, booking or customer.

**Anatomy:** vertical line · event dot/icon · title · actor + timestamp · optional body/attachment.

**Spec:** line 1px `border-subtle`; dot 8px with a 2px surface ring; icon 16; title 14/22 medium; meta 12/16 tertiary; group by day with an `overline` label; newest first.

**Rules:** every event has an actor and a timestamp; system events are labelled “System”; do not mix audit events with comments without a filter.

---

## 39. Status taxonomy

Use these mappings consistently across the app, exports and notifications. A status is a **label + tone + dot**; never a colour alone.

### Jobs

| Status | Tone | Meaning |
| --- | --- | --- |
| Draft | `neutral` | Created, not scheduled |
| Scheduled | `info` | Has a date and technician |
| In progress | `primary` | Work has started |
| Awaiting parts | `warning` | Blocked on inventory |
| Awaiting approval | `accent` | Waiting on customer |
| Completed | `success` | Work finished |
| Cancelled | `neutral` | Cancelled before completion |
| Overdue | `danger` | Past the promised date |

### Bookings

| Status | Tone |
| --- | --- |
| Requested | `info` |
| Confirmed | `primary` |
| Checked in | `primary` |
| In service | `primary` |
| Ready for pickup | `accent` |
| Completed | `success` |
| No-show | `neutral` |
| Cancelled | `neutral` |
| Overdue | `danger` |

### Vehicles

| Status | Tone |
| --- | --- |
| Active | `success` |
| In service | `info` |
| Out of service | `warning` |
| Retired | `neutral` |

### Invoices

| Status | Tone |
| --- | --- |
| Draft | `neutral` |
| Sent | `info` |
| Partially paid | `warning` |
| Paid | `success` |
| Overdue | `danger` |
| Void | `neutral` |

### Priority

| Priority | Tone |
| --- | --- |
| Low | `neutral` |
| Medium | `info` |
| High | `warning` |
| Urgent | `danger` |

**Rule:** if a new status is needed, add it to this table first, choose the tone, then implement. Do not invent a colour.
