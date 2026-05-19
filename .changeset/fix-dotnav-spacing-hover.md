---
"@grasdouble/lufa_design-system": patch
---

fix(DotNav): increase gap between dots and fix hover occlusion from active dot

- Increased `.dot-nav` gap from `spacing-default` to `spacing-spacious` so adjacent hit-areas have proper breathing room.
- Added explicit z-index layering on `.dot-nav-item` (0 / 1 / 2 for default / active / hovered) so the hovered dot always paints above the active dot's scaled stacking context, restoring pointer-event reach for the `::after` hit area.
