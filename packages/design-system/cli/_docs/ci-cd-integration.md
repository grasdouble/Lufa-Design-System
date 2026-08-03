# CI/CD Integration

## GitHub Actions

```yaml
name: Validate Theme

on:
  push:
    paths:
      - 'src/theme.css'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v4
      - run: pnpm add --global @grasdouble/lufa_design-system-cli
      - run: lufa-ds-cli theme-validate src/theme.css
```

## Pre-commit Hook

```bash
# .husky/pre-commit
#!/bin/sh
pnpm exec lufa-ds-cli theme-validate src/theme.css || exit 1
```

## NPM Script

```json
{
  "scripts": {
    "validate-theme": "lufa-ds-cli theme-validate src/theme.css",
    "prebuild": "pnpm run validate-theme"
  }
}
```
