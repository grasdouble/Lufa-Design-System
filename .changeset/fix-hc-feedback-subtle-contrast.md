---
'@grasdouble/lufa_design-system-tokens': patch
'@grasdouble/lufa_design-system': patch
'@grasdouble/lufa_design-system-themes': patch
'@grasdouble/lufa_design-system-playwright': patch
---

fix: feedback subtle backgrounds in high-contrast mode now use black (#000000) instead of light pastel colors — ensures WCAG AA contrast ratio (≥4.5:1) for success, danger, warning, and info badge variants in high-contrast mode

fix: cyberpunk theme — add explicit neutral-surface-active overrides in light (#ff99ff) and high-contrast (#000000) modes to prevent HC-leaked token value causing WCAG AA contrast failures on solid/outline neutral button active states
