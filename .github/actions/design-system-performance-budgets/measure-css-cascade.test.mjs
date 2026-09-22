import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { measureCascade } from './measure-css-cascade.mjs';

function withCli(source, callback) {
  const directory = mkdtempSync(path.join(tmpdir(), 'lufa-cascade-'));
  try {
    const cliPath = path.join(directory, 'cli.mjs');
    writeFileSync(cliPath, source);
    callback(cliPath);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('measures a successful theme validation using the public CLI arguments', () => {
  withCli(
    `import assert from 'node:assert/strict';
     assert.deepEqual(process.argv.slice(2), ['theme-validate', 'theme with spaces.css', '--a11y']);`,
    (cliPath) => {
      assert.ok(measureCascade(cliPath, 'theme with spaces.css') >= 0);
    }
  );
});

test('rejects a failed validation instead of reporting its duration', () => {
  withCli("console.error('Invalid theme'); process.exit(1);", (cliPath) => {
    assert.throws(() => measureCascade(cliPath, 'theme.css'), /Invalid theme/);
  });
});

test('rejects an absent CLI entry point', () => {
  assert.throws(() => measureCascade('/missing/lufa-cli.mjs', 'theme.css'), /validation failed/);
});
