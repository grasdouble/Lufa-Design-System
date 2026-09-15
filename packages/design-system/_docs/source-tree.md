# Lufa Design System - Source Tree Analysis

**Generated:** 2026-01-24  
**Version:** 0.6.0  
**Workflow:** BMM Document Project - Deep Scan  
**Agent:** Mary (Business Analyst)

---

## Table of Contents

1. [Overview](#overview)
2. [Package Structure](#package-structure)
3. [Annotated Directory Tree](#annotated-directory-tree)
4. [Entry Points](#entry-points)
5. [Critical Paths](#critical-paths)
6. [Package Dependencies](#package-dependencies)
7. [Configuration Files](#configuration-files)

---

## Overview

The Lufa Design System is organized as **7 interconnected packages** within the monorepo under `packages/design-system/`. Each package serves a distinct purpose in the design system ecosystem.

### Package Summary

| Package        | Purpose                                | Type          | Published        |
| -------------- | -------------------------------------- | ------------- | ---------------- |
| **primitives** | Raw design values (deprecated/archive) | Library       | ❌ No            |
| **tokens**     | Semantic design tokens (DTCG format)   | Library       | ✅ Yes           |
| **main**       | React component library                | Library       | ✅ Yes           |
| **themes**     | Theme CSS files (ocean, forest)        | Library       | ✅ Yes           |
| **storybook**  | Interactive component documentation    | Documentation | ❌ No (deployed) |
| **docusaurus** | Static API documentation site          | Documentation | ❌ No (deployed) |
| **playwright** | Component testing infrastructure       | Testing       | ❌ No            |

**Total Packages:** 7  
**Published to NPM:** 3 (tokens, main, themes)  
**Deployed as Sites:** 2 (storybook, docusaurus)

---

## Package Structure

### High-Level Organization

```
packages/design-system/
├── 📦 primitives/          [DEPRECATED] Raw values (archived approach)
├── 🎨 tokens/              [FOUNDATION] 438 semantic tokens (4 levels)
├── 🧩 main/                [CORE] 5 React components + utilities
├── 🌈 themes/              [THEMING] Ocean/Forest theme variants
├── 📚 storybook/           [DOCS] Interactive component explorer (46+ stories)
├── 📖 docusaurus/          [DOCS] API documentation site
└── 🧪 playwright/          [TESTING] Component tests (~500 test cases)
```

**Build Flow:**

```
tokens (build first)
  ↓ generates CSS + types
main (build second)
  ↓ uses tokens
storybook + docusaurus (build third)
  ↓ uses main + tokens
playwright (test last)
  ↓ validates main
```

---

## Annotated Directory Tree

### 🎨 Tokens Package (`tokens/`)

**Purpose:** Transform DTCG token JSON → CSS variables + TypeScript values

```
tokens/
├── 📄 package.json                   [ENTRY] Package manifest
├── ⚙️ style-dictionary.config.js     [CONFIG] Token transformation pipeline
├── 📄 tsconfig.json                  [CONFIG] TypeScript config
├── 📁 src/                           [SOURCE] Token definitions (DTCG format)
│   ├── 📁 primitives/                [LEVEL 1] Raw values (111 tokens)
│   │   ├── color.json                → Blue/Red/Green/Yellow scales
│   │   ├── spacing.json              → 0px, 4px, 8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px
│   │   ├── typography-*.json         → Font families, sizes, weights, line-heights
│   │   ├── radius.json               → Border radius values
│   │   ├── shadow.json               → Box shadow definitions
│   │   ├── motion.json               → Animation durations
│   │   ├── border-width.json         → Border width tokens
│   │   ├── breakpoint.json           → Responsive breakpoints
│   │   ├── height.json               → Height scale tokens
│   │   ├── icon-size.json            → Icon size scale
│   │   └── opacity.json              → Opacity scale
│   ├── 📁 core/                      [LEVEL 2] Core semantic mappings (58 tokens)
│   │   ├── color/colors-brand.json    → Primary/secondary brand colors
│   │   ├── color/colors-neutral.json  → Gray scale mappings
│   │   ├── color/colors-semantic.json → Success/warning/error/info
│   │   ├── layout/spacing.json       → Layout spacing semantics
│   │   ├── component/spacing.json    → Component spacing presets
│   │   └── typography/aliases.json   → Font aliases (body, heading, code)
│   ├── 📁 semantic/                  [LEVEL 3] UI-level semantics (103 tokens)
│   │   └── ui/spacing.json           → Compact, default, comfortable, spacious
│   └── 📁 component/                 [LEVEL 4] Component-specific tokens (166 tokens)
│       ├── button.json               → Button-specific colors, spacing
│       ├── input.json                → Input field tokens
│       ├── card.json                 → Card component tokens
│       ├── modal.json                → Modal/dialog tokens
│       ├── badge.json                → Badge component tokens
│       ├── tooltip.json              → Tooltip styling
│       ├── shared.json               → Shared component tokens
│       └── container.json            → Container tokens
├── 📁 dist/                          [OUTPUT] Generated files (built)
│   ├── 🎨 tokens.css                 → 621 CSS custom properties (--lufa-*)
│   ├── 📄 tokens-values.json         → Resolved token values (TypeScript import)
│   └── 📄 tokens-metadata.json       → Full metadata (types, descriptions, extensions)
└── 📁 scripts/                       [SCRIPTS] Validation and utilities
    └── validate-token-metadata.js    → DTCG format validation
```

**Critical Files:**

- **`src/primitives/color.json`** - Color foundation
- **`src/component/button.json`** - Most complex component tokens
- **`style-dictionary.config.js`** - Custom `json/nested-with-metadata` format

**Output Consumers:**

- `main/` - Imports `dist/tokens-values.json` in TypeScript
- `main/src/style.css` - Imports `dist/tokens.css`
- `storybook/` - Uses both CSS and JSON for stories

---

### 🧩 Main Package (`main/`)

**Purpose:** Core React component library (Box, Stack, Text, Icon, Button)

```
main/
├── 📄 package.json                   [ENTRY] Package manifest
├── ⚙️ vite.config.ts                 [CONFIG] Vite library mode build
├── ⚙️ tsconfig.json                  [CONFIG] TypeScript config (extends @grasdouble/lufa_config_tsconfig/react-library)
├── ⚙️ tsconfig.build.json            [CONFIG] Build-specific TS config
├── ⚙️ playwright-ct.config.ts        [CONFIG] Component testing (redirects to ../playwright/)
├── 📁 src/                           [SOURCE] Component source code
│   ├── 📄 index.ts                   [ENTRY] Main export file
│   │   └── Exports: { Box, Stack, Text, Icon, Button, useTheme }
│   ├── 🎨 style.css                  [GLOBAL] Global styles + token imports
│   │   └── @import '@grasdouble/lufa_design-system-tokens/tokens.css';
│   ├── 📁 components/                [COMPONENTS] React component implementations
│   │   ├── 📁 Box/                   ⭐ [PRIMITIVE] Layout primitive
│   │   │   ├── Box.tsx               → Polymorphic component (TypeScript)
│   │   │   ├── Box.module.css        → Generated utility classes
│   │   │   ├── box.utilities.config.cjs → Utility generation config
│   │   │   └── index.ts              → Re-export
│   │   ├── 📁 Stack/                 ⭐ [PRIMITIVE] Flexbox layout
│   │   │   ├── Stack.tsx
│   │   │   ├── Stack.module.css
│   │   │   ├── stack.utilities.config.cjs
│   │   │   └── index.ts
│   │   ├── 📁 Text/                  ⭐ [PRIMITIVE] Typography component
│   │   │   ├── Text.tsx
│   │   │   ├── Text.module.css
│   │   │   ├── text.utilities.config.cjs
│   │   │   └── index.ts
│   │   ├── 📁 Icon/                  ⭐ [PRIMITIVE] Icon wrapper (lucide-react)
│   │   │   ├── Icon.tsx
│   │   │   ├── Icon.module.css
│   │   │   ├── Icon.additional.module.css
│   │   │   ├── icon.utilities.config.cjs
│   │   │   └── index.ts
│   │   ├── 📁 Button/                ⭐ [COMPONENT] Interactive button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.additional.module.css
│   │   │   ├── button.utilities.config.cjs
│   │   │   └── index.ts
│   │   └── index.ts                  → Re-exports all components
│   ├── 📁 hooks/                     [HOOKS] Custom React hooks
│   │   ├── useTheme.ts               → Theme management hook
│   │   └── index.ts
│   ├── 📁 utils/                     [UTILITIES] Helper functions
│   │   ├── accessibility.ts          → A11y utilities (visuallyHidden, etc.)
│   │   └── index.ts
│   ├── 📁 css/                       [STYLES] Global CSS
│   │   └── theme.css                 → Theme variable overrides
│   └── vite-env.d.ts                 → Vite environment types
├── 📁 scripts/                       [SCRIPTS] Build automation
│   └── generate-utilities.cjs        ⭐ Generates utility CSS from config files
├── 📁 dist/                          [OUTPUT] Built library (ESM + CSS + types)
│   ├── lufa-ui.mjs                   → Main ESM bundle (~150KB)
│   ├── style.css                     → Compiled CSS (~80KB)
│   ├── index.d.ts                    → TypeScript types entry
│   └── *.d.ts                        → Component type definitions
└── 📁 docs/                          [DOCS] Component development notes
    └── box-alignment-system.md       → Box alignment implementation notes
```

**Component Architecture:**

```
Components/
├── 📦 Primitives (4)
│   ├── Box        → Layout foundation (margin, padding, display)
│   ├── Stack      → Vertical/horizontal layouts (flexbox)
│   ├── Text       → Typography (size, weight, color, alignment)
│   └── Icon       → Icon rendering (lucide-react wrapper)
└── 🎯 Components (1)
    └── Button     → Interactive element (uses Box + Icon + Text)
```

**Composition Pattern:**

```tsx
// Button internally uses primitives:
<Box as="button" {...boxProps}>
  {icon && <Icon {...iconProps} />}
  <Text {...textProps}>{children}</Text>
</Box>
```

**Critical Files:**

- **`src/index.ts`** - Main entry point, exports all public API
- **`scripts/generate-utilities.cjs`** - Pre-build utility generation (runs before Vite)
- **`vite.config.ts`** - Library mode config (ESM only, externalize deps except lucide-react)

**Package Exports:**

```json
{
  ".": "./dist/lufa-ui.mjs", // Component imports
  "./style.css": "./dist/style.css" // Stylesheet import
}
```

---

### 🌈 Themes Package (`themes/`)

**Purpose:** Provide theme variant CSS files (ocean, forest)

```
themes/
├── 📄 package.json                   [ENTRY] Package manifest
├── 📁 src/                           [SOURCE] Theme CSS files
│   ├── ocean.css                     → Ocean theme (blue/teal palette)
│   └── forest.css                    → Forest theme (green/brown palette)
└── 📁 dist/                          [OUTPUT] Published CSS files
    ├── ocean.css                     → Copied from src/
    └── forest.css                    → Copied from src/
```

**Usage Pattern:**

```tsx
// Import theme CSS in consumer app
import '@grasdouble/lufa_design-system-themes/ocean.css';

// Apply theme via data-theme attribute
document.documentElement.setAttribute('data-theme', 'ocean');
```

**Theme Structure:**

```css
/* ocean.css */
[data-theme='ocean'] {
  /* Override core tokens */
  --lufa-core-color-primary: var(--lufa-primitive-color-blue-600);
  --lufa-core-color-secondary: var(--lufa-primitive-color-teal-600);
  /* ... */
}
```

---

### 📚 Storybook Package (`storybook/`)

**Purpose:** Interactive component documentation and playground

```
storybook/
├── 📄 package.json                   [ENTRY] Package manifest
├── 📁 .storybook/                    [CONFIG] Storybook configuration
│   ├── main.ts                       ⚙️ Storybook config (React-Vite builder)
│   ├── preview.tsx                   ⚙️ Global decorators (theme/mode wrapper)
│   └── breakpoints.ts                → Custom viewport breakpoints
├── 📁 src/                           [SOURCE] Stories and helpers
│   ├── 📁 stories/                   [STORIES] Component stories
│   │   ├── 📁 foundation/            → Box, Stack, Flex, Grid, Container, Center stories
│   │   │   ├── Box.stories.tsx       → 9 stories (Playground, Padding, Margin, etc.)
│   │   │   ├── Stack.stories.tsx     → 8 stories (Playground, Direction, Spacing, etc.)
│   │   │   ├── Text.stories.tsx      → 10 stories (Playground, Size, Weight, etc.)
│   │   │   └── Icon.stories.tsx      → 7 stories (Playground, Size, Color, etc.)
│   │   ├── Button.stories.tsx        ⭐ 12 stories (Playground, Variants, Sizes, States, etc.)
│   │   ├── 📁 tokens/                → Token documentation stories
│   │   │   └── Colors.stories.tsx    → Color palette showcase
│   │   └── 📁 assets/                → Story assets (images, etc.)
│   ├── 📁 components/                [HELPERS] Story helper components
│   │   ├── 📁 helpers/
│   │   │   ├── PropCard.tsx          → Property showcase card
│   │   │   ├── CodeBlock.tsx         → Live code display
│   │   │   ├── PaddingVisualizer.tsx → Visual padding guide
│   │   │   └── MarginVisualizer.tsx  → Visual margin guide
│   │   └── 📁 ThemeSwitcher/         → Theme toggle component
│   ├── 📁 constants/                 [CONSTANTS] Shared story constants
│   │   └── storyConstants.ts         → Prop value arrays (sizes, colors, etc.)
│   └── style.css                     → Storybook-specific global styles
├── 📁 storybook-static/              [OUTPUT] Static build (deployable)
│   └── (HTML/JS/CSS files)           → Generated by `pnpm build`
└── 📁 docs/                          [DOCS] Storybook documentation notes
    └── archive/                      → Archived story experiments
```

**Story Structure (CSF3 Format):**

```typescript
// Box.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@grasdouble/lufa_design-system';

const meta: Meta<typeof Box> = {
  title: '2. Layout/Box',
  component: Box,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Box>;

export const Playground: Story = {
  args: { padding: 'md', margin: 'sm' },
};

export const Padding: Story = {/* ... */};
```

**Helper Components:**

- **PropCard** - Visual card for showcasing single prop variations
- **CodeBlock** - Syntax-highlighted code display
- **PaddingVisualizer** - Shows padding values visually
- **MarginVisualizer** - Shows margin values visually

**Global Decorators:**

```tsx
// .storybook/preview.tsx
const withThemeAndMode: Decorator = (Story, context) => {
  // Applies data-theme and data-mode attributes to <html>
  return (
    <ThemeAndModeWrapper theme={context.globals.theme} mode={context.globals.mode}>
      <Story />
    </ThemeAndModeWrapper>
  );
};
```

**Critical Files:**

- **`.storybook/main.ts`** - Storybook builder config
- **`.storybook/preview.tsx`** - Global decorators and toolbar controls
- **`src/components/helpers/PropCard.tsx`** - Most used helper component

---

### 📖 Docusaurus Package (`docusaurus/`)

**Purpose:** Static API documentation site (MDX-based)

```
docusaurus/
├── 📄 package.json                   [ENTRY] Package manifest
├── ⚙️ docusaurus.config.ts           [CONFIG] Site configuration
├── ⚙️ sidebars.ts                    [CONFIG] Sidebar navigation
├── 📁 docs/                          [DOCS] Documentation content (MDX)
│   ├── intro.md                      → Getting started
│   ├── 📁 getting-started/
│   │   └── installation.md           → Installation guide
│   ├── 📁 components/
│   │   ├── overview.md               → Component overview
│   │   └── 📁 primitives/
│   │       ├── box.mdx               → Box API docs
│   │       ├── stack.mdx             → Stack API docs
│   │       ├── text.mdx              → Text API docs
│   │       ├── icon.mdx              → Icon API docs
│   │       └── button.mdx            → Button API docs
│   ├── 📁 tokens/
│   │   ├── colors.mdx                → Color token docs
│   │   ├── spacing.mdx               → Spacing token docs
│   │   └── typography.mdx            → Typography token docs
│   ├── 📁 guides/
│   │   ├── contributing.md           → Contribution guide
│   │   ├── migration.md              → Migration guide
│   │   └── component-documentation-template.md → Doc template
│   └── 📁 accessibility/
│       └── overview.md               → A11y guidelines
├── 📁 src/                           [SOURCE] Site source code
│   ├── 📁 components/
│   │   └── HomepageFeatures/        → Landing page components
│   ├── 📁 dsExamples/                [EXAMPLES] Live component examples
│   │   └── 📁 primitives/
│   │       ├── BoxExample.tsx        → Interactive Box examples
│   │       ├── StackExample.tsx      → Interactive Stack examples
│   │       └── ...
│   ├── 📁 css/                       [STYLES] Custom CSS
│   │   └── custom.css                → Docusaurus theme overrides
│   ├── 📁 pages/                     [PAGES] Custom pages
│   │   └── index.tsx                 → Landing page
│   └── 📁 theme/                     [THEME] Theme customization
│       └── ReactLiveScope/           → Live code editor scope
│           └── index.ts              → Provide DS components to MDX
├── 📁 static/                        [STATIC] Static assets
│   └── 📁 img/                       → Images (logos, screenshots)
└── 📁 build/                         [OUTPUT] Static site build
    └── (HTML/JS/CSS)                 → Generated by `pnpm build`
```

**Interactive Examples:**

```mdx
<!-- docs/foundation/box.mdx -->

import BoxExample from '@site/src/dsExamples/primitives/BoxExample';

## Box Component

<BoxExample /> {/* Live React component in MDX */}
```

**ReactLiveScope:**

```typescript
// src/theme/ReactLiveScope/index.ts
import { Box, Button, Icon, Stack, Text } from '@grasdouble/lufa_design-system';

// Make components available in MDX live code blocks
const ReactLiveScope = {
  Box,
  Stack,
  Text,
  Icon,
  Button,
};
export default ReactLiveScope;
```

**Critical Files:**

- **`docusaurus.config.ts`** - Site metadata, plugins, navbar, footer
- **`sidebars.ts`** - Documentation sidebar structure
- **`src/theme/ReactLiveScope/index.ts`** - Expose DS components to MDX

---

### 🧪 Playwright Package (`playwright/`)

**Purpose:** Component testing infrastructure (Playwright CT)

```
playwright/
├── 📄 package.json                   [ENTRY] Package manifest
├── ⚙️ playwright-ct.config.ts        [CONFIG] Component testing config
├── 📁 src/                           [SOURCE] Test files
│   └── 📁 components/                [TESTS] Component tests
│       └── 📁 primitives/
│           ├── Box.spec.tsx          ⭐ 50+ tests (rendering, props, a11y, visual)
│           ├── Stack.spec.tsx        ⭐ 40+ tests
│           ├── Text.spec.tsx         ⭐ 45+ tests
│           ├── Icon.spec.tsx         ⭐ 35+ tests
│           └── Button.spec.tsx       ⭐ 60+ tests (most complex)
├── 📁 __snapshots__/                 [SNAPSHOTS] Visual regression baselines
│   ├── Box.spec.tsx-snapshots/
│   ├── Stack.spec.tsx-snapshots/
│   ├── Text.spec.tsx-snapshots/
│   ├── Icon.spec.tsx-snapshots/
│   └── Button.spec.tsx-snapshots/
├── 📁 scripts/                       [SCRIPTS] Snapshot management
│   ├── compress-snapshots-manual.sh     → Manual snapshot compression
│   ├── compress-snapshots-precommit.sh  → Pre-commit hook (lint-staged)
│   ├── docker-update-snapshots-linux.sh → Docker snapshot regeneration
│   └── validate-snapshot-system.sh      → Snapshot system validation
├── 📁 test-results/                  [RESULTS] Test run artifacts
│   └── (HTML reports, traces)        → Generated on test failure
├── 📁 playwright/                    [CACHE] Playwright internal cache
│   └── .cache/                       → Browser binaries, assets
└── 📁 docs/                          [DOCS] Testing documentation
    └── playwright-ct-guide.md        → Component testing guide
```

**Test Structure (5-Part Pattern):**

```typescript
// Box.spec.tsx
test.describe('Box Component', () => {
  // 1. Basic Rendering
  test('renders with default props', async ({ mount }) => {
    /* ... */
  });

  // 2. Prop Variants
  test('applies padding variants', async ({ mount }) => {
    /* ... */
  });
  test('applies margin variants', async ({ mount }) => {
    /* ... */
  });

  // 3. User Interactions
  test('handles click events', async ({ mount }) => {
    /* ... */
  });

  // 4. Accessibility
  test('is keyboard accessible', async ({ mount }) => {
    /* ... */
  });
  test('has correct ARIA attributes', async ({ mount }) => {
    /* ... */
  });

  // 5. Visual Regression
  test('matches snapshot - light mode', async ({ mount }) => {
    await expect(component).toHaveScreenshot();
  });
  test('matches snapshot - dark mode', async ({ mount }) => {
    await expect(component).toHaveScreenshot();
  });
});
```

**Browser Matrix (Configurable):**

```typescript
// playwright-ct.config.ts
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  // Currently disabled for speed:
  // { name: 'firefox', ... },
  // { name: 'webkit', ... },
  // { name: 'mobile-chrome', ... },
  // { name: 'mobile-safari', ... }
];
```

**Critical Files:**

- **`playwright-ct.config.ts`** - Test configuration (timeout, browsers, ports)
- **`src/foundation/*.spec.tsx`** - Component test suites
- **`scripts/docker-update-snapshots-linux.sh`** - CI snapshot consistency

---

### 📦 Primitives Package (`primitives/`) [DEPRECATED]

**Purpose:** [ARCHIVED] Original raw value approach (replaced by tokens/)

```
primitives/
├── 📄 package.json                   [ENTRY] Package manifest
└── 📁 src/                           [SOURCE] Raw TypeScript values
    ├── color.ts                      → Color palettes
    ├── spacing.ts                    → Spacing scale
    ├── typography.ts                 → Font definitions
    └── index.ts                      → Re-exports

⚠️ Status: DEPRECATED - Use `tokens/` package instead
```

**Why Deprecated:**

- Lacked metadata (descriptions, DTCG types)
- No tooling integration (Style Dictionary)
- Hard to maintain consistency
- Replaced by `tokens/` package with 4-level architecture

---

## Entry Points

### Package Entry Points

| Package        | Entry Point                   | Type   | Usage                                                        |
| -------------- | ----------------------------- | ------ | ------------------------------------------------------------ |
| **tokens**     | `dist/tokens-values.json`     | JSON   | `import tokens from '@grasdouble/lufa_design-system-tokens'` |
| **tokens**     | `dist/tokens.css`             | CSS    | `import '@grasdouble/lufa_design-system-tokens/tokens.css'`  |
| **main**       | `dist/lufa-ui.mjs`            | ESM    | `import { Button } from '@grasdouble/lufa_design-system'`    |
| **main**       | `dist/style.css`              | CSS    | `import '@grasdouble/lufa_design-system/style.css'`          |
| **themes**     | `dist/ocean.css`              | CSS    | `import '@grasdouble/lufa_design-system-themes/ocean.css'`   |
| **storybook**  | `storybook-static/index.html` | HTML   | Browse at `http://localhost:6006`                            |
| **docusaurus** | `build/index.html`            | HTML   | Browse at `http://localhost:3001`                            |
| **playwright** | `playwright-ct.config.ts`     | Config | `pnpm test-ct`                                               |

### Source Code Entry Points

| Package        | Source Entry                             | Exports                                  |
| -------------- | ---------------------------------------- | ---------------------------------------- |
| **tokens**     | `src/primitives/color.json`              | Blue/Red/Green/Yellow scales             |
| **main**       | `src/index.ts`                           | Box, Stack, Text, Icon, Button, useTheme |
| **storybook**  | `src/stories/primitives/Box.stories.tsx` | 9 Box stories                            |
| **playwright** | `src/foundation/Box.spec.tsx`            | 50+ Box tests                            |

---

## Critical Paths

### Build-Critical Paths

**Must Build First:**

```
packages/design-system/tokens/src/**/*.json
  → packages/design-system/tokens/dist/tokens.css
  → packages/design-system/tokens/dist/tokens-values.json
```

**Depends on Tokens:**

```
packages/design-system/main/src/style.css
  → @import '@grasdouble/lufa_design-system-tokens/tokens.css'

packages/design-system/main/src/components/**/*.module.css
  → var(--lufa-semantic-* or --lufa-component-*)

packages/design-system/main/scripts/generate-utilities.cjs
  → Reads token names from *.utilities.config.cjs
```

**Depends on Main:**

```
packages/design-system/storybook/src/stories/**/*.stories.tsx
  → import { Box } from '@grasdouble/lufa_design-system'

packages/design-system/playwright/src/**/*.spec.tsx
  → import { Button } from '@grasdouble/lufa_design-system'
```

### Development-Critical Paths

**Component Development:**

```
1. packages/design-system/main/src/interaction/Button/Button.tsx       [EDIT]
2. packages/design-system/storybook/src/stories/Button.stories.tsx    [UPDATE]
3. packages/design-system/playwright/src/Button.spec.tsx   [TEST]
4. packages/design-system/docusaurus/docs/foundation/button.mdx [DOCUMENT]
```

**Token Changes:**

```
1. packages/design-system/tokens/src/component/button.json            [EDIT]
2. Run: pnpm ds:tokens:build                                          [BUILD]
3. packages/design-system/main/src/interaction/Button/Button.module.css [UPDATE]
4. Run: pnpm ds:main:build                                            [BUILD]
```

---

## Package Dependencies

### Dependency Graph

```
tokens (no dependencies)
  ↓
main (depends on: tokens)
  ↓
themes (depends on: tokens)
  ↓
├─ storybook (depends on: main, tokens, themes)
├─ docusaurus (depends on: main, tokens)
└─ playwright (depends on: main)
```

### Workspace Dependencies (`workspace:^`)

**Main Package:**

```json
{
  "dependencies": {
    "@grasdouble/lufa_design-system-tokens": "workspace:^"
  }
}
```

**Storybook Package:**

```json
{
  "dependencies": {
    "@grasdouble/lufa_design-system": "workspace:^",
    "@grasdouble/lufa_design-system-tokens": "workspace:^",
    "@grasdouble/lufa_design-system-themes": "workspace:^"
  }
}
```

**Playwright Package:**

```json
{
  "devDependencies": {
    "@grasdouble/lufa_design-system": "workspace:^"
  }
}
```

### External Dependencies (Key)

**Shared Across Packages:**

- `react` ^19.2.3 (peer dependency in main, dev dependency elsewhere)
- `react-dom` ^19.2.3
- `typescript` ^5.9.3
- `vite` ^7.3.1

**Package-Specific:**

- **main**: `lucide-react` (bundled), `clsx`, `@headlessui/react`
- **tokens**: `style-dictionary` ^4.4.0
- **storybook**: `storybook` ^10.1.11, `@storybook/addon-themes`, `@storybook/addon-docs`
- **playwright**: `@playwright/experimental-ct-react` ^1.57.0
- **docusaurus**: `@docusaurus/core` ^3.x, `@docusaurus/preset-classic`

---

## Configuration Files

### Build Configurations

| Package        | Config File                  | Purpose                                |
| -------------- | ---------------------------- | -------------------------------------- |
| **tokens**     | `style-dictionary.config.js` | Token transformation (JSON → CSS/JSON) |
| **main**       | `vite.config.ts`             | Library build (ESM, externalize deps)  |
| **main**       | `tsconfig.build.json`        | TypeScript build config                |
| **storybook**  | `.storybook/main.ts`         | Storybook builder (React-Vite)         |
| **storybook**  | `.storybook/preview.tsx`     | Global decorators, toolbar             |
| **playwright** | `playwright-ct.config.ts`    | Component testing (browsers, timeouts) |
| **docusaurus** | `docusaurus.config.ts`       | Site config (navbar, footer, plugins)  |
| **docusaurus** | `sidebars.ts`                | Documentation sidebar                  |

### TypeScript Configurations

All packages extend from `@grasdouble/lufa_config_tsconfig`:

```json
// main/tsconfig.json
{
  "extends": "@grasdouble/lufa_config_tsconfig/react-library",
  "include": ["src"],
  "exclude": ["**/*.spec.tsx", "**/*.test.tsx"]
}
```

### Linting/Formatting Configurations

All packages use shared configs:

- **ESLint**: `@grasdouble/lufa_config_eslint` (basic, node, react variants)
- **Prettier**: `@grasdouble/lufa_config_prettier`

---

## Summary

### Key Insights

1. **Build Order is Critical**: Tokens → Main → Storybook/Docusaurus/Playwright
2. **7 Packages, 3 Published**: Only tokens, main, themes are published to NPM
3. **Single Entry Point**: `main/src/index.ts` exports all public components
4. **5 Components**: Box, Stack, Text, Icon, Button (71% complete, 2 pending: Badge, Divider)
5. **438 Tokens**: 4-level architecture (primitives → core → semantic → component)
6. **500+ Tests**: Playwright CT with 5-part structure
7. **46+ Stories**: Storybook CSF3 with interactive examples

### Most Critical Files

**Development:**

1. `main/src/index.ts` - Component exports
2. `tokens/style-dictionary.config.js` - Token build pipeline
3. `main/vite.config.ts` - Library build config

**Documentation:**

1. `storybook/.storybook/preview.tsx` - Global decorators
2. `docusaurus/docusaurus.config.ts` - Site config
3. `docusaurus/sidebars.ts` - Navigation structure

**Testing:**

1. `playwright/playwright-ct.config.ts` - Test config
2. `playwright/src/foundation/Button.spec.tsx` - Most complex test suite

### Navigation Tips

**Adding a New Component:**

1. Create `main/src/components/NewComponent/NewComponent.tsx`
2. Add utility config `main/src/components/NewComponent/newComponent.utilities.config.cjs`
3. Export from `main/src/index.ts`
4. Add story `storybook/src/stories/NewComponent.stories.tsx`
5. Add tests `playwright/src/components/NewComponent.spec.tsx`
6. Document `docusaurus/docs/components/newComponent.mdx`

**Modifying Tokens:**

1. Edit `tokens/src/component/button.json` (or appropriate level)
2. Run `pnpm ds:tokens:build`
3. Update components in `main/` that use those tokens
4. Run `pnpm ds:main:build`

**Running Full Pipeline:**

```bash
pnpm ds:all:build  # Tokens → Main → Storybook
pnpm ds:test       # Playwright tests
```

---

**Document Version:** 1.0.0  
**Last Updated:** 2026-01-24  
**Maintained By:** BMM Document Project Workflow
