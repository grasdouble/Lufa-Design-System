module.exports = {
  component: 'Container',
  outputFile: 'Container.module.css',
  base: {
    width: '100%',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'padding-left': 'var(--lufa-component-container-padding-default)',
    'padding-right': 'var(--lufa-component-container-padding-default)',
  },
  utilities: {
    fluid: {
      property: 'max-width',
      values: {
        true: '100%',
      },
    },
    // Breakpoints scaling
    size: {
      property: 'max-width',
      values: {
        xs: 'var(--lufa-component-container-max-width-xs)',
        sm: 'var(--lufa-component-container-max-width-sm)',
        md: 'var(--lufa-component-container-max-width-md)',
        lg: 'var(--lufa-component-container-max-width-lg)',
        xl: 'var(--lufa-component-container-max-width-xl)',
        '2xl': 'var(--lufa-component-container-max-width-2xl)',
      },
    },
    // Vertical padding (block axis)
    paddingBlock: {
      properties: ['padding-top', 'padding-bottom'],
      values: {
        none: '--lufa-primitive-spacing-0',
        tight: '--lufa-semantic-ui-spacing-tight',
        compact: '--lufa-semantic-ui-spacing-compact',
        default: '--lufa-semantic-ui-spacing-default',
        comfortable: '--lufa-semantic-ui-spacing-comfortable',
        spacious: '--lufa-semantic-ui-spacing-spacious',
      },
    },
    // Horizontal padding (inline axis) — overrides the base padding-left/right
    paddingInline: {
      properties: ['padding-left', 'padding-right'],
      values: {
        none: '--lufa-primitive-spacing-0',
        tight: '--lufa-semantic-ui-spacing-tight',
        compact: '--lufa-semantic-ui-spacing-compact',
        default: '--lufa-semantic-ui-spacing-default',
        comfortable: '--lufa-semantic-ui-spacing-comfortable',
        spacious: '--lufa-semantic-ui-spacing-spacious',
      },
    },
  },
};
