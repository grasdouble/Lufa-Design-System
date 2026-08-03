[← Back to Design System Overview](../README.md)

# Lufa Design System — Tokens

[![Style Dictionary](https://img.shields.io/badge/Style_Dictionary-5.x-FF6B35?style=flat-square)](https://styledictionary.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../../../LICENSE.md)

Design token package for the Lufa Design System.

## Token Statistics

<!-- token-statistics:start -->

The build currently contains **699 source tokens** and emits **699 unique CSS custom properties** across **805 CSS declarations** (including mode overrides).

| Level     | Source tokens |
| --------- | ------------: |
| Primitive |           182 |
| Core      |           109 |
| Semantic  |           169 |
| Component |           239 |
| **Total** |       **699** |

<!-- token-statistics:end -->

These values are calculated from the generated metadata and CSS on every build. `pnpm stats:generate` fails when this block is stale; run `pnpm stats:update` after an intentional token-count change. Tooling can consume the same data from the `statistics` package export.

## Architecture

Tokens follow a four-level cascade: **primitive → core → semantic → component**.

## Installation & Setup

```bash
# Build tokens (in monorepo root or package dir)
pnpm build
```

```css
/* In your root CSS file */
@import '@grasdouble/lufa_design-system-tokens/tokens.css';
```

## Usage

### CSS (primary — in CSS Modules)

```css
.button {
  background-color: var(--lufa-core-color-brand-primary);
  padding: var(--lufa-primitive-spacing-16);
  border-radius: var(--lufa-primitive-radius-scale-base);
  font-size: var(--lufa-primitive-typography-font-size-base);
}
```

### JavaScript / TypeScript

```typescript
// Runtime access (canvas, charts, generated styles)
import tokens from '@grasdouble/lufa_design-system-tokens/values';

const primary = tokens.core.color.brand.primary; // "#2563eb"
const spacing = tokens.primitive.spacing['16']; // "16px"
```

### Naming format

```
--lufa-{level}-{category}-{name}[-{variant}][-{state}]

--lufa-primitive-color-blue-600
--lufa-core-color-brand-primary
--lufa-semantic-ui-text-primary
--lufa-component-button-primary-background
```

> **Components must never import JSON tokens directly** — use CSS Modules with CSS variables only.  
> See [\_docs/USAGE.md](./_docs/USAGE.md) for the full pattern and ESLint enforcement rules.

## Package Exports

| Export           | Path                                                              | Use case                                        |
| ---------------- | ----------------------------------------------------------------- | ----------------------------------------------- |
| Default / values | `@grasdouble/lufa_design-system-tokens` or `/values`              | Resolved runtime values                         |
| CSS variables    | `@grasdouble/lufa_design-system-tokens/tokens.css`                | Complete CSS custom properties                  |
| Metadata         | `@grasdouble/lufa_design-system-tokens/metadata`                  | Values, descriptions, extensions, and WCAG data |
| Source           | `@grasdouble/lufa_design-system-tokens/merged`                    | Merged DTCG source                              |
| VS Code map      | `@grasdouble/lufa_design-system-tokens/map` or `/tokens.map.json` | Flat CSS-variable and token-path lookup maps    |
| Statistics       | `@grasdouble/lufa_design-system-tokens/statistics`                | Machine-generated token and CSS counts          |
| Themeable        | `@grasdouble/lufa_design-system-tokens/themeable`                 | Tokens with explicit mode variants              |
| Starter theme    | `@grasdouble/lufa_design-system-tokens/themeable-starter`         | Starter customization surface                   |
| Extended theme   | `@grasdouble/lufa_design-system-tokens/themeable-extended`        | Starter and extended customization surface      |
| Advanced theme   | `@grasdouble/lufa_design-system-tokens/themeable-advanced`        | Complete customization surface                  |

### Container token compatibility

Both public container-width families remain for compatibility, but neither owns raw values. `core.layout.container.*` aliases primitive breakpoints for general layout use, while `component.container.max-width.*` aliases semantic breakpoints to preserve the required component → semantic hierarchy used by the `Container` component. The missing core `xs` alias was added so both scales cover `xs` through `2xl`. Removing or redirecting either family across architecture levels would break consumers or trigger hierarchy warnings. Container padding and core gutters remain separate because they represent component padding and responsive layout gutters, respectively.

### WCAG metadata compatibility

WCAG pairing data remains embedded in the `metadata` export because Storybook and published consumers read `extensions.lufa.wcagAALarge` and `extensions.lufa.wcagAAA`. Moving it to a separate export would be breaking. The size check therefore caps the WCAG contribution independently while retaining the established metadata shape.

## Development

```bash
pnpm build           # validate → clean → build → statistics → size budgets
pnpm lint            # lint package scripts, transforms, validators, and config
pnpm test            # unit and regression tests
pnpm validate:tokens # DTCG format checks
pnpm stats:update    # refresh README and generated statistics after token changes
pnpm check:size      # full published dist and WCAG metadata size budgets
pnpm clean           # remove dist/
```

The complete generated `dist/` payload warns above 1200 KiB and fails above 1280 KiB. Large individual outputs also have caps; `tokens.css` retains its 120/150 KiB warning/failure thresholds, while the pretty-printed WCAG metadata contribution warns above 115 KiB and fails above 128 KiB.

## Documentation

| File                                                    | Description                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| [\_docs/QUICK_REFERENCE.md](./_docs/QUICK_REFERENCE.md) | ⭐ Developer cheat sheet                                                 |
| [\_docs/ARCHITECTURE.md](./_docs/ARCHITECTURE.md)       | 4-level hierarchy, naming conventions, fluid vs responsive, build system |
| [\_docs/TOKENS.md](./_docs/TOKENS.md)                   | Colors, typography, spacing reference tables                             |
| [\_docs/USAGE.md](./_docs/USAGE.md)                     | CSS Modules pattern, anti-patterns, ESLint rules                         |

---

**v1.1.0** · Style Dictionary v5.2.0 · DTCG format · MIT
