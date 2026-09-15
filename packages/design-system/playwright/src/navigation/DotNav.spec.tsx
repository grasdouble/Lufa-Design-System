import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DotNav } from '@grasdouble/lufa_design-system';

const sections = [
  { id: 'intro', label: 'Introduction' },
  { id: 'details', label: 'Details' },
];

test.describe('DotNav', () => {
  test('should expose the active section and select another section', async ({ mount }) => {
    let selected = '';
    const component = await mount(
      <DotNav
        sections={sections}
        activeId="intro"
        onSelect={(id) => {
          selected = id;
        }}
      />
    );

    await expect(component).toHaveAccessibleName('Page sections');
    await expect(component.getByRole('button', { name: 'Introduction' })).toHaveAttribute('aria-current', 'location');
    await component.getByRole('button', { name: 'Details' }).click();
    expect(selected).toBe('details');
  });

  test('should use a design token for dot dimensions', async ({ mount, page }) => {
    await mount(<DotNav sections={sections} activeId="intro" onSelect={() => undefined} />);

    const dimensionsUseTokens = await page.evaluate(() =>
      [...document.styleSheets].some((sheet) =>
        [...sheet.cssRules].some(
          (rule) =>
            rule instanceof CSSStyleRule &&
            rule.selectorText.includes('dot-nav-dot') &&
            rule.style.width.includes('var(') &&
            rule.style.height.includes('var(')
        )
      )
    );
    expect(dimensionsUseTokens).toBe(true);
  });

  test('should support left positioning and pass accessibility checks', async ({ mount, page }) => {
    const component = await mount(
      <DotNav
        sections={sections}
        activeId="details"
        position="left"
        ariaLabel="Article sections"
        onSelect={() => undefined}
      />
    );
    await expect(component).toHaveAccessibleName('Article sections');
    await expect(component).toHaveClass(/dot-nav--left/);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
