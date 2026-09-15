#!/usr/bin/env bash

set -euo pipefail

# Parse options
INSTALL=false
while [[ $# -gt 0 ]]; do
  case $1 in
    --install|-i)
      INSTALL=true
      shift
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [--install|-i]"
      exit 1
      ;;
  esac
done

echo "📦 Building extension..."
pnpm run build:production

echo "📋 Packaging extension..."
rm -f *.vsix

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")
VSIX_NAME="lufa-ds-preview-${VERSION}.vsix"

# Temporarily use the unscoped Marketplace extension identifier for vsce.
ORIGINAL_PACKAGE_JSON=$(cat package.json)
restore_package_json() {
  printf '%s\n' "$ORIGINAL_PACKAGE_JSON" > package.json
}
trap restore_package_json EXIT

node -e "
const pkg = require('./package.json');
pkg.name = 'lufa-ds-preview';
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Package with vsce
VSCE_NODE_MODULES=$(node -e "const path = require('node:path'); console.log(path.resolve(path.dirname(require.resolve('@vscode/vsce/package.json')), '..', '..'));")
NODE_PATH="${VSCE_NODE_MODULES}${NODE_PATH:+:${NODE_PATH}}" pnpm exec vsce package --no-dependencies --out "$VSIX_NAME"

# Check if VSIX was created
if [ -f "$VSIX_NAME" ]; then
  echo "✅ VSIX file found"
else
  echo "❌ VSIX file not found after packaging"
fi

if [ -f "$VSIX_NAME" ]; then
  echo "✅ Package created successfully: $VSIX_NAME"
  
  # Install if requested
  if [ "$INSTALL" = true ]; then
    echo ""
    echo "🔧 Installing extension locally..."
    code --install-extension "$VSIX_NAME" --force
    echo "✅ Extension installed successfully!"
    echo ""
    echo "🔄 Reload VS Code to activate the extension"
    echo "   Press Cmd+Shift+P and run 'Developer: Reload Window'"
  fi
  
  exit 0
else
  echo "❌ Failed to create package"
  exit 1
fi
