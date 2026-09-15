#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
VALIDATOR="$REPO_ROOT/scripts/validate-ai-docs.sh"
TMP_ROOT=$(mktemp -d "${TMPDIR:-/tmp}/lufa-validate-ai-docs.XXXXXX")

trap 'rm -rf "$TMP_ROOT"' EXIT

write_valid_agents() {
  local destination=$1

  cat > "$destination" <<'EOF'
<!-- BEGIN:AGENTS.shared -->
Shared rules
<!-- END:AGENTS.shared -->

## Build & Validation

- `pnpm all:lint`
- `pnpm all:build`
- `pnpm all:typecheck`

## Tests — Always write or update tests

Tests are required.

## Accessibility — DS-specific requirements

Accessibility is required.

## Design System — Component anatomy

Use the package structure under `packages/design-system/`.

Package scope: `@grasdouble/`.
EOF
}

valid_root="$TMP_ROOT/valid"
mkdir -p "$valid_root"
write_valid_agents "$valid_root/AGENTS.md"

if ! LUFA_DOCS_ROOT="$valid_root" bash "$VALIDATOR" >"$TMP_ROOT/valid.log" 2>&1; then
  cat "$TMP_ROOT/valid.log"
  echo "Expected a current single-source instruction layout to pass."
  exit 1
fi

missing_root="$TMP_ROOT/missing"
mkdir -p "$missing_root"

if LUFA_DOCS_ROOT="$missing_root" bash "$VALIDATOR" >"$TMP_ROOT/missing.log" 2>&1; then
  echo "Expected a missing AGENTS.md file to fail."
  exit 1
fi

broken_link_root="$TMP_ROOT/broken-link"
mkdir -p "$broken_link_root"
write_valid_agents "$broken_link_root/AGENTS.md"
printf '\n[Missing guide](missing-guide.md)\n' >>"$broken_link_root/AGENTS.md"

if LUFA_DOCS_ROOT="$broken_link_root" bash "$VALIDATOR" >"$TMP_ROOT/broken-link.log" 2>&1; then
  echo "Expected a broken relative documentation link to fail."
  exit 1
fi

echo "AI documentation validator tests passed."
