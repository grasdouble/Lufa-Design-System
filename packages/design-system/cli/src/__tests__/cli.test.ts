import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const tsxCli = fileURLToPath(import.meta.resolve('tsx/cli'));
const cliPath = fileURLToPath(new URL('../cli.ts', import.meta.url));

function runCli(args: string[], cwd: string) {
  return spawnSync(process.execPath, [tsxCli, cliPath, ...args], {
    cwd,
    encoding: 'utf-8',
    timeout: 5_000,
  });
}

describe('CLI behavior', () => {
  it('fails fast outside a TTY when an output name is omitted', () => {
    const result = runCli(['theme-template'], mkdtempSync(join(tmpdir(), 'lufa-cli-')));

    expect(result.status).toBe(2);
    expect(result.stderr).toContain('--output-name');
    expect(result.error).toBeUndefined();
  });

  it.each(['../outside', 'nested/file', 'two words', ' theme ', '   '])('rejects the unsafe output name %j', (name) => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const result = runCli(['theme-template', '--output-name', name], cwd);
    expect(result.status).toBe(2);
  });

  it('refuses overwrites unless --force is passed', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const outputPath = join(cwd, 'theme.css');
    writeFileSync(outputPath, 'original', 'utf-8');

    const refused = runCli(['theme-template', '--output-name', 'theme'], cwd);
    expect(refused.status).toBe(2);
    expect(readFileSync(outputPath, 'utf-8')).toBe('original');

    const forced = runCli(['theme-template', '--output-name', 'theme', '--force'], cwd);
    expect(forced.status).toBe(0);
    expect(readFileSync(outputPath, 'utf-8')).not.toBe('original');
  });

  it('rejects mutually exclusive validation selectors', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const file = join(cwd, 'theme.css');
    writeFileSync(file, ':root {}', 'utf-8');

    const result = runCli(['theme-validate', file, '--a11y', '--format'], cwd);

    expect(result.status).toBe(2);
    expect(result.stderr).toContain('cannot be used with option');
  });

  it('rejects a completeness level when the selected check does not use it', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const file = join(cwd, 'theme.css');
    writeFileSync(file, ':root {}', 'utf-8');

    const result = runCli(['theme-validate', file, '--format', '--level', 'advanced'], cwd);

    expect(result.status).toBe(2);
    expect(result.stderr).toContain('cannot be used with option');
  });

  it('rejects a positional file combined with --dir', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const file = join(cwd, 'theme.css');
    writeFileSync(file, ':root {}', 'utf-8');

    const result = runCli(['theme-validate', file, '--dir', cwd], cwd);

    expect(result.status).toBe(2);
    expect(result.stderr).toContain('either');
  });

  it('preserves success and validation-failure exit codes', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    const validFile = join(cwd, 'valid.css');
    const invalidFile = join(cwd, 'invalid.css');
    writeFileSync(validFile, ':root { --lufa-color-test: #fff; }', 'utf-8');
    writeFileSync(invalidFile, ':root { --lufa-color-test: nope; }', 'utf-8');

    expect(runCli(['theme-validate', validFile, '--format'], cwd).status).toBe(0);
    expect(runCli(['theme-validate', invalidFile, '--format'], cwd).status).toBe(1);
  });

  it('validates directory files in deterministic name order', () => {
    const cwd = mkdtempSync(join(tmpdir(), 'lufa-cli-'));
    writeFileSync(join(cwd, 'z-last.css'), ':root {}', 'utf-8');
    writeFileSync(join(cwd, 'a-first.css'), ':root {}', 'utf-8');

    const output = execFileSync(process.execPath, [tsxCli, cliPath, 'theme-validate', '--format', '--dir', cwd], {
      cwd,
      encoding: 'utf-8',
    });

    expect(output.indexOf('a-first.css')).toBeLessThan(output.indexOf('z-last.css'));
  });
});
