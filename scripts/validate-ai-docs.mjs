#!/usr/bin/env node

/* global console, process */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(process.env.LUFA_DOCS_ROOT ?? path.join(scriptDirectory, '..'));
const requiredInstructionsPath = 'AGENTS.md';
const optionalInstructionPaths = ['CLAUDE.md', '.github/copilot-instructions.md'];
const requiredAgentSections = [
  '<!-- BEGIN:AGENTS.shared -->',
  '<!-- END:AGENTS.shared -->',
  '## Build & Validation',
  '## Tests — Always write or update tests',
  '## Accessibility — DS-specific requirements',
  '## Design System — Component anatomy',
];
const requiredCommands = ['pnpm all:lint', 'pnpm all:build', 'pnpm all:typecheck'];
const supportedFrontmatterFields = new Set(['description', 'applyTo', 'name']);

let errors = 0;
let warnings = 0;

function absolutePath(relativePath) {
  return path.join(repositoryRoot, relativePath);
}

function relativePath(filePath) {
  return path.relative(repositoryRoot, filePath) || '.';
}

function reportError(message) {
  errors += 1;
  console.error(`❌ ERROR: ${message}`);
}

function reportWarning(message) {
  warnings += 1;
  console.warn(`⚠️  WARNING: ${message}`);
}

function reportSuccess(message) {
  console.log(`✅ ${message}`);
}

function collectFiles(directory, predicate) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(entryPath, predicate));
    } else if (predicate(entryPath)) {
      files.push(entryPath);
    }
  }
  return files;
}

function validateRequiredInstructions() {
  console.log('Checking canonical agent instructions...');

  const agentsPath = absolutePath(requiredInstructionsPath);
  if (!fs.existsSync(agentsPath)) {
    reportError(`${requiredInstructionsPath} is required`);
    return [];
  }

  const agentsContent = fs.readFileSync(agentsPath, 'utf8');
  for (const section of requiredAgentSections) {
    if (!agentsContent.includes(section)) {
      reportError(`${requiredInstructionsPath} is missing required marker or section: ${section}`);
    }
  }

  for (const command of requiredCommands) {
    if (!agentsContent.includes(command)) {
      reportError(`${requiredInstructionsPath} is missing required validation command: ${command}`);
    }
  }

  if (!agentsContent.includes('@grasdouble/')) {
    reportError(`${requiredInstructionsPath} must document the @grasdouble/ package scope`);
  }

  const instructionPaths = [requiredInstructionsPath];
  for (const optionalPath of optionalInstructionPaths) {
    const fullPath = absolutePath(optionalPath);
    if (!fs.existsSync(fullPath)) {
      continue;
    }

    instructionPaths.push(optionalPath);
    const content = fs.readFileSync(fullPath, 'utf8');
    if (!content.includes(requiredInstructionsPath)) {
      reportError(`${optionalPath} must reference canonical ${requiredInstructionsPath} instructions`);
    }
  }

  if (errors === 0) {
    reportSuccess(`Canonical instructions are valid (${instructionPaths.join(', ')})`);
  }

  return instructionPaths;
}

function validateInstructionFrontmatter() {
  console.log('\nValidating instruction frontmatter...');

  const instructionFiles = collectFiles(absolutePath('.github/instructions'), (filePath) =>
    filePath.endsWith('.instructions.md')
  );

  for (const filePath of instructionFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.startsWith('---\n')) {
      continue;
    }

    const closingDelimiter = content.indexOf('\n---', 4);
    if (closingDelimiter === -1) {
      reportError(`${relativePath(filePath)} has unterminated YAML frontmatter`);
      continue;
    }

    const frontmatter = content.slice(4, closingDelimiter);
    for (const line of frontmatter.split('\n')) {
      if (line.trim() === '' || /^\s/.test(line)) {
        continue;
      }

      const match = /^([^:]+):/.exec(line);
      if (!match) {
        reportError(`${relativePath(filePath)} has invalid YAML frontmatter line: ${line}`);
        continue;
      }

      const field = match[1].trim();
      if (!supportedFrontmatterFields.has(field)) {
        reportWarning(`${relativePath(filePath)} uses unsupported frontmatter field: ${field}`);
      }
    }
  }

  if (errors === 0) {
    reportSuccess(`Instruction frontmatter is valid (${instructionFiles.length} files checked)`);
  }

  return instructionFiles;
}

function markdownLinkTargets(content) {
  const targets = [];
  const linkPattern = /\[[^\]]*]\(([^)]+)\)/g;

  for (const match of content.matchAll(linkPattern)) {
    let target = match[1].trim();
    if (target.startsWith('<') && target.endsWith('>')) {
      target = target.slice(1, -1);
    } else {
      target = target.split(/\s+/)[0];
    }
    targets.push(target);
  }

  return targets;
}

function validateMarkdownLinks(markdownPaths) {
  console.log('\nChecking markdown links...');

  for (const markdownPath of markdownPaths) {
    const sourcePath = absolutePath(markdownPath);
    const sourceDirectory = path.dirname(sourcePath);
    const content = fs.readFileSync(sourcePath, 'utf8');

    for (const rawTarget of markdownLinkTargets(content)) {
      if (rawTarget === '' || rawTarget.startsWith('#') || /^(?:https?:|mailto:|tel:|data:)/i.test(rawTarget)) {
        continue;
      }

      const targetWithoutFragment = rawTarget.split('#')[0].split('?')[0];
      if (targetWithoutFragment === '') {
        continue;
      }

      const decodedTarget = decodeURIComponent(targetWithoutFragment);
      const resolvedTarget = decodedTarget.startsWith('/')
        ? absolutePath(decodedTarget.slice(1))
        : path.resolve(sourceDirectory, decodedTarget);

      if (!fs.existsSync(resolvedTarget)) {
        reportError(`Broken link in ${markdownPath}: ${rawTarget}`);
      }
    }
  }

  if (errors === 0) {
    reportSuccess('All relative markdown links resolve');
  }
}

function validateInstructionSizes(instructionPaths) {
  console.log('\nChecking instruction file sizes...');

  for (const instructionPath of instructionPaths) {
    const lineCount = fs.readFileSync(absolutePath(instructionPath), 'utf8').split('\n').length;
    if (lineCount > 800) {
      reportWarning(`${instructionPath} has ${lineCount} lines; consider splitting supporting guidance`);
    }
  }

  reportSuccess(`Instruction file sizes checked (${instructionPaths.length} files)`);
}

function validateOptionalConfig() {
  console.log('\nChecking optional agent configuration...');

  const configPath = absolutePath('config.toml');
  if (!fs.existsSync(configPath)) {
    reportSuccess('No optional config.toml present');
    return;
  }

  if (!fs.readFileSync(configPath, 'utf8').includes(requiredInstructionsPath)) {
    reportError(`config.toml must reference ${requiredInstructionsPath}`);
    return;
  }

  reportSuccess(`config.toml references ${requiredInstructionsPath}`);
}

console.log('🔍 Validating AI documentation consistency...\n');

const instructionPaths = validateRequiredInstructions();
const instructionFiles = validateInstructionFrontmatter();
const markdownPaths = [...instructionPaths, ...instructionFiles.map((filePath) => relativePath(filePath))];

if (markdownPaths.length > 0) {
  validateMarkdownLinks(markdownPaths);
  validateInstructionSizes(instructionPaths);
}
validateOptionalConfig();

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (errors > 0) {
  console.error(`❌ Validation failed with ${errors} error(s) and ${warnings} warning(s)`);
  process.exitCode = 1;
} else {
  reportSuccess(`Validation passed with ${warnings} warning(s)`);
}
