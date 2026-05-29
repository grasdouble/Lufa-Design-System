import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from '@grasdouble/lufa_design-system';

import {
  CodeBlock,
  MarginVisualizer,
  PaddingVisualizer,
  PlaygroundContainer,
  PropCard,
  StoryContainer,
} from '../../components/helpers';
import { getColorByIndex, STORY_COLORS } from '../../constants/storyColors';

/**
 * Box - Universal Layout Primitive
 *
 * A flexible, polymorphic container component that serves as the foundation
 * for all layout compositions in the Lufa Design System v2.
 *
 * ## Features
 * - ✅ Utility-based props (spacing, backgrounds, borders, display)
 * - ✅ Polymorphic `as` prop for semantic HTML elements
 * - ✅ Performance-optimized (CSS classes, not inline styles)
 * - ✅ Token-based design (semantic layer tokens)
 */
const meta = {
  title: '4. Foundation/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen', // Use fullscreen for grid layouts
  },
  argTypes: {
    // Polymorphic
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'],
      description: 'HTML element to render',
      table: {
        category: 'Polymorphic',
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'div' },
      },
    },

    // Spacing - Padding
    padding: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Padding on all sides',
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingX: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Horizontal padding',
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingY: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Vertical padding',
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingTop: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingRight: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingBottom: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },
    paddingLeft: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Padding', type: { summary: 'SpacingValue' } },
    },

    // Spacing - Margin
    margin: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Margin on all sides',
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginX: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Horizontal margin',
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginY: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Vertical margin',
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginTop: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginRight: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginBottom: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },
    marginLeft: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      table: { category: 'Spacing - Margin', type: { summary: 'SpacingValue' } },
    },

    // Background
    background: {
      control: 'select',
      options: [
        undefined,
        'page',
        'surface',
        'success',
        'error',
        'warning',
        'info',
        'overlay',
        'on-primary',
        'on-secondary',
        'on-success',
        'on-error',
        'on-warning',
        'on-info',
      ],
      description: 'Background color',
      table: { category: 'Background', type: { summary: 'BackgroundValue' } },
    },

    // Border
    borderRadius: {
      control: 'select',
      options: [undefined, 'none', 'small', 'default', 'medium', 'large', 'full'],
      table: { category: 'Border', type: { summary: 'BorderRadiusValue' } },
    },
    borderWidth: {
      control: 'select',
      options: [undefined, 'none', 'thin', 'medium', 'thick'],
      table: { category: 'Border', type: { summary: 'BorderWidthValue' } },
    },
    borderColor: {
      control: 'select',
      options: [undefined, 'default', 'strong', 'success', 'error', 'warning', 'info'],
      table: { category: 'Border', type: { summary: 'BorderColorValue' } },
    },

    // Display
    display: {
      control: 'select',
      options: [undefined, 'block', 'inline-block', 'flex', 'inline-flex', 'grid', 'none'],
      table: { category: 'Display', type: { summary: 'DisplayValue' } },
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
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PLAYGROUND
// ============================================

/**
 * ## Playground
 *
 * Interactive playground to experiment with all Box props.
 *
 * **Features:**
 * - Visual container with dashed border to see margins
 * - Grid overlay with toggle button (top of the container)
 * - Adjacent elements in 4 directions (Above, Before, After, Below) to test display modes
 * - Content Type control to test `display: flex` and `display: grid`
 *
 * **Usage:**
 * - Use the checkboxes above the container to toggle grid/adjacent elements
 * - Edit the controls below to see real-time changes
 * - **To test `display: flex/grid`:** Change "Content Type" control to "Multiple Items"
 * - Test margin props - they're now visible thanks to the dashed border
 * - Test display props - adjacent elements show how `display` affects layout:
 *   - `block`: Box takes full width, elements stack vertically
 *   - `inline-block`: Box inline with Before/After on same line
 *   - `inline`: Box inline with text-like behavior
 *   - `flex`: Box as flex container (use "Multiple Items" content)
 *   - `grid`: Box as grid container (use "Multiple Items" content)
 */
export const Playground: Story = {
  argTypes: {
    contentType: {
      control: 'select',
      options: ['text', 'multipleItems'],
      description: 'Type of content inside the Box (use "Multiple Items" to test flex/grid)',
      table: { category: 'Playground' },
    },
  },
  args: {
    padding: 'comfortable',
    background: 'info',
    borderRadius: 'medium',
    borderWidth: 'thin',
    borderColor: 'default',
    children: '🎨 Edit the controls to see changes in real-time!',
    contentType: 'text',
  },
  render: (args: any) => {
    // Type-safe access to args properties
    const contentType = (args as { contentType?: 'text' | 'multipleItems' }).contentType;
    const children = (args as { children?: React.ReactNode }).children;

    // Determine content based on contentType control
    const itemStyle = {
      padding: '8px',
      background: 'var(--lufa-semantic-interactive-background-hover)',
      borderRadius: '4px',
    };

    const content =
      contentType === 'multipleItems' ? (
        <>
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
          <div style={itemStyle}>Item 4</div>
        </>
      ) : (
        children
      );

    return (
      <PlaygroundContainer defaultShowGrid defaultShowAdjacentElements={false}>
        <Box {...args}>{content}</Box>
      </PlaygroundContainer>
    );
  },
};

// ============================================
// PROP: AS (Polymorphic)
// ============================================

/**
 * ## Prop: `as`
 *
 * Renders Box as different HTML elements for semantic markup.
 */
export const PropAs: Story = {
  render: () => {
    // Generate JSX code for the selected element
    const generateJsxCode = (element: string): string => {
      return `<Box
  as="${element}"
  padding="comfortable"
  background="surface"
  borderWidth="thin"
  borderRadius="default"
>
  Content
</Box>`;
    };

    // Generate expected HTML output for the selected element
    const generateHtmlOutput = (element: string): string => {
      return `<${element}
  class="Box_box__... Box_padding-comfortable__... Box_background-surface__... ... +7 more"
  data-background="surface"
  data-padding="comfortable"
  data-border-width="thin"
  data-border-radius="default"
>
  ${element}
</${element}>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {(['div', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'] as const).map((element) => (
              <PropCard key={element} label={`<${element}>`}>
                <Box as={element} padding="comfortable" background="surface" borderWidth="thin" borderRadius="default">
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '80px',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    {element}
                  </span>
                </Box>
              </PropCard>
            ))}
          </div>

          {/* Code block with tabs (HTML + JSX) */}
          <CodeBlock
            tabs={[
              {
                label: 'HTML',
                content: generateHtmlOutput('div'),
              },
              {
                label: 'JSX',
                content: generateJsxCode('div'),
              },
            ]}
            title="Code"
            subtitle='<Box as="div">'
          />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: PADDING
// ============================================

/**
 * ## Prop: `padding`
 *
 * Apply uniform padding on all sides.
 * Blue background visualizes the padding area, white border shows content.
 */
export const PropPadding: Story = {
  render: () => {
    {
      /* 
      💡 TOKEN EDUCATION: Spacing System
      
      Box padding uses semantic spacing tokens:
      - padding="none" → var(--lufa-semantic-spacing-none) = 0px
      - padding="tight" → var(--lufa-semantic-spacing-tight) = 4px
      - padding="compact" → var(--lufa-semantic-spacing-compact) = 8px
      - padding="default" → var(--lufa-semantic-spacing-default) = 16px
      - padding="comfortable" → var(--lufa-semantic-spacing-comfortable) = 24px
      - padding="spacious" → var(--lufa-semantic-spacing-spacious) = 32px
      
      ✅ Benefits:
      - Consistent spacing across entire application
      - Easy to adjust globally (change token value once)
      - Semantic naming makes intent clear
      - Prevents arbitrary spacing values
      
      The blue visualization shows the padding area around content.
    */
    }

    // Mapping of padding values to pixel sizes and colors
    // Note: 'none' and 'tight' both map to 4px (tight spacing)
    const paddingValues = [
      { value: 'none' as const, size: '4px', color: STORY_COLORS.themed.border.default },
      { value: 'tight' as const, size: '4px', color: STORY_COLORS.primary.cyan.main },
      { value: 'compact' as const, size: '8px', color: STORY_COLORS.primary.green.main },
      { value: 'default' as const, size: '16px', color: STORY_COLORS.primary.blue.main },
      { value: 'comfortable' as const, size: '24px', color: STORY_COLORS.primary.violet.main },
      { value: 'spacious' as const, size: '32px', color: STORY_COLORS.primary.pink.main },
    ];

    const generateCode = (padding: string): string => {
      return `<Box padding="${padding}" borderRadius="default">
  Content
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {paddingValues.map(({ value, size, color }) => (
              <PropCard key={value} label={`padding="${value}"`}>
                <PaddingVisualizer color={color} showLabel={value !== 'none'} label={size}>
                  <Box padding={value} borderRadius="default">
                    <span
                      style={{
                        display: 'block',
                        backgroundColor: STORY_COLORS.neutral.white,
                        border: `2px solid ${STORY_COLORS.themed.border.default}`,
                        borderRadius: '4px',
                        padding: '12px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: STORY_COLORS.themed.text.secondary,
                        textAlign: 'center',
                      }}
                    >
                      Content
                    </span>
                  </Box>
                </PaddingVisualizer>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('default')} language="jsx" title="JSX" subtitle='padding="default"' />
        </div>
      </StoryContainer>
    );
  },
};

/**
 * ## Props: `paddingX` & `paddingY`
 *
 * Directional padding shortcuts.
 * Different colors for visual distinction.
 */
export const PropPaddingXY: Story = {
  render: () => {
    const generateCode = (variant: string): string => {
      if (variant === 'paddingX') {
        return `<Box paddingX="spacious" borderRadius="default">
  Horizontal padding
</Box>`;
      } else if (variant === 'paddingY') {
        return `<Box paddingY="spacious" borderRadius="default">
  Vertical padding
</Box>`;
      } else {
        return `<Box paddingX="spacious" paddingY="compact" borderRadius="default">
  Different X/Y spacing
</Box>`;
      }
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <PropCard label='paddingX="spacious" (← →)'>
              <PaddingVisualizer color={STORY_COLORS.axis.x.main} showLabel label="32px">
                <Box paddingX="spacious" borderRadius="default">
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.axis.x.main,
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 600,
                      textAlign: 'center',
                      padding: '16px',
                      borderRadius: '4px',
                    }}
                  >
                    ← Horizontal padding →
                  </div>
                </Box>
              </PaddingVisualizer>
            </PropCard>
            <PropCard label='paddingY="spacious" (↑ ↓)'>
              <PaddingVisualizer color={STORY_COLORS.axis.y.main} showLabel label="32px">
                <Box paddingY="spacious" borderRadius="default">
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.axis.y.main,
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 600,
                      textAlign: 'center',
                      padding: '16px',
                      borderRadius: '4px',
                    }}
                  >
                    ↑<br />
                    Vertical padding
                    <br />↓
                  </div>
                </Box>
              </PaddingVisualizer>
            </PropCard>
            <PropCard label="paddingX + paddingY">
              <PaddingVisualizer color={STORY_COLORS.axis.combined.main} showLabel label="X:32px Y:8px">
                <Box paddingX="spacious" paddingY="compact" borderRadius="default">
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.axis.combined.main,
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 600,
                      textAlign: 'center',
                      padding: '16px',
                      borderRadius: '4px',
                    }}
                  >
                    Different X/Y spacing
                  </div>
                </Box>
              </PaddingVisualizer>
            </PropCard>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('paddingX')} language="jsx" title="JSX" subtitle="paddingX" />
        </div>
      </StoryContainer>
    );
  },
};

/**
 * ## Props: Individual Padding Sides
 *
 * Precise control over each side's padding.
 * Different border colors show which side has padding.
 */
export const PropPaddingIndividual: Story = {
  render: () => {
    const generateCode = (prop: string): string => {
      return `<Box ${prop}="spacious" borderRadius="default">
  Content
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { prop: 'paddingTop', label: 'Top ↓', ...STORY_COLORS.directional.top },
              { prop: 'paddingRight', label: 'Right ←', ...STORY_COLORS.directional.right },
              { prop: 'paddingBottom', label: 'Bottom ↑', ...STORY_COLORS.directional.bottom },
              { prop: 'paddingLeft', label: 'Left →', ...STORY_COLORS.directional.left },
            ].map(({ prop, label, main }) => (
              <PropCard key={prop} label={`${prop}="spacious"`}>
                <PaddingVisualizer color={main} showLabel label="32px">
                  <Box {...{ [prop]: 'spacious' }} borderRadius="default">
                    <div
                      style={{
                        backgroundColor: main,
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: 600,
                        textAlign: 'center',
                        padding: '20px',
                        borderRadius: '4px',
                      }}
                    >
                      {label}
                    </div>
                  </Box>
                </PaddingVisualizer>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('paddingTop')} language="jsx" title="JSX" subtitle='paddingTop="spacious"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: MARGIN
// ============================================

/**
 * ## Prop: `margin`
 *
 * Applies margin to all sides of the Box.
 * Gray background container shows the margin spacing.
 */
export const PropMargin: Story = {
  render: () => {
    const generateCode = (margin: string): string => {
      return `<Box margin="${margin}" padding="default">
  Box
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {(['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'] as const).map((value, idx) => {
              const storyColor = getColorByIndex(idx);
              const marginValues = {
                none: '0px',
                tight: '4px',
                compact: '8px',
                default: '16px',
                comfortable: '24px',
                spacious: '32px',
              };
              const marginSize = marginValues[value];

              return (
                <PropCard key={value} label={`margin="${value}"`}>
                  <div
                    style={{
                      backgroundColor: STORY_COLORS.themed.background.surface,
                      borderRadius: '8px',
                      padding: '4px',
                      minHeight: '140px',
                      position: 'relative',
                      border: `2px dashed ${STORY_COLORS.themed.border.default}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <MarginVisualizer color={storyColor.main} showLabel={value !== 'none'} label={marginSize}>
                      <Box
                        margin={value}
                        padding="default"
                        style={{
                          backgroundColor: storyColor.main,
                          color: 'white',
                          fontSize: '13px',
                          fontWeight: 600,
                          textAlign: 'center',
                          minWidth: '60px',
                          borderRadius: '6px',
                        }}
                      >
                        Box
                      </Box>
                    </MarginVisualizer>
                  </div>
                </PropCard>
              );
            })}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('default')} language="jsx" title="JSX" subtitle='margin="default"' />
        </div>
      </StoryContainer>
    );
  },
};

/**
 * ## Props: `marginX` & `marginY`
 *
 * Directional margin shortcuts.
 * Colored containers show the spacing area.
 */
export const PropMarginXY: Story = {
  render: () => {
    const generateCode = (variant: string): string => {
      if (variant === 'marginX') {
        return `<Box marginX="spacious" padding="comfortable" background="info">
  Horizontal margin
</Box>`;
      } else if (variant === 'marginY') {
        return `<Box marginY="spacious" padding="comfortable" background="warning">
  Vertical margin
</Box>`;
      } else {
        return `<Box marginX="spacious" marginY="comfortable" padding="comfortable" background="success">
  Combined margins
</Box>`;
      }
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <PropCard label='marginX="spacious" (← →)'>
              <div
                style={{
                  backgroundColor: STORY_COLORS.axis.x.light,
                  padding: '16px',
                  borderRadius: '8px',
                  border: `2px dashed ${STORY_COLORS.axis.x.main}`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MarginVisualizer color={STORY_COLORS.axis.x.main} showLabel label="32px">
                  <Box
                    marginX="spacious"
                    padding="comfortable"
                    background="info"
                    borderRadius="default"
                    style={{
                      backgroundColor: STORY_COLORS.axis.x.main,
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: '14px',
                    }}
                  >
                    ← Horizontal margin →
                  </Box>
                </MarginVisualizer>
              </div>
            </PropCard>
            <PropCard label='marginY="spacious" (↑ ↓)'>
              <div
                style={{
                  backgroundColor: STORY_COLORS.axis.y.light,
                  padding: '16px',
                  borderRadius: '8px',
                  border: `2px dashed ${STORY_COLORS.axis.y.main}`,
                  minHeight: '160px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MarginVisualizer color={STORY_COLORS.axis.y.main} showLabel label="32px">
                  <Box
                    marginY="spacious"
                    padding="comfortable"
                    background="warning"
                    borderRadius="default"
                    style={{
                      backgroundColor: STORY_COLORS.axis.y.main,
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: '14px',
                    }}
                  >
                    ↑ Vertical margin ↓
                  </Box>
                </MarginVisualizer>
              </div>
            </PropCard>
            <PropCard label="marginX + marginY">
              <div
                style={{
                  backgroundColor: STORY_COLORS.axis.combined.light,
                  padding: '16px',
                  borderRadius: '8px',
                  border: `2px dashed ${STORY_COLORS.axis.combined.main}`,
                  minHeight: '160px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MarginVisualizer color={STORY_COLORS.axis.combined.main} showLabel label="X:32px Y:24px">
                  <Box
                    marginX="spacious"
                    marginY="comfortable"
                    padding="comfortable"
                    background="success"
                    borderRadius="default"
                    style={{
                      backgroundColor: STORY_COLORS.axis.combined.main,
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                      fontSize: '14px',
                    }}
                  >
                    Combined margins
                  </Box>
                </MarginVisualizer>
              </div>
            </PropCard>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('marginX')} language="jsx" title="JSX" subtitle="marginX" />
        </div>
      </StoryContainer>
    );
  },
};

/**
 * ## Props: Individual Margin Sides
 *
 * Precise control over each side's margin.
 * Colored containers show the spacing area.
 */
export const PropMarginIndividual: Story = {
  render: () => {
    const generateCode = (prop: string): string => {
      return `<Box ${prop}="spacious" padding="comfortable" background="surface">
  Content
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { prop: 'marginTop', label: 'Top ↓', ...STORY_COLORS.directional.top },
              { prop: 'marginRight', label: 'Right ←', ...STORY_COLORS.directional.right },
              { prop: 'marginBottom', label: 'Bottom ↑', ...STORY_COLORS.directional.bottom },
              { prop: 'marginLeft', label: 'Left →', ...STORY_COLORS.directional.left },
            ].map(({ prop, label, main, light }) => (
              <PropCard key={prop} label={`${prop}="spacious"`}>
                <div
                  style={{
                    backgroundColor: light,
                    borderRadius: '8px',
                    padding: '4px',
                    border: `2px dashed ${main}`,
                    minHeight: '140px',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MarginVisualizer color={main} showLabel label="32px">
                    <Box
                      {...{ [prop]: 'spacious' }}
                      padding="comfortable"
                      background="surface"
                      borderRadius="default"
                      style={{
                        backgroundColor: main,
                        color: 'white',
                        fontSize: '13px',
                        fontWeight: 600,
                        textAlign: 'center',
                        minWidth: '80px',
                      }}
                    >
                      {label}
                    </Box>
                  </MarginVisualizer>
                </div>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('marginTop')} language="jsx" title="JSX" subtitle='marginTop="spacious"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: BACKGROUND
// ============================================

/**
 * ## Prop: `background`
 *
 * Applies semantic background colors to the Box.
 */
export const PropBackground: Story = {
  render: () => {
    {
      /* 
      💡 TOKEN EDUCATION: Semantic Background Colors
      
      Box background uses semantic UI tokens that adapt to themes:
      
      - background="page" → STORY_COLORS.themed.background.page
        Main page background color
        
      - background="surface" → STORY_COLORS.themed.background.surface
        Elevated surfaces like cards and panels
        
      - background="success/error/warning/info" → Semantic state backgrounds
        Used for alerts, notifications, and status indicators
        
      - background="overlay" → var(--lufa-semantic-ui-overlay-backdrop)
        Semi-transparent modal/dialog backdrops
      
      ✅ Theme Adaptation:
      - Light mode: Light backgrounds, dark text
      - Dark mode: Dark backgrounds, light text  
      - High-contrast: Maximum contrast for accessibility
      
      Try switching themes to see automatic color adaptation!
    */
    }

    const generateCode = (bg: string): string => {
      return `<Box padding="comfortable" background="${bg}" borderRadius="default">
  ${bg}
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {(
              [
                'page',
                'surface',
                'success',
                'error',
                'warning',
                'info',
                'overlay',
                'on-primary',
                'on-secondary',
                'on-success',
                'on-error',
                'on-warning',
                'on-info',
              ] as const
            ).map((value) => (
              <PropCard key={value} label={`background="${value}"`}>
                <Box
                  padding="comfortable"
                  background={value}
                  borderRadius="default"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80px',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  {value}
                </Box>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('surface')} language="jsx" title="JSX" subtitle='background="surface"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: BORDER RADIUS
// ============================================

/**
 * ## Prop: `borderRadius`
 *
 * Controls the roundness of the Box's corners.
 */
export const PropBorderRadius: Story = {
  render: () => {
    const generateCode = (radius: string): string => {
      return `<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="medium" 
  borderRadius="${radius}"
>
  Content
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '24px' }}>
            {(['none', 'small', 'default', 'medium', 'large', 'full'] as const).map((value) => (
              <PropCard key={value} label={`borderRadius="${value}"`}>
                <Box
                  padding="comfortable"
                  background="surface"
                  borderWidth="medium"
                  borderColor="default"
                  borderRadius={value}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100px',
                    fontSize: '32px',
                    ...(value === 'full' ? { width: '100px', height: '100px', margin: '0 auto' } : {}),
                  }}
                >
                  ◻️
                </Box>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('default')} language="jsx" title="JSX" subtitle='borderRadius="default"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: BORDER WIDTH
// ============================================

/**
 * ## Prop: `borderWidth`
 *
 * Controls the thickness of the Box's border.
 */
export const PropBorderWidth: Story = {
  render: () => {
    const generateCode = (width: string): string => {
      return `<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="${width}" 
  borderColor="default"
>
  ${width}
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {(['none', 'thin', 'medium', 'thick'] as const).map((value) => (
              <PropCard key={value} label={`borderWidth="${value}"`}>
                <Box
                  padding="comfortable"
                  background="surface"
                  borderWidth={value}
                  borderColor="default"
                  borderRadius="default"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {value}
                </Box>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('medium')} language="jsx" title="JSX" subtitle='borderWidth="medium"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: BORDER COLOR
// ============================================

/**
 * ## Prop: `borderColor`
 *
 * Controls the color of the Box's border.
 */
export const PropBorderColor: Story = {
  render: () => {
    const generateCode = (color: string): string => {
      return `<Box 
  padding="comfortable" 
  background="surface" 
  borderWidth="thick" 
  borderColor="${color}"
>
  ${color}
</Box>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
            {(['default', 'strong', 'success', 'error', 'warning', 'info'] as const).map((value) => (
              <PropCard key={value} label={`borderColor="${value}"`}>
                <Box
                  padding="comfortable"
                  background="surface"
                  borderWidth="thick"
                  borderColor={value}
                  borderRadius="default"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '90px',
                    fontSize: '28px',
                  }}
                >
                  {value === 'success'
                    ? '✓'
                    : value === 'error'
                      ? '✕'
                      : value === 'warning'
                        ? '⚠'
                        : value === 'info'
                          ? 'ℹ'
                          : '▪'}
                </Box>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('default')} language="jsx" title="JSX" subtitle='borderColor="default"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: DISPLAY
// ============================================

/**
 * ## Prop: `display`
 *
 * Controls the CSS display property of the Box.
 */
export const PropDisplay: Story = {
  render: () => {
    const generateCode = (display: string): string => {
      if (display === 'block') {
        return `<Box display="block" padding="default" background="info">
  Block content (takes full width)
</Box>`;
      } else if (display === 'inline-block') {
        return `Text before <Box display="inline-block" padding="compact" background="success">
  inline-block
</Box> text after`;
      } else if (display === 'flex') {
        return `<Box display="flex" padding="default" background="surface" style={{ gap: '12px' }}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Box>`;
      } else {
        return `<Box display="grid" padding="default" background="surface" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</Box>`;
      }
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Examples */}
          <PropCard label='display="block"'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Box
                display="block"
                padding="default"
                borderRadius="default"
                style={{
                  backgroundColor: STORY_COLORS.primary.blue.main,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                Block 1 (takes full width)
              </Box>
              <Box
                display="block"
                padding="default"
                borderRadius="default"
                style={{
                  backgroundColor: STORY_COLORS.primary.violet.main,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                Block 2 (takes full width)
              </Box>
            </div>
          </PropCard>
          <PropCard label='display="inline-block"'>
            <div style={{ fontSize: '14px' }}>
              Text before{' '}
              <Box
                display="inline-block"
                padding="compact"
                borderRadius="default"
                style={{
                  backgroundColor: STORY_COLORS.primary.green.main,
                  verticalAlign: 'middle',
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                inline-block
              </Box>{' '}
              text after
            </div>
          </PropCard>
          <PropCard label='display="flex"'>
            <Box
              display="flex"
              padding="default"
              background="surface"
              borderWidth="thin"
              borderRadius="default"
              style={{ gap: '12px' }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: '20px',
                    backgroundColor: STORY_COLORS.primary.pink.main,
                    borderRadius: '6px',
                    flex: 1,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  Item {i}
                </div>
              ))}
            </Box>
          </PropCard>
          <PropCard label='display="grid"'>
            <Box
              display="grid"
              padding="default"
              background="surface"
              borderWidth="thin"
              borderRadius="default"
              style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: '20px',
                    backgroundColor: STORY_COLORS.primary.orange.main,
                    borderRadius: '6px',
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {i}
                </div>
              ))}
            </Box>
          </PropCard>

          {/* Code block */}
          <CodeBlock code={generateCode('block')} language="jsx" title="JSX" subtitle='display="block"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// RESPONSIVE VISIBILITY
// ============================================

/**
 * ## Responsive Visibility
 *
 * Control element visibility at different viewport breakpoints using `show`, `hide`, `hideFrom`, and `showFrom` props.
 *
 * **How to test:**
 * - Resize your browser window or use DevTools responsive mode
 * - Or use the viewport controls in Storybook toolbar
 * - Watch boxes appear/disappear at different breakpoints
 *
 * **Breakpoints:**
 * - xs: 320px (mobile portrait)
 * - sm: 640px (mobile landscape)
 * - md: 768px (tablet portrait)
 * - lg: 1024px (tablet landscape / desktop)
 * - xl: 1280px (desktop)
 * - 2xl: 1536px (large desktop)
 */
export const ResponsiveVisibility: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Instruction banner */}
          <Box
            padding="comfortable"
            background="info"
            borderRadius="default"
            style={{
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            📐 <strong>Resize your browser window</strong> or use DevTools responsive mode to see boxes appear/disappear
          </Box>

          {/* Example 1: hideFrom prop */}
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>
              1. hideFrom prop - Hide from breakpoint and up
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <PropCard label='hideFrom="md" - Hidden from tablet+'>
                <Box
                  hideFrom="md"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.green.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  📱 Mobile/Small only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: &lt; 768px</div>
                </Box>
              </PropCard>

              <PropCard label='hideFrom="lg" - Hidden from desktop+'>
                <Box
                  hideFrom="lg"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.blue.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  📱📟 Mobile/Tablet only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: &lt; 1024px</div>
                </Box>
              </PropCard>

              <PropCard label='hideFrom="sm" - Hidden from mobile landscape+'>
                <Box
                  hideFrom="sm"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.orange.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  📱 Tiny screens only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: &lt; 640px</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{ marginTop: '16px' }}>
              <CodeBlock
                code={`// Hidden from md (768px) and up
<Box hideFrom="md">Mobile/Small only</Box>

// Hidden from lg (1024px) and up
<Box hideFrom="lg">Mobile/Tablet only</Box>

// Hidden from sm (640px) and up
<Box hideFrom="sm">Tiny screens only</Box>`}
                language="tsx"
                title="hideFrom examples"
              />
            </div>
          </div>

          {/* Example 2: showFrom prop */}
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>
              2. showFrom prop - Show from breakpoint and up
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <PropCard label='showFrom="md" - Visible from tablet+'>
                <Box
                  showFrom="md"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.violet.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  💻 Tablet+ only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: ≥ 768px</div>
                </Box>
              </PropCard>

              <PropCard label='showFrom="lg" - Visible from desktop+'>
                <Box
                  showFrom="lg"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.pink.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  💻 Desktop+ only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: ≥ 1024px</div>
                </Box>
              </PropCard>

              <PropCard label='showFrom="xl" - Visible from large desktop+'>
                <Box
                  showFrom="xl"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.cyan.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  🖥️ Large desktop+ only
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>Visible: ≥ 1280px</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{ marginTop: '16px' }}>
              <CodeBlock
                code={`// Visible from md (768px) and up
<Box showFrom="md">Tablet+ only</Box>

// Visible from lg (1024px) and up
<Box showFrom="lg">Desktop+ only</Box>

// Visible from xl (1280px) and up
<Box showFrom="xl">Large desktop+ only</Box>`}
                language="tsx"
                title="showFrom examples"
              />
            </div>
          </div>

          {/* Example 3: Responsive navigation pattern */}
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>
              3. Real-world: Responsive Navigation
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <PropCard label="Mobile menu button (hidden on desktop)">
                <Box
                  hideFrom="md"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.themed.text.primary,
                    color: STORY_COLORS.themed.text.inverse,
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  ☰ Mobile Menu
                </Box>
              </PropCard>

              <PropCard label="Desktop navigation (hidden on mobile)">
                <Box
                  showFrom="md"
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.themed.text.primary,
                    color: STORY_COLORS.themed.text.inverse,
                    display: 'flex',
                    gap: '24px',
                    justifyContent: 'center',
                    fontWeight: 600,
                  }}
                >
                  <span>Home</span>
                  <span>About</span>
                  <span>Products</span>
                  <span>Contact</span>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{ marginTop: '16px' }}>
              <CodeBlock
                code={`// Mobile menu button (hidden on desktop)
<Box hideFrom="md">
  <Button>☰ Menu</Button>
</Box>

// Desktop navigation (hidden on mobile)
<Box showFrom="md">
  <nav>
    <Link>Home</Link>
    <Link>About</Link>
    <Link>Products</Link>
    <Link>Contact</Link>
  </nav>
</Box>`}
                language="tsx"
                title="Responsive navigation pattern"
              />
            </div>
          </div>

          {/* Example 4: Responsive object syntax */}
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>
              4. Advanced: Responsive Object Syntax
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              <PropCard label="show={{ base: true, md: false }}">
                <Box
                  show={{ base: true, md: false }}
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.green.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  📱 Show on mobile
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>(hide on tablet+)</div>
                </Box>
              </PropCard>

              <PropCard label="show={{ base: false, md: true }}">
                <Box
                  show={{ base: false, md: true }}
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.violet.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  💻 Show on tablet+
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>(hide on mobile)</div>
                </Box>
              </PropCard>

              <PropCard label="show={{ base: true, md: false, lg: true }}">
                <Box
                  show={{ base: true, md: false, lg: true }}
                  padding="comfortable"
                  borderRadius="default"
                  style={{
                    backgroundColor: STORY_COLORS.primary.pink.main,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  📱💻 Mobile + Desktop
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>(hide on tablet)</div>
                </Box>
              </PropCard>
            </div>

            {/* Code example */}
            <div style={{ marginTop: '16px' }}>
              <CodeBlock
                code={`// Visible on mobile, hidden on tablet+
<Box show={{ base: true, md: false }}>
  Mobile only
</Box>

// Hidden on mobile, visible on tablet+
<Box show={{ base: false, md: true }}>
  Tablet+ only
</Box>

// Visible on mobile and desktop, hidden on tablet
<Box show={{ base: true, md: false, lg: true }}>
  Mobile + Desktop (skip tablet)
</Box>`}
                language="tsx"
                title="Responsive object syntax"
              />
            </div>
          </div>

          {/* Breakpoint reference */}
          <Box padding="comfortable" background="surface" borderWidth="thin" borderRadius="default">
            <h4 style={{ marginTop: 0, marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>
              📐 Breakpoint Reference
            </h4>
            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
              <div>
                <strong>xs</strong>: 320px (mobile portrait)
              </div>
              <div>
                <strong>sm</strong>: 640px (mobile landscape)
              </div>
              <div>
                <strong>md</strong>: 768px (tablet portrait)
              </div>
              <div>
                <strong>lg</strong>: 1024px (tablet landscape / desktop)
              </div>
              <div>
                <strong>xl</strong>: 1280px (desktop)
              </div>
              <div>
                <strong>2xl</strong>: 1536px (large desktop)
              </div>
            </div>
          </Box>
        </div>
      </StoryContainer>
    );
  },
};
