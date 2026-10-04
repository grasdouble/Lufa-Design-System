/**
 * Link Component - Playwright Component Tests
 *
 * Comprehensive behavioral test suite for the Link inline anchor component.
 * Tests cover rendering, all prop variants, accessibility, and security behavior.
 *
 * Link is an inline anchor component for consistent styled links across
 * the design system. It provides variant-based visual styles, semantic color
 * tokens, and safe external link handling.
 *
 * Test Categories:
 * 1. Basic Rendering - Default behavior and core functionality
 * 2. Variants - All prop combinations (variant, color, target, rel, polymorphic)
 * 3. Security - rel="noopener noreferrer" auto-injection
 * 4. Accessibility - ARIA attributes, semantic HTML, keyboard focus
 * 5. Visual Regression - Variants and colors in light and dark modes
 */

import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Link } from '@grasdouble/lufa_design-system';

// ============================================
// TEST SUITE: Basic Rendering
// ============================================

test.describe('Link Component', () => {
  test.describe('Basic Rendering', () => {
    test('should render with default props', async ({ mount }) => {
      const component = await mount(<Link href="https://example.com">Example</Link>);
      await expect(component).toBeVisible();
      await expect(component).toContainText('Example');
    });

    test('should render as anchor element by default', async ({ mount }) => {
      const component = await mount(<Link href="https://example.com">Example</Link>);
      const tagName = await component.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');
    });

    test('should render with children', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com">
          <span>Nested content</span>
        </Link>
      );
      await expect(component).toContainText('Nested content');
    });

    test('should apply custom className', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com" className="custom-link-class">
          Example
        </Link>
      );
      await expect(component).toHaveClass(/custom-link-class/);
    });

    test('should apply href attribute', async ({ mount }) => {
      const component = await mount(<Link href="https://example.com">Example</Link>);
      const href = await component.getAttribute('href');
      expect(href).toBe('https://example.com');
    });

    test('should apply default target="_self"', async ({ mount }) => {
      const component = await mount(<Link href="https://example.com">Example</Link>);
      const target = await component.getAttribute('target');
      expect(target).toBe('_self');
    });

    test('should apply base link class', async ({ mount }) => {
      const component = await mount(<Link href="https://example.com">Example</Link>);
      await expect(component).toHaveClass(/link/);
    });
  });

  // ============================================
  // TEST SUITE: Variants
  // ============================================

  test.describe('Variants', () => {
    test.describe('Variant Prop', () => {
      const variantValues = ['underline', 'plain'] as const;

      variantValues.forEach((value) => {
        test(`should apply variant="${value}" class`, async ({ mount }) => {
          const component = await mount(
            <Link href="https://example.com" variant={value}>
              Content
            </Link>
          );
          await expect(component).toHaveClass(new RegExp(`variant-${value}`));
        });
      });

      test('should default to variant="underline"', async ({ mount }) => {
        const component = await mount(<Link href="https://example.com">Content</Link>);
        await expect(component).toHaveClass(/variant-underline/);
      });
    });

    test.describe('Color Prop', () => {
      const colorValues = ['primary', 'secondary', 'tertiary', 'inverse'] as const;

      colorValues.forEach((value) => {
        test(`should apply color="${value}" class`, async ({ mount }) => {
          const component = await mount(
            <Link href="https://example.com" color={value}>
              Content
            </Link>
          );
          await expect(component).toHaveClass(new RegExp(`color-${value}`));
        });
      });

      test('should default to color="primary" for variant="default"', async ({ mount }) => {
        const component = await mount(<Link href="https://example.com">Content</Link>);
        await expect(component).toHaveClass(/color-primary/);
      });
    });
  });

  // ============================================
  // TEST SUITE: Security
  // ============================================

  test.describe('Security', () => {
    test('should auto-apply rel="noopener noreferrer" when target="_blank"', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com" target="_blank">
          External link
        </Link>
      );
      const rel = await component.getAttribute('rel');
      expect(rel).toBe('noopener noreferrer');
    });

    test('should not apply rel by default when target="_self"', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com" target="_self">
          Internal link
        </Link>
      );
      const rel = await component.getAttribute('rel');
      expect(rel).toBeNull();
    });

    test('should respect explicit rel prop even with target="_blank"', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com" target="_blank" rel="noopener">
          External link
        </Link>
      );
      const rel = await component.getAttribute('rel');
      expect(rel).toBe('noopener');
    });

    test('should respect explicit rel prop for internal links', async ({ mount }) => {
      const component = await mount(
        <Link href="https://example.com" rel="author">
          Author link
        </Link>
      );
      const rel = await component.getAttribute('rel');
      expect(rel).toBe('author');
    });
  });

  // ============================================
  // TEST SUITE: Polymorphic
  // ============================================

  test.describe('Polymorphic', () => {
    test('should render as span when as="span"', async ({ mount }) => {
      const component = await mount(<Link as="span">Span link</Link>);
      const tagName = await component.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('span');
    });

    test('should not spread href/target/rel onto a native non-anchor element', async ({ mount }) => {
      const component = await mount(
        <Link as="span" href="https://example.com">
          Span link
        </Link>
      );
      const href = await component.getAttribute('href');
      expect(href).toBeNull();
    });

    test('should render as button when as="button"', async ({ mount }) => {
      const component = await mount(
        <Link as="button" onClick={() => {}}>
          Button link
        </Link>
      );
      const tagName = await component.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('button');
    });

    test('should default to type="button" when as="button" to prevent form submission', async ({ mount }) => {
      const component = await mount(<Link as="button">Button link</Link>);
      const type = await component.getAttribute('type');
      expect(type).toBe('button');
    });

    test('should respect explicit type when as="button"', async ({ mount }) => {
      const component = await mount(
        <Link as="button" type="submit">
          Submit
        </Link>
      );
      const type = await component.getAttribute('type');
      expect(type).toBe('submit');
    });

    test('should remove native button chrome while inheriting inline typography', async ({ mount }) => {
      const component = await mount(
        <p style={{ fontSize: '18px', fontWeight: 700, lineHeight: '28px' }}>
          <Link as="button" variant="plain">
            Copy address
          </Link>
        </p>
      );
      const button = component.getByRole('button', { name: 'Copy address' });
      await expect(button).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
      await expect(button).toHaveCSS('border-top-width', '0px');
      await expect(button).toHaveCSS('border-bottom-width', '0px');
      await expect(button).toHaveCSS('padding-left', '0px');
      await expect(button).toHaveCSS('padding-right', '0px');
      await expect(button).toHaveCSS('padding-top', '0px');
      await expect(button).toHaveCSS('padding-bottom', '0px');
      await expect(button).toHaveCSS('font-size', '18px');
      await expect(button).toHaveCSS('font-weight', '700');
      await expect(button).toHaveCSS('line-height', '28px');
    });

    test('should retain the underline variant on a native button', async ({ mount, page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const component = await mount(<Link as="button">Copy address</Link>);
      await expect(component).toHaveCSS('border-top-width', '0px');
      await expect(component).toHaveCSS('border-bottom-width', '1px');
      await expect(component).toHaveCSS('border-bottom-color', 'rgba(0, 0, 0, 0)');
      await component.hover();
      const color = await component.evaluate((element) => getComputedStyle(element).color);
      await expect(component).toHaveCSS('border-bottom-color', color);
    });

    test('should keep disabled buttons inactive and suppress hover feedback', async ({ mount, page }) => {
      let clicks = 0;
      const component = await mount(
        <Link
          as="button"
          disabled
          onClick={() => {
            clicks += 1;
          }}
        >
          Copy address
        </Link>
      );
      await expect(component).toBeDisabled();
      await expect(component).toHaveCSS('cursor', 'not-allowed');
      await expect(component).toHaveCSS('opacity', '0.38');
      const color = await component.evaluate((element) => getComputedStyle(element).color);
      await component.hover();
      await expect(component).toHaveCSS('color', color);
      await expect(component).toHaveCSS('border-bottom-color', 'rgba(0, 0, 0, 0)');
      await page.keyboard.press('Tab');
      await expect(component).not.toBeFocused();
      await page.keyboard.press('Enter');
      await page.keyboard.press('Space');
      expect(clicks).toBe(0);
    });
  });

  // ============================================
  // TEST SUITE: Accessibility
  // ============================================

  test.describe('Accessibility', () => {
    test('should pass a11y checks', async ({ mount, page }) => {
      await mount(
        <main>
          <p>
            Visit <Link href="https://example.com">our website</Link> for more information.
          </p>
        </main>
      );
      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should pass a11y checks with target="_blank"', async ({ mount, page }) => {
      await mount(
        <main>
          <p>
            Open{' '}
            <Link href="https://example.com" target="_blank">
              external link
            </Link>
          </p>
        </main>
      );
      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should be keyboard focusable', async ({ mount, page }) => {
      const component = await mount(<Link href="https://example.com">Focusable link</Link>);
      await page.keyboard.press('Tab');
      await expect(component).toBeFocused();
    });

    test('should activate as a button with Enter and Space without submitting its form', async ({ mount, page }) => {
      let clicks = 0;
      let submissions = 0;
      const component = await mount(
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submissions += 1;
          }}
        >
          <Link
            as="button"
            onClick={() => {
              clicks += 1;
            }}
          >
            Copy address
          </Link>
        </form>
      );
      const button = component.getByRole('button', { name: 'Copy address' });
      await page.keyboard.press('Tab');
      await expect(button).toBeFocused();
      await expect(button).toHaveCSS('outline-style', 'solid');
      await expect(button).toHaveCSS('outline-width', '2px');
      await page.keyboard.press('Enter');
      await expect.poll(() => clicks).toBe(1);
      await page.keyboard.press('Space');
      await expect.poll(() => clicks).toBe(2);
      expect(submissions).toBe(0);
    });

    test('should disable transitions when reduced motion is requested', async ({ mount, page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const component = await mount(<Link as="button">Copy address</Link>);
      await expect(component).toHaveCSS('transition-duration', '0s');
    });
  });

  test.describe('Visual Regression', () => {
    test('should match all variants and colors', async ({ mount }) => {
      const component = await mount(
        <main
          style={{
            width: '720px',
            padding: '32px',
            color: 'var(--lufa-semantic-ui-text-primary)',
            backgroundColor: 'var(--lufa-semantic-ui-background-page)',
          }}
        >
          <h1 style={{ margin: '0 0 24px', fontSize: '28px' }}>Link variants</h1>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '20px' }}>Underline</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              {(['primary', 'secondary', 'tertiary'] as const).map((color) => (
                <Link key={color} href={`#${color}`} color={color}>
                  {color}
                </Link>
              ))}
            </div>
          </section>

          <section
            style={{
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: 'var(--lufa-primitive-color-blue-700)',
            }}
          >
            <Link href="#inverse" color="inverse">
              inverse
            </Link>
          </section>

          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '20px' }}>Plain and external</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <Link href="#plain" variant="plain">
                Plain link
              </Link>
              <Link href="https://example.com" target="_blank">
                External link
              </Link>
            </div>
          </section>

          <section>
            <h2 style={{ margin: '0 0 12px', fontSize: '20px' }}>Inline actions (native buttons)</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
              <Link as="button">Copy address</Link>
              <Link as="button" variant="plain">
                Plain action
              </Link>
              <Link as="button" disabled>
                Unavailable action
              </Link>
            </div>
          </section>
        </main>
      );

      await component.page().evaluate(() => document.fonts.ready);
      await expect(component).toHaveScreenshot('link-all-variants.png');
    });
  });
});
