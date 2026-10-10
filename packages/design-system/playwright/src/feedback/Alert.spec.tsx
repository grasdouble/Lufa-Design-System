import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Alert } from '../../../main/src/feedback/Alert';

test.describe('Alert', () => {
  test('renders informational content as a polite status by default', async ({ mount }) => {
    const component = await mount(<Alert>Optional information</Alert>);

    await expect(component).toHaveAttribute('role', 'status');
    await expect(component).toHaveAttribute('aria-live', 'polite');
    await expect(component).toHaveText('Optional information');
  });

  test('uses assertive alert semantics for errors', async ({ mount }) => {
    const component = await mount(<Alert variant="error">Something failed</Alert>);

    await expect(component).toHaveAttribute('role', 'alert');
    await expect(component).toHaveAttribute('aria-live', 'assertive');
  });

  test('supports polite status semantics for every non-error tone', async ({ mount }) => {
    const component = await mount(
      <div>
        <Alert variant="info">Info</Alert>
        <Alert variant="success">Success</Alert>
        <Alert variant="warning">Warning</Alert>
      </div>
    );

    await expect(component.locator('[role="status"]')).toHaveCount(3);
    await expect(component.locator('[aria-live="polite"]')).toHaveCount(3);
  });

  test('allows a caller to override announcement semantics', async ({ mount }) => {
    const component = await mount(
      <Alert variant="warning" role="alert">
        Urgent warning
      </Alert>
    );

    await expect(component).toHaveAttribute('role', 'alert');
    await expect(component).toHaveAttribute('aria-live', 'assertive');
  });

  test('forwards HTML attributes and passes accessibility checks', async ({ mount, page }) => {
    await mount(
      <main>
        <h1>Feedback</h1>
        <Alert variant="success" data-testid="feedback">
          Saved
        </Alert>
      </main>
    );
    const component = page.getByTestId('feedback');

    await expect(component).toHaveAttribute('role', 'status');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('matches the all-variants visual reference', async ({ mount }) => {
    const component = await mount(
      <main>
        <h1>Feedback variants</h1>
        <Alert variant="info">Informational message</Alert>
        <Alert variant="success">Success message</Alert>
        <Alert variant="warning">Warning message</Alert>
        <Alert variant="error">Error message</Alert>
      </main>
    );

    await expect(component).toHaveScreenshot('alert-all-variants.png');
  });
});
