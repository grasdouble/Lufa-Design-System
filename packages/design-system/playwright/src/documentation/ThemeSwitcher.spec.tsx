import { expect, test } from '@playwright/experimental-ct-react';

import { ThemeSwitcher } from '../../../storybook/src/components/ThemeSwitcher/ThemeSwitcher';

for (const variant of ['button', 'select', 'tabs'] as const) {
  test(`ThemeSwitcher renders and changes mode with ${variant}`, async ({ mount, page }) => {
    const component = await mount(<ThemeSwitcher variant={variant} />);
    if (variant === 'select') {
      await expect(component.getByText('Mode:')).toBeVisible();
      await component.getByRole('combobox', { name: 'Select mode' }).selectOption('dark');
    } else {
      await component.getByRole('button', { name: 'Dark', exact: false }).click();
      await expect(component.getByRole('button', { name: 'Dark', exact: false })).toHaveAttribute(
        'aria-pressed',
        'true'
      );
    }
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
  });
}
