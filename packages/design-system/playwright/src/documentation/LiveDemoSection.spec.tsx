import { expect, test } from '@playwright/experimental-ct-react';

import { LiveDemoSection } from '../../../docusaurus/src/components/LiveDemoSection';

const tabs = [
  { id: 'first', label: 'First', content: <p>First panel</p> },
  { id: 'second', label: 'Second', content: <p>Second panel</p> },
  { id: 'third', label: 'Third', content: <p>Third panel</p> },
];

test.describe('LiveDemoSection tabs', () => {
  test('exposes one selected tab in the roving tab sequence', async ({ mount }) => {
    const component = await mount(<LiveDemoSection tabs={tabs} />);
    const allTabs = component.getByRole('tab');

    await expect(allTabs.nth(0)).toHaveAttribute('aria-selected', 'true');
    await expect(allTabs.nth(0)).toHaveAttribute('tabindex', '0');
    await expect(allTabs.nth(1)).toHaveAttribute('aria-selected', 'false');
    await expect(allTabs.nth(1)).toHaveAttribute('tabindex', '-1');
    await expect(component.getByRole('tabpanel')).toHaveText('First panel');
  });

  test('uses arrow keys with wrapping and automatically activates the focused tab', async ({ mount }) => {
    const component = await mount(<LiveDemoSection tabs={tabs} />);
    const allTabs = component.getByRole('tab');

    await allTabs.nth(0).focus();
    await allTabs.nth(0).press('ArrowLeft');
    await expect(allTabs.nth(2)).toBeFocused();
    await expect(allTabs.nth(2)).toHaveAttribute('aria-selected', 'true');
    await expect(component.getByRole('tabpanel')).toHaveText('Third panel');

    await allTabs.nth(2).press('ArrowRight');
    await expect(allTabs.nth(0)).toBeFocused();
    await expect(component.getByRole('tabpanel')).toHaveText('First panel');
  });

  test('supports Home and End navigation', async ({ mount }) => {
    const component = await mount(<LiveDemoSection tabs={tabs} defaultTabId="second" />);
    const allTabs = component.getByRole('tab');

    await allTabs.nth(1).focus();
    await allTabs.nth(1).press('End');
    await expect(allTabs.nth(2)).toBeFocused();
    await expect(component.getByRole('tabpanel')).toHaveText('Third panel');

    await allTabs.nth(2).press('Home');
    await expect(allTabs.nth(0)).toBeFocused();
    await expect(component.getByRole('tabpanel')).toHaveText('First panel');
  });
});
