# Test Structure

Tests mirror the main package's public categories:

```text
src/
├── composition/
├── content/
├── documentation/
├── foundation/
├── hooks/
├── interaction/
└── utility/
```

Keep harnesses next to the tests that consume them and name them `*.harness.tsx`. Component test files use `*.spec.tsx`.

Each test file should cover the relevant subset of:

1. default rendering
2. public props and variants
3. user interaction
4. keyboard and focus behavior
5. ARIA semantics and `@axe-core/playwright`
6. responsive behavior
7. visual regression
