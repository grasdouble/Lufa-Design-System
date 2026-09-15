# Writing Tests

Use Playwright's semantic locators and test observable behavior.

```tsx
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '@grasdouble/lufa_design-system';

test('renders and passes an accessibility scan', async ({ mount, page }) => {
  const component = await mount(<Button>Save</Button>);

  await expect(component).toHaveRole('button', { name: 'Save' });

  const results = await new AxeBuilder({ page })
    .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
    .analyze();
  expect(results.violations).toEqual([]);
});
```

## Visual tests

Put screenshot tests in a suite whose title includes `Visual Regression`. The dark project uses that title to select tests:

```tsx
test.describe('Visual Regression', () => {
  test('renders variants', async ({ mount }) => {
    const component = await mount(<Button>Save</Button>);
    await expect(component).toHaveScreenshot('button-default.png', {
      animations: 'disabled',
    });
  });
});
```

Do not use `waitForTimeout` before a screenshot. Playwright waits for fonts; add a semantic locator assertion when the component has additional readiness requirements.

## Commands

```bash
pnpm test-ct src/content/Link.spec.tsx --project=chromium-light
pnpm test-ct:update-snapshots
```
