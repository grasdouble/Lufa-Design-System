---
id: testing
title: Testing Guide
sidebar_label: Testing
description: Playwright component, accessibility, and visual regression testing.
sidebar_position: 3
---

# Testing Guide

Lufa uses [Playwright Component Testing](https://playwright.dev/docs/test-components) with React. Tests render components in a real Chromium browser and cover behavior, keyboard interaction, automated accessibility checks, responsive behavior, and screenshots.

The test package is `packages/design-system/playwright`.

## Active projects

`playwright-ct.config.ts` defines two Chromium projects:

| Project          | Purpose                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |
| `chromium-light` | Runs the complete component suite with the desktop Chrome device profile.       |
| `chromium-dark`  | Runs tests whose full title matches `Visual Regression` with dark color scheme. |

Firefox, WebKit, and mobile projects are not currently configured.

## File and snapshot layout

Tests mirror the public API categories:

```text
packages/design-system/playwright/
├── src/
│   ├── composition/
│   ├── content/
│   ├── documentation/
│   ├── foundation/
│   ├── hooks/
│   ├── interaction/
│   └── utility/
└── __snapshots__/
    └── src/<category>/<Component>.spec.tsx-snapshots/
```

Snapshot names include the Playwright project and platform, for example:

```text
__snapshots__/src/content/Link.spec.tsx-snapshots/
  link-all-variants-chromium-light-darwin.png
  link-all-variants-chromium-dark-linux.png
```

## Running tests

From `packages/design-system/playwright`:

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
```

The update script refreshes all snapshots and then runs the repository compression script.

## Behavioral tests

Use semantic locators and assert what users can observe:

```tsx
import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '@grasdouble/lufa_design-system';

test('activates with the keyboard', async ({ mount, page }) => {
  let activations = 0;
  const button = await mount(<Button onClick={() => activations++}>Save</Button>);

  await button.focus();
  await page.keyboard.press('Enter');

  await expect(button).toBeFocused();
  expect(activations).toBe(1);
});
```

Prefer `getByRole`, `getByLabel`, and visible text over CSS classes. Class assertions are appropriate only when the class is itself the behavior under test.

## Accessibility audits

The suite uses `@axe-core/playwright`:

```tsx
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Link } from '@grasdouble/lufa_design-system';

test('has no automated accessibility violations', async ({ mount, page }) => {
  await mount(
    <main>
      <h1>Resources</h1>
      <Link href="/docs">Documentation</Link>
    </main>
  );

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

Do not disable axe rules to hide a component defect. A narrowly scoped disable is acceptable only for document-level rules that the component harness cannot satisfy, and the reason should be clear in the test.

Automated scans complement, rather than replace:

- keyboard and focus-order tests
- accessible-name and state assertions
- reduced-motion behavior
- contrast review
- screen-reader checks for complex widgets

## Visual regression

Place screenshot tests inside a describe block containing `Visual Regression` so both configured projects select them:

```tsx
test.describe('Visual Regression', () => {
  test('renders all Link variants', async ({ mount }) => {
    const component = await mount(
      <div>
        <Link href="/default">Default</Link>
        <Link href="/plain" variant="plain">
          Plain
        </Link>
      </div>
    );

    await expect(component).toHaveScreenshot('link-all-variants.png', {
      animations: 'disabled',
    });
  });
});
```

Playwright waits for web fonts before screenshots. Use locator assertions for application-specific readiness; do not add fixed `waitForTimeout` delays.

## Required coverage

For a new or changed interactive API, cover:

1. default rendering and public props
2. user-visible behavior
3. keyboard and focus behavior
4. ARIA names, relationships, and state
5. an axe scan in representative markup
6. responsive behavior when relevant
7. light and dark visual regression for visual changes

## Related guides

- [Accessibility](/docs/accessibility)
- [Component overview](/docs/components/overview)
- [Playwright package README](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/playwright)
