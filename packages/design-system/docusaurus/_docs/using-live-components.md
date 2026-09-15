# Using Live Components

This guide explains how to embed live components in MDX pages.

## When to Use Live Components

- When behavior is best understood interactively.
- When you need to demo states or variations.
- When a static snippet is not sufficient.

## Basic Setup

Import `LiveDemoSection` and a real example from `src/dsExamples`.

```mdx
import BrowserOnly from '@docusaurus/BrowserOnly';

import { LiveDemoSection } from '../../src/components/LiveDemoSection';
import { LiveDemo } from '../../src/dsExamples/interaction/button';

# Button Documentation

<LiveDemoSection>
  <BrowserOnly>{() => <LiveDemo />}</BrowserOnly>
</LiveDemoSection>
```

Keep stateful browser examples in `src/dsExamples` so server rendering remains deterministic.

## Best Practices

- Keep live examples small and focused.
- Avoid heavy logic or async behavior in MDX.
- Use real component props (no pseudo-API).
- Prefer two or three clear examples over many variations.
- Default live demos should show the component with default props only.
- When using `LiveDemoSection`, include a Default tab first and then one tab per primary prop.

## LiveDemoSection with Tabs

```mdx
import { LiveDemoSection } from '../../src/components/LiveDemoSection';
import { LiveDemo, SizeDemo } from '../../src/dsExamples/interaction/button';

<LiveDemoSection
  tabs={[
    { id: 'default', label: 'Default', content: <LiveDemo /> },
    { id: 'size', label: 'Size', content: <SizeDemo /> },
  ]}
/>
```

## Common Checks

- The example renders without console errors.
- Imports resolve correctly.
- Props reflect actual component API.

## Related Docs

- [Adding a New Page](./adding-a-new-page.md)
- [Component Documentation Best Practices](./component-documentation-best-practices.md)
- [Writing Code Examples](./writing-code-examples.md)
