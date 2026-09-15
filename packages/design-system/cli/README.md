# Lufa Design System - CLI Tools

Command-line tools for validating custom themes in the Lufa Design System.

The CLI validates themes for:

- **Completeness** - All metadata-defined tokens for the selected theme level are present in every mode
- **Accessibility** - WCAG AA contrast ratios
- **Format** - Valid CSS syntax and values
- **Multi-mode support** - Light, dark, and high-contrast themes

## Installation

Node.js 20+ is required.

```bash
pnpm add --save-dev @grasdouble/lufa_design-system-cli
```

## Usage

```bash
# Validate a custom theme file at the starter level
pnpm exec lufa-ds-cli theme-validate ./my-custom-theme.css

# Create my-theme.css from the starter template (default)
pnpm exec lufa-ds-cli theme-template --output-name my-theme

# Create extended or advanced templates
pnpm exec lufa-ds-cli theme-template extended --output-name my-theme
pnpm exec lufa-ds-cli theme-template advanced --output-name my-theme --force
```

## CLI Documentation

- [Usage](./_docs/usage.md)
- [Validation Checks](./_docs/validation-checks.md)
- [Examples](./_docs/examples.md)
- [CLI Options](./_docs/cli-options.md)
- [CI/CD Integration](./_docs/ci-cd-integration.md)
- [Development](./_docs/development.md)

## Related Packages

- [`@grasdouble/lufa_design-system-tokens`](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/tokens) - Core design tokens
- [`@grasdouble/lufa_design-system`](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/main) - React components
- [`@grasdouble/lufa_design-system-themes`](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/themes) - Pre-built themes

## Related Documentation

For more information about theming and token architecture:

- [Themes package](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/themes)
- [Token architecture](https://github.com/grasdouble/Lufa-Design-System/blob/main/packages/design-system/tokens/_docs/ARCHITECTURE.md)
- [Design System overview](https://github.com/grasdouble/Lufa-Design-System/blob/main/packages/design-system/_docs/overview.md)

## License

MIT
