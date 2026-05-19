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
      const variantValues = ['default', 'subtle', 'plain'] as const;

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

      test('should default to variant="default"', async ({ mount }) => {
        const component = await mount(<Link href="https://example.com">Content</Link>);
        await expect(component).toHaveClass(/variant-default/);
      });
    });

    test.describe('Color Prop', () => {
      const colorValues = [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'error',
        'warning',
        'info',
        'inverse',
      ] as const;

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

      test('should default to color="secondary" for variant="subtle"', async ({ mount }) => {
        const component = await mount(
          <Link href="https://example.com" variant="subtle">
            Content
          </Link>
        );
        await expect(component).toHaveClass(/color-secondary/);
      });

      test('should override subtle default color when color prop is provided', async ({ mount }) => {
        const component = await mount(
          <Link href="https://example.com" variant="subtle" color="primary">
            Content
          </Link>
        );
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
      const component = await mount(
        <Link as="span" href="https://example.com">
          Span link
        </Link>
      );
      const tagName = await component.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('span');
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
        .disableRules(['landmark-one-main', 'region'])
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
        .disableRules(['landmark-one-main', 'region'])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should be keyboard focusable', async ({ mount, page }) => {
      const component = await mount(<Link href="https://example.com">Focusable link</Link>);
      await page.keyboard.press('Tab');
      await expect(component).toBeFocused();
    });
  });
});
