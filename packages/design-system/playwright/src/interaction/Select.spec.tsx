import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Select } from '@grasdouble/lufa_design-system';

test.describe('Select', () => {
  test('should pass a11y checks', async ({ mount, page }) => {
    await mount(
      <Select id="a11y-select" aria-label="Select an option">
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should render correctly', async ({ mount }) => {
    const component = await mount(
      <Select id="render-select">
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
      </Select>
    );
    const select = component.locator('select');
    await expect(select).toBeVisible();
  });

  test('should render placeholder option when provided', async ({ mount }) => {
    const component = await mount(
      <Select id="placeholder-select" placeholder="Choose an option">
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const placeholder = component.locator('option[value=""]');
    await expect(placeholder).toHaveText('Choose an option');
  });

  test('should render children options', async ({ mount }) => {
    const component = await mount(
      <Select id="children-select">
        <Select.Option value="a">Alpha</Select.Option>
        <Select.Option value="b">Beta</Select.Option>
      </Select>
    );
    await expect(component.locator('option[value="a"]')).toHaveText('Alpha');
    await expect(component.locator('option[value="b"]')).toHaveText('Beta');
  });

  test('should apply error state', async ({ mount }) => {
    const component = await mount(
      <Select id="error-select" error="This field is required">
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const select = component.locator('select');
    await expect(select).toHaveClass(/error/);
    await expect(select).toHaveAttribute('aria-invalid', 'true');
    const errorMsg = component.locator('[role="alert"]');
    await expect(errorMsg).toHaveText('This field is required');
  });

  test('should apply disabled state', async ({ mount }) => {
    const component = await mount(
      <Select id="disabled-select" disabled>
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const select = component.locator('select');
    await expect(select).toBeDisabled();
    await expect(select).toHaveClass(/disabled/);
  });

  test('should apply fullWidth state', async ({ mount }) => {
    const component = await mount(
      <Select id="fullwidth-select" fullWidth>
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const select = component.locator('select');
    await expect(select).toHaveClass(/fullWidth/);
  });

  test('should apply size classes', async ({ mount }) => {
    const sm = await mount(
      <Select id="sm-select" size="sm">
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    await expect(sm.locator('select')).toHaveClass(/size-sm/);

    const lg = await mount(
      <Select id="lg-select" size="lg">
        <Select.Option value="a">A</Select.Option>
      </Select>
    );
    await expect(lg.locator('select')).toHaveClass(/size-lg/);
  });

  test('should call onChange with the selected value', async ({ mount }) => {
    let selected = '';
    const component = await mount(
      <Select
        id="change-select"
        onChange={(value) => {
          selected = value;
        }}
      >
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
      </Select>
    );
    await component.locator('select').selectOption('option2');
    expect(selected).toBe('option2');
  });

  test('should associate error message with select via aria-describedby', async ({ mount }) => {
    const component = await mount(
      <Select id="aria-select" error="Required field">
        <Select.Option value="option1">Option 1</Select.Option>
      </Select>
    );
    const select = component.locator('select');
    await expect(select).toHaveAttribute('aria-describedby', 'aria-select-error');
    await expect(component.locator('#aria-select-error')).toHaveText('Required field');
  });
});

test.describe('Visual Regression', () => {
  test('should match snapshot for all variants', async ({ mount }) => {
    const component = await mount(
      <div style={{ padding: '32px', backgroundColor: 'var(--lufa-semantic-ui-background-page)', width: '600px' }}>
        <h1
          style={{
            marginBottom: '24px',
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'var(--lufa-semantic-ui-text-primary)',
          }}
        >
          Select Component - All Variants
        </h1>

        {/* Section 1: Default State */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Default
          </h2>
          <Select id="default-select">
            <Select.Option value="option1">Option 1</Select.Option>
            <Select.Option value="option2">Option 2</Select.Option>
          </Select>
        </section>

        {/* Section 2: With Placeholder */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            With Placeholder
          </h2>
          <Select id="placeholder-select" placeholder="Select an option" defaultValue="">
            <Select.Option value="option1">Option 1</Select.Option>
            <Select.Option value="option2">Option 2</Select.Option>
          </Select>
        </section>

        {/* Section 3: Error State */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Error State
          </h2>
          <Select id="error-select" error="Please select a valid option">
            <Select.Option value="option1">Option 1</Select.Option>
          </Select>
        </section>

        {/* Section 4: Disabled State */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Disabled
          </h2>
          <Select id="disabled-select" disabled>
            <Select.Option value="option1">Option 1</Select.Option>
          </Select>
        </section>

        {/* Section 5: Full Width */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Full Width
          </h2>
          <Select id="fullwidth-select" fullWidth>
            <Select.Option value="option1">Option 1</Select.Option>
            <Select.Option value="option2">Option 2</Select.Option>
          </Select>
        </section>

        {/* Section 6: Sizes */}
        <section>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Sizes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Select id="sm-select" size="sm">
              <Select.Option value="a">Small (sm)</Select.Option>
            </Select>
            <Select id="md-select" size="md">
              <Select.Option value="a">Medium (md)</Select.Option>
            </Select>
            <Select id="lg-select" size="lg">
              <Select.Option value="a">Large (lg)</Select.Option>
            </Select>
          </div>
        </section>
      </div>
    );
    await expect(component).toHaveScreenshot('select-all-variants.png');
  });
});
