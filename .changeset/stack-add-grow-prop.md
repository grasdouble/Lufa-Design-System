---
"@grasdouble/lufa_design-system": minor
---

feat: add `grow` prop to Stack component

The `grow` prop allows a Stack to fill all available space in its parent container by applying `flex: 1 1 auto`, `height: 100%`, `min-height: 0`, and `min-width: 0`. Useful when Stack is nested inside height-constrained containers (CSS grid cells, Card, modals). A dev-mode warning is emitted when `grow` and `wrap` are used together, as that combination is unsupported.
