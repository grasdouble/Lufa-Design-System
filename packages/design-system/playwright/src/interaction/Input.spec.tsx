import type { CSSProperties } from 'react';
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { FormField, Input } from '@grasdouble/lufa_design-system';

test.describe('Input theme customization', () => {
  for (const size of ['sm', 'md', 'lg'] as const) {
    test(`uses the ${size} size tokens without emitting a native size attribute`, async ({ mount }) => {
      const component = await mount(
        <div
          style={{
            [`--lufa-component-input-height-${size}`]: '80px',
            [`--lufa-component-input-padding-${size}-block`]: '5px',
            [`--lufa-component-input-padding-${size}-inline`]: '9px',
            [`--lufa-component-input-font-size-${size}`]: '18px',
          }}
        >
          <Input size={size} aria-label="Sized input" />
        </div>
      );
      const input = component.getByRole('textbox');
      await expect(input).toHaveCSS('min-height', '80px');
      await expect(input).toHaveCSS('padding-top', '5px');
      await expect(input).toHaveCSS('padding-left', '9px');
      await expect(input).toHaveCSS('font-size', '18px');
      await expect(input).not.toHaveAttribute('size');
    });
  }

  test('themes input typography, invalid background, and keyboard focus independently', async ({ mount, page }) => {
    const component = await mount(
      <div
        style={
          {
            '--lufa-component-input-font-family': 'monospace',
            '--lufa-component-input-font-weight': '700',
            '--lufa-component-input-line-height': 'normal',
            '--lufa-component-input-background-error': 'rgb(255, 240, 240)',
            '--lufa-component-input-focus-outline': '2px solid rgb(0, 95, 204)',
            '--lufa-component-input-focus-shadow': 'none',
            '--lufa-component-input-focus-error-shadow': 'none',
            '--lufa-component-input-focus-error-border': 'rgb(185, 28, 28)',
          } as CSSProperties
        }
      >
        <Input error aria-label="Invalid input" />
      </div>
    );
    const input = component.getByRole('textbox');
    await page.keyboard.press('Tab');
    await expect(input).toBeFocused();
    await expect(input).toHaveCSS('font-family', 'monospace');
    await expect(input).toHaveCSS('font-weight', '700');
    await expect(input).toHaveCSS('line-height', 'normal');
    await expect(input).toHaveCSS('background-color', 'rgb(255, 240, 240)');
    await expect(input).toHaveCSS('outline-color', 'rgb(0, 95, 204)');
    await expect(input).toHaveCSS('outline-style', 'solid');
    await expect(input).toHaveCSS('outline-width', '2px');
    await expect(input).toHaveCSS('box-shadow', 'none');
    await expect(input).toHaveCSS('border-top-color', 'rgb(185, 28, 28)');
  });

  test('themes FormField spacing, label, and feedback without nested Text components', async ({ mount }) => {
    const component = await mount(
      <div
        style={
          {
            '--lufa-component-form-field-gap': '7px',
            '--lufa-component-input-label-font-weight': '700',
            '--lufa-component-input-label-line-height': 'normal',
            '--lufa-component-form-field-feedback-font-size': '11px',
            '--lufa-component-form-field-feedback-line-height': '1.35',
            '--lufa-component-form-field-error-font-weight': '600',
          } as CSSProperties
        }
      >
        <FormField
          label="Latitude"
          description="Decimal degrees"
          errorMessage={<span role="alert">Invalid latitude</span>}
        >
          <Input />
        </FormField>
      </div>
    );
    const input = component.getByRole('textbox', { name: 'Latitude' });
    await expect(input).toHaveAccessibleDescription('Decimal degrees Invalid latitude');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(component.locator('label')).toHaveCSS('font-weight', '700');
    await expect(component.locator('label')).toHaveCSS('line-height', 'normal');
    await expect(component.locator('label').locator('..')).toHaveCSS('row-gap', '7px');
    await expect(component.getByText('Decimal degrees')).toHaveCSS('font-size', '11px');
    await expect(component.getByRole('alert')).toHaveCSS('font-size', '11px');
    await expect(component.getByRole('alert')).toHaveCSS('font-weight', '600');
    await expect(component.getByRole('alert')).toHaveCSS('line-height', '14.85px');
  });
});

test.describe('Input', () => {
  test('should pass a11y checks', async ({ mount, page }) => {
    await mount(<Input placeholder="Accessible Input" />);
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should render correctly', async ({ mount }) => {
    const component = await mount(<Input placeholder="Enter text" />);
    await expect(component).toBeVisible();
    await expect(component).toHaveAttribute('placeholder', 'Enter text');
  });

  test('should handle value changes', async ({ mount }) => {
    const component = await mount(<Input />);
    await component.fill('Hello World');
    await expect(component).toHaveValue('Hello World');
  });

  test('should apply error state', async ({ mount }) => {
    const component = await mount(<Input error placeholder="Error" />);
    await expect(component).toHaveClass(/error/);
    await expect(component).toHaveAttribute('aria-invalid', 'true');
  });

  test('should preserve an explicit aria-describedby value', async ({ mount }) => {
    const component = await mount(<Input aria-describedby="external-help" />);
    await expect(component).toHaveAttribute('aria-describedby', 'external-help');
  });

  test('should compose an accessible label, description, and error message', async ({ mount, page }) => {
    const component = await mount(
      <FormField
        label="Email address"
        description="Use your work email."
        errorMessage="Enter a valid email address."
        required
      >
        <Input />
      </FormField>
    );

    const input = component.getByRole('textbox', { name: 'Email address' });
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAttribute('required', '');
    await expect(input).toHaveAccessibleDescription('Use your work email. Enter a valid email address.');
    await expect(component.getByText('Enter a valid email address.')).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should apply disabled state', async ({ mount }) => {
    const component = await mount(<Input disabled placeholder="Disabled" />);
    await expect(component).toBeDisabled();
    await expect(component).toHaveClass(/disabled/);
  });

  test('should apply fullWidth state', async ({ mount }) => {
    const component = await mount(<Input fullWidth />);
    await expect(component).toHaveClass(/fullWidth/);
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
          Input Component - All Variants
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
          <Input placeholder="Enter text" />
        </section>

        {/* Section 2: With Value */}
        <section style={{ marginBottom: '24px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            With Value
          </h2>
          <Input value="Hello World" readOnly />
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
          <Input error placeholder="Error input" />
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
          <Input disabled placeholder="Disabled input" />
        </section>

        {/* Section 5: Full Width */}
        <section>
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
          <Input fullWidth placeholder="Full width input" />
        </section>
      </div>
    );
    await expect(component).toHaveScreenshot('input-all-variants.png');
  });
});
