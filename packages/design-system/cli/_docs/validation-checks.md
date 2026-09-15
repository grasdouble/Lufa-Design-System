# Validation Checks

Running `lufa-ds-cli theme-validate <theme-file>` performs three checks. Each can
also be run in isolation.

## Completeness

Loads the published token metadata and requires every themeable token up to the
selected cumulative level (`starter`, `extended`, or `advanced`) available in
each of `light`, `dark`, and `high-contrast`. Shared `[data-theme]`
declarations apply to every mode. Scope mode-specific tokens with
`[data-mode='…']`; media-query conditions are not interpreted as theme modes.
The default level is `starter`.

```text
✓ Completeness (starter) — all 44 required tokens present
✗ [dark] Missing required starter token: --lufa-core-color-brand-primary-default
```

## Format

Validates that every token value uses an accepted CSS format.

**Accepted formats:**

- Colors: `#RGB`, `#RRGGBB`, `#RRGGBBAA`, `rgb()`, `rgba()`, `hsl()`, `hsla()`
- Dimensions: `px`, `rem`, `em`, `%`, `vh`, `vw`, `vmin`, `vmax`
- Durations: `ms`, `s`
- References: `var(--lufa-*)`

```
✓ Format — all token values are valid
✗ --lufa-core-color-brand-primary-default (line 12): Invalid format — expected hex or var()
```

## A11y (WCAG AA)

Validates color contrast ratios across every mode defined in the theme
(`light`, `dark`, `high-contrast`). Color pairs are derived entirely from
token metadata — no hardcoded lists.

**Standards:**

- Normal text: minimum **4.5:1**
- UI components and borders: minimum **3:1**

CSS is parsed with PostCSS, including declarations nested in at-rules. The DS
base tokens (`tokens.css`) are loaded first; shared theme declarations,
mode-specific overrides, cascade-layer order, and `!important` priority are
then applied per mode. All `var()` chains (including whitespace and fallbacks)
are resolved before the contrast ratio is calculated.

```
  A11y (WCAG AA):
  ⚠ [light] 99 checks passed, 3 skipped
      --lufa-component-button-text on --lufa-component-button-background — skipped: unsupported contrast colors: "#fff" on "transparent"
  ✗ [dark] 1 violation(s), 0 unresolved check(s)
      --lufa-semantic-ui-text-primary on --lufa-semantic-ui-background-page — 3.1:1 (needs 4.5:1 WCAG AA Text)
  ✓ [high-contrast] 102 checks passed
```

Every skipped pair includes its reason, such as a missing token, an unresolved
`var()` chain, or an unsupported/translucent background whose final rendered
color depends on page context. Skips are reported as warnings and do not change
the validation exit code; actual WCAG violations still exit with code `1`.
