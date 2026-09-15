#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const LEVELS = ['primitive', 'core', 'semantic', 'component'];
const README_START = '<!-- token-statistics:start -->';
const README_END = '<!-- token-statistics:end -->';

export function calculateTokenStatistics(metadata, css) {
  const tokensByLevel = Object.fromEntries(LEVELS.map((level) => [level, 0]));

  function visit(value, level) {
    if (!value || typeof value !== 'object') {
      return;
    }
    if (Object.hasOwn(value, 'value') && Object.hasOwn(value, 'type')) {
      if (level in tokensByLevel) {
        tokensByLevel[level]++;
      }
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      visit(child, level ?? key);
    }
  }

  visit(metadata);

  const declarations = [...css.matchAll(/--lufa-[\w-]+:/g)].map(([declaration]) => declaration);

  return {
    tokenCount: Object.values(tokensByLevel).reduce((total, count) => total + count, 0),
    tokensByLevel,
    cssDeclarationCount: declarations.length,
    uniqueCssPropertyCount: new Set(declarations).size,
  };
}

export function renderReadmeStatistics(statistics) {
  const { tokensByLevel } = statistics;
  const row = (label, count) => `| ${label.padEnd(9)} | ${String(count).padStart(13)} |`;
  const total = `**${statistics.tokenCount}**`;

  return `${README_START}

The build currently contains **${statistics.tokenCount} source tokens** and emits **${statistics.uniqueCssPropertyCount} unique CSS custom properties** across **${statistics.cssDeclarationCount} CSS declarations** (including mode overrides).

| Level     | Source tokens |
| --------- | ------------: |
${row('Primitive', tokensByLevel.primitive)}
${row('Core', tokensByLevel.core)}
${row('Semantic', tokensByLevel.semantic)}
${row('Component', tokensByLevel.component)}
| **Total** | ${total.padStart(13)} |

${README_END}`;
}

function updateReadme(readme, statistics) {
  const start = readme.indexOf(README_START);
  const end = readme.indexOf(README_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error('README token statistics markers are missing or invalid');
  }

  return `${readme.slice(0, start)}${renderReadmeStatistics(statistics)}${readme.slice(end + README_END.length)}`;
}

function run() {
  const packageDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const distDirectory = path.join(packageDirectory, 'dist');
  const metadata = JSON.parse(fs.readFileSync(path.join(distDirectory, 'tokens-metadata.json'), 'utf8'));
  const css = fs.readFileSync(path.join(distDirectory, 'tokens.css'), 'utf8');
  const statistics = calculateTokenStatistics(metadata, css);
  const outputPath = path.join(distDirectory, 'token-statistics.json');
  const readmePath = path.join(packageDirectory, 'README.md');

  fs.writeFileSync(outputPath, `${JSON.stringify(statistics, null, 2)}\n`);

  const readme = fs.readFileSync(readmePath, 'utf8');
  const expectedReadme = updateReadme(readme, statistics);

  if (process.argv.includes('--write-readme')) {
    fs.writeFileSync(readmePath, expectedReadme);
    console.log(`✓ Updated README statistics and ${path.relative(packageDirectory, outputPath)}`);
    return;
  }

  if (readme !== expectedReadme) {
    throw new Error('README token statistics are stale. Run "pnpm stats:update".');
  }

  console.log(`✓ Generated statistics for ${statistics.tokenCount} tokens`);
}

if (fileURLToPath(import.meta.url) === path.resolve(process.argv[1] ?? '')) {
  try {
    run();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exitCode = 1;
  }
}
