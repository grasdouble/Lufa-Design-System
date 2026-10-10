import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Accordion } from '../../../main/src/interaction/Accordion';

test.describe('Accordion', () => {
  test('renders a native disclosure with its summary and content', async ({ mount }) => {
    const component = await mount(<Accordion summary="Question">Answer</Accordion>);

    await expect(component).toHaveJSProperty('tagName', 'DETAILS');
    await expect(component.locator('summary')).toHaveText('Question');
    await expect(component).toContainText('Answer');
  });

  test('opens and closes with keyboard activation', async ({ mount }) => {
    const component = await mount(<Accordion summary="Question">Answer</Accordion>);
    const summary = component.locator('summary');

    await summary.focus();
    await summary.press('Enter');
    await expect(component).toHaveAttribute('open', '');
    await summary.press('Space');
    await expect(component).not.toHaveAttribute('open', '');
  });

  test('keeps disclosures independently operable', async ({ mount }) => {
    const component = await mount(
      <div>
        <Accordion summary="First">First answer</Accordion>
        <Accordion summary="Second">Second answer</Accordion>
      </div>
    );
    const first = component.locator('details').nth(0);
    const second = component.locator('details').nth(1);

    await component.getByText('First', { exact: true }).click();
    await component.getByText('Second', { exact: true }).click();
    await expect(first).toHaveAttribute('open', '');
    await expect(second).toHaveAttribute('open', '');
  });

  test('supports an initially open state and native details attributes', async ({ mount }) => {
    const component = await mount(
      <Accordion summary="Question" open data-testid="faq-item">
        Answer
      </Accordion>
    );

    await expect(component).toHaveAttribute('open', '');
    await expect(component).toHaveAttribute('data-testid', 'faq-item');
  });

  test('passes accessibility checks', async ({ mount, page }) => {
    await mount(
      <main>
        <h1>Frequently asked questions</h1>
        <Accordion summary="Question">Answer</Accordion>
      </main>
    );

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });

  test('matches the all-states visual reference', async ({ mount }) => {
    const component = await mount(
      <main>
        <h1>Frequently asked questions</h1>
        <Accordion summary="Collapsed item">Collapsed content</Accordion>
        <Accordion summary="Expanded item" open>
          Expanded content
        </Accordion>
      </main>
    );

    await expect(component).toHaveScreenshot('accordion-all-states.png');
  });
});
