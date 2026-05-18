---
'@grasdouble/lufa_design-system': major
'@grasdouble/lufa_design-system-docusaurus': patch
'@grasdouble/lufa_design-system-playwright': patch
'@grasdouble/lufa_design-system-storybook': patch
---

feat(Badge): rename `error` variant to `danger` for consistency with Button

The `Badge` component's red semantic variant has been renamed from `error` to `danger` to align with the `Button` component's naming convention. This makes the variant API consistent across all components.

**Breaking change:** Any usage of `<Badge variant="error">` must be updated to `<Badge variant="danger">`.

Updated:
- `VariantValue` type union in `Badge.tsx`
- `.variant-error` CSS class renamed to `.variant-danger` in `Badge.module.css`
- `badge.utilities.config.cjs` updated with new key name
- All Storybook stories, Playwright tests, and Docusaurus documentation updated
