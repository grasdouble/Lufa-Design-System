# Playwright Component Testing

Component, accessibility, responsive, and visual regression tests for the Lufa Design System.

## Configuration

- Runner: `@playwright/experimental-ct-react`
- Accessibility: `@axe-core/playwright`
- Tests: `src/**/*.spec.tsx`
- Snapshots: `__snapshots__/src/<category>/<file>.spec.tsx-snapshots/`
- Projects: `chromium-light` (full suite) and `chromium-dark` (`Visual Regression` tests)

See [Configuration](./_docs/configuration.md), [Test Structure](./_docs/test-structure.md), and [Writing Tests](./_docs/writing-tests.md).

## Commands

From this package:

```bash
pnpm test
pnpm test-ct:ui
pnpm test-ct src/content/Link.spec.tsx --project=chromium-light
pnpm test-ct:update-snapshots
```

From the repository root:

```bash
pnpm ds:playwright:ci
pnpm ds:playwright:ui
pnpm ds:playwright:update-snapshots
pnpm ds:playwright:docker:update-snapshots-linux
```

## Snapshot guides

- [Updating snapshots](./_docs/snapshot-update.md)
- [Generating Linux snapshots with Docker](./_docs/docker-linux-snapshots.md)
- [Snapshot compression](./_docs/snapshot-compression.md)
- [Troubleshooting](./_docs/troubleshooting.md)
