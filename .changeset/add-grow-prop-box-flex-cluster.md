---
'@grasdouble/lufa_design-system': minor
'@grasdouble/lufa_design-system-playwright': minor
---

feat: add `grow` prop to Box, Flex, and Cluster components

Box, Flex, and Cluster now support the `grow` prop (already available on Stack since v3.2.0).

When `grow={true}`, the component fills all available space in its flex parent by applying:
- `flex: 1 1 auto`
- `height: 100%`
- `min-height: 0`
- `min-width: 0`

This eliminates the need for consumer-side workarounds when using these primitives inside height-constrained containers (modals, grid cells, Cards).

```tsx
// ✅ Now possible without className workarounds
<Box grow padding="comfortable">
  {/* scrollable content */}
</Box>

<Flex grow direction="column">
  <Header />
  <Box grow style={{ overflowY: 'auto' }}>content</Box>
</Flex>
```

**Note:** On `Flex`, `grow` is automatically neutralized when `wrap` is active (any value other than `'nowrap'`). Wrapping flex containers cannot reliably fill 100% height, so applying `grow` in that context would produce broken layouts in production. The prop is silently ignored in that combination.

Closes #27
