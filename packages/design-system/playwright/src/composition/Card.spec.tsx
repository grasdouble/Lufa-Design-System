import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Card, Container, Text } from '@grasdouble/lufa_design-system';

test.describe('Card', () => {
  test('should pass a11y checks', async ({ mount, page }) => {
    await mount(
      <Card>
        <Text>Accessible Card</Text>
      </Card>
    );
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should render correctly', async ({ mount }) => {
    const component = await mount(
      <Card>
        <Text>Card Content</Text>
      </Card>
    );
    await expect(component).toBeVisible();
    await expect(component).toContainText('Card Content');
  });

  test('uses token-scale defaults and allows existing scales to be selected', async ({ mount }) => {
    const component = await mount(
      <div>
        <Card data-testid="default-card">Default</Card>
        <Card data-testid="scaled-card" padding="lg" radius="lg" shadow="none">
          Scaled
        </Card>
      </div>
    );

    await expect(component.getByTestId('default-card')).toHaveClass(/padding-md/);
    await expect(component.getByTestId('default-card')).toHaveClass(/radius-md/);
    await expect(component.getByTestId('default-card')).toHaveClass(/shadow-none/);
    await expect(component.getByTestId('scaled-card')).toHaveClass(/padding-lg/);
    await expect(component.getByTestId('scaled-card')).toHaveClass(/radius-lg/);
    await expect(component.getByTestId('scaled-card')).toHaveClass(/shadow-none/);
  });

  test('should support polymorphism', async ({ mount }) => {
    const component = await mount(
      <Card as="section">
        <Text>Section Card</Text>
      </Card>
    );
    await expect(component).toHaveAttribute('class', /card/);
  });

  test.describe('Visual Regression', () => {
    test('should match snapshot for all variants', async ({ mount }) => {
      const component = await mount(
        <Container>
          <Text variant="h1">Card Component - All Variants</Text>
          <h1
            style={{
              marginBottom: '24px',
              fontSize: '28px',
              fontWeight: 'bold',
              color: 'var(--lufa-semantic-ui-text-primary)',
            }}
          >
            Card Component - All Variants
          </h1>

          {/* Section 1: Default Card */}
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
            <Card>
              <Text>Default Card Content</Text>
            </Card>
          </section>

          {/* Section 2: Card with Multiple Children */}
          <section style={{ marginBottom: '24px' }}>
            <h2
              style={{
                marginBottom: '16px',
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--lufa-semantic-ui-text-secondary)',
              }}
            >
              With Multiple Elements
            </h2>
            <Card>
              <Text variant="h3" weight="bold">
                Card Title
              </Text>
              <Text variant="body" color="secondary" style={{ marginTop: '8px' }}>
                This is the card body with some descriptive text about the content.
              </Text>
              <Text variant="caption" color="tertiary" style={{ marginTop: '12px' }}>
                Footer information
              </Text>
            </Card>
          </section>

          {/* Section 3: Token scales */}
          <section style={{ marginBottom: '24px' }}>
            <h2
              style={{
                marginBottom: '16px',
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--lufa-semantic-ui-text-secondary)',
              }}
            >
              Token Scales
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              <Card padding="sm" radius="sm" shadow="none">
                <Text as="h3">Compact</Text>
                <Text color="secondary">Small padding and radius, no shadow.</Text>
              </Card>
              <Card padding="md" radius="md" shadow="sm">
                <Text as="h3">Standard</Text>
                <Text color="secondary">Medium padding and radius, subtle shadow.</Text>
              </Card>
              <Card padding="lg" radius="lg" shadow="md">
                <Text as="h3">Spacious</Text>
                <Text color="secondary">Large padding and radius, medium shadow.</Text>
              </Card>
            </div>
          </section>

          {/* Section 4: Polymorphic (as section) */}
          <section>
            <h2
              style={{
                marginBottom: '16px',
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--lufa-semantic-ui-text-secondary)',
              }}
            >
              As Section Element
            </h2>
            <Card as="section">
              <Text>Card rendered as section element</Text>
            </Card>
          </section>
        </Container>
      );

      await component.page().evaluate(() => document.fonts.ready);
      await expect(component).toHaveScreenshot('card-all-variants.png');
    });
  });
});
