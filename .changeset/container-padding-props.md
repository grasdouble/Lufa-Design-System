---
'@grasdouble/lufa_design-system': minor
'@grasdouble/lufa_design-system-storybook': minor
'@grasdouble/lufa_design-system-docusaurus': minor
---

feat(Container): add `paddingBlock` and `paddingInline` spacing props

Adds two new optional props to the `Container` component for controlling padding via semantic spacing tokens (`none | tight | compact | default | comfortable | spacious`):

- `paddingBlock` — vertical padding (top + bottom)
- `paddingInline` — horizontal padding (left + right), overrides the default gutter when set

No behavior change when props are omitted — the existing default horizontal gutter is preserved.
