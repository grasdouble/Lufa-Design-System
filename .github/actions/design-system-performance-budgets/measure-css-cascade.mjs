import { spawnSync } from 'node:child_process';
import console from 'node:console';
import { appendFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import process from 'node:process';
import { fileURLToPath, pathToFileURL, URL } from 'node:url';

/** Measure only successful validations; command failures must fail the CI step. */
export function measureCascade(cliPath, themePath) {
  const start = performance.now();
  const result = spawnSync(process.execPath, [cliPath, 'theme-validate', themePath, '--a11y'], {
    encoding: 'utf8',
  });
  if (result.error || result.status !== 0) {
    throw new Error(
      `CSS cascade validation failed: ${result.error?.message ?? result.stderr ?? result.signal}\n${result.stdout ?? ''}`
    );
  }
  return Math.round(performance.now() - start);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const root = fileURLToPath(new URL('../../../', import.meta.url));
  const elapsed = measureCascade(
    resolve(root, 'packages/design-system/cli/dist/cli.js'),
    resolve(root, 'packages/design-system/themes/src/ocean.css')
  );
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `value_ms=${elapsed}\n`);
  console.log(`CSS cascade validation: ${elapsed}ms`);
}
