[← Back to Design System Overview](../README.md)

# Lufa Design System Documentation

[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.x-3ECC5F?style=flat-square&logo=docusaurus)](https://docusaurus.io)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../../../LICENSE.md)

Public API, token, accessibility, testing, migration, and contribution documentation for the Lufa Design System.

## Commands

From the repository root:

```bash
pnpm ds:docusaurus:dev
pnpm ds:docusaurus:build
pnpm ds:docusaurus:lint
pnpm ds:docusaurus:typecheck
```

From this package:

```bash
pnpm dev
pnpm build
pnpm serve
```

The development server uses `http://localhost:3000`.

## Site structure

```text
docs/
├── getting-started/
├── tokens/
├── foundation/
├── content/
├── interaction/
├── composition/
├── navigation/
├── utility/
├── hooks/
└── guides/
src/
├── components/   # Shared documentation UI
├── dsExamples/   # Browser-only component examples
├── pages/        # Landing page and playground
└── css/
```

The Docusaurus blog plugin is disabled. Release history comes from package changelogs and the public changelog page.

## Authoring documentation

- [Component documentation best practices](./_docs/component-documentation-best-practices.md)
- [Adding a page](./_docs/adding-a-new-page.md)
- [Using live components](./_docs/using-live-components.md)
- [Writing code examples](./_docs/writing-code-examples.md)

Add public pages to `sidebars.ts`, use only exported APIs in examples, and run `pnpm build` so broken links fail locally.

## Deployment

The production workflow `.github/workflows/ds-release-lufa-prod-publish.yml` is manually dispatched with the `documentation` target. It builds `packages/design-system/docusaurus/build/` before deployment.

## Resources

- [Docusaurus documentation](https://docusaurus.io/docs)
- [Design system package](../main/)
- [Storybook package](../storybook/)
- [Contributing guide](./docs/guides/contributing.md)
