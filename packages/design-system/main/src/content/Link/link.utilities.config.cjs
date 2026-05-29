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
    // VARIANT - Visual Style (3 values)
    // ==========================================
    variant: {
      property: ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
      values: {
        default: ['var(--lufa-semantic-ui-border-width-thin)', 'solid', 'transparent'],
        subtle: ['var(--lufa-semantic-ui-border-width-thin)', 'solid', 'transparent'],
        plain: ['0', 'none', 'transparent'],
      },
    },

    // ==========================================
    // COLOR - Semantic Text Color (8 values)
    // ==========================================
    color: {
      property: 'color',
      values: {
        primary: '--lufa-semantic-ui-text-primary',
        secondary: '--lufa-semantic-ui-text-secondary',
        tertiary: '--lufa-semantic-ui-text-tertiary',
        success: '--lufa-semantic-ui-text-success',
        error: '--lufa-semantic-ui-text-error',
        warning: '--lufa-semantic-ui-text-warning',
        info: '--lufa-semantic-ui-text-info',
        inverse: '--lufa-semantic-ui-background-on-primary',
      },
    },
  },

  // ==========================================
  // STANDALONE SELECTORS - Hover and Focus states
  // ==========================================
  selectors: [
    {
      comment: 'Default variant - border appears on hover',
      selector: '.link.variant-default:hover',
      properties: {
        'border-bottom-color': 'currentColor',
      },
    },
    {
      comment: 'Subtle variant - border appears on hover',
      selector: '.link.variant-subtle:hover',
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
