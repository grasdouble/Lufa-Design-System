# Scripts

This directory contains utility scripts for the Lufa project.

## validate-token-metadata.js

**Purpose**: Validates Design Token metadata to ensure all tokens have required documentation and follow DTCG standards.

**Usage**:

```bash
# Via npm script (recommended)
pnpm validate:tokens

# Or directly
node scripts/validate-token-metadata.js
```

**What it validates**:

1. **Required metadata fields**
   - `$description`: Human-readable description (minimum 10 characters)
   - `$type`: Valid DTCG token type (color, dimension, fontFamily, etc.)
   - `$extensions.lufa.themable`: Boolean indicating if token can be themed

2. **Token type validation**
   - Checks `$type` against valid DTCG types:
     - `color`, `dimension`, `fontFamily`, `fontWeight`, `duration`, `cubicBezier`
     - `number`, `strokeStyle`, `border`, `transition`, `shadow`, `gradient`, `typography`
   - Warns if unknown type is used

3. **Description quality**
   - Ensures descriptions are meaningful (>10 characters)
   - Warns about overly short descriptions

4. **JSON syntax**
   - Validates JSON file structure
   - Reports parsing errors with file location

**Exit codes**:

- `0`: All validations passed
- `1`: Validation failed with errors

**Example output (success)**:

```bash
🔍 Token Metadata Validation Report
================================================================================

Total Tokens Validated: 24
✓ Valid Tokens: 24
✗ Tokens with Errors: 0
⚠ Warnings: 0

✓ All tokens have valid metadata!

================================================================================

Validation passed successfully!
```

**Example output (errors)**:

```bash
━━━ ERRORS (2) ━━━

packages/design-system/tokens/src/colors.json
  ✗ color.primary
    Missing required field: $description

  ✗ color.secondary
    Missing $extensions.lufa.themable (should be true or false)

💡 How to fix:
   • Add $description: Describe the token's purpose
   • Add $type: Specify DTCG type (color, dimension, etc.)
   • Add $extensions.lufa.themable: Set to true or false
   • See: docs/contributors/your-first-token.md
```

**CI Integration**:

The script runs automatically via GitHub Actions:

- On PRs that modify token files (`packages/design-system/tokens/src/**/*.json`)
- On pushes to `main` branch
- Can be triggered manually via workflow_dispatch
- **Blocking**: PRs with token validation errors cannot be merged

See [.github/workflows/ds-tools-packages-ci.yml](../.github/workflows/ds-tools-packages-ci.yml)

**GitHub Actions Bot**:

When validation fails on a PR, the bot automatically comments with:

- ❌ Validation failure summary
- 📋 Detailed validation report
- 💡 How to fix instructions
- 📚 Links to documentation and VSCode snippets

**VSCode Snippets**:

To make token creation easier, use the provided VSCode snippets:

**Location**: `.vscode/lufa-tokens.code-snippets`

**Available snippets**:

| Snippet                      | Description                   |
| ---------------------------- | ----------------------------- |
| `lufa-token-color`           | Color token with metadata     |
| `lufa-token-dimension`       | Spacing/sizing token          |
| `lufa-token-ref`             | Token that references another |
| `lufa-token-primitive-color` | Primitive color (Level 0)     |
| `lufa-token-core`            | Core token (Level 1)          |
| `lufa-token-semantic`        | Semantic token (Level 2)      |
| `lufa-token-component`       | Component token (Level 3)     |

**Quick usage**:

1. Open a `.json` file in `packages/design-system/tokens/src/`
2. Type snippet prefix (e.g., `lufa-token-color`)
3. Press `Tab` to expand
4. Fill in values (use `Tab` to navigate)

**Related documentation**:

- 📖 [Your First Token Guide](../docs/contributors/your-first-token.md) - 5-minute onboarding
- 🏗️ [Roadmap v2.0](../_bmad-output/analysis/roadmap-implementation-v2.0.md) - Phase 0 Action #2
- ✂️ [VSCode Snippets](../.vscode/lufa-tokens.code-snippets) - Token creation templates

**Part of**: Lufa Design System v2.0 - Phase 0 Action #2 (Mitigation Maintenance Metadata)

---

## validate-ai-docs.sh

**Purpose**: Validates the canonical agent instructions and any optional tool-specific instruction files.

**Usage**:

```bash
# Validate repository instructions
pnpm validate:docs

# Run validator regression tests
pnpm validate:docs:test
```

**What it validates**:

1. **Canonical instructions**
   - Requires `AGENTS.md`
   - Verifies generated shared-rule markers and repository-specific validation, testing, accessibility, and component sections
   - Checks the root `pnpm all:lint`, `pnpm all:build`, and `pnpm all:typecheck` commands
   - Requires optional `CLAUDE.md` and `.github/copilot-instructions.md` files to reference `AGENTS.md`

2. **YAML frontmatter validity**
   - Checks `.instructions.md` files for unsupported YAML fields
   - GitHub Copilot only supports: `description`, `applyTo`, `name`
   - Warns if other fields are present

3. **Markdown links**
   - Validates all relative markdown links point to existing files
   - Checks the canonical, optional, and path-specific instruction files

4. **File sizes**
   - Warns when an instruction file exceeds 800 lines and should move supporting guidance elsewhere

5. **Optional config**
   - Requires `config.toml` to reference `AGENTS.md` when that optional file exists

**Exit codes**:

- `0`: All validations passed (may have warnings)
- `1`: Validation failed with errors

**CI Integration**:

The script runs automatically via GitHub Actions:

- On pull requests that modify AI documentation
- On pushes to `main` branch
- Can be triggered manually via workflow_dispatch

See [.github/workflows/validate-docs.yml](../.github/workflows/validate-docs.yml)

**Common errors and fixes**:

| Error                                  | Fix                                                             |
| -------------------------------------- | --------------------------------------------------------------- |
| `AGENTS.md` is required                | Restore or generate the repository's canonical instruction file |
| Required marker, section, or command   | Restore the missing contract in `AGENTS.md`                     |
| Optional instructions lack a reference | Link the tool-specific file back to canonical `AGENTS.md`       |
| Broken markdown link                   | Fix the relative path or restore the linked file                |
| Unsupported YAML field                 | Remove unsupported fields from `.instructions.md` frontmatter   |

**Maintenance**:

When adding new critical information to AI documentation:

1. Update canonical `AGENTS.md`
2. Keep optional tool-specific files linked to `AGENTS.md`
3. Update `validate-ai-docs.test.sh` before changing validator behavior
4. Run `pnpm validate:docs:test` and `pnpm validate:docs`

**Related documentation**:

- [AGENTS.md](../AGENTS.md) - Primary AI documentation
- [.github/copilot-instructions.md](../.github/copilot-instructions.md) - GitHub Copilot instructions

---

## Playwright Snapshot Compression

The snapshot compression scripts have been moved to the Playwright package where they belong.

📍 **Location**: `packages/design-system/playwright/scripts/`

📚 **Full Documentation**: [packages/design-system/playwright/scripts/README.md](../packages/design-system/playwright/scripts/README.md)

**Quick usage**:

```bash
# Manual compression (all snapshots)
pnpm ds:playwright:compress-snapshots

# Pre-commit hook (automatic for staged snapshots)
# Runs automatically when you commit snapshot files
```

**Scripts**:

- `compress-snapshots-precommit.sh` - Automatic compression via pre-commit hook
- `compress-snapshots-manual.sh` - Manual compression of all snapshots

See the [Playwright scripts README](../packages/design-system/playwright/scripts/README.md) for detailed documentation, usage examples, troubleshooting, and technical details.
