---
"@grasdouble/lufa_design-system": minor
"@grasdouble/lufa_design-system-playwright": patch
"@grasdouble/lufa_design-system-storybook": patch
---

feat(useScrollSpy): expose `scrollTo()` and accept `onScroll`/`scrollDuration` options

The hook now returns a `scrollTo(id)` function that animates to the target section, locks the observer during the animation to prevent active-id flickering, and immediately updates `activeId`.

Two new options are available:
- `onScroll`: custom scroll handler for non-`window` scroll containers (e.g. an overflow div)
- `scrollDuration`: duration in ms for the built-in RAF easeInOutCubic animation (default: 650)
