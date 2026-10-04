---
'@grasdouble/lufa_design-system': minor
'@grasdouble/lufa_design-system-tokens': minor
'@grasdouble/lufa_design-system-playwright': patch
'@grasdouble/lufa_design-system-storybook': patch
'@grasdouble/lufa_design-system-docusaurus': patch
---

feat: add small, medium, and large Input sizes backed by existing padding, font-size, and minimum-height tokens. Expose themeable input and label typography, invalid backgrounds, keyboard focus, and FormField spacing and feedback typography while preserving the default appearance.

test: cover field sizing and theme overrides with component tests, retain existing visual references, and document the new controls in Storybook and the Input guide.

test: extend the existing Input all-variants overview with small, medium, and large sizes and update its light and dark macOS references; Linux references are managed by CI.
