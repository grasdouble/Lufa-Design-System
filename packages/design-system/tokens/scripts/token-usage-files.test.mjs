import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { collectFiles } from './token-usage-files.mjs';

test('collects matching source files while excluding named directories', () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'lufa-token-usage-'));

  try {
    mkdirSync(path.join(directory, 'src', '__tests__'), { recursive: true });
    mkdirSync(path.join(directory, 'src', 'nested'), { recursive: true });
    writeFileSync(path.join(directory, 'src', 'component.ts'), 'export const component = true;\n');
    writeFileSync(path.join(directory, 'src', 'nested', 'styles.css'), '.component {}\n');
    writeFileSync(path.join(directory, 'src', '__tests__', 'fixture.ts'), 'export const fixture = true;\n');

    const files = collectFiles(directory, ['.css', '.ts'], new Set(['__tests__'])).map((file) =>
      path.relative(directory, file)
    );

    assert.deepEqual(files.sort(), ['src/component.ts', 'src/nested/styles.css']);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
