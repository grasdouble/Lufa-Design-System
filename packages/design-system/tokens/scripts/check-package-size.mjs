#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const KIB = 1024;

export const PACKAGE_BUDGETS = {
  total: { warning: 1200 * KIB, maximum: 1280 * KIB },
  files: {
    'tokens.css': { warning: 120 * KIB, maximum: 150 * KIB },
    'tokens-metadata.json': { warning: 450 * KIB, maximum: 500 * KIB },
    'tokens-source-merged.json': { warning: 350 * KIB, maximum: 400 * KIB },
    'tokens.map.json': { warning: 90 * KIB, maximum: 110 * KIB },
    'themeable-tokens-advanced.css': { warning: 120 * KIB, maximum: 140 * KIB },
  },
  wcagMetadata: { warning: 115 * KIB, maximum: 128 * KIB },
};

function formatSize(bytes) {
  return `${(bytes / KIB).toFixed(2)} KiB`;
}

function evaluateBudget(label, size, budget, warnings, failures) {
  if (size > budget.maximum) {
    failures.push(`${label}: ${formatSize(size)} exceeds ${formatSize(budget.maximum)}`);
  } else if (size > budget.warning) {
    warnings.push(`${label}: ${formatSize(size)} exceeds warning threshold ${formatSize(budget.warning)}`);
  }
}

export function evaluatePackageSize(fileSizes, budgets = PACKAGE_BUDGETS, wcagMetadataBytes = 0) {
  const warnings = [];
  const failures = [];
  const totalBytes = Object.values(fileSizes).reduce((total, size) => total + size, 0);

  evaluateBudget('Complete dist', totalBytes, budgets.total, warnings, failures);

  for (const [fileName, budget] of Object.entries(budgets.files)) {
    if (fileSizes[fileName] === undefined) {
      failures.push(`${fileName}: required published artifact is missing`);
      continue;
    }
    evaluateBudget(fileName, fileSizes[fileName], budget, warnings, failures);
  }

  evaluateBudget('WCAG metadata', wcagMetadataBytes, budgets.wcagMetadata, warnings, failures);

  return { failed: failures.length > 0, failures, warnings, totalBytes };
}

export function calculateWcagMetadataBytes(metadata) {
  const metadataWithoutWcag = structuredClone(metadata);

  function removeWcag(value) {
    if (!value || typeof value !== 'object') return;

    const lufa = value.extensions?.lufa;
    if (lufa && typeof lufa === 'object') {
      delete lufa.wcagAALarge;
      delete lufa.wcagAAA;
    }

    for (const child of Object.values(value)) removeWcag(child);
  }

  removeWcag(metadataWithoutWcag);
  const serializedMetadata = `${JSON.stringify(metadata, null, 2)}\n`;
  const serializedWithoutWcag = `${JSON.stringify(metadataWithoutWcag, null, 2)}\n`;
  return Buffer.byteLength(serializedMetadata) - Buffer.byteLength(serializedWithoutWcag);
}

export function collectFileSizes(directory) {
  const fileSizes = {};

  function visit(currentDirectory) {
    for (const entry of fs.readdirSync(currentDirectory, { withFileTypes: true })) {
      const entryPath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        visit(entryPath);
      } else if (entry.isFile()) {
        const relativePath = path.relative(directory, entryPath).split(path.sep).join('/');
        fileSizes[relativePath] = fs.statSync(entryPath).size;
      }
    }
  }

  visit(directory);
  return fileSizes;
}

function run() {
  const packageDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const distDirectory = path.join(packageDirectory, 'dist');

  if (!fs.existsSync(distDirectory)) {
    throw new Error(`Published dist not found at ${distDirectory}. Run "pnpm build" first.`);
  }

  const fileSizes = collectFileSizes(distDirectory);
  const metadataPath = path.join(distDirectory, 'tokens-metadata.json');
  const wcagMetadataBytes = calculateWcagMetadataBytes(JSON.parse(fs.readFileSync(metadataPath, 'utf8')));
  const result = evaluatePackageSize(fileSizes, PACKAGE_BUDGETS, wcagMetadataBytes);

  console.log(`Published dist: ${formatSize(result.totalBytes)} / ${formatSize(PACKAGE_BUDGETS.total.maximum)}`);
  console.log(`WCAG metadata: ${formatSize(wcagMetadataBytes)} / ${formatSize(PACKAGE_BUDGETS.wcagMetadata.maximum)}`);

  for (const warning of result.warnings) {
    console.warn(`⚠️  ${warning}`);
  }
  for (const failure of result.failures) {
    console.error(`❌ ${failure}`);
  }

  if (result.failed) {
    process.exitCode = 1;
  } else {
    console.log('✓ Published token package is within size budgets');
  }
}

if (fileURLToPath(import.meta.url) === path.resolve(process.argv[1] ?? '')) {
  try {
    run();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exitCode = 1;
  }
}
