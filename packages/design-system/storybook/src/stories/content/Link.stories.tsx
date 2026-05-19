import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link, Text } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

const NEUTRAL = STORY_COLORS.neutral;

/**
 * Link - Inline Anchor Component
 *
 * A flexible, polymorphic inline link component for embedding styled anchors
 * inside text content. Uses DS tokens exclusively and inherits font properties
 * from the surrounding context.
 *
 * ## Features
 * - ✅ Three visual variants: default, subtle, plain
 * - ✅ Semantic color values (8 colors, same as Text)
 * - ✅ Animated border-bottom on hover (default and subtle)
 * - ✅ Auto rel="noopener noreferrer" for target="_blank"
 * - ✅ Accessible: native `<a>` semantics with visible focus ring
 * - ✅ Polymorphic `as` prop for router link integration
 * - ✅ Inherits font-size and font-weight from parent context
 * - ✅ Token-based design (semantic layer tokens)
 */
const meta = {
  title: '5. Content/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // Polymorphic
    as: {
      control: 'select',
      options: ['a', 'span', 'button'],
      description: 'HTML element or component to render (polymorphic)',
      table: {
        category: 'Polymorphic',
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'a' },
      },
    },

    // Content
    href: {
      control: 'text',
      description: 'Destination URL',
      table: {
        category: 'Link',
        type: { summary: 'string' },
      },
    },
    target: {
      control: 'select',
      options: ['_self', '_blank'],
      description: 'Where to open the linked URL',
      table: {
        category: 'Link',
        type: { summary: "'_self' | '_blank'" },
        defaultValue: { summary: '_self' },
      },
    },
    rel: {
      control: 'text',
      description: 'Rel attribute (auto "noopener noreferrer" when target="_blank")',
      table: {
        category: 'Link',
        type: { summary: 'string' },
      },
    },

    // Variants
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'plain'],
      description: 'Visual style variant',
      table: {
        category: 'Variants',
        type: { summary: "'default' | 'subtle' | 'plain'" },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'error', 'warning', 'info', 'inverse'],
      description: 'Text color (semantic tokens, same as Text component)',
      table: {
        category: 'Variants',
        type: { summary: 'ColorValue' },
        defaultValue: { summary: 'primary (secondary for subtle variant)' },
      },
    },

    // Standard
    children: {
      control: 'text',
      table: { category: 'Content', type: { summary: 'ReactNode' } },
    },
    className: {
      control: 'text',
      table: { category: 'Advanced', type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PLAYGROUND
// ============================================

/**
 * ## Playground
 *
 * Interactive playground to experiment with all Link props.
 */
export const Playground: Story = {
  args: {
    href: 'https://github.com/grasdouble/Lufa-Design-System',
    target: '_blank',
    variant: 'default',
    children: 'Lufa Design System',
  },
  render: (args: any) => {
    return (
      <StoryContainer>
        <div
          style={{
            padding: '32px',
            background: NEUTRAL.backgroundLight,
            borderRadius: '8px',
          }}
        >
          <Text as="p" variant="body">
            Visit the <Link {...args} /> on GitHub.
          </Text>
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: VARIANT
// ============================================

/**
 * ## Prop: `variant`
 *
 * Controls the visual style of the link.
 *
 * - **`default`**: colored text + animated border-bottom on hover
 * - **`subtle`**: secondary text color, same animated border behavior
 * - **`plain`**: no underline, color only — for use inside buttons or badges
 */
export const PropVariant: Story = {
  render: () => {
    const variants = [
      {
        value: 'default' as const,
        label: 'Default',
        description: 'Colored text with animated border-bottom on hover',
        color: 'primary' as const,
      },
      {
        value: 'subtle' as const,
        label: 'Subtle',
        description: 'Secondary text color, same hover border behavior',
        color: 'secondary' as const,
      },
      {
        value: 'plain' as const,
        label: 'Plain',
        description: 'No underline, color only — for use inside buttons or badges',
        color: 'primary' as const,
      },
    ];

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
          {variants.map(({ value, label, description, color }) => (
            <div key={value} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <PropCard>
                <Text as="p" variant="body">
                  Example with{' '}
                  <Link href="https://example.com" variant={value} color={color}>
                    {label} link
                  </Link>{' '}
                  inside a paragraph.
                </Text>
              </PropCard>
              <div style={{ fontSize: '12px', color: NEUTRAL.textSlate }}>
                variant="{value}" — {description}
              </div>
            </div>
          ))}

          <CodeBlock
            code={`// Default — animated border-bottom on hover
<Link href="https://example.com" variant="default">Default link</Link>

// Subtle — secondary color, same hover behavior
<Link href="https://example.com" variant="subtle">Subtle link</Link>

// Plain — no underline, color only
<Link href="https://example.com" variant="plain">Plain link</Link>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: COLOR
// ============================================

/**
 * ## Prop: `color`
 *
 * Controls the text color using semantic tokens — same values as the Text component.
 *
 * When not specified, defaults to `'primary'` for `default`/`plain` variants
 * and `'secondary'` for the `subtle` variant.
 */
export const PropColor: Story = {
  render: () => {
    const colors = [
      { value: 'primary' as const, label: 'Primary' },
      { value: 'secondary' as const, label: 'Secondary' },
      { value: 'tertiary' as const, label: 'Tertiary' },
      { value: 'success' as const, label: 'Success' },
      { value: 'error' as const, label: 'Error' },
      { value: 'warning' as const, label: 'Warning' },
      { value: 'info' as const, label: 'Info' },
    ];

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '32px' }}>
          {colors.map(({ value, label }) => (
            <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '100px', fontSize: '12px', color: NEUTRAL.textSlate }}>color="{value}"</div>
              <Link href="https://example.com" color={value}>
                {label} link
              </Link>
            </div>
          ))}

          <CodeBlock
            code={`<Link href="https://example.com" color="primary">Primary</Link>
<Link href="https://example.com" color="secondary">Secondary</Link>
<Link href="https://example.com" color="success">Success</Link>
<Link href="https://example.com" color="error">Error</Link>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: TARGET
// ============================================

/**
 * ## Prop: `target`
 *
 * Where to open the linked URL.
 *
 * When `target="_blank"`, `rel="noopener noreferrer"` is automatically applied
 * for security (prevents tab-nabbing). Override with an explicit `rel` prop.
 */
export const PropTarget: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PropCard>
              <Text as="p" variant="body">
                Internal link:{' '}
                <Link href="https://example.com" target="_self">
                  opens in same tab
                </Link>
              </Text>
            </PropCard>
            <div style={{ fontSize: '12px', color: NEUTRAL.textSlate }}>target="_self" — no rel attribute added</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PropCard>
              <Text as="p" variant="body">
                External link:{' '}
                <Link href="https://github.com" target="_blank">
                  opens in new tab
                </Link>
              </Text>
            </PropCard>
            <div style={{ fontSize: '12px', color: NEUTRAL.textSlate }}>
              target="_blank" — auto adds rel="noopener noreferrer" for security
            </div>
          </div>

          <CodeBlock
            code={`// Internal link — no rel added automatically
<Link href="/about" target="_self">About</Link>

// External link — rel="noopener noreferrer" added automatically
<Link href="https://github.com" target="_blank">GitHub</Link>

// Override rel manually
<Link href="https://example.com" target="_blank" rel="noopener">Custom rel</Link>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// INLINE USAGE
// ============================================

/**
 * ## Inline Usage
 *
 * The Link component is designed to be used inline inside `<Text>` components.
 * It inherits font-size and font-weight from the parent context.
 */
export const InlineUsage: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text as="p" variant="body-large">
              My work is split between{' '}
              <Link href="https://github.com/noofreuuuh" target="_blank">
                noofreuuuh
              </Link>{' '}
              and{' '}
              <Link href="https://github.com/smouillour" target="_blank">
                smouillour
              </Link>
              .
            </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text as="p" variant="body" color="secondary">
              Built with{' '}
              <Link href="https://react.dev" target="_blank" color="secondary">
                React
              </Link>{' '}
              and the{' '}
              <Link href="https://github.com/grasdouble/Lufa-Design-System" target="_blank" color="secondary">
                Lufa Design System
              </Link>
              .
            </Text>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text as="p" variant="body-small">
              Read the{' '}
              <Link href="/docs" variant="plain">
                documentation
              </Link>{' '}
              or check the{' '}
              <Link href="/changelog" variant="plain">
                changelog
              </Link>
              .
            </Text>
          </div>

          <CodeBlock
            code={`import { Link, Text } from '@grasdouble/lufa_design-system';

<Text as="p" variant="body-large">
  My work is split between{' '}
  <Link href="https://github.com/noofreuuuh" target="_blank">
    noofreuuuh
  </Link>{' '}
  and{' '}
  <Link href="https://github.com/smouillour" target="_blank">
    smouillour
  </Link>.
</Text>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};
