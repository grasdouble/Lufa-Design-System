#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { basename, resolve as resolvePath } from 'node:path';
import { createInterface } from 'node:readline/promises';
import chalk from 'chalk';
import { Command, CommanderError, Option } from 'commander';

import type { A11yResult } from './validators/a11y.js';
import type { CompletenessResult, ThemeLevel } from './validators/completeness.js';
import { parseCSSFile } from './utils/parse-css.js';
import { validateA11y } from './validators/a11y.js';
import { validateCompleteness } from './validators/completeness.js';
import { validateFormat } from './validators/format.js';

type TemplateLevel = ThemeLevel;

type ValidateOptions = {
  a11y?: boolean;
  completeness?: boolean;
  format?: boolean;
  dir?: string;
  level: ThemeLevel;
};

type TemplateOptions = {
  force?: boolean;
  outputName?: string;
};

const TEMPLATE_LEVELS: TemplateLevel[] = ['starter', 'extended', 'advanced'];
const PACKAGE_VERSION = (
  JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8')) as { version: string }
).version;

const TEMPLATE_EXPORT_MAP: Record<TemplateLevel, string> = {
  starter: '@grasdouble/lufa_design-system-tokens/themeable-starter',
  extended: '@grasdouble/lufa_design-system-tokens/themeable-extended',
  advanced: '@grasdouble/lufa_design-system-tokens/themeable-advanced',
};

class CliUsageError extends Error {}

function printFatalError(error: unknown): void {
  const message = error instanceof Error ? error.message : 'An unexpected error occurred';
  console.error(chalk.red(`✗ Error: ${message}`));
}

async function promptOutputName(): Promise<string> {
  const readline = createInterface({ input: process.stdin, output: process.stdout });
  try {
    return (await readline.question('Output file name (without .css): ')).trim();
  } finally {
    readline.close();
  }
}

function compareFileNames(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

async function resolveFiles(themeFile: string | undefined, dir: string | undefined): Promise<string[]> {
  if (themeFile && dir) {
    throw new CliUsageError('Provide either <theme-file> or --dir <directory>, not both');
  }

  if (dir) {
    const entries = (await readdir(dir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && entry.name.endsWith('.css'))
      .map((entry) => entry.name)
      .sort(compareFileNames);

    if (entries.length === 0) {
      throw new CliUsageError(`No CSS files found in: ${dir}`);
    }
    return entries.map((entry) => resolvePath(dir, entry));
  }

  if (themeFile) {
    return [themeFile];
  }

  throw new CliUsageError('Provide a <theme-file> or use --dir <directory>');
}

function printA11yResult(result: A11yResult): void {
  for (const error of result.errors) {
    console.log(chalk.red(`  ✗ ${error}`));
  }

  for (const modeResult of result.modes) {
    const modeLabel = `[${modeResult.mode}]`;
    if (modeResult.valid && modeResult.skipped === 0) {
      console.log(chalk.green(`  ✓ ${modeLabel} ${modeResult.totalChecks} checks passed`));
    } else if (modeResult.valid) {
      console.log(
        chalk.yellow(`  ⚠ ${modeLabel} ${modeResult.totalChecks} checks passed, ${modeResult.skipped} skipped`)
      );
    } else {
      console.log(
        chalk.red(
          `  ✗ ${modeLabel} ${modeResult.violations.length} violation(s), ${modeResult.skipped} unresolved check(s)`
        )
      );
    }

    for (const { foreground, background, ratio, required, type } of modeResult.violations) {
      const standard = type === 'text' ? 'Text' : 'UI';
      console.log(
        chalk.red(`      ${foreground} on ${background} — ${ratio}:1 (needs ${required}:1 WCAG AA ${standard})`)
      );
    }

    for (const { foreground, background, reason } of modeResult.skippedChecks) {
      console.log(chalk.yellow(`      ${foreground} on ${background} — skipped: ${reason}`));
    }
  }
}

function printCompletenessResult(result: CompletenessResult): void {
  if (result.valid) {
    console.log(
      chalk.green(`  ✓ Completeness (${result.level}) — all ${result.totalRequired} required tokens present`)
    );
    return;
  }

  for (const mode of result.modes) {
    for (const token of mode.missingTokens) {
      console.log(chalk.red(`  ✗ [${mode.mode}] Missing required ${result.level} token: ${token}`));
    }
  }
}

async function runCheckAll(file: string, level: ThemeLevel): Promise<boolean> {
  const [properties, completenessResult, a11yResult] = await Promise.all([
    parseCSSFile(file),
    validateCompleteness(file, level),
    validateA11y(file),
  ]);
  const formatResult = validateFormat(properties);

  printCompletenessResult(completenessResult);

  if (!formatResult.valid) {
    for (const { token, line, expectedFormat } of formatResult.errors) {
      console.log(chalk.red(`  ✗ ${token} (line ${line}): Invalid format — ${expectedFormat}`));
    }
  } else {
    console.log(chalk.green('  ✓ Format — all token values are valid'));
  }

  console.log('');
  console.log(chalk.bold('  A11y (WCAG AA):'));
  printA11yResult(a11yResult);

  return completenessResult.valid && formatResult.valid && a11yResult.valid;
}

async function runCheckA11y(file: string): Promise<boolean> {
  const result = await validateA11y(file);
  printA11yResult(result);
  return result.valid;
}

async function runCheckCompleteness(file: string, level: ThemeLevel): Promise<boolean> {
  const result = await validateCompleteness(file, level);
  printCompletenessResult(result);
  return result.valid;
}

async function runCheckFormat(file: string): Promise<boolean> {
  const result = validateFormat(await parseCSSFile(file));
  if (!result.valid) {
    for (const { token, line, expectedFormat } of result.errors) {
      console.log(chalk.red(`  ✗ ${token} (line ${line}): Invalid format — ${expectedFormat}`));
    }
  } else {
    console.log(chalk.green('  ✓ All token values are valid'));
  }
  return result.valid;
}

function validateOutputName(rawOutputName: string): string {
  const outputName = rawOutputName.trim();
  if (rawOutputName !== outputName || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(outputName) || outputName.endsWith('.css')) {
    throw new CliUsageError(
      'Output name must be a file name without spaces, path separators, traversal segments, or the .css extension'
    );
  }
  return outputName;
}

async function runTemplate(level: TemplateLevel, rawOutputName: string, force: boolean): Promise<void> {
  const outputName = validateOutputName(rawOutputName);
  const exportPath = TEMPLATE_EXPORT_MAP[level];
  const templatePath = new URL(import.meta.resolve(exportPath));
  const content = await readFile(templatePath, 'utf-8');
  const fileName = `${outputName}.css`;
  const outputPath = resolvePath(process.cwd(), fileName);

  try {
    await writeFile(outputPath, content, {
      encoding: 'utf-8',
      flag: force ? 'w' : 'wx',
    });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'EEXIST') {
      throw new CliUsageError(`${fileName} already exists; pass --force to overwrite it`);
    }
    throw error;
  }

  console.log(chalk.green(`✓ Created ${fileName}`));
}

function createProgram(setExitCode: (exitCode: number) => void): Command {
  const program = new Command();
  program
    .name('lufa-ds-cli')
    .description('Lufa Design System CLI')
    .version(PACKAGE_VERSION)
    .enablePositionalOptions()
    .addHelpCommand(true)
    .exitOverride();

  program
    .command('theme-validate [theme-file]')
    .description('Validate a theme CSS file against Lufa Design System requirements')
    .addOption(new Option('--a11y', 'Run WCAG AA contrast check only').conflicts(['format', 'completeness']))
    .addOption(new Option('--format', 'Run format check only').conflicts(['a11y', 'completeness']))
    .addOption(new Option('--completeness', 'Run completeness check only').conflicts(['a11y', 'format']))
    .addOption(new Option('-d, --dir <directory>', 'Validate all *.css files in a directory'))
    .addOption(
      new Option('--level <level>', 'Required token level for completeness')
        .choices(TEMPLATE_LEVELS)
        .conflicts(['a11y', 'format'])
        .default('starter')
    )
    .action(async (themeFile: string | undefined, options: ValidateOptions) => {
      const files = await resolveFiles(themeFile, options.dir);
      let allValid = true;

      for (const file of files) {
        const fileLabel = files.length > 1 ? chalk.bold(basename(file)) : file;
        console.log(chalk.cyan(`🔍 ${fileLabel}\n`));

        let valid: boolean;
        if (options.a11y) valid = await runCheckA11y(file);
        else if (options.format) valid = await runCheckFormat(file);
        else if (options.completeness) valid = await runCheckCompleteness(file, options.level);
        else valid = await runCheckAll(file, options.level);

        allValid = allValid && valid;
        console.log('');
      }

      if (allValid) {
        console.log(chalk.green.bold('✅ All checks passed!\n'));
        setExitCode(0);
      } else {
        console.log(chalk.red.bold('❌ Validation failed\n'));
        setExitCode(1);
      }
    });

  program
    .command('theme-template [level]')
    .description(`Create a theme CSS file in the current directory (levels: ${TEMPLATE_LEVELS.join(', ')})`)
    .addOption(new Option('-o, --output-name <name>', 'Output file name without the .css extension'))
    .addOption(new Option('-f, --force', 'Overwrite an existing output file'))
    .action(async (levelArg: string | undefined, options: TemplateOptions) => {
      const level = (levelArg ?? 'starter') as TemplateLevel;
      if (!TEMPLATE_LEVELS.includes(level)) {
        throw new CliUsageError(`Invalid level: "${levelArg}". Must be one of: ${TEMPLATE_LEVELS.join(', ')}`);
      }

      if (!options.outputName && !process.stdin.isTTY) {
        throw new CliUsageError('--output-name is required when stdin is not an interactive TTY');
      }

      const outputName = options.outputName ?? (await promptOutputName());
      if (!outputName) {
        throw new CliUsageError('Output file name is required');
      }

      await runTemplate(level, outputName, options.force ?? false);
      setExitCode(0);
    });

  return program;
}

export async function runCLI(args: string[]): Promise<number> {
  let exitCode = 0;
  const program = createProgram((nextExitCode) => {
    exitCode = nextExitCode;
  });

  try {
    await program.parseAsync(args, { from: 'user' });
    return exitCode;
  } catch (error) {
    if (error instanceof CommanderError) {
      return error.exitCode === 0 ? 0 : 2;
    }
    printFatalError(error);
    return error instanceof CliUsageError ? 2 : 2;
  }
}

const argv = process.argv.slice(2);
const normalizedArgs = argv[0] === '--' ? argv.slice(1) : argv;
process.exitCode = await runCLI(normalizedArgs);
