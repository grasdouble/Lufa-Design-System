---
id: contributing
title: Contributing to Lufa
sidebar_label: Contributing
description: Repository setup, development workflow, testing, and changesets.
sidebar_position: 1
---

# Contributing to Lufa

Contributions should preserve the design system's public API, token architecture, accessibility guarantees, and test coverage.

## Prerequisites

The versions used by the repository are recorded in `.tool-versions`:

- Node.js 25.2.1
- pnpm 11.4.0
- Git

Use pnpm only.

## Setup

```bash
git clone https://github.com/YOUR_USERNAME/Lufa-Design-System.git
cd Lufa-Design-System
pnpm install
pnpm ds:all:build
```

## Workspace structure

```text
packages/design-system/
├── cli/         # Design system CLI
├── docusaurus/  # Public documentation site
├── main/        # React components and hooks
├── playwright/  # Component and visual tests
├── storybook/   # Interactive component stories
├── themes/      # Theme stylesheets
└── tokens/      # Source and generated design tokens
```

## Development commands

Run these from the repository root:

```bash
pnpm ds:storybook:dev
pnpm ds:docusaurus:dev
pnpm ds:all:build
pnpm ds:all:lint
pnpm ds:all:typecheck
pnpm ds:playwright:ci
```

Package-level scripts are available from each package directory:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Changing components

Components in `packages/design-system/main/src` use this anatomy:

```text
ComponentName/
├── ComponentName.tsx
├── ComponentName.module.css
└── index.ts
```

When adding or changing behavior:

1. Add or update the Playwright test first and confirm the expected failure.
2. Implement the smallest production change that makes it pass.
3. Add or update the Storybook story.
4. Add or update the Docusaurus API documentation.
5. Export public components and types through the category and package indexes.
6. Run component and token validation.

```bash
cd packages/design-system/main
pnpm validate:components
pnpm validate:token-usage
```

All dimensions, colors, spacing, focus indicators, and motion values must use design tokens. Interactive components must document keyboard and ARIA behavior and follow the corresponding ARIA Authoring Practices pattern.

## Testing

The component suite lives in `packages/design-system/playwright/src`, grouped by the same categories as the main package.

```bash
cd packages/design-system/playwright
pnpm test
pnpm test-ct:ui
pnpm test-ct:update-snapshots
```

See the [testing guide](./testing) for the active Chromium projects, `@axe-core/playwright` usage, and snapshot paths.

## Documentation and stories

- Public docs: `packages/design-system/docusaurus/docs`
- Live examples: `packages/design-system/docusaurus/src/dsExamples`
- Stories: `packages/design-system/storybook/src/stories`
- Story authoring guide: `packages/design-system/storybook/_docs/story-guide.md`

Use links and examples that exist in the current public API. Build Docusaurus after changing routes or navigation so broken links fail locally.

## Changesets

Every changed workspace package, including private documentation and test packages, needs a changeset:

```bash
pnpm changeset
pnpm changeset status
```

Use:

- `patch` for fixes, docs, tests, and refactors
- `minor` for backward-compatible features
- `major` for breaking API changes

Prefix the summary with a conventional type such as `fix:`, `docs:`, `test:`, or `feat:`.

## Pull request checklist

- Tests define and cover the changed behavior.
- Keyboard, focus, ARIA, contrast, and reduced motion were reviewed.
- Stories and public docs match the exported API.
- Package lint, typecheck, build, and token validation pass.
- The full Playwright suite passes.
- Every touched workspace package is represented by a changeset.

## Issues and license

- [Repository and issues](https://github.com/grasdouble/Lufa-Design-System)
- [MIT license](https://github.com/grasdouble/Lufa-Design-System/blob/main/LICENSE.md)
