import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { calculateWcagMetadataBytes, collectFileSizes, evaluatePackageSize } from './check-package-size.mjs';

test('fails when the complete dist exceeds its budget', () => {
  const result = evaluatePackageSize(
    {
      'tokens.css': 100,
      'tokens-metadata.json': 200,
    },
    {
      total: { warning: 250, maximum: 299 },
      files: {},
      wcagMetadata: { warning: 50, maximum: 100 },
    },
    0
  );

  assert.equal(result.failed, true);
  assert.match(result.failures.join('\n'), /complete dist/i);
});

test('caps CSS, metadata, and WCAG metadata independently', () => {
  const budgets = {
    total: { warning: 1_000, maximum: 2_000 },
    files: {
      'tokens.css': { warning: 100, maximum: 150 },
      'tokens-metadata.json': { warning: 200, maximum: 250 },
    },
    wcagMetadata: { warning: 50, maximum: 75 },
  };

  assert.equal(evaluatePackageSize({ 'tokens.css': 151 }, budgets, 0).failed, true);
  assert.equal(evaluatePackageSize({ 'tokens-metadata.json': 251 }, budgets, 0).failed, true);
  assert.equal(evaluatePackageSize({}, budgets, 76).failed, true);
});

test('fails when a budgeted published artifact is missing', () => {
  const result = evaluatePackageSize(
    { 'tokens.css': 100 },
    {
      total: { warning: 1_000, maximum: 2_000 },
      files: {
        'tokens.css': { warning: 100, maximum: 150 },
        'tokens.map.json': { warning: 100, maximum: 150 },
      },
      wcagMetadata: { warning: 50, maximum: 100 },
    },
    0
  );

  assert.equal(result.failed, true);
  assert.match(result.failures.join('\n'), /tokens\.map\.json.*missing/i);
});

test('counts nested files in the complete published dist', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'lufa-token-size-'));

  try {
    mkdirSync(path.join(directory, 'nested'));
    writeFileSync(path.join(directory, 'root.css'), 'root');
    writeFileSync(path.join(directory, 'nested', 'metadata.json'), 'nested');

    assert.deepEqual(collectFileSizes(directory), {
      'nested/metadata.json': 6,
      'root.css': 4,
    });
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('measures WCAG metadata using the published pretty-printed JSON delta', () => {
  const metadata = {
    color: {
      extensions: {
        lufa: {
          source: 'color.blue.500',
          wcagAALarge: { white: true },
          wcagAAA: { white: false },
        },
      },
    },
  };
  const withoutWcag = {
    color: {
      extensions: {
        lufa: {
          source: 'color.blue.500',
        },
      },
    },
  };
  const expected =
    Buffer.byteLength(`${JSON.stringify(metadata, null, 2)}\n`) -
    Buffer.byteLength(`${JSON.stringify(withoutWcag, null, 2)}\n`);

  assert.equal(calculateWcagMetadataBytes(metadata), expected);
});
