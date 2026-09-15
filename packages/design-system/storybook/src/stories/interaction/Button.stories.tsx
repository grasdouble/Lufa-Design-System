import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

/**
 * Button - Interactive Action Element
 *
 * A versatile button component with two-dimensional variant system for flexible
 * visual styling and semantic meaning.
 *
 * ## Features
 * - ✅ Two-dimensional variants: `appearance` (visual style) + `variant` (semantic color)
 * - ✅ Three appearances: solid, outline, ghost
 * - ✅ Native `type`: button, submit, reset
 * - ✅ Seven semantic variants: primary, secondary, success, danger, warning, info, neutral
 * - ✅ Icon support (left, right, or icon-only)
 * - ✅ Loading state with spinner animation
 * - ✅ Polymorphic rendering (button or anchor element)
 * - ✅ WCAG 2.1 AA compliant
 * - ✅ Token-based design (component layer tokens)
 */
const meta = {
  title: '6. Interaction/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // Two-dimensional variant system
    appearance: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: 'Visual appearance',
      table: {
        category: 'Variants',
        type: { summary: 'ButtonAppearance' },
        defaultValue: { summary: 'solid' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native HTML button type',
      table: {
        category: 'HTML',
        type: { summary: 'ButtonNativeType' },
        defaultValue: { summary: 'button' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'neutral'],
      description: 'Semantic color variant',
      table: {
        category: 'Variants',
        type: { summary: 'VariantValue' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        category: 'Size',
        type: { summary: 'SizeValue' },
        defaultValue: { summary: 'md' },
      },
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'base', 'md', 'full'],
      description: 'Border radius',
      table: {
        category: 'Style',
        type: { summary: 'RadiusValue' },
        defaultValue: { summary: 'base' },
      },
    },
    iconLeft: {
      control: 'text',
      description: 'Icon name for left position',
      table: { category: 'Icons', type: { summary: 'IconName' } },
    },
    iconRight: {
      control: 'text',
      description: 'Icon name for right position',
      table: { category: 'Icons', type: { summary: 'IconName' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      control: 'select',
      options: ['button', 'a'],
      description: 'HTML element to render (polymorphic)',
      table: {
        category: 'Polymorphic',
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'button' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// DEFAULT STORY
// ============================================

export const Default: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label="Default Button">
            {/* 
              💡 TOKEN EDUCATION: This button automatically uses semantic design tokens
              
              Background: var(--lufa-component-button-primary-background)
              Text: var(--lufa-component-button-primary-text)
              Hover: var(--lufa-component-button-primary-background-hover)
              Border: var(--lufa-component-button-primary-border)
              
              ✅ Benefits:
              - Automatically adapts to light/dark/high-contrast modes
              - Maintains WCAG AA accessibility standards
              - Consistent with design system
              - Easy to theme and customize
              
              Try switching theme modes in the toolbar to see automatic adaptation!
            */}
            <Button>Click me</Button>
          </PropCard>

          <CodeBlock code="<Button>Click me</Button>" language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: APPEARANCE (Visual Style)
// ============================================

export const PropAppearance: Story = {
  name: 'Prop: appearance',
  render: () => {
    const types = [
      { value: 'solid', label: 'solid', description: 'Filled background (default)' },
      { value: 'outline', label: 'outline', description: 'Border only, transparent background' },
      { value: 'ghost', label: 'ghost', description: 'No border, transparent background' },
    ] as const;

    const generateCode = (appearance: string): string => {
      return `<Button appearance="${appearance}" variant="primary">
  ${appearance.charAt(0).toUpperCase() + appearance.slice(1)} Button
</Button>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of type examples */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {types.map((typeItem) => {
              return (
                <PropCard key={typeItem.value} label={`appearance="${typeItem.label}"`}>
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      alignItems: 'center',
                    }}
                  >
                    <Button appearance={typeItem.value} variant="primary">
                      {typeItem.label}
                    </Button>
                    <div
                      style={{
                        fontSize: '12px',
                        color: STORY_COLORS.themed.text.secondary,
                        textAlign: 'center',
                      }}
                    >
                      {typeItem.description}
                    </div>
                  </div>
                </PropCard>
              );
            })}
          </div>

          <CodeBlock code={generateCode('solid')} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: VARIANT (Semantic Color)
// ============================================

export const PropVariant: Story = {
  name: 'Prop: variant',
  render: () => {
    const variants = [
      { value: 'primary', label: 'primary', description: 'Primary action' },
      { value: 'secondary', label: 'secondary', description: 'Secondary action' },
      { value: 'success', label: 'success', description: 'Success / Positive action' },
      { value: 'danger', label: 'danger', description: 'Destructive / Negative action' },
      { value: 'warning', label: 'warning', description: 'Warning / Caution' },
      { value: 'info', label: 'info', description: 'Informational' },
      { value: 'neutral', label: 'neutral', description: 'Neutral / Low-emphasis' },
    ] as const;

    const generateCode = (variant: string): string => {
      const label = variant.charAt(0).toUpperCase() + variant.slice(1);
      return `<Button appearance="solid" variant="${variant}">
  ${label}
</Button>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of variant examples */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {variants.map((variantItem) => {
              return (
                <PropCard key={variantItem.value} label={`variant="${variantItem.label}"`}>
                  <div
                    style={{
                      padding: '20px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    <Button appearance="solid" variant={variantItem.value}>
                      {variantItem.label}
                    </Button>
                    <div
                      style={{
                        fontSize: '11px',
                        color: STORY_COLORS.themed.text.secondary,
                        textAlign: 'center',
                      }}
                    >
                      {variantItem.description}
                    </div>
                  </div>
                </PropCard>
              );
            })}
          </div>

          <CodeBlock code={generateCode('primary')} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// TYPE + VARIANT MATRIX (21 Combinations)
// ============================================

export const TypeVariantMatrix: Story = {
  name: 'Type + Variant Matrix',
  render: () => {
    const types = ['solid', 'outline', 'ghost'] as const;
    const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'neutral'] as const;

    {
      /* 
      💡 TOKEN EDUCATION: 21 Button Combinations (3 appearances × 7 variants)
      
      Each combination uses component-specific tokens:
      
      Solid buttons:
      - background: var(--lufa-component-button-{variant}-background)
      - text: var(--lufa-component-button-{variant}-text)
      - hover: var(--lufa-component-button-{variant}-background-hover)
      
      Outline buttons:
      - border: var(--lufa-component-button-outline-border)
      - text: var(--lufa-component-button-outline-text)
      - hover-bg: var(--lufa-component-button-outline-background-hover)
      
      Ghost buttons:
      - text: var(--lufa-component-button-ghost-text)
      - hover-bg: var(--lufa-component-button-ghost-background-hover)
      
      ✅ All 21 combinations automatically adapt to light/dark/high-contrast themes!
      ✅ No manual theme handling required
      ✅ Accessible color contrast in all modes
      
      Try switching themes to see the magic! ✨
    */
    }

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {types.map((appearance) => (
            <div key={appearance}>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: STORY_COLORS.themed.text.primary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}
              >
                Appearance: {appearance}
              </h3>
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                {variants.map((variant) => (
                  <Button key={variant} appearance={appearance} variant={variant}>
                    {variant}
                  </Button>
                ))}
              </div>
            </div>
          ))}

          <CodeBlock
            code={`{/* 21 combinations: 3 appearances × 7 variants */}
<Button appearance="solid" variant="primary">Primary</Button>
<Button appearance="outline" variant="danger">Delete</Button>
<Button appearance="ghost" variant="neutral">Cancel</Button>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: SIZE
// ============================================

export const PropSize: Story = {
  name: 'Prop: size',
  render: () => {
    const sizes = [
      { value: 'sm', label: 'sm', height: '32px', description: 'Small' },
      { value: 'md', label: 'md', height: '40px', description: 'Medium (default)' },
      { value: 'lg', label: 'lg', height: '48px', description: 'Large' },
    ] as const;

    const generateCode = (size: string): string => {
      const description = sizes.find((s) => s.value === size)?.description ?? size;
      return `<Button size="${size}">${description} Button</Button>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {sizes.map((sizeItem) => {
              return (
                <PropCard key={sizeItem.value} label={`size="${sizeItem.label}"`}>
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    <Button size={sizeItem.value}>Button {sizeItem.label}</Button>
                    <div
                      style={{
                        fontSize: '11px',
                        color: STORY_COLORS.themed.text.secondary,
                      }}
                    >
                      Height: {sizeItem.height} • {sizeItem.description}
                    </div>
                  </div>
                </PropCard>
              );
            })}
          </div>

          <CodeBlock code={generateCode('md')} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: RADIUS
// ============================================

export const PropRadius: Story = {
  name: 'Prop: radius',
  render: () => {
    const radiusOptions = [
      { value: 'none', label: 'none', px: '0px', description: 'Sharp corners' },
      { value: 'sm', label: 'sm', px: '2px', description: 'Subtle rounding' },
      { value: 'base', label: 'base', px: '8px', description: 'Default rounding' },
      { value: 'md', label: 'md', px: '12px', description: 'Emphasized rounding' },
      { value: 'full', label: 'full', px: '9999px', description: 'Pill shape' },
    ] as const;

    const generateCode = (radius: string): string => {
      const radiusLabel = radius.charAt(0).toUpperCase() + radius.slice(1);
      return `<Button radius="${radius}">${radiusLabel}</Button>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {radiusOptions.map((radiusItem) => {
              return (
                <PropCard key={radiusItem.value} label={`radius="${radiusItem.label}"`}>
                  <div
                    style={{
                      padding: '20px',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      alignItems: 'center',
                    }}
                  >
                    <Button radius={radiusItem.value}>{radiusItem.label}</Button>
                    <div
                      style={{
                        fontSize: '11px',
                        color: STORY_COLORS.themed.text.secondary,
                        textAlign: 'center',
                      }}
                    >
                      {radiusItem.px} • {radiusItem.description}
                    </div>
                  </div>
                </PropCard>
              );
            })}
          </div>

          <CodeBlock code={generateCode('base')} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: ICONS
// ============================================

export const PropIcons: Story = {
  name: 'Prop: iconLeft / iconRight',
  render: () => {
    const iconExamples = [
      { config: { iconLeft: 'check' }, label: 'iconLeft="check"', children: 'Save' },
      { config: { iconRight: 'arrow-right' }, label: 'iconRight="arrow-right"', children: 'Next' },
      {
        config: { iconLeft: 'check', iconRight: 'arrow-right' },
        label: 'Both icons',
        children: 'Confirm',
      },
      { config: { iconLeft: 'search' }, label: 'Icon-only', children: undefined, ariaLabel: 'Search' },
    ];

    const generateCode = (index: number): string => {
      const example = iconExamples[index];
      const { config, children, ariaLabel } = example;

      if (config.iconLeft && config.iconRight) {
        return `<Button iconLeft="${config.iconLeft}" iconRight="${config.iconRight}">
  ${children}
</Button>`;
      } else if (config.iconLeft && !children) {
        return `<Button iconLeft="${config.iconLeft}" aria-label="${ariaLabel}" />`;
      } else if (config.iconLeft) {
        return `<Button iconLeft="${config.iconLeft}">${children}</Button>`;
      } else if (config.iconRight) {
        return `<Button iconRight="${config.iconRight}">${children}</Button>`;
      }
      return '<Button>Default</Button>';
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
            }}
          >
            {iconExamples.map((example, index) => {
              return (
                <PropCard key={index} label={example.label}>
                  <div
                    style={{
                      padding: '24px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button {...example.config} aria-label={example.ariaLabel}>
                      {example.children}
                    </Button>
                  </div>
                </PropCard>
              );
            })}
          </div>

          <CodeBlock code={generateCode(0)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: DISABLED & LOADING
// ============================================

export const PropStates: Story = {
  name: 'Prop: disabled / loading',
  render: () => {
    const types = ['solid', 'outline', 'ghost'] as const;

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Disabled state */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Disabled State
            </h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {types.map((appearance) => (
                <Button key={appearance} appearance={appearance} disabled>
                  Disabled {appearance}
                </Button>
              ))}
            </div>
          </div>

          {/* Loading state */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Loading State
            </h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {types.map((appearance) => (
                <Button key={appearance} appearance={appearance} loading>
                  Loading {appearance}
                </Button>
              ))}
            </div>
          </div>

          <CodeBlock
            code={`{/* Disabled */}
<Button disabled>Disabled</Button>

{/* Loading (with spinner) */}
<Button loading>Saving...</Button>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: FULLWIDTH
// ============================================

export const PropFullWidth: Story = {
  name: 'Prop: fullWidth',
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label="fullWidth={true}">
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <div
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                }}
              >
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </PropCard>

          <PropCard label="fullWidth={false} (default)">
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <div
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                }}
              >
                <Button>Normal Width Button</Button>
              </div>
            </div>
          </PropCard>

          <CodeBlock
            code={`<Button fullWidth>
  Full Width Button
</Button>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: AS (Polymorphic)
// ============================================

export const PropAs: Story = {
  name: 'Prop: as (Polymorphic)',
  render: () => {
    const generateCode = (asValue: 'button' | 'a'): string => {
      if (asValue === 'button') {
        return `<Button as="button" onClick={handleClick}>
  Button Element
</Button>`;
      } else {
        return `<Button as="a" href="/home">
  Link Button
</Button>`;
      }
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <PropCard label='as="button" (default)'>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button as="button" onClick={() => alert('Button clicked!')}>
                  Button Element
                </Button>
              </div>
            </PropCard>

            <PropCard label='as="a" (anchor)'>
              <div
                style={{
                  padding: '24px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button as="a" href="#link" appearance="ghost" variant="primary">
                  Anchor Element
                </Button>
              </div>
            </PropCard>
          </div>

          <CodeBlock code={generateCode('button')} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// USE CASES
// ============================================

export const UseCases: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* CTA Section */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Call-to-Action (CTA)
            </h3>
            <div
              style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              <Button appearance="solid" variant="primary" size="lg" iconRight="arrow-right">
                Get Started
              </Button>
              <Button appearance="outline" variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Form Actions */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Form Actions
            </h3>
            <div
              style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
              }}
            >
              <Button appearance="ghost" variant="neutral">
                Cancel
              </Button>
              <Button appearance="solid" variant="primary" iconLeft="check">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Destructive Actions */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Destructive Actions
            </h3>
            <div
              style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              <Button appearance="outline" variant="neutral">
                Keep
              </Button>
              <Button appearance="solid" variant="danger" iconLeft="trash">
                Delete
              </Button>
            </div>
          </div>

          {/* Icon Toolbar */}
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: STORY_COLORS.themed.text.primary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px',
              }}
            >
              Icon Toolbar
            </h3>
            <div
              style={{
                padding: '24px',
                borderRadius: '8px',
                display: 'flex',
                gap: '8px',
                justifyContent: 'center',
              }}
            >
              <Button appearance="ghost" variant="neutral" iconLeft="search" aria-label="Search" />
              <Button appearance="ghost" variant="neutral" iconLeft="settings" aria-label="Settings" />
              <Button appearance="ghost" variant="neutral" iconLeft="heart" aria-label="Favorite" />
              <Button appearance="ghost" variant="neutral" iconLeft="save" aria-label="Save" />
            </div>
          </div>

          <CodeBlock
            code={`{/* CTA */}
<Button
  appearance="solid"
  variant="primary"
  size="lg"
  iconRight="arrow-right"
>
  Get Started
</Button>

{/* Form actions */}
<Button appearance="ghost" variant="neutral">Cancel</Button>
<Button appearance="solid" variant="primary">Save</Button>

{/* Destructive */}
<Button appearance="solid" variant="danger" iconLeft="trash">
  Delete
</Button>

{/* Icon toolbar */}
<Button
  appearance="ghost"
  variant="neutral"
  iconLeft="search"
  aria-label="Search"
/>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};
