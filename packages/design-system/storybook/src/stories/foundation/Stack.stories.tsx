import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { getColorByIndex, STORY_COLORS } from '../../constants/storyColors';

/**
 * Stack - Flexible Layout Primitive for Spacing
 *
 * A specialized layout component that automatically manages spacing between
 * child elements using Flexbox gap property.
 *
 * ## Features
 * - ✅ Direction control (vertical/horizontal)
 * - ✅ Gap-based spacing (semantic tokens)
 * - ✅ Flexbox alignment (align-items and justify-content)
 * - ✅ Flex wrap support for responsive layouts
 * - ✅ Polymorphic `as` prop for semantic HTML
 * - ✅ Performance-optimized (CSS classes, not inline styles)
 */
const meta = {
  title: '4. Foundation/Stack',
  component: Stack,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    // Polymorphic
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside', 'ul', 'ol'],
      description: 'HTML element to render',
      table: {
        category: 'Polymorphic',
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'div' },
      },
    },

    // Layout
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction (flex-direction)',
      table: {
        category: 'Layout',
        type: { summary: 'DirectionValue' },
        defaultValue: { summary: 'vertical' },
      },
    },
    spacing: {
      control: 'select',
      options: ['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Spacing between children (gap)',
      table: {
        category: 'Layout',
        type: { summary: 'SpacingValue' },
        defaultValue: { summary: 'default' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment (align-items)',
      table: {
        category: 'Layout',
        type: { summary: 'AlignValue' },
        defaultValue: { summary: 'stretch' },
      },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Main-axis justification (justify-content)',
      table: {
        category: 'Layout',
        type: { summary: 'JustifyValue' },
        defaultValue: { summary: 'start' },
      },
    },
    wrap: {
      control: 'boolean',
      description: 'Whether to wrap children (flex-wrap)',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    grow: {
      control: 'boolean',
      description: 'Makes the Stack fill all available space in its parent (flex: 1 1 auto + height: 100%)',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// PLAYGROUND
// ============================================

/**
 * ## Playground
 *
 * Interactive playground to experiment with all Stack props.
 */
export const Playground: Story = {
  args: {
    direction: 'vertical',
    spacing: 'default',
    align: 'stretch',
    justify: 'start',
    wrap: false,
  },
  render: (args) => {
    return (
      <StoryContainer>
        <Stack {...args}>
          <div
            style={{
              padding: '16px',
              background: STORY_COLORS.primary.blue.main,
              color: STORY_COLORS.neutral.white,
              borderRadius: '8px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: '16px',
              background: STORY_COLORS.primary.violet.main,
              color: STORY_COLORS.neutral.white,
              borderRadius: '8px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: '16px',
              background: STORY_COLORS.primary.pink.main,
              color: STORY_COLORS.neutral.white,
              borderRadius: '8px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Item 3
          </div>
        </Stack>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: DIRECTION
// ============================================

/**
 * ## Prop: `direction`
 *
 * Controls the layout direction (vertical or horizontal).
 */
export const PropDirection: Story = {
  render: () => {
    const generateCode = (direction: string): string => {
      return `<Stack direction="${direction}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            <PropCard label='direction="vertical"'>
              <Stack direction="vertical" spacing="default">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      padding: '16px',
                      background: getColorByIndex(i - 1).main,
                      color: STORY_COLORS.neutral.white,
                      borderRadius: '8px',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    Item {i}
                  </div>
                ))}
              </Stack>
            </PropCard>
            <PropCard label='direction="horizontal"'>
              <Stack direction="horizontal" spacing="default">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      padding: '16px',
                      background: getColorByIndex(i - 1).main,
                      color: STORY_COLORS.neutral.white,
                      borderRadius: '8px',
                      fontWeight: 600,
                      textAlign: 'center',
                      minWidth: '80px',
                    }}
                  >
                    Item {i}
                  </div>
                ))}
              </Stack>
            </PropCard>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('vertical')} language="jsx" title="JSX" subtitle='direction="vertical"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: SPACING
// ============================================

/**
 * ## Prop: `spacing`
 *
 * Controls the gap between child elements.
 */
export const PropSpacing: Story = {
  render: () => {
    const spacingValues = [
      { value: 'none' as const, size: '4px', color: STORY_COLORS.themed.border.default },
      { value: 'tight' as const, size: '4px', color: STORY_COLORS.primary.cyan.main },
      { value: 'compact' as const, size: '8px', color: STORY_COLORS.primary.green.main },
      { value: 'default' as const, size: '16px', color: STORY_COLORS.primary.blue.main },
      { value: 'comfortable' as const, size: '24px', color: STORY_COLORS.primary.violet.main },
      { value: 'spacious' as const, size: '32px', color: STORY_COLORS.primary.pink.main },
    ];

    const generateCode = (spacing: string): string => {
      return `<Stack spacing="${spacing}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
            {spacingValues.map(({ value, size, color }) => (
              <PropCard key={value} label={`spacing="${value}" (${size})`}>
                <Stack spacing={value}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px',
                        background: color,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      Item {i}
                    </div>
                  ))}
                </Stack>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('default')} language="jsx" title="JSX" subtitle='spacing="default"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: ALIGN
// ============================================

/**
 * ## Prop: `align`
 *
 * Controls cross-axis alignment of children.
 */
export const PropAlign: Story = {
  render: () => {
    const alignValues = ['start', 'center', 'end', 'stretch', 'baseline'] as const;

    const generateCode = (align: string): string => {
      return `<Stack direction="horizontal" align="${align}" spacing="default">
  <div style={{ height: '40px' }}>Item 1</div>
  <div style={{ height: '60px' }}>Item 2</div>
  <div style={{ height: '50px' }}>Item 3</div>
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {alignValues.map((value) => (
              <PropCard key={value} label={`align="${value}"`}>
                <div style={{ border: `2px dashed ${STORY_COLORS.themed.border.default}`, padding: '8px' }}>
                  <Stack direction="horizontal" align={value} spacing="default">
                    <div
                      style={{
                        padding: '12px',
                        background: STORY_COLORS.primary.blue.main,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontWeight: 600,
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      40px
                    </div>
                    <div
                      style={{
                        padding: '12px',
                        background: STORY_COLORS.primary.violet.main,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontWeight: 600,
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      60px
                    </div>
                    <div
                      style={{
                        padding: '12px',
                        background: STORY_COLORS.primary.pink.main,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontWeight: 600,
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      50px
                    </div>
                  </Stack>
                </div>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('stretch')} language="jsx" title="JSX" subtitle='align="stretch"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: JUSTIFY
// ============================================

/**
 * ## Prop: `justify`
 *
 * Controls main-axis justification of children.
 */
export const PropJustify: Story = {
  render: () => {
    const justifyValues = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] as const;

    const generateCode = (justify: string): string => {
      return `<Stack direction="horizontal" justify="${justify}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {justifyValues.map((value, idx) => (
              <PropCard key={value} label={`justify="${value}"`}>
                <div style={{ border: `2px dashed ${STORY_COLORS.themed.border.default}`, padding: '8px' }}>
                  <Stack
                    direction="horizontal"
                    justify={value}
                    spacing={value.startsWith('space') ? 'none' : 'default'}
                  >
                    {[1, 2, 3].map((i) => {
                      const color = getColorByIndex(idx);
                      return (
                        <div
                          key={i}
                          style={{
                            padding: '12px 16px',
                            background: color.main,
                            color: STORY_COLORS.neutral.white,
                            borderRadius: '6px',
                            fontWeight: 600,
                            fontSize: '13px',
                          }}
                        >
                          {i}
                        </div>
                      );
                    })}
                  </Stack>
                </div>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('start')} language="jsx" title="JSX" subtitle='justify="start"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: WRAP
// ============================================

/**
 * ## Prop: `wrap`
 *
 * Controls whether children wrap to new lines when overflowing.
 */
export const PropWrap: Story = {
  render: () => {
    const generateCode = (wrap: boolean): string => {
      return `<Stack direction="horizontal" wrap={${wrap}} spacing="default">
  {items.map(item => <Card key={item.id} />)}
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Examples */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <PropCard label="wrap={false} (default)">
              <div
                style={{ border: `2px dashed ${STORY_COLORS.themed.border.default}`, padding: '8px', width: '100%' }}
              >
                <Stack direction="horizontal" wrap={false} spacing="default">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 16px',
                        background: getColorByIndex(i - 1).main,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Item {i}
                    </div>
                  ))}
                </Stack>
              </div>
            </PropCard>
            <PropCard label="wrap={true}">
              <div
                style={{ border: `2px dashed ${STORY_COLORS.themed.border.default}`, padding: '8px', width: '100%' }}
              >
                <Stack direction="horizontal" wrap spacing="default">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: '12px 16px',
                        background: getColorByIndex(i - 1).main,
                        color: STORY_COLORS.neutral.white,
                        borderRadius: '6px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Item {i}
                    </div>
                  ))}
                </Stack>
              </div>
            </PropCard>
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode(false)} language="jsx" title="JSX" subtitle="nowrap" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: GROW
// ============================================

/**
 * ## Prop: `grow`
 *
 * When `true`, the Stack fills all available space in its parent container.
 * Applies `flex: 1 1 auto`, `height: 100%`, and `min-height: 0`.
 *
 * Useful when Stack is placed inside a height-constrained container such as
 * a CSS grid cell, a Card, or a modal with `max-height`.
 */
export const PropGrow: Story = {
  render: () => {
    const growCode = `// ✅ With grow prop — no className workaround needed
<Stack direction="vertical" spacing="default" grow>
  <div>Header</div>
  <div style={{ flex: 1 }}>Content</div>
  <div>Footer pinned to bottom</div>
</Stack>

// ❌ Workaround needed today
<Stack direction="vertical" spacing="default" className={styles['my-stack']}>
  ...
</Stack>
// .my-stack { height: 100%; }`;

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            {/* Without grow */}
            <PropCard label="grow={false} (default)">
              <div
                style={{
                  height: '200px',
                  border: `2px dashed ${STORY_COLORS.themed.border.default}`,
                  padding: '8px',
                  display: 'flex',
                }}
              >
                <Stack direction="vertical" spacing="compact">
                  <div
                    style={{
                      padding: '8px 12px',
                      background: STORY_COLORS.primary.blue.main,
                      color: STORY_COLORS.neutral.white,
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}
                  >
                    Header
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      background: STORY_COLORS.themed.background.surface,
                      borderRadius: '6px',
                    }}
                  >
                    Content (doesn't fill)
                  </div>
                </Stack>
              </div>
            </PropCard>

            {/* With grow */}
            <PropCard label="grow={true}">
              <div
                style={{
                  height: '200px',
                  border: `2px dashed ${STORY_COLORS.themed.border.default}`,
                  padding: '8px',
                  display: 'flex',
                }}
              >
                <Stack direction="vertical" spacing="compact" grow>
                  <div
                    style={{
                      padding: '8px 12px',
                      background: STORY_COLORS.primary.violet.main,
                      color: STORY_COLORS.neutral.white,
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}
                  >
                    Header
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      background: STORY_COLORS.themed.background.surface,
                      borderRadius: '6px',
                      flex: 1,
                    }}
                  >
                    Content fills height ✓
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      background: STORY_COLORS.primary.pink.main,
                      color: STORY_COLORS.neutral.white,
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}
                  >
                    Footer pinned ✓
                  </div>
                </Stack>
              </div>
            </PropCard>
          </div>

          <CodeBlock code={growCode} language="jsx" title="JSX" subtitle="grow" />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// PROP: AS (Polymorphic)
// ============================================

/**
 * ## Prop: `as`
 *
 * Renders Stack as different HTML elements for semantic markup.
 */
export const PropAs: Story = {
  render: () => {
    const generateCode = (element: string): string => {
      return `<Stack as="${element}" spacing="default">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`;
    };

    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Grid of examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {(['div', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'] as const).map((element) => (
              <PropCard key={element} label={`<${element}>`}>
                <Stack
                  as={element}
                  spacing="compact"
                  style={{
                    padding: '16px',
                    background: STORY_COLORS.themed.background.surface,
                    borderRadius: '8px',
                    border: `2px solid ${STORY_COLORS.themed.border.default}`,
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      background: STORY_COLORS.themed.background.surface,
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {element}
                  </div>
                </Stack>
              </PropCard>
            ))}
          </div>

          {/* Code block */}
          <CodeBlock code={generateCode('div')} language="jsx" title="JSX" subtitle='as="div"' />
        </div>
      </StoryContainer>
    );
  },
};

// ============================================
// COMBINED VARIANTS
// ============================================

/**
 * ## Combined Variants
 *
 * Real-world examples combining multiple props.
 */
export const CombinedVariants: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Example 1: Vertical Form Layout */}
          <section>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Vertical Form Layout</h3>
            <Stack spacing="comfortable">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600 }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: `1px solid ${STORY_COLORS.themed.border.default}`,
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600 }}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: `1px solid ${STORY_COLORS.themed.border.default}`,
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600 }}>Message</label>
                <textarea
                  placeholder="Your message"
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: `1px solid ${STORY_COLORS.themed.border.default}`,
                    minHeight: '80px',
                  }}
                />
              </div>
            </Stack>
          </section>

          {/* Example 2: Horizontal Navigation */}
          <section>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Horizontal Navigation</h3>
            <Stack
              direction="horizontal"
              spacing="comfortable"
              align="center"
              justify="space-between"
              style={{ padding: '16px', background: STORY_COLORS.themed.background.surface, borderRadius: '8px' }}
            >
              <div style={{ fontSize: '18px', fontWeight: 700 }}>Logo</div>
              <Stack direction="horizontal" spacing="default" align="center">
                <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                  Home
                </a>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                  About
                </a>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                  Services
                </a>
                <a href="#" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                  Contact
                </a>
              </Stack>
            </Stack>
          </section>

          {/* Example 3: Card Grid */}
          <section>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Responsive Card Grid</h3>
            <Stack direction="horizontal" spacing="default" wrap justify="start">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px',
                    background: getColorByIndex(i - 1).main,
                    color: STORY_COLORS.neutral.white,
                    borderRadius: '12px',
                    fontWeight: 600,
                    minWidth: '150px',
                    textAlign: 'center',
                  }}
                >
                  Card {i}
                </div>
              ))}
            </Stack>
          </section>

          {/* Example 4: Button Group */}
          <section>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Button Group</h3>
            <Stack direction="horizontal" spacing="compact" align="center">
              <button
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  background: STORY_COLORS.primary.blue.main,
                  color: STORY_COLORS.neutral.white,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Primary
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: `1px solid ${STORY_COLORS.primary.blue.main}`,
                  background: STORY_COLORS.themed.background.surface,
                  color: STORY_COLORS.primary.blue.main,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Secondary
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: `1px solid ${STORY_COLORS.themed.border.default}`,
                  background: STORY_COLORS.themed.background.surface,
                  color: STORY_COLORS.themed.text.secondary,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </Stack>
          </section>
        </div>
      </StoryContainer>
    );
  },
};
