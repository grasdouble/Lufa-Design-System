import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { getColorByIndex, STORY_COLORS } from '../../constants/storyColors';

const meta = {
  title: '4. Foundation/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    as: {
      description: 'The HTML element to render',
      control: 'text',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    fluid: {
      description: 'If true, the container will take 100% width (no max-width)',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      description: 'The maximum size of the container, matching a breakpoint',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    paddingBlock: {
      description: 'Vertical padding (top + bottom) using spacing tokens',
      control: 'select',
      options: ['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
    },
    paddingInline: {
      description: 'Horizontal padding (left + right) using spacing tokens — overrides the default gutter',
      control: 'select',
      options: ['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
    },
    children: {
      description: 'Content',
      control: 'text',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

const generateCode = (variant: 'default' | 'fluid' | 'size') => {
  if (variant === 'fluid') {
    return `<Container fluid>\n  Full width content\n</Container>`;
  }

  if (variant === 'size') {
    return `<Container size="md">\n  Constrained content\n</Container>`;
  }

  return `<Container>\n  Content\n</Container>`;
};

export const PropWidth: Story = {
  name: 'Prop: width',
  render: () => {
    const [hoveredVariant, setHoveredVariant] = React.useState<'default' | 'fluid' | 'size'>('default');
    const sizes = ['sm', 'md', 'lg'] as const;

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            <div onMouseEnter={() => setHoveredVariant('default')}>
              <PropCard label="Default (Responsive)" highlight={hoveredVariant === 'default'}>
                <Container
                  style={{
                    backgroundColor: STORY_COLORS.neutral.backgroundLight,
                    padding: '1rem',
                    border: `2px dashed ${STORY_COLORS.primary.blue.main}`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.primary.blue.main,
                      padding: '1rem',
                      color: STORY_COLORS.neutral.white,
                    }}
                  >
                    Default container adapts to breakpoints.
                  </div>
                </Container>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('fluid')}>
              <PropCard label="Fluid (Full Width)" highlight={hoveredVariant === 'fluid'}>
                <Container
                  fluid
                  style={{
                    backgroundColor: STORY_COLORS.neutral.backgroundLight,
                    padding: '1rem',
                    border: `2px dashed ${STORY_COLORS.primary.green.main}`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.primary.green.main,
                      padding: '1rem',
                      color: STORY_COLORS.neutral.white,
                    }}
                  >
                    Fluid container always takes 100% width.
                  </div>
                </Container>
              </PropCard>
            </div>

            <div onMouseEnter={() => setHoveredVariant('size')}>
              <PropCard label="Size Variants" highlight={hoveredVariant === 'size'}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {sizes.map((size, index) => {
                    const colors = getColorByIndex(index);
                    return (
                      <Container
                        key={size}
                        size={size}
                        style={{
                          backgroundColor: colors.light,
                          padding: '1rem',
                          border: `2px dashed ${colors.main}`,
                        }}
                      >
                        <div
                          style={{ backgroundColor: colors.main, color: STORY_COLORS.neutral.white, padding: '1rem' }}
                        >
                          size="{size}"
                        </div>
                      </Container>
                    );
                  })}
                </div>
              </PropCard>
            </div>
          </div>

          <CodeBlock code={generateCode(hoveredVariant)} language="jsx" title="JSX" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: PADDING
// ============================================

/**
 * ## Prop: `paddingBlock` & `paddingInline`
 *
 * Controls vertical and horizontal padding using semantic spacing tokens.
 * `paddingBlock` adds vertical padding (top + bottom).
 * `paddingInline` overrides the default horizontal gutter padding (left + right).
 */
export const PropPadding: Story = {
  name: 'Prop: padding',
  render: () => {
    const spacings = ['tight', 'compact', 'default', 'comfortable', 'spacious'] as const;

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <PropCard label="paddingBlock — Vertical Padding">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {spacings.map((spacing, index) => {
                const colors = getColorByIndex(index);
                return (
                  <Container
                    key={spacing}
                    paddingBlock={spacing}
                    style={{
                      backgroundColor: colors.light,
                      border: `2px dashed ${colors.main}`,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: colors.main,
                        color: STORY_COLORS.neutral.white,
                        padding: '0 1rem',
                        fontWeight: 600,
                      }}
                    >
                      paddingBlock=&quot;{spacing}&quot;
                    </div>
                  </Container>
                );
              })}
            </div>
          </PropCard>

          <PropCard label="paddingInline — Horizontal Padding">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {spacings.map((spacing, index) => {
                const colors = getColorByIndex(index);
                return (
                  <Container
                    key={spacing}
                    paddingInline={spacing}
                    style={{
                      backgroundColor: colors.light,
                      border: `2px dashed ${colors.main}`,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: colors.main,
                        color: STORY_COLORS.neutral.white,
                        padding: '0.5rem 0',
                        fontWeight: 600,
                      }}
                    >
                      paddingInline=&quot;{spacing}&quot;
                    </div>
                  </Container>
                );
              })}
            </div>
          </PropCard>

          <CodeBlock
            code={`// Vertical padding for page sections\n<Container as="section" size="lg" paddingBlock="spacious">\n  Hero content\n</Container>\n\n// Full padding control\n<Container paddingBlock="comfortable" paddingInline="spacious">\n  Custom padded content\n</Container>`}
            language="jsx"
            title="JSX"
          />
        </div>
      </StoryContainer>
    );
  },
};
