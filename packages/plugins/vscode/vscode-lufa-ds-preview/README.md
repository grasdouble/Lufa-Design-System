# Lufa DS Preview

VS Code previews for values in the unified Lufa design-system token map.

## Features

- Color decorators for Lufa color CSS variables, token color paths, and literal `oklch(...)` values
- Hovers showing mapped values for Lufa CSS variables and token paths
- Completions enriched with mapped values and color swatches
- A packaged `tokens.map.json`, with an optional workspace-local map override
- Automatic cache invalidation when the configured map changes
- Optional diagnostics in the **Lufa DS Preview** output channel

The providers run for file-backed CSS, SCSS, PostCSS, TypeScript, and TSX documents. To keep editor work bounded, color scanning is skipped for documents over 1,000,000 characters and returns at most 1,000 decorations per document.

## Supported references

### CSS, SCSS, and PostCSS

```css
color: var(--lufa-core-color-brand-500);
background: var(--lufa-semantic-ui-background-primary, #fff);
--lufa-component-button-color-background-default: oklch(70% 0.1 200);
border-color: oklch(70% 0.1 200 / 0.5);
```

Color decorators are provided for mapped variables whose names contain `color`. Hovers and completions also support mapped non-color variables.

### TypeScript and TSX

```ts
const foreground = semantic.color.foreground.default;
const border = component.color.button.border;
const gap = primitive.spacing[16];
```

Mapped `primitive.*`, `core.*`, `semantic.*`, `component.*`, and `tokens.*` paths can receive hover and completion details. Color decorators apply to their `.color.*` paths.

## Configuration

The bundled map is used by default. A custom map can be selected with:

```json
{
  "lufaDsPreview": {
    "tokensMapPath": "packages/design-system/tokens/dist/tokens.map.json",
    "debug": false
  }
}
```

`tokensMapPath` may be relative to the first workspace folder or absolute, but the resolved file must be the workspace root or a descendant of any open workspace folder. Paths outside the workspace are rejected. If a configured map is missing or invalid, the extension falls back to its packaged map.

Set `debug` to `true`, then open **View → Output → Lufa DS Preview** for matching and loading diagnostics.

## Development

From this package directory:

```bash
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm build` creates a development bundle and source map. It copies `tokens.map.json` from `@grasdouble/lufa_design-system-tokens` (or the monorepo token package) into `dist/maps`.

To create a minified VSIX without source maps:

```bash
pnpm build-and-no-install
```

To package and install it with the VS Code CLI:

```bash
pnpm build-and-install
```

The packaging script temporarily uses the unscoped Marketplace identifier while preserving this workspace package's scoped name.

## Troubleshooting

- **No previews:** confirm the reference exists in the active map and the document uses a supported language and `file` URI.
- **Custom map rejected:** keep the resolved path inside an open workspace folder.
- **Stale values:** save the custom map; its watcher invalidates the cache automatically. Reload VS Code if the file watcher is unavailable.
- **Missing packaged map:** build `@grasdouble/lufa_design-system-tokens`, then rebuild or repackage this extension.
