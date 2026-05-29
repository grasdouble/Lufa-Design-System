/**
 * Link Component - Utility Classes Configuration
 *
 * This configuration defines all utility classes that will be generated
 * for the Link component. The script `generate-utilities.cjs` reads this
 * file and generates Link.module.css automatically.
 *
 * Architecture: Two-dimensional design
 * - VARIANT: Visual style approach (default, subtle, plain)
 * - COLOR:   Semantic text color (same values as Text component)
 *
 * @see packages/design-system/main/scripts/generate-utilities.cjs
 */

module.exports = {
  component: 'Link',
  outputFile: 'Link.module.css',

  // Base CSS for the component (non-utility fundamental styles)
  base: {
    display: 'inline',
    cursor: 'pointer',
    'font-family': 'inherit',
    'font-size': 'inherit',
    'font-weight': 'inherit',
    'text-decoration': 'none',
    transition:
      'border-color var(--lufa-semantic-ui-transition-duration-fast) var(--lufa-semantic-ui-transition-timing-function-default), color var(--lufa-semantic-ui-transition-duration-fast) var(--lufa-semantic-ui-transition-timing-function-default)',
  },

  utilities: {
    // ==========================================
    // VARIANT - Visual Style (2 values)
    // ==========================================
    variant: {
      property: ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
      values: {
        underline: ['var(--lufa-semantic-ui-border-width-thin)', 'solid', 'transparent'],
        plain: ['0', 'none', 'transparent'],
      },
    },

    // ==========================================
    // COLOR - Link Color (4 values)
    // ==========================================
    color: {
      property: 'color',
      values: {
        primary: '--lufa-semantic-interactive-link-default',
        secondary: '--lufa-semantic-ui-text-secondary',
        tertiary: '--lufa-semantic-ui-text-tertiary',
        inverse: '--lufa-semantic-ui-background-on-primary',
      },
    },
  },

  // ==========================================
  // STANDALONE SELECTORS - Hover and Focus states
  // ==========================================
  selectors: [
    {
      comment: 'Primary color - darken on hover',
      selector: '.link.color-primary:hover',
      properties: {
        color: 'var(--lufa-semantic-interactive-link-hover)',
      },
    },
    {
      comment: 'Default variant - border appears on hover',
      selector: '.link.variant-underline:hover',
      properties: {
        'border-bottom-color': 'currentColor',
      },
    },
    {
      comment: 'Accessible focus ring (matches Button pattern)',
      selector: '.link:focus-visible',
      properties: {
        outline:
          'var(--lufa-component-shared-focus-outline-width) solid var(--lufa-component-shared-focus-outline-color)',
        'outline-offset': 'var(--lufa-component-shared-focus-outline-offset)',
        'border-radius': 'var(--lufa-semantic-ui-border-radius-small)',
      },
    },
  ],
};
