# Configuration

The suite is configured by `playwright-ct.config.ts`.

## Projects

| Project          | Device profile | Selection                            |
| ---------------- | -------------- | ------------------------------------ |
| `chromium-light` | Desktop Chrome | Complete test suite                  |
| `chromium-dark`  | Desktop Chrome | Tests matching `/Visual Regression/` |

Firefox, WebKit, and mobile projects are intentionally not active.

## Paths

- Test root: `./`
- Test files: `src/**/*.spec.tsx`
- Snapshot root: `__snapshots__/`
- Reports: `playwright-report/`
- CI result files: `test-results/`

Playwright mirrors each test path below `__snapshots__`. A screenshot from `src/content/Link.spec.tsx` is stored in:

```text
__snapshots__/src/content/Link.spec.tsx-snapshots/
```

The filename includes project and operating system, such as `link-all-variants-chromium-light-darwin.png`.

## Screenshot tolerance

The shared `toHaveScreenshot` configuration uses:

- `maxDiffPixelRatio: 0.02`
- `threshold: 0.2`

Individual tests should disable animations and wait on observable readiness rather than fixed timeouts.
