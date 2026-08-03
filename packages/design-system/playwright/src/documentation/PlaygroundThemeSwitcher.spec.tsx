import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { PlaygroundThemeSwitcherHarness } from './PlaygroundThemeSwitcher.harness';

test.describe('PlaygroundThemeSwitcher disclosure', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => localStorage.clear());
  });

  test('announces its disclosure state and selected theme', async ({ mount }) => {
    const component = await mount(<PlaygroundThemeSwitcherHarness />);
    const trigger = component.getByRole('button', { name: /switch playground theme/i });

    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toHaveAttribute('aria-controls');

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(component.getByRole('group', { name: 'Color theme' })).toBeVisible();
    await expect(component.getByRole('button', { name: 'Default', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
    await expect(component.getByRole('button', { name: 'Ocean', exact: true })).toHaveAttribute(
      'aria-pressed',
      'false'
    );
  });

  test('closes on Escape and restores focus to the trigger', async ({ mount }) => {
    const component = await mount(<PlaygroundThemeSwitcherHarness />);
    const trigger = component.getByRole('button', { name: /switch playground theme/i });

    await trigger.click();
    const ocean = component.getByRole('button', { name: 'Ocean' });
    await ocean.focus();
    await ocean.press('Escape');

    await expect(component.getByRole('group', { name: 'Color theme' })).toBeHidden();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).toBeFocused();
  });

  test('indicates and persists the chosen theme', async ({ mount, page }) => {
    const component = await mount(<PlaygroundThemeSwitcherHarness />);
    const trigger = component.getByRole('button', { name: /switch playground theme/i });

    await trigger.click();
    await component.getByRole('button', { name: 'Ocean' }).click();

    await expect(component.getByTestId('playground')).toHaveAttribute('data-theme', 'ocean');
    await expect(trigger).toContainText('Ocean');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect.poll(() => page.evaluate(() => localStorage.getItem('lufa-playground-theme'))).toBe('ocean');
  });

  test('keeps the selected option text readable on the primary background', async ({ mount, page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--ifm-color-primary', '#2e8555');
      document.documentElement.style.setProperty('--ifm-color-primary-dark', '#29784c');
      document.documentElement.style.setProperty('--ifm-font-color-base', '#111827');
      document.documentElement.style.setProperty('--ifm-color-emphasis-100', '#f3f4f6');
      document.documentElement.style.setProperty('--ifm-color-emphasis-300', '#d1d5db');
    });
    const component = await mount(<PlaygroundThemeSwitcherHarness />);

    await component.getByRole('button', { name: /switch playground theme/i }).click();
    await expect(component.getByRole('group', { name: 'Color theme' })).toHaveCSS('animation-name', 'none');
    const results = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();

    expect(results.violations).toEqual([]);
  });
});
