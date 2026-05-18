---
'@grasdouble/lufa_design-system': minor
---

feat: Add `DotNav` navigation component and `useScrollSpy` hook

- `DotNav`: Fixed vertical dot navigation for multi-section SPAs. Supports `left`/`right` positioning, accessible labels, design tokens, and `prefers-reduced-motion`. The active section's label is always visible; inactive labels slide in on hover.
- `useScrollSpy`: Intersection Observer-based hook that tracks the currently visible section. Returns `activeId`, `setActiveId`, and `lockFor` to prevent observer flicker during programmatic scrolls.
