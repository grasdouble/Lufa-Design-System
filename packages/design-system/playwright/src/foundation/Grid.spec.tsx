import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { Grid } from '@grasdouble/lufa_design-system';

test.describe('Grid', () => {
  test('should render properly', async ({ mount }) => {
    const component = await mount(
      <Grid columns={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    );
    await expect(component).toBeVisible();
    await expect(component).toHaveCSS('display', 'grid');
  });

  test('supports responsive column counts at DS breakpoints', async ({ mount, page }) => {
    const component = await mount(
      <Grid columns={{ base: 1, md: 2, lg: 3 }}>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </Grid>
    );

    await page.setViewportSize({ width: 500, height: 900 });
    await expect
      .poll(() => component.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(' ').length))
      .toBe(1);

    await page.setViewportSize({ width: 800, height: 900 });
    await expect
      .poll(() => component.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(' ').length))
      .toBe(2);

    await page.setViewportSize({ width: 1100, height: 900 });
    await expect
      .poll(() => component.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(' ').length))
      .toBe(3);
  });

  test('keeps the implicit single-column layout before the first configured breakpoint', async ({ mount, page }) => {
    const component = await mount(
      <Grid columns={{ md: 2 }}>
        <div>First</div>
        <div>Second</div>
      </Grid>
    );

    await page.setViewportSize({ width: 500, height: 900 });
    await expect
      .poll(() => component.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(' ').length))
      .toBe(1);
  });

  test('should pass a11y checks', async ({ mount, page }) => {
    await mount(
      <Grid>
        <span>Content</span>
      </Grid>
    );
    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules(['page-has-heading-one', 'landmark-one-main', 'region'])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('Visual Regression', () => {
  test('should match snapshot for all variants', async ({ mount }) => {
    const columnCounts = [1, 2, 3, 4, 6] as const;
    const gaps = ['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'] as const;

    const component = await mount(
      <div
        style={{
          padding: '32px',
          backgroundColor: 'var(--lufa-semantic-ui-background-page)',
          width: 'min(800px, calc(100vw - 64px))',
        }}
      >
        <h1
          style={{
            marginBottom: '24px',
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'var(--lufa-semantic-ui-text-primary)',
          }}
        >
          Grid Component - All Variants
        </h1>

        {/* Section 1: Column Counts */}
        <section style={{ marginBottom: '40px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Column Counts
          </h2>
          {columnCounts.map((cols) => (
            <div key={cols} style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '12px', color: 'var(--lufa-semantic-ui-text-secondary)', marginBottom: '8px' }}>
                columns={cols}
              </p>
              <Grid
                columns={cols}
                gap="tight"
                style={{ border: '1px solid var(--lufa-semantic-ui-border-default)', padding: '8px' }}
              >
                {Array.from({ length: cols * 2 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--lufa-semantic-interactive-background-hover)',
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </div>
                ))}
              </Grid>
            </div>
          ))}
        </section>

        {/* Section 2: Responsive columns */}
        <section style={{ marginBottom: '40px' }}>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Responsive columns (base 1, md 2, lg 3)
          </h2>
          <Grid
            data-testid="responsive-columns-example"
            columns={{ base: 1, md: 2, lg: 3 }}
            gap="tight"
            style={{
              width: '100%',
              maxWidth: '320px',
              border: '1px solid var(--lufa-semantic-ui-border-default)',
              padding: '8px',
            }}
          >
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--lufa-semantic-interactive-background-hover)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {index + 1}
              </div>
            ))}
          </Grid>
        </section>

        {/* Section 3: Gap Values */}
        <section>
          <h2
            style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--lufa-semantic-ui-text-secondary)',
            }}
          >
            Gap Values (3 columns)
          </h2>
          {gaps.map((gap) => (
            <div key={gap} style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--lufa-semantic-ui-text-secondary)', marginBottom: '8px' }}>
                gap=&quot;{gap}&quot;
              </p>
              <Grid
                columns={3}
                gap={gap}
                style={{ border: '1px solid var(--lufa-semantic-ui-border-default)', padding: '8px' }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    style={{ background: 'var(--lufa-semantic-interactive-background-hover)', height: 30 }}
                  />
                ))}
              </Grid>
            </div>
          ))}
        </section>
      </div>
    );

    const page = component.page();
    const originalViewport = page.viewportSize();
    const responsiveColumns = component.getByTestId('responsive-columns-example');
    const viewportExamples: { width: number; label: string; screenshot: string }[] = [];

    for (const viewport of [
      { width: 500, label: '500px · 1 column' },
      { width: 800, label: '800px (md) · 2 columns' },
      { width: 1100, label: '1100px (lg) · 3 columns' },
    ]) {
      await page.setViewportSize({ width: viewport.width, height: 900 });
      const screenshot = await responsiveColumns.screenshot();
      viewportExamples.push({ ...viewport, screenshot: screenshot.toString('base64') });
    }

    if (originalViewport) await page.setViewportSize(originalViewport);

    await page.evaluate(async (examples) => {
      const target = document.querySelector('[data-testid="responsive-columns-example"]');
      if (!target) throw new Error('Responsive Grid fixture was not found');

      const comparison = document.createElement('div');
      comparison.style.cssText = 'display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px';

      for (const example of examples) {
        const panel = document.createElement('figure');
        panel.style.cssText = 'min-width:0;margin:0;padding:6px;border:1px solid #94a3b8;background:#fff';

        const caption = document.createElement('figcaption');
        caption.textContent = example.label;
        caption.style.cssText = 'margin-bottom:6px;font:600 11px system-ui,sans-serif;color:#334155';

        const image = document.createElement('img');
        image.src = `data:image/png;base64,${example.screenshot}`;
        image.alt = '';
        image.style.cssText = 'display:block;width:100%;height:auto';

        panel.append(caption, image);
        comparison.append(panel);
      }

      target.replaceWith(comparison);
      await Promise.all(Array.from(comparison.querySelectorAll('img'), (image) => image.decode()));
    }, viewportExamples);

    await expect(component).toHaveScreenshot('grid-all-variants-light.png');
  });
});
