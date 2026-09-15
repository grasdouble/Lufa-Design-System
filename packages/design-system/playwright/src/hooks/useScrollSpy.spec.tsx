/**
 * useScrollSpy Hook - Playwright Component Tests
 *
 * Tests cover:
 * 1. Initialization - activeId defaults to the first id
 * 2. scrollTo - updates activeId immediately and calls onScroll when provided
 * 3. onScroll callback - receives the target HTMLElement
 * 4. scrollDuration - built-in animation is bypassed when onScroll is provided
 * 5. lockFor - prevents the observer from overriding activeId during scroll
 * 6. Intersection observer - updates activeId when a section enters the viewport
 */

import { expect, test } from '@playwright/experimental-ct-react';

// Only JSX components here — mixing in plain values (constants, types…) causes
// Playwright CT's Babel transform to keep a require() for this module, making
// JSX resolve to the live namespace instead of importRef objects → mount error.
import { MinimalHarness, NoOpScrollHarness, OnScrollTrackerHarness, ScrollSpyHarness } from './useScrollSpy.harness';

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- Window declarations require interface merging.
  interface Window {
    animationFrameCalls: number;
    originalRequestAnimationFrame: typeof window.requestAnimationFrame;
  }
}

// -----------------------------------------------------------------------------
// TEST SUITE: Initialization
// -----------------------------------------------------------------------------

test.describe('useScrollSpy', () => {
  test.describe('Initialization', () => {
    test('should default activeId to the first id', async ({ mount }) => {
      const component = await mount(<MinimalHarness />);
      await expect(component.getByTestId('active')).toHaveText('section-a');
    });
  });

  // ---------------------------------------------------------------------------
  // TEST SUITE: scrollTo
  // ---------------------------------------------------------------------------

  test.describe('scrollTo', () => {
    test('should update activeId immediately when called', async ({ mount }) => {
      const component = await mount(<MinimalHarness />);

      await expect(component.getByTestId('active')).toHaveText('section-a');
      await component.getByTestId('go-b').click();
      await expect(component.getByTestId('active')).toHaveText('section-b');
    });

    test('should do nothing when the target element does not exist', async ({ mount }) => {
      const component = await mount(<MinimalHarness />);

      await expect(component.getByTestId('active')).toHaveText('section-a');
      await component.getByTestId('go-missing').click();
      // activeId must remain unchanged
      await expect(component.getByTestId('active')).toHaveText('section-a');
    });

    test('should call onScroll callback with the target HTMLElement', async ({ mount }) => {
      const component = await mount(<OnScrollTrackerHarness />);

      await component.getByTestId('go-b').click();
      await expect(component.getByTestId('called-id')).toHaveText('section-b');
    });

    test('should not run built-in scroll animation when onScroll is provided', async ({ mount, page }) => {
      const component = await mount(<NoOpScrollHarness />);
      await page.evaluate(() => {
        window.animationFrameCalls = 0;
        window.originalRequestAnimationFrame = window.requestAnimationFrame;
        window.requestAnimationFrame = (...args) => {
          window.animationFrameCalls += 1;
          return window.originalRequestAnimationFrame(...args);
        };
      });

      await component.getByTestId('go-b').click();

      const animationFrameCalls = await page.evaluate(() => {
        window.requestAnimationFrame = window.originalRequestAnimationFrame;
        return window.animationFrameCalls;
      });
      expect(animationFrameCalls).toBe(0);
    });
  });

  // ---------------------------------------------------------------------------
  // TEST SUITE: Intersection Observer
  // ---------------------------------------------------------------------------

  test.describe('Intersection Observer', () => {
    test('should update activeId when a section scrolls into view', async ({ mount, page }) => {
      const component = await mount(<ScrollSpyHarness />);

      await expect(component.getByTestId('active')).toHaveText('section-a');

      // Scroll the second section into view
      await page.evaluate(() => {
        document.getElementById('section-b')?.scrollIntoView();
      });

      await expect(component.getByTestId('active')).toHaveText('section-b');
    });

    test('should not update activeId while scroll lock is active', async ({ mount, page }) => {
      // Use an onScroll that jumps immediately (no RAF animation) to avoid
      // competing scroll operations when scrollIntoView() is called below.
      // scrollDuration stays > 0 so the observer lock remains active long enough.
      const component = await mount(<ScrollSpyHarness onScroll={(el) => el.scrollIntoView()} scrollDuration={700} />);

      // Trigger scrollTo which locks the observer
      await component.getByTestId('scroll-to-b').click();
      await expect(component.getByTestId('active')).toHaveText('section-b');

      // While still locked, programmatically bring section-a into view
      await page.evaluate(() => {
        document.getElementById('section-a')?.scrollIntoView();
      });

      // The observer should be locked - activeId stays 'section-b'
      await expect(component.getByTestId('active')).toHaveText('section-b');
    });
  });
});
