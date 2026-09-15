import { expect, test } from '@playwright/experimental-ct-react';

import {
  OrderedThemeNameStorageHarness,
  OrderedThemeOptionsHarness,
  OrderedThemeStorageHarness,
  SharedThemeHarness,
  ThemeHarness,
} from './useTheme.harness';

test.describe('useTheme', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => {
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.removeAttribute('data-mode');
    });
  });

  test('should synchronize theme and explicit mode with the document and storage', async ({ mount, page }) => {
    const component = await mount(<ThemeHarness />);

    await component.getByRole('button', { name: 'Ocean' }).click();
    await component.getByRole('button', { name: 'Dark' }).click();

    await expect(component.getByTestId('theme')).toHaveText('ocean');
    await expect(component.getByTestId('mode')).toHaveText('dark');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'ocean');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
    expect(await page.evaluate(() => localStorage.getItem('lufa-theme-name'))).toBe('ocean');
    expect(await page.evaluate(() => localStorage.getItem('lufa-theme-mode'))).toBe('dark');
  });

  test('should resolve auto mode while retaining token selector attributes', async ({ mount, page }) => {
    const component = await mount(<ThemeHarness />);
    await component.getByRole('button', { name: 'Dark' }).click();
    await component.getByRole('button', { name: 'Auto' }).click();

    await expect(component.getByTestId('mode')).toHaveText('auto');
    await expect(page.locator('html')).toHaveAttribute('data-theme', '');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'light');
  });

  test('should hydrate valid legacy storage values', async ({ mount, page }) => {
    await page.evaluate(() => {
      localStorage.setItem('lufa-theme-name', 'forest');
      localStorage.setItem('lufa-theme-mode', 'dark');
    });
    const component = await mount(<ThemeHarness />);
    await expect(component.getByTestId('theme')).toHaveText('forest');
    await expect(component.getByTestId('mode')).toHaveText('dark');
  });

  test('should preserve persisted auto mode over a resolved DOM mode', async ({ mount, page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.evaluate(() => {
      localStorage.setItem('lufa-theme-mode', 'auto');
      document.documentElement.setAttribute('data-mode', 'light');
    });

    const component = await mount(<ThemeHarness />);

    await expect(component.getByTestId('mode')).toHaveText('auto');
    await expect(component.getByTestId('effective-mode')).toHaveText('dark');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
  });

  test('should converge additional theme storage keys on the initialized theme', async ({ mount, page }) => {
    await page.evaluate(() => {
      localStorage.setItem('primary-theme-name', 'ocean');
      localStorage.setItem('secondary-theme-name', 'forest');
    });

    const component = await mount(<OrderedThemeNameStorageHarness />);

    await expect(component.getByTestId('primary-theme')).toHaveText('ocean');
    await expect(component.getByTestId('secondary-theme')).toHaveText('ocean');
    expect(await page.evaluate(() => localStorage.getItem('secondary-theme-name'))).toBe('ocean');
  });
});

test.describe('useThemeMode compatibility adapter', () => {
  test.beforeEach(async ({ page }) => {
    await page.evaluate(() => {
      localStorage.clear();
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.removeAttribute('data-mode');
    });
  });

  test('should share one mode source of truth with useTheme', async ({ mount, page }) => {
    const component = await mount(<SharedThemeHarness />);
    await component.getByRole('button', { name: 'Legacy dark' }).click();

    await expect(component.getByTestId('theme-mode')).toHaveText('dark');
    await expect(component.getByTestId('legacy-mode')).toHaveText('dark');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
  });

  test('should retain high-contrast compatibility without competing document writes', async ({ mount, page }) => {
    const component = await mount(<SharedThemeHarness />);
    await component.getByRole('button', { name: 'Legacy contrast' }).click();

    await expect(component.getByTestId('theme-mode')).toHaveText('high-contrast');
    await expect(component.getByTestId('legacy-mode')).toHaveText('high-contrast');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'high-contrast');
  });

  test('should apply explicit compatibility defaults when useTheme initializes first', async ({ mount, page }) => {
    await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
    const component = await mount(<OrderedThemeOptionsHarness />);

    await expect(component.getByTestId('theme-mode')).toHaveText('dark');
    await expect(component.getByTestId('legacy-mode')).toHaveText('dark');
    await expect(component.getByTestId('legacy-prefers-dark')).toHaveText('false');
    await expect(component.getByTestId('legacy-prefers-contrast')).toHaveText('false');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
  });

  test('should hydrate a custom compatibility storage key when useTheme initializes first', async ({ mount, page }) => {
    await page.evaluate(() => localStorage.setItem('custom-mode', 'dark'));
    const component = await mount(<OrderedThemeStorageHarness />);

    await expect(component.getByTestId('theme-mode')).toHaveText('dark');
    await expect(component.getByTestId('legacy-mode')).toHaveText('dark');
    await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');
  });

  test('should not let stale compatibility storage override the initialized shared mode', async ({ mount, page }) => {
    await page.evaluate(() => {
      localStorage.setItem('lufa-theme-mode', 'dark');
      localStorage.setItem('custom-mode', 'light');
    });
    const component = await mount(<OrderedThemeStorageHarness />);

    await expect(component.getByTestId('theme-mode')).toHaveText('dark');
    await expect(component.getByTestId('legacy-mode')).toHaveText('dark');
    expect(await page.evaluate(() => localStorage.getItem('custom-mode'))).toBe('dark');
  });
});
