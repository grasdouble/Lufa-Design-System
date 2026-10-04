---
"@grasdouble/lufa_design-system": patch
"@grasdouble/lufa_design-system-playwright": patch
"@grasdouble/lufa_design-system-storybook": patch
"@grasdouble/lufa_design-system-docusaurus": patch
---

fix: remove native button backgrounds, side borders, and padding from Link as="button" while preserving inherited typography, the underline variant, and keyboard focus. Style native disabled buttons without hover feedback and respect reduced motion.

test: cover inline action styling, Enter/Space activation without form submission, disabled behavior, reduced motion, and native buttons in the existing Link All Variants screenshot. Linux references remain managed by CI.

docs: document the distinction between navigation and inline actions, and demonstrate native button rendering in Storybook.
