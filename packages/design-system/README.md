# Lufa Design System

A modern, token-based design system built with React, TypeScript, and Style Dictionary.

## 📚 Documentation

**📖 Comprehensive documentation available in [`_docs/`](./_docs/index.md)**

### Quick Links

| Document                                                       | Purpose                           | Audience                |
| -------------------------------------------------------------- | --------------------------------- | ----------------------- |
| **[Documentation Index](./_docs/index.md)**                    | Master navigation                 | Everyone                |
| **[Overview](./_docs/overview.md)**                            | Project introduction              | Everyone                |
| **[Architecture](./_docs/architecture.md)**                    | System design & principles        | Architects, Developers  |
| **[Development Guide](./_docs/development-guide.md)**          | Setup, workflows, troubleshooting | Developers              |
| **[Token Architecture](./tokens/_docs/token-architecture.md)** | 4-level token system              | Designers, Developers   |
| **[Component Inventory](./main/_docs/component-inventory.md)** | Available components              | Developers, Designers   |
| **[Build Configuration](./_docs/build-configuration.md)**      | Build pipeline details            | DevOps, Build Engineers |
| **[Testing Guide](./docusaurus/docs/guides/testing.md)**       | Playwright CT approach            | QA, Developers          |
| **[Story Guide](./storybook/_docs/story-guide.md)**            | Documentation patterns            | Docs Writers            |

### Learning Paths

- **New Developer?** → [Overview](./_docs/overview.md) → [Development Guide](./_docs/development-guide.md) → [Component Inventory](./main/_docs/component-inventory.md)
- **Designer?** → [Token Architecture](./tokens/_docs/token-architecture.md) → [Component Inventory](./main/_docs/component-inventory.md) → Storybook
- **Architect?** → [Architecture](./_docs/architecture.md) → [Token Architecture](./tokens/_docs/token-architecture.md) → [Build Configuration](./_docs/build-configuration.md)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages (required first time)
pnpm ds:all:build

# Start development
pnpm ds:storybook:dev  # Storybook on http://localhost:6006
pnpm ds:all:dev        # All dev servers (Storybook + Docusaurus)
```

See **[Development Guide](./_docs/development-guide.md)** for detailed instructions.

## 📦 Packages

| Package        | Description                                          | Status                         |
| -------------- | ---------------------------------------------------- | ------------------------------ |
| **tokens**     | Design tokens (453 tokens, 4 levels, DTCG-compliant) | ✅ Complete                    |
| **main**       | React components library                             | ✅ Complete (16/16 components) |
| **themes**     | Theme configurations                                 | ✅ Complete                    |
| **storybook**  | Interactive component documentation                  | ✅ Complete                    |
| **docusaurus** | API documentation site                               | ✅ Complete                    |
| **playwright** | Component testing suite (599 tests)                  | ✅ Complete                    |
| **cli**        | CLI tools and utilities                              | ✅ Complete                    |

## 🧪 Development Status

**Version**: 0.7.0

**Components Progress**: 16/16 (100% complete ✅)

**Foundation (Layout & Structure)**

**Layout Containers:**

- ✅ **Box** - Layout foundation with polymorphic rendering
- ✅ **Stack** - Vertical/horizontal spacing
- ✅ **Flex** - Flexbox layouts
- ✅ **Grid** - Grid layouts
- ✅ **Container** - Content width constraints
- ✅ **Center** - Centering utility

**Spatial Separation:**

- ✅ **Divider** - Visual separators for spatial boundaries

**Content (Display Elements)**

- ✅ **Text** - Typography component
- ✅ **Icon** - Lucide icon wrapper
- ✅ **Badge** - Status indicators

**Interaction (Interactive Elements)**

- ✅ **Button** - Primary interactive element
- ✅ **Input** - Form input fields
- ✅ **Label** - Form labels

**Composition (Complex Patterns)**

- ✅ **Card** - Composite card pattern

**Utility (Technical Helpers)**

- ✅ **Portal** - React portal wrapper
- ✅ **VisuallyHidden** - Accessibility helper

**Token System**: 100% (453 tokens across 4 levels)

**Testing**: 599 test cases (Playwright CT, 100% pass rate)

## 🎯 Key Features

- **Token-Based Design** - 4-level cascade (primitives → core → semantic → component) with 453 tokens
- **Type-Safe** - Full TypeScript support with generated types
- **Accessible** - WCAG 2.1 AA compliant
- **Polymorphic Components** - Flexible `as` prop for all primitives
- **Performance Optimized** - 8ms CSS cascade (< 16ms target)
- **Well Tested** - 599 Playwright component tests (100% pass rate)

## 📖 Documentation Stats

- **Total Documents**: 10 files
- **Total Words**: ~60,000+
- **Total Lines**: 8,338
- **Coverage**: 100%
- **Last Updated**: 2026-01-26

## 🤝 Contributing

See **[Development Guide > Git Workflow](./_docs/development-guide.md#git-workflow)** for contribution guidelines.

## 📝 License

MIT

---

**Generated with**: BMM Document Project Workflow (Deep Scan)  
**Documentation**: See [`_docs/index.md`](./_docs/index.md) for comprehensive guides
