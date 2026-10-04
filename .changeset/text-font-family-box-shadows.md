---
"@grasdouble/lufa_design-system": minor
"@grasdouble/lufa_design-system-playwright": patch
"@grasdouble/lufa_design-system-storybook": patch
"@grasdouble/lufa_design-system-docusaurus": patch
---

feat: add theme font families to Text and semantic shadows to Box.

Expose Text fontFamily (inherit, body, heading, code) and Box shadow (none, small, medium, large, extra-large) through existing tokens. Text now applies the heading font token by default for h1-h6 variants and the body font token otherwise, instead of inheriting the surrounding font. An explicit fontFamily overrides this choice; inherit remains available. Font choices do not change HTML semantics. Omitting Box shadow preserves its existing styling.

Document the new props, add interactive stories and theme/semantics regression tests, and extend the existing Text, Box, and Card All Variants visual references.
