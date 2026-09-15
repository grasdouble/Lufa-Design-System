---
id: overview
title: Component Overview
sidebar_label: Overview
description: Overview of components in the design system.
sidebar_position: 1
---

# Component Overview

The Lufa Design System provides a comprehensive set of React components built with accessibility and customization in mind. Components are organized by their role and purpose for better discoverability.

## Component Categories

### Foundation

Layout and structure components that form the building blocks of your UI.

- **[Box](/docs/foundation/box)** - Flexible container with padding, margin, background, and border utilities
- **[Stack](/docs/foundation/stack)** - Flexbox layout for vertical/horizontal stacking with consistent spacing
- **[Flex](/docs/foundation/flex)** - Advanced flexbox layout primitive
- **[Grid](/docs/foundation/grid)** - Two-dimensional grid layout primitive
- **[Container](/docs/foundation/container)** - Max-width centered container for responsive layouts
- **[Center](/docs/foundation/center)** - Centers content horizontally and vertically
- **[Divider](/docs/foundation/divider)** - Visual separator for content sections
- **[AspectRatio](/docs/foundation/aspect-ratio)** - Maintains consistent aspect ratios for media and containers
- **[Cluster](/docs/foundation/cluster)** - Wrapping layout for collections with intelligent spacing
- **[Bleed](/docs/foundation/bleed)** - Breaks out of container constraints for full-width content

### Content

Display components for text, icons, badges, and visual elements.

- **[Text](/docs/content/text)** - Typography component with semantic variants and accessibility features
- **[Icon](/docs/content/icon)** - SVG icon wrapper with semantic sizing and colors (Lucide React integration)
- **[Badge](/docs/content/badge)** - Status and labeling component
- **[Link](/docs/content/link)** - Inline anchor with token-based states and safe external-link defaults

### Interaction

Interactive elements like buttons, inputs, and form controls.

- **[Button](/docs/interaction/button)** - Interactive button with variants, sizes, and states
- **[Input](/docs/interaction/input)** - Text input field with design system styling
- **[Label](/docs/interaction/label)** - Text label for form controls and UI elements

### Composition

Complex patterns that combine multiple components.

- **[Card](/docs/composition/card)** - Composed container for grouped content and actions

### Utility

Technical helpers and accessibility utilities.

- **[Portal](/docs/utility/portal)** - Renders children into a portal outside of the DOM hierarchy
- **[VisuallyHidden](/docs/utility/visually-hidden)** - Hides content visually but leaves it available to screen readers

### Navigation

- **[DotNav](/docs/navigation/dot-nav)** - Controlled vertical navigation for long, section-based pages

### Hooks

- **[useScrollSpy](/docs/hooks/use-scroll-spy)** - Tracks active sections and coordinates programmatic scrolling

## Design Principles

All Lufa components follow these core principles:

### 1. Accessibility First

- **WCAG 2.1 AA** compliant by default
- Semantic HTML elements
- Keyboard navigation support
- Screen reader optimized
- Focus management

### 2. Token-Based Design

- All design values use semantic tokens
- Automatic light/dark theme support
- Consistent spacing, colors, and typography
- Easy customization

### 3. Polymorphic API

- `as` prop for semantic HTML flexibility
- Type-safe props based on element type
- Maintains accessibility with semantic elements

### 4. Performance Optimized

- CSS Modules for scoped styles
- CSS custom properties for theming
- Tree-shakeable imports
- Minimal runtime overhead

### 5. Developer Experience

- Full TypeScript support
- Clear prop APIs
- Comprehensive documentation
- Interactive examples

## Usage Patterns

### Composing Components

Lufa components are designed to be composed together:

```tsx
import { Box, Icon, Stack, Text } from '@grasdouble/lufa_design-system';

function UserCard({ name, email, role }) {
  return (
    <Box padding="comfortable" background="surface" borderRadius="medium" borderWidth="thin" borderColor="default">
      <Stack direction="vertical" spacing="compact">
        <Stack direction="horizontal" spacing="compact" align="center">
          <Icon name="user" color="primary" />
          <Text variant="heading-sm">{name}</Text>
        </Stack>
        <Text variant="body-sm" color="secondary">
          {email}
        </Text>
        <Text variant="caption" color="muted">
          {role}
        </Text>
      </Stack>
    </Box>
  );
}
```

## Component Status

| API            | Status    | Category    | Playwright | Docs | Storybook  |
| -------------- | --------- | ----------- | ---------- | ---- | ---------- |
| Box            | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Stack          | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Flex           | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Grid           | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Container      | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Center         | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Divider        | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| AspectRatio    | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Cluster        | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Bleed          | ✅ Stable | Foundation  | ✅         | ✅   | ✅         |
| Text           | ✅ Stable | Content     | ✅         | ✅   | ✅         |
| Icon           | ✅ Stable | Content     | ✅         | ✅   | ✅         |
| Badge          | ✅ Stable | Content     | ✅         | ✅   | ✅         |
| Link           | ✅ Stable | Content     | ✅         | ✅   | ✅         |
| Button         | ✅ Stable | Interaction | ✅         | ✅   | ✅         |
| Input          | ✅ Stable | Interaction | ✅         | ✅   | ✅         |
| Label          | ✅ Stable | Interaction | ✅         | ✅   | ✅         |
| Card           | ✅ Stable | Composition | ✅         | ✅   | ✅         |
| Portal         | ✅ Stable | Utility     | ✅         | ✅   | ✅         |
| VisuallyHidden | ✅ Stable | Utility     | ✅         | ✅   | ✅         |
| DotNav         | ✅ Stable | Navigation  | —          | ✅   | ✅         |
| useScrollSpy   | ✅ Stable | Hook        | ✅         | ✅   | Via DotNav |

## Next Steps

- Explore individual component documentation in the sidebar
- Learn about [design tokens](/docs/tokens/colors)
- Browse the [Storybook source](https://github.com/grasdouble/Lufa-Design-System/tree/main/packages/design-system/storybook) for interactive examples

:::note Work in Progress
This design system is actively being developed. More components and features will be added regularly.
:::
