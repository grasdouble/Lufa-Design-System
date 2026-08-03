import assert from 'node:assert/strict';
import test from 'node:test';

import { calculateTokenStatistics, renderReadmeStatistics } from './generate-token-statistics.mjs';

const metadata = {
  primitive: {
    color: {
      blue: { value: '#0000ff', type: 'color' },
    },
  },
  core: {
    color: {
      brand: { value: '#0000ff', type: 'color' },
    },
  },
};

test('calculates token and CSS declaration totals from generated outputs', () => {
  const statistics = calculateTokenStatistics(
    metadata,
    ':root { --lufa-primitive-color-blue: #00f; --lufa-core-color-brand: #00f; }\n[data-mode=dark] { --lufa-core-color-brand: #000; }'
  );

  assert.deepEqual(statistics, {
    tokenCount: 2,
    tokensByLevel: {
      primitive: 1,
      core: 1,
      semantic: 0,
      component: 0,
    },
    cssDeclarationCount: 3,
    uniqueCssPropertyCount: 2,
  });
});

test('renders the README statistics block from generated data', () => {
  const block = renderReadmeStatistics({
    tokenCount: 2,
    tokensByLevel: { primitive: 1, core: 1, semantic: 0, component: 0 },
    cssDeclarationCount: 3,
    uniqueCssPropertyCount: 2,
  });

  assert.match(block, /2 source tokens/);
  assert.match(block, /\| Primitive \|\s+1 \|/);
  assert.match(block, /3 CSS declarations/);
});
