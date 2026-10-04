/**
 * Input Component - Utilities Generator Config
 *
 * Source of truth for Input.module.css.
 * Run `pnpm generate:utilities Input` to regenerate the CSS file.
 */

module.exports = {
  component: 'Input',
  outputFile: 'Input.module.css',

  base: {
    display: 'inline-block',
    'box-sizing': 'border-box',
    width: '100%',
    'padding-block': 'var(--lufa-component-input-padding-md-block)',
    'padding-inline': 'var(--lufa-component-input-padding-md-inline)',
    'font-family': 'var(--lufa-component-input-font-family)',
    'font-weight': 'var(--lufa-component-input-font-weight)',
    'font-size': 'var(--lufa-component-input-font-size-md)',
    'line-height': 'var(--lufa-component-input-line-height)',
    color: 'var(--lufa-component-input-text-default)',
    'background-color': 'var(--lufa-component-input-background-default)',
    border: 'var(--lufa-component-input-border-width) solid var(--lufa-component-input-border-default)',
    'border-radius': 'var(--lufa-component-input-border-radius)',
    transition:
      'border-color var(--lufa-semantic-ui-transition-duration-fast), box-shadow var(--lufa-semantic-ui-transition-duration-fast)',
    outline: 'none',
  },

  utilities: {
    size: {
      property: ['min-height', 'padding-block', 'padding-inline', 'font-size'],
      values: Object.fromEntries(
        ['sm', 'md', 'lg'].map((size) => [
          size,
          [
            `var(--lufa-component-input-height-${size})`,
            `var(--lufa-component-input-padding-${size}-block)`,
            `var(--lufa-component-input-padding-${size}-inline)`,
            `var(--lufa-component-input-font-size-${size})`,
          ],
        ])
      ),
    },
    error: {
      property: ['border-color', 'background-color'],
      values: {
        true: ['var(--lufa-component-input-border-error)', 'var(--lufa-component-input-background-error)'],
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
      comment: 'Placeholder text color',
      selector: '.input::placeholder',
      properties: {
        color: 'var(--lufa-component-input-text-placeholder)',
      },
    },
    {
      comment: 'Focus ring (keyboard navigation)',
      selector: '.input:focus-visible',
      properties: {
        'border-color': 'var(--lufa-component-input-border-focus)',
        outline: 'var(--lufa-component-input-focus-outline)',
        'box-shadow': 'var(--lufa-component-input-focus-shadow)',
      },
    },
    {
      comment: 'Error + Focus — red focus ring',
      selector: '.input.error:focus-visible',
      properties: {
        'border-color': 'var(--lufa-component-input-focus-error-border)',
        'box-shadow': 'var(--lufa-component-input-focus-error-shadow)',
      },
    },
  ],
};
