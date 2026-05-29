# Story Helpers

Reusable components for Lufa Design System Storybook stories.

## 📦 Available Components

### `StoryContainer`

Wrapper for stories using `fullscreen` layout. Provides appropriate spacing and max-width constraint for better readability.

**Props:**

- `children: React.ReactNode` - Story content

**Usage:**

```tsx
import { StoryContainer } from '../../components/helpers';

export const MyStory: Story = {
  render: () => (
    <StoryContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {/* Your grid items */}
      </div>
    </StoryContainer>
  ),
};
```

**When to use:**

- ✅ Stories with `fullscreen` layout in parameters
- ✅ Stories using grids or horizontal layouts
- ✅ Stories needing max-width for readability

**Applied styles:**

- `padding: 40px` - Spacing around content
- `maxWidth: 1400px` - Max width for readability
- `margin: 0 auto` - Horizontal centering
- `width: 100%` - Uses full available width

---

### `PlaygroundContainer`

Enhanced container for Playground stories with visual context and interactive toggles. **New!** ⭐

**Props:**

- `children: React.ReactNode` - Component to test (usually with spread props)
- `defaultShowGrid?: boolean` - Initial grid state (default: `true`)
- `defaultShowAdjacentElements?: boolean` - Initial adjacent elements state (default: `false`)

**Usage:**

```tsx
import { PlaygroundContainer } from '../../components/helpers';

export const Playground: Story = {
  args: { padding: 'comfortable', background: 'info' },
  render: (args) => (
    <PlaygroundContainer defaultShowGrid={true} defaultShowAdjacentElements={false}>
      <Box {...args}>{args.children}</Box>
    </PlaygroundContainer>
  ),
};
```

**Features:**

1. 🎯 **Container with dashed border** - Visualizes margins
2. 📐 **Guide grid** - Lines + center cross (toggleable)
3. 📦 **4-direction adjacent elements** - "Above", "Before", "After", "Below" (toggleable)
4. 🎛️ **UI toggles** - Checkboxes at top (not in controls)
5. ⚡ **No wrapper flex/grid** - Preserves `display` prop behavior

**When to use:**

- ✅ Layout components (Box, Stack, Flex, Grid)
- ✅ Playground stories where margins/spacing must be visible
- ✅ Components where display mode affects layout (`block`, `inline-block`, `inline`, `flex`, `grid`)
- ❌ Individual prop stories (use `StoryContainer` + `PropCard`)

**Advantages vs old pattern:**

- ✅ Toggles in UI (don't pollute component props)
- ✅ Reusable code (no duplication)
- ✅ Visual consistency across all Playgrounds
- ✅ Easy to propagate to other components
- ✅ 4 adjacent elements (Above/Before/After/Below) to test `display` correctly

---

### `PropCard`

Helper component to display individual prop examples with a label. Label is displayed BELOW content to guarantee perfect visual alignment, even if some labels wrap to multiple lines.

**Props:**

- `label: string` - Label text displayed BELOW content
- `children: React.ReactNode` - Component or elements to display

**Usage:**

```tsx
import { PropCard } from '../../components/helpers';

export const MyStory: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      <PropCard label='variant="primary"'>
        <Button variant="primary">Click me</Button>
      </PropCard>

      <PropCard label='variant="secondary"'>
        <Button variant="secondary">Click me</Button>
      </PropCard>
    </div>
  ),
};
```

**When to use:**

- ✅ Display component prop variants
- ✅ Individual examples with descriptive labels
- ✅ Prop comparison grids
- ✅ Static example groupings

**Visual effects:**

- Label: Uppercase, monospace, gray
- Container background: Transparent by default

---

### `PaddingVisualizer`

Helper component to visualize padding by providing a semi-transparent colored background that fills the padding space. **New!** ⭐

**Props:**

- `children: React.ReactNode` - Component with padding to visualize
- `color: string` - Background color for padding zone
- `opacity?: number` - Background opacity 0-1 (default: `0.15`)
- `showBorder?: boolean` - Show border around content (default: `false`)
- `showLabel?: boolean` - Show dimension label (default: `false`)
- `label?: string` - Label text (e.g., "32px", "Top: 32px")

**Usage:**

```tsx
import { PaddingVisualizer } from '../../components/helpers';

export const PropPaddingIndividual: Story = {
  render: () => {
    return (
      <StoryContainer>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {[
            { prop: 'paddingTop', label: 'Top ↓', color: '#3b82f6' },
            { prop: 'paddingRight', label: 'Right ←', color: '#8b5cf6' },
            { prop: 'paddingBottom', label: 'Bottom ↑', color: '#ec4899' },
            { prop: 'paddingLeft', label: 'Left →', color: '#f59e0b' },
          ].map(({ prop, label, color }) => (
            <PropCard key={prop} label={`${prop}="spacious"`}>
              <PaddingVisualizer color={color} showLabel label="32px" opacity={0.2}>
                <Box
                  {...{ [prop]: 'spacious' }}
                  style={{
                    backgroundColor: color,
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {label}
                </Box>
              </PaddingVisualizer>
            </PropCard>
          ))}
        </div>
      </StoryContainer>
    );
  },
};
```

**How it works:**

1. 🎯 **Container with background** - Wraps Box with padding
2. 🎨 **Semi-transparent colored background** - Fills padding zone
3. 📏 **Padding "pushes"** - Padding space is colored, content stays intact
4. 🏷️ **Optional label** - Displays padding dimension

**When to use:**

- ✅ Stories for `padding`, `paddingX`, `paddingY`, `paddingTop`, etc. props
- ✅ Visualize different padding values (tight, compact, default, etc.)
- ✅ Show how padding creates space inside elements
- ❌ Props other than padding (margin, border, etc.)

**Advantages:**

- ✅ Semi-transparent background makes padding immediately visible
- ✅ Configurable (color, opacity, border)
- ✅ Optional label to display dimension
- ✅ Reusable and consistent with MarginVisualizer
- ✅ Optional border to delimit content

**Visual example:**

```
┌─────────────────────────────────────────┐
│ PaddingVisualizer (semi-transparent blue)│ ← Colored background
│   ╔═════════════════════════════════╗   │
│   ║  [32px label]                   ║   │
│   ║  ┌───────────────────────────┐  ║   │
│   ║  │                           │  ║   │
│   ║  │  Box Content (dark blue)  │  ║   │ ← Box content
│   ║  │                           │  ║   │
│   ║  └───────────────────────────┘  ║   │
│   ╚═════════════════════════════════╝   │
│          ↑ Visible padding              │
└─────────────────────────────────────────┘
```

**Difference with MarginVisualizer:**

- **MarginVisualizer**: Visualizes space AROUND Box (external)
- **PaddingVisualizer**: Visualizes space INSIDE Box (internal)

---

### `MarginVisualizer`

Helper component to visualize margins by providing a colored background that fits exactly the content (Box + its margin). **New!** ⭐

**Props:**

- `children: React.ReactNode` - Component with margin to visualize
- `color?: string` - Background color (default: `'#3b82f6'` blue)
- `opacity?: number` - Background opacity 0-1 (default: `0.12`)
- `borderColor?: string` - Border color (default: color with 50% opacity)
- `borderWidth?: number` - Border width in pixels (default: `2`)
- `borderRadius?: number` - Border radius in pixels (default: `6`)
- `showLabel?: boolean` - Show dimension label (default: `false`)
- `label?: string` - Label text (e.g., "32px")

**Usage:**

```tsx
import { MarginVisualizer } from '../../components/helpers';

export const PropMargin: Story = {
  render: () => {
    const marginValues = ['none', 'tight', 'compact', 'default', 'comfortable', 'spacious'];

    return (
      <StoryContainer>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {marginValues.map((value) => (
            <PropCard key={value} label={`margin="${value}"`}>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
                <MarginVisualizer color="#3b82f6" showLabel label="32px">
                  <Box margin={value} padding="default" background="primary">
                    Box
                  </Box>
                </MarginVisualizer>
              </div>
            </PropCard>
          ))}
        </div>
      </StoryContainer>
    );
  },
};
```

**How it works:**

1. 🎯 **`display: inline-block`** - Container fits natural content size
2. 🎨 **Colored background** - Makes margin zone visible
3. 📏 **Margin "pushes"** - Margin space is visually distinct
4. 🏷️ **Optional label** - Displays margin dimension

**When to use:**

- ✅ Stories for `margin`, `marginX`, `marginY`, `marginTop`, etc. props
- ✅ Visualize different margin values (tight, compact, default, etc.)
- ✅ Show how margin creates space around elements
- ❌ Props other than margin (padding, border, etc.)

**Advantages:**

- ✅ Fits exactly the content (no overflow on container padding)
- ✅ Colored background makes margin immediately visible
- ✅ Configurable (color, opacity, border)
- ✅ Optional label to display dimension
- ✅ Reusable and consistent

**Visual example:**

```
┌─────────────────────────────────┐
│ Container (light gray)          │
│   ┌─────────────────────────┐   │
│   │ MarginVisualizer (blue) │   │ ← Colored background fits content
│   │   ┌─────────────────┐   │   │
│   │   │                 │   │   │
│   │   │  Box (primary)  │   │   │ ← Box with its margin
│   │   │                 │   │   │
│   │   └─────────────────┘   │   │
│   │      [32px label]       │   │
│   └─────────────────────────┘   │
└─────────────────────────────────┘
```

---

### `CodeBlock`

Component to display formatted code with optional header. Supports tabs to switch between different code views (JSX, HTML, CSS, etc.).

**Props:**

- `code?: string` - Code content to display (if no tabs)
- `language?: string` - Programming language for context (jsx, html, css, etc.) - default: 'jsx'
- `title?: string` - Optional title displayed in header (ex: "Code", "Example")
- `subtitle?: string` - Optional subtitle displayed in header (ex: `<Box as="section">`)
- `emptyMessage?: string` - Message to display when code is empty - default: 'No code to display'
- `tabs?: Array<{ label: string; content: string; language?: string }>` - Tabs to switch between different views

**Usage:**

```tsx
import { CodeBlock } from '../../components/helpers';

// Example 1: Simple code
export const SimpleStory: Story = {
  render: () => <CodeBlock code="<Box padding='comfortable'>Content</Box>" language="jsx" title="JSX Code" />,
};

// Example 2: With JSX/HTML tabs (recommended!)
export const PropAsStory: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('div');

    const generateJsx = (element: string) => `<Box as="${element}">...</Box>`;
    const getHtml = () => document.querySelector('[data-background]')?.outerHTML || '';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Your examples here */}

        {/* Code block with tabs */}
        <CodeBlock
          tabs={[
            { label: 'JSX', content: generateJsx(selected), language: 'jsx' },
            { label: 'HTML', content: getHtml(), language: 'html' },
          ]}
          title="Code"
          subtitle={`<Box as="${selected}">`}
        />
      </div>
    );
  },
};
```

**When to use:**

- ✅ Display JSX source code of example
- ✅ Show rendered HTML of component
- ✅ Compare JSX source and rendered HTML (with tabs)
- ✅ Interactive stories with code that changes on hover/click
- ✅ Documentation of code patterns

**Styling:**

- 🎨 Dark background (#1e293b)
- 🔤 Monospace font
- 📏 Generous padding (20px)
- ✨ Border and shadow for depth
- 📱 Auto overflow (scroll if necessary)
- 🎯 Separate header with border-bottom
- 🔘 Interactive tabs (if provided) with hover states

---

## 🎨 Recommended Story Pattern

### For components with many props (Box, Button, etc.)

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import { YourComponent } from '@grasdouble/lufa_design-system';

import { PropCard, StoryContainer } from '../../components/helpers';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'fullscreen', // Important for StoryContainer
  },
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
};

// Story by property with grid layout
export const PropVariant: Story = {
  render: () => (
    <StoryContainer>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
          <PropCard key={variant} label={`variant="${variant}"`}>
            <YourComponent variant={variant}>Example</YourComponent>
          </PropCard>
        ))}
      </div>
    </StoryContainer>
  ),
};
```

---

## 📐 Recommended Grid Layouts

### For 4-6 items per line (small cards)

```tsx
display: 'grid',
gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
gap: '20px'
```

### For 3-4 items per line (medium cards)

```tsx
display: 'grid',
gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
gap: '24px'
```

### For 2-3 items per line (large cards)

```tsx
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
gap: '32px'
```

**Note:** Use `auto-fill` to create columns even when empty, `auto-fit` for existing items to take full available width.

---

## 🎯 Real Examples

See the following stories for usage examples:

- `stories/primitives/Box.stories.tsx` - Complete usage of StoryContainer and PropCard
- `stories/primitives/Text.stories.tsx` - Coming soon (will follow same pattern)
- `stories/primitives/Stack.stories.tsx` - Coming soon (will follow same pattern)

---

## 🚀 Advantages

**Without helpers (old pattern):**

```tsx
// ❌ Duplicated code in each story
export const MyStory: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', ... }}>
        <div style={{ fontSize: '11px', fontWeight: 600, ... }}>
          variant="primary"
        </div>
        <Button variant="primary">Click me</Button>
      </div>
    </div>
  ),
};
```

**With helpers (new pattern):**

```tsx
// ✅ Reusable, clean, maintainable code
export const MyStory: Story = {
  render: () => (
    <StoryContainer>
      <PropCard label='variant="primary"'>
        <Button variant="primary">Click me</Button>
      </PropCard>
    </StoryContainer>
  ),
};
```

---

## 🔄 Future Evolutions

Potential helpers to add:

- `TokenGrid` - For displaying token grids (colors, spacing, etc.)
- `VariantComparison` - For side-by-side variant comparison
- `ResponsiveContainer` - For testing responsive breakpoints

---

**Maintained by:** Design System Team  
**Last updated:** 2026-01-26
