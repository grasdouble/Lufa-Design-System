---
"@grasdouble/lufa_design-system": minor
"@grasdouble/lufa_design-system-playwright": patch
"@grasdouble/lufa_design-system-storybook": patch
"@grasdouble/lufa_design-system-docusaurus": patch
---

feat: add optional theme font families to Text and semantic shadows to Box.

Expose Text fontFamily (inherit, body, heading, code) and Box shadow (none, small, medium, large, extra-large) through existing tokens. Omitted props preserve existing styling, and font choices remain independent of HTML semantics and typography size.

Document the new props, add interactive stories and theme/semantics regression tests, and extend the existing Text and Box All Variants visual references.
