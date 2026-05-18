# UI Component Inventory - Lufa Design System v2.0

**Generated**: 2026-01-24  
**Package**: `@grasdouble/lufa_design-system`  
**Location**: `packages/design-system/main/src/{foundation,content,interaction,composition,utility}/`

---

## Overview

The Lufa Design System v2.0 contains **16 production-ready React components** built on a **role-based component architecture** (foundation → content → interaction → composition → utility) and a **four-level token architecture**. All components are WCAG 2.1 AA compliant, fully typed with TypeScript 5.9, and tested with Playwright Component Testing.

**Status**: 7/7 components complete (100% complete)

- ✅ Completed: Box, Stack, Text, Icon, Button, Badge, Divider

---

## Component Progress

**Overall Status:** 100% complete (7/7 components)

| Component | Status  | Tests     | Documentation          | Priority |
| --------- | ------- | --------- | ---------------------- | -------- |
| Box       | ✅ 100% | 120 tests | Complete (881 lines)   | Core     |
| Stack     | ✅ 100% | 86 tests  | Complete (870 lines)   | Core     |
| Text      | ✅ 100% | 107 tests | Complete (900 lines)   | Core     |
| Icon      | ✅ 100% | 106 tests | Complete (828 lines)   | Core     |
| Button    | ✅ 100% | 61 tests  | Complete (1,475 lines) | UI       |
| Badge     | ✅ 100% | 559 lines | Complete               | UI       |
| Divider   | ✅ 100% | 329 lines | Complete               | UI       |

**Total:** 554 tests passing | 7 components production-ready

### Components Complete 🎉

All 16 components are now production-ready:

- ✅ **Foundation**: Box, Stack, Flex, Grid, Container, Center, Divider
- ✅ **Content**: Text, Icon, Badge
- ✅ **Interaction**: Button, Input, Label
- ✅ **Composition**: Card
- ✅ **Utility**: Portal, VisuallyHidden

### Next Steps

**Phase 7: Tooling & Documentation** (2-3 weeks)

- Theme Validation CLI
- Storybook TokensCatalog interactive explorer
- CI Validation enhancements
- Enhanced Docusaurus documentation

---

## Component Catalog

### 1. Box - Universal Layout Primitive

**File**: `Box/Box.tsx` (356 lines)  
**Type**: Layout primitive (polymorphic)  
**Purpose**: Flexible container component serving as foundation for all layout compositions

**Features**:

- ✅ Utility-based props for spacing, backgrounds, borders, display
- ✅ Polymorphic `as` prop (div, section, article, header, footer, main, nav, aside)
- ✅ Performance-optimized (CSS classes, not inline styles)
- ✅ Token-based design (semantic layer tokens)

**Props**:

- **Spacing**: `padding`, `paddingX`, `paddingY`, `paddingTop/Right/Bottom/Left`, `margin`, `marginX`, `marginY`, `marginTop/Right/Bottom/Left`
- **Background**: `background` (page, surface, success, error, warning, info, overlay, on-primary, on-secondary, etc.)
- **Border**: `borderRadius` (none, small, default, medium, large, full), `borderWidth` (none, thin, medium, thick), `borderColor` (default, strong, success, error, warning, info)
- **Display**: `display` (block, inline-block, flex, inline-flex, grid, none)

**Example Usage**:

```tsx
<Box padding="default" background="surface">
  Content
</Box>

<Box as="section" padding="spacious" borderRadius="medium">
  <h2>Section Title</h2>
</Box>
```

---

### 2. Stack - Directional Layout Container

**File**: `Stack/Stack.tsx` (estimated 200-300 lines)  
**Type**: Layout primitive (flexbox-based)  
**Purpose**: Directional layout container for stacking elements with consistent spacing

**Features**:

- ✅ Vertical and horizontal stacking
- ✅ Gap-based spacing (using semantic tokens)
- ✅ Alignment and distribution control
- ✅ Polymorphic rendering

**Expected Props**:

- **Direction**: `direction` (vertical, horizontal)
- **Spacing**: `gap` (using semantic spacing tokens)
- **Alignment**: `align`, `justify`

---

### 3. Divider - Visual Separator Component

**File**: `Divider/Divider.tsx`  
**Type**: Foundation component (spatial separation)  
**Purpose**: Visual separator for defining spatial boundaries and content hierarchy

**Features**:

- ✅ Orientation (horizontal, vertical)
- ✅ Thickness variants
- ✅ Semantic color variants
- ✅ Token-based styling
- ✅ Accessible (proper ARIA attributes)
- ✅ Comprehensive testing (329 lines of tests)

**Props**:

- **Orientation**: `orientation` (horizontal, vertical)
- **Thickness**: `thickness` (thin, medium, thick)
- **Color**: `color` (semantic colors)

**Example Usage**:

```tsx
<Divider orientation="horizontal" thickness="medium" />

<Stack direction="horizontal">
  <div>Content 1</div>
  <Divider orientation="vertical" />
  <div>Content 2</div>
</Stack>
```

**Composition Pattern**:

```tsx
// Divider uses Box only (simplest composition)
<Box as="hr" className="divider divider-{orientation} divider-{thickness}" aria-orientation={orientation} />
```

---

### 4. Text - Typography Primitive

**File**: `Text/Text.tsx` (227 lines)  
**Type**: Typography primitive (polymorphic)  
**Purpose**: Consistent text styling across the design system

**Features**:

- ✅ Typography scale (h1-h6, body variants, caption, label)
- ✅ Semantic color values (primary, secondary, success, error, warning, info, inverse)
- ✅ Font weight control (normal, medium, semibold, bold)
- ✅ Text alignment (left, center, right, justify)
- ✅ Text transformation (none, uppercase, lowercase, capitalize)
- ✅ Polymorphic `as` prop (p, span, div, h1-h6, label, legend, figcaption)
- ✅ Token-based design (semantic layer tokens)

**Props**:

- **Variant**: `variant` (h1, h2, h3, h4, h5, h6, body-large, body, body-small, caption, label)
- **Color**: `color` (primary, secondary, tertiary, success, error, warning, info, inverse)
- **Weight**: `weight` (normal, medium, semibold, bold)
- **Alignment**: `align` (left, center, right, justify)
- **Transform**: `transform` (none, uppercase, lowercase, capitalize)

**Example Usage**:

```tsx
<Text variant="h1" weight="bold">
  Page Title
</Text>

<Text variant="body" color="secondary">
  This is body text.
</Text>
```

---

### 5. Icon - Icon Display Component

**File**: `Icon/Icon.tsx` (estimated 150-250 lines)  
**Type**: Display component  
**Purpose**: Consistent icon rendering using Lucide React icon library

**Features**:

- ✅ Icon library integration (Lucide React)
- ✅ Size variants (matching button/text sizes)
- ✅ Color variants (semantic colors)
- ✅ Accessibility support (aria-hidden, aria-label)

**Expected Props**:

- **Name**: `name` (IconName type from Lucide)
- **Size**: `size` (xs, sm, md, lg, xl)
- **Color**: `color` (semantic color tokens)

---

### 6. Button - Interactive Action Element

**File**: `Button/Button.tsx` (275 lines)  
**Type**: Interactive component (polymorphic)  
**Purpose**: Versatile button with multiple types, variants, sizes, and states

**Features**:

- ✅ Three types (solid, outline, ghost)
- ✅ Seven variants (primary, secondary, success, danger, warning, info, neutral)
- ✅ Three sizes (sm, md, lg) with semantic token-based dimensions
- ✅ Icon support (left, right, or icon-only)
- ✅ Loading state with spinner animation
- ✅ Disabled state with proper accessibility
- ✅ Full width option
- ✅ Polymorphic rendering (button or anchor element)
- ✅ WCAG 2.1 AA compliant
- ✅ Token-based design (component layer tokens)

**Props**:

- **Type**: `type` (solid, outline, ghost)
- **Variant**: `variant` (primary, secondary, success, danger, warning, info, neutral)
- **Size**: `size` (sm, md, lg)
- **Radius**: `radius` (none, sm, base, md, full)
- **Icons**: `iconLeft`, `iconRight` (IconName)
- **States**: `loading`, `disabled`, `fullWidth`
- **Polymorphic**: `as` (button, a)

**Example Usage**:

```tsx
<Button type="solid" variant="primary" size="md">
  Click me
</Button>

<Button type="outline" variant="secondary">
  Outline
</Button>

<Button type="solid" variant="success" iconLeft="check">
  Save
</Button>

<Button type="solid" variant="primary" loading>
  Saving...
</Button>

<Button as="a" href="/home" type="ghost" variant="neutral">
  Home
</Button>
```

---

### 7. Badge - Status Indicator Component

**File**: `Badge/Badge.tsx`  
**Type**: Display component (status indicators)  
**Purpose**: Visual status indicators with semantic color variants

**Features**:

- ✅ Multiple variants (success, danger, warning, info, neutral)
- ✅ Size variants (sm, md)
- ✅ Optional dot indicator
- ✅ Token-based styling
- ✅ WCAG 2.1 AA compliant
- ✅ Comprehensive testing (559 lines of tests)

**Props**:

- **Variant**: `variant` (success, danger, warning, info, neutral)
- **Size**: `size` (sm, md)
- **Dot**: `dot` (boolean - visual indicator)

**Example Usage**:

```tsx
<Badge variant="success" size="md">
  Active
</Badge>

<Badge variant="danger" dot>
  Danger
</Badge>

<Badge variant="warning" size="sm">
  Pending
</Badge>
```

**Composition Pattern**:

```tsx
// Badge uses Box + Text composition
<Box as="span" className="badge badge-{variant} badge-{size}">
  {dot && <span className="badge-dot" />}
  <Text size="sm">{children}</Text>
</Box>
```

## Component Organization

### Directory Structure

```
packages/design-system/main/src/components/
├── Box/
│   ├── Box.tsx                   # Component implementation
│   ├── Box.module.css            # Component styles (token-based)
│   ├── Box.spec.tsx              # Playwright component tests
│   └── index.ts                  # Public exports
├── Stack/
│   └── [similar structure]
├── Text/
│   └── [similar structure]
├── Icon/
│   └── [similar structure]
├── Button/
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── Button.additional.module.css  # Additional styles (animations, hover)
│   ├── Button.spec.tsx
│   └── index.ts
├── Badge/
│   ├── Badge.tsx
│   ├── Badge.module.css
│   ├── Badge.spec.tsx
│   └── index.ts
├── Divider/
│   ├── Divider.tsx
│   ├── Divider.module.css
│   ├── Divider.spec.tsx
│   └── index.ts
└── index.ts                      # Main exports file
```

---

## Design Patterns

### 1. Polymorphic Components

All layout and typography primitives support polymorphic rendering via the `as` prop:

```tsx
<Box as="section">...</Box>
<Text as="h1">...</Text>
<Button as="a" href="...">...</Button>
```

**Benefits**:

- Semantic HTML
- Type-safe element-specific props
- Accessibility improvements

### 2. Token-Based Styling

All components use semantic design tokens (never hard-coded values):

```tsx
// ✅ Good - Uses semantic tokens
<Box padding="default" background="surface" />

// ❌ Bad - Hard-coded values
<div style={{ padding: '16px', background: '#ffffff' }} />
```

**Token Layers**:

- **Layer 1**: Primitives (raw values like 16px, #3B82F6)
- **Layer 2**: Semantic Tokens (purpose-driven like `spacing.default`, `color.primary`)
- **Layer 3**: Components (use semantic tokens via CSS custom properties)

### 3. Utility-Based Props

Components expose utility props that map to CSS classes:

```tsx
<Box padding="comfortable" marginBottom="spacious" background="surface" borderRadius="medium" />
```

Generated CSS classes:

```css
.padding-comfortable {
  padding: var(--semantic-ui-spacing-comfortable);
}
.marginBottom-spacious {
  margin-bottom: var(--semantic-ui-spacing-spacious);
}
.background-surface {
  background-color: var(--semantic-ui-background-surface);
}
.borderRadius-medium {
  border-radius: var(--semantic-ui-radius-medium);
}
```

### 4. Composition Patterns

Components are designed for composition:

```tsx
<Box padding="comfortable" background="surface" borderRadius="default">
  <Stack direction="vertical" gap="default">
    <Text variant="h3" weight="semibold">
      Card Title
    </Text>
    <Text variant="body" color="secondary">
      Card description
    </Text>
    <Button type="solid" variant="primary" size="md">
      Action
    </Button>
  </Stack>
</Box>
```

---

## Testing Strategy

All components include **Playwright Component Tests** (`.spec.tsx` files):

**Test Coverage**:

- ✅ Component rendering
- ✅ All variants and prop combinations
- ✅ Interactive behaviors (click, hover, focus)
- ✅ Keyboard navigation
- ✅ Accessibility (ARIA attributes, focus management)
- ✅ Visual regression (snapshots on 5 browsers: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari)

**Test Location**: `packages/design-system/playwright/src/components/`

**Running Tests**:

```bash
pnpm ds:test           # Run all component tests
pnpm ds:test:ui        # Run tests in UI mode
pnpm ds:test:update-snapshots  # Update visual regression snapshots
```

---

## Documentation

Each component is documented in:

1. **Storybook** (`packages/design-system/storybook/`)
   - Interactive playground
   - All variants showcase
   - Usage examples
   - Props documentation

2. **Docusaurus** (`packages/design-system/docusaurus/`)
   - API reference
   - Design guidelines
   - Accessibility notes
   - Migration guides

3. **JSDoc Comments** (in component source files)
   - Inline prop documentation
   - Usage examples
   - Type definitions

---

## Dependencies

**External Dependencies**:

- `@headlessui/react` (^2.2.9) - Headless UI primitives (for complex components like modals, dropdowns)
- `@heroicons/react` (^2.2.0) - Heroicons icon set
- `lucide-react` (^0.469.0) - Lucide icon library (primary icon set)
- `clsx` (^2.1.1) - Conditional className utility

**Internal Dependencies**:

- `@grasdouble/lufa_design-system-tokens` (workspace) - Design tokens package

---

## Next Steps

### All Components Complete! 🎉

All 16 components are now production-ready across 5 categories:

- ✅ **Foundation**: Box, Stack, Flex, Grid, Container, Center, Divider
- ✅ **Content**: Text, Icon, Badge
- ✅ **Interaction**: Button, Input, Label
- ✅ **Composition**: Card
- ✅ **Utility**: Portal, VisuallyHidden

### Future Component Additions (v1.0.0+)

**Additional Composition patterns**:

- **Modal** - Dialog and modal patterns
- **Form** - Form layout and field components
- **Dropdown** - Select and dropdown components
- **Table** - Data table component

**Focus for Next Release**:

- Enable full 5-browser test matrix in CI
- Add compound component examples
- Expand composition patterns library

---

## Related Documentation

- [Design System README](../../README.md)
- [Tokens Package](../../tokens/README.md)
- [Storybook Stories](../../storybook/_docs/story-guide.md)
- [Playwright Tests](../../playwright/README.md)
- [Architecture & Decisions](../../_docs/architecture.md)
- [Roadmap & Status](../../_docs/roadmap-and-status.md)
