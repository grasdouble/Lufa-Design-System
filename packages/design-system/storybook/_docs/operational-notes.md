# Operational Notes

## Addons

Installed Storybook addons:

- **@storybook/addon-a11y** - WCAG 2 A/AA checks in the accessibility panel
- **@storybook/addon-docs** - Documentation with MDX

The custom theme and mode toolbar remains responsible for visual theme switching.

## Deployment

Storybook is automatically deployed on pull requests and merges to main.

## Project Structure

```
storybook/
├── src/
│   ├── stories/              # Stories grouped by design-system category
│   ├── components/
│   │   └── helpers/          # Shared story-only components
│   └── constants/
│       └── storyColors.ts    # Token-backed story colors
├── _docs/
│   ├── story-guide.md        # Canonical authoring guide
│   └── operational-notes.md  # Addons and deployment
├── CHANGELOG.md              # Managed by changeset
└── README.md                 # This file
```

## Story Writing Checklist

Before submitting a story:

- [ ] Uses `STORY_COLORS` for all colors
- [ ] Uses helper components (`StoryContainer`, `PropCard`, `CodeBlock`)
- [ ] Spacing stories use "border + inner content" pattern
- [ ] Code examples are clean (no story-specific styling)
- [ ] Follows naming conventions
- [ ] TypeScript compiles without errors

**Full checklist:** See the [Story Writing Guide](./story-guide.md#review-checklist).
