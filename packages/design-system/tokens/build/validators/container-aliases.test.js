import assert from 'node:assert/strict';
import fs from 'node:fs';

const core = JSON.parse(fs.readFileSync(new URL('../../src/core/layout/container.json', import.meta.url)));
const component = JSON.parse(fs.readFileSync(new URL('../../src/component/container.json', import.meta.url)));

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

for (const size of sizes) {
  assert.equal(
    core.core.layout.container[size].$value,
    `{primitive.breakpoint.${size}}`,
    `core.layout.container.${size} must be the canonical container width`
  );
  assert.equal(
    component.component.container['max-width'][size].$value,
    `{semantic.layout.breakpoint.${size}}`,
    `component.container.max-width.${size} must remain a hierarchy-safe compatibility alias`
  );
}

console.log('✓ Container token families use canonical core aliases');
