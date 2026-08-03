# Story Writing Guide

[Back to Storybook README](../README.md)

This is the canonical guide for authoring Lufa Design System stories. Stories are visual demonstrations and interactive references; behavioral and accessibility assertions belong in the Playwright component-test package, while long-form consumer documentation belongs in Docusaurus.

## File and title structure

Place stories in the category that matches the component:

```text
src/stories/
├── composition/
├── content/
├── foundation/
├── guides/
├── interaction/
├── navigation/
└── tokens/
```

Use `{ComponentName}.stories.tsx` and a numbered title matching the existing sidebar hierarchy, for example `4. Foundation/Box`. Prefer these story names:

- `Default` for the smallest useful example.
- `Playground` for controls-driven exploration.
- `Prop{PropName}` for focused prop demonstrations.
- `UseCases` or `Patterns` for realistic compositions.

## Component story template

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box } from '@grasdouble/lufa_design-system';

import { CodeBlock, PropCard, StoryContainer } from '../../components/helpers';
import { STORY_COLORS } from '../../constants/storyColors';

const meta = {
  title: '4. Foundation/Box',
  component: Box,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: [undefined, 'none', 'tight', 'compact', 'default', 'comfortable', 'spacious'],
      description: 'Padding on all sides',
      table: {
        category: 'Spacing',
        type: { summary: 'SpacingValue' },
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <StoryContainer>
      <PropCard label='padding="default"'>
        <Box
          padding="default"
          style={{
            color: STORY_COLORS.themed.text.primary,
            backgroundColor: STORY_COLORS.themed.background.surface,
            border: `1px solid ${STORY_COLORS.themed.border.default}`,
          }}
        >
          Content
        </Box>
      </PropCard>

      <CodeBlock code={'<Box padding="default">Content</Box>'} language="jsx" title="JSX" />
    </StoryContainer>
  ),
};
```

Use `satisfies Meta<typeof Component>` and `StoryObj<typeof meta>` so stories remain aligned with the public component API. Describe controls with `argTypes` only when Storybook cannot infer useful metadata.

## Helpers

Import shared helpers from `src/components/helpers` rather than rebuilding story chrome:

| Helper                | Use                                                      |
| --------------------- | -------------------------------------------------------- |
| `StoryContainer`      | Fullscreen story layout and readable content width       |
| `PropCard`            | Labeled prop or variant example                          |
| `CodeBlock`           | Consumer-facing example code                             |
| `PlaygroundContainer` | Layout-component playgrounds with visual guides          |
| `PaddingVisualizer`   | Padding regions and dimensions                           |
| `MarginVisualizer`    | Margin regions and dimensions                            |
| Token helpers         | Token cards, matrices, comparisons, and reference chains |

See the [helper reference](../src/components/helpers/README.md) for detailed props and examples.

## Colors and visual examples

Never hardcode story UI colors. Import `STORY_COLORS` or `getColorByIndex` from `src/constants/storyColors.ts`:

- Use `STORY_COLORS.themed` for text, surfaces, borders, focus indicators, shadows, and other story UI. These values follow the active theme.
- Use `STORY_COLORS.primary`, `directional`, `axis`, or `getColorByIndex()` for fixed decorative colors that explain variants, axes, or spacing.
- Use `STORY_COLORS.neutral.white` or `.black` only when an example explicitly needs fixed high-contrast content.
- Literal colors are acceptable only inside code samples that intentionally demonstrate an incorrect hardcoded-color pattern.

For spacing examples, make the component boundary and content area visually distinct:

```tsx
const colors = STORY_COLORS.directional.top;

<Box
  paddingTop="spacious"
  style={{
    backgroundColor: colors.light,
    border: `2px dashed ${colors.main}`,
  }}
>
  <div style={{ color: STORY_COLORS.neutral.white, backgroundColor: colors.main }}>Content</div>
</Box>;
```

## Interaction and accessibility

- Use semantic elements first. A clickable example control must be a `button`, link, or native form control rather than a clickable `div`.
- Give every input an associated label and every icon-only control an accessible name.
- Keep all interactions keyboard operable with a visible token-backed focus indicator.
- Do not rely on hover or color alone to communicate selection or state.
- Mark decorative icons and images appropriately.
- Respect reduced-motion preferences.
- Follow the ARIA Authoring Practices keyboard model for composite widgets.
- Keep examples valid in light, dark, and high-contrast themes.

The `@storybook/addon-a11y` panel runs WCAG 2 A/AA checks and reports violations as test errors. It supplements, but does not replace, keyboard review and Playwright accessibility tests.

## Interactive story pattern

Prefer Storybook args for component props. Local React state is appropriate for story-only UI such as selecting an example that updates a `CodeBlock`.

```tsx
export const Playground: Story = {
  args: {
    padding: 'default',
  },
  render: (args) => (
    <PlaygroundContainer>
      <Box {...args}>Content</Box>
    </PlaygroundContainer>
  ),
};
```

Generated code must show only consumer API usage. Do not include story wrappers, visualization styles, or helper state in the snippet.

## Review checklist

- [ ] The file, title, and exported story names match the existing hierarchy.
- [ ] Meta and stories derive their types from the component and meta object.
- [ ] The default story demonstrates the smallest useful consumer usage.
- [ ] Shared helpers are reused instead of duplicated.
- [ ] Story UI uses shared token-backed color helpers.
- [ ] Interactive examples use semantic, labeled, keyboard-operable controls.
- [ ] Examples work in all supported themes and reduced motion.
- [ ] Code snippets contain clean consumer-facing code.
- [ ] The accessibility panel has no violations.
- [ ] Storybook lint, typecheck, token validation, and build pass.

## Commands

From the repository root:

```bash
pnpm ds:storybook:dev
pnpm ds:storybook:lint
pnpm ds:storybook:typecheck
pnpm ds:storybook:validate:token-usage
pnpm ds:storybook:build
```
