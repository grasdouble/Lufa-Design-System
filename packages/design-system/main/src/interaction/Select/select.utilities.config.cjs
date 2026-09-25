/**
 * Select Component - Utilities Generator Config
 *
 * Source of truth for Select.module.css size and state utilities.
 * Run `pnpm generate:utilities Select` to regenerate the CSS file.
 */

module.exports = {
  component: 'Select',
  outputFile: 'Select.module.css',

  base: {
    display: 'inline-block',
    'box-sizing': 'border-box',
    width: '100%',
    'padding-block': 'var(--lufa-component-input-padding-md-block)',
    'padding-inline': 'var(--lufa-component-input-padding-md-inline)',
    'font-family': 'inherit',
    'font-size': 'var(--lufa-component-input-font-size-md)',
    'line-height': 'var(--lufa-core-typography-body-line-height)',
    color: 'var(--lufa-component-input-text-default)',
    'background-color': 'var(--lufa-component-input-background-default)',
    border: 'var(--lufa-component-input-border-width) solid var(--lufa-component-input-border-default)',
    'border-radius': 'var(--lufa-component-input-border-radius)',
    transition:
      'border-color var(--lufa-semantic-ui-transition-duration-fast), box-shadow var(--lufa-semantic-ui-transition-duration-fast)',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'auto',
  },

  utilities: {
    error: {
      property: 'border-color',
      values: {
        true: 'var(--lufa-component-input-border-error)',
      },
    },
    disabled: {
      property: ['background-color', 'color', 'border-color', 'cursor'],
      values: {
        true: [
          'var(--lufa-component-input-background-disabled)',
          'var(--lufa-component-input-text-disabled)',
          'var(--lufa-component-input-border-disabled)',
          'var(--lufa-component-input-state-disabled-cursor)',
        ],
      },
    },
    fullWidth: {
      property: ['width', 'display'],
      values: {
        true: ['100%', 'block'],
      },
    },
  },

  selectors: [
    {
      comment: 'Focus ring (keyboard navigation)',
      selector: '.select:focus-visible',
      properties: {
        'border-color': 'var(--lufa-component-input-border-focus)',
        'box-shadow':
          '0 0 0 var(--lufa-component-shared-focus-outline-width) var(--lufa-component-shared-focus-outline-color)',
      },
    },
    {
      comment: 'Error + Focus — red focus ring',
      selector: '.select.error:focus-visible',
      properties: {
        'box-shadow': '0 0 0 var(--lufa-component-shared-focus-outline-width) var(--lufa-component-input-border-error)',
      },
    },
  ],
};
