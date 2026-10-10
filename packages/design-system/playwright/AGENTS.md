# Playwright visual snapshot rules

## Keep one all-variations snapshot per component

Add visual variations to the component's existing all-variants fixture so each component has one overview test/snapshot containing all representable appearances. The runner may keep separate reference files for configured themes or platforms.

- ✅ Extend the existing all-variants fixture and review its updated light/dark macOS references; Linux references are managed by CI.
- ✅ Add a separate screenshot only when a state or composition cannot be represented clearly in the existing overview.
- ❌ Duplicate the component overview with another snapshot for newly added sizes or appearances, or cover them only with CSS assertions.
