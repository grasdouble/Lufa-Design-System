# Examples

## Full Validation (all checks)

```bash
$ lufa-ds-cli theme-validate ./my-theme.css
🔍 my-theme.css

  ✓ Completeness (starter) — all 44 required tokens present
  ✓ Format — all token values are valid

  A11y (WCAG AA):
  ✓ [light] 102 checks passed
  ✓ [dark] 102 checks passed
  ✓ [high-contrast] 102 checks passed

✅ All checks passed!
```

## Validation with Errors

```bash
$ lufa-ds-cli theme-validate ./my-theme.css
🔍 my-theme.css

  ✗ [light] Missing required starter token: --lufa-core-color-brand-primary-default
  ✗ [dark] Missing required starter token: --lufa-core-color-brand-primary-default
  ✓ Format — all token values are valid

  A11y (WCAG AA):
  ✗ [light] 2 violation(s), 0 unresolved check(s)
      --lufa-semantic-ui-text-primary on --lufa-semantic-ui-background-page — 2.1:1 (needs 4.5:1 WCAG AA Text)
      --lufa-component-button-text on --lufa-component-button-background — 2.8:1 (needs 4.5:1 WCAG AA Text)
  ✓ [dark] 102 checks passed

❌ Validation failed
```

## A11y Check Only

```bash
$ lufa-ds-cli theme-validate ./my-theme.css --a11y
🔍 my-theme.css

  ⚠ [light] 99 checks passed, 3 skipped
      --lufa-component-button-type-ghost-text-default on --lufa-component-button-type-ghost-background-default — skipped: translucent background requires page context
  ✗ [dark] 1 violation(s), 0 unresolved check(s)
      --lufa-semantic-ui-text-secondary on --lufa-semantic-ui-background-surface-default — 3.8:1 (needs 4.5:1 WCAG AA Text)
  ✓ [high-contrast] 102 checks passed

❌ Validation failed
```

## A11y Check on a Directory

```bash
$ lufa-ds-cli theme-validate --a11y --dir ./themes/src
🔍 ocean.css

  ✓ [light] 102 checks passed
  ✓ [dark] 102 checks passed

🔍 forest.css

  ✓ [light] 102 checks passed
  ✗ [dark] 1 violation(s), 0 unresolved check(s)
      --lufa-semantic-ui-text-primary on --lufa-semantic-ui-background-page — 3.1:1 (needs 4.5:1 WCAG AA Text)

❌ Validation failed
```

## Create a Theme Template

```bash
$ lufa-ds-cli theme-template
Output file name (without .css): my-brand
✓ Created my-brand.css

$ lufa-ds-cli theme-template extended -o my-brand
✗ Error: my-brand.css already exists; pass --force to overwrite it

$ lufa-ds-cli theme-template extended -o my-brand --force
✓ Created my-brand.css
```

## Multi-Mode Theme Structure

```css
/* my-theme.css */
[data-theme='my-brand'][data-mode='light'] {
  --lufa-core-color-brand-primary-default: #0e7490;
  /* ... */
}

[data-theme='my-brand'][data-mode='dark'] {
  --lufa-core-color-brand-primary-default: #22d3ee;
  /* ... */
}

[data-theme='my-brand'][data-mode='high-contrast'] {
  --lufa-core-color-brand-primary-default: #ffffff;
  /* ... */
}
```
