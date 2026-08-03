/**
 * WCAG 2.2 AA contrast validation for Lufa themes.
 */

import { readFileSync } from 'node:fs';

import type { CSSCustomProperty, CSSSpecificity, ThemeMode } from '../utils/parse-css.js';
import { getColorPairsToCheck } from '../utils/contrast.js';
import { parseThemeCSSContent, resolveCSSVarValueDetailed } from '../utils/parse-css.js';
import { getContrastRatio, meetsWCAG_AA_Text, meetsWCAG_AA_UI } from '../utils/wcag.js';

export type A11yMode = ThemeMode;

export type A11yViolation = {
  foreground: string;
  background: string;
  ratio: number;
  required: number;
  type: 'text' | 'ui';
  mode: A11yMode;
};

export type SkippedContrastCheck = {
  foreground: string;
  background: string;
  reason: string;
};

export type A11yModeResult = {
  mode: A11yMode;
  valid: boolean;
  violations: A11yViolation[];
  totalChecks: number;
  skipped: number;
  skippedChecks: SkippedContrastCheck[];
};

export type A11yResult = {
  valid: boolean;
  modes: A11yModeResult[];
  totalViolations: number;
  errors: string[];
};

type TokenMap = Map<string, string>;
type TokenSource = TokenMap | CSSCustomProperty[];
type ModeTokenSources = Partial<Record<ThemeMode, TokenSource>>;
type BaseTokens = TokenMap | ModeTokenSources;
type ColorPair = [string, string, 'text' | 'ui'];

let baseTokensCache: ModeTokenSources | null = null;

type CascadeValue = {
  value: string;
  important: boolean;
  layer?: number[];
  specificity: CSSSpecificity;
  sourceOrder: number;
};

function compareSpecificity(left: CSSSpecificity, right: CSSSpecificity): number {
  for (let index = 0; index < left.length; index++) {
    if (left[index] !== right[index]) return left[index] - right[index];
  }
  return 0;
}

function candidateWins(existing: CascadeValue, candidate: CascadeValue): boolean {
  if (existing.important !== candidate.important) return candidate.important;

  const existingLayered = existing.layer !== undefined;
  const candidateLayered = candidate.layer !== undefined;
  if (existingLayered !== candidateLayered) {
    return existing.important ? candidateLayered : !candidateLayered;
  }

  if (existingLayered && candidateLayered) {
    const existingLayer = existing.layer!;
    const candidateLayer = candidate.layer!;
    const sharedDepth = Math.min(existingLayer.length, candidateLayer.length);
    for (let index = 0; index < sharedDepth; index++) {
      if (existingLayer[index] !== candidateLayer[index]) {
        return existing.important
          ? candidateLayer[index] < existingLayer[index]
          : candidateLayer[index] > existingLayer[index];
      }
    }
    if (existingLayer.length !== candidateLayer.length) {
      return existing.important
        ? candidateLayer.length > existingLayer.length
        : candidateLayer.length < existingLayer.length;
    }
  }

  const specificityOrder = compareSpecificity(candidate.specificity, existing.specificity);
  if (specificityOrder !== 0) return specificityOrder > 0;
  return candidate.sourceOrder >= existing.sourceOrder;
}

function propertiesToTokenMap(
  properties: {
    name: string;
    value: string;
    important?: boolean;
    layer?: number[];
    modeSpecific?: boolean;
    specificity?: CSSSpecificity;
    sourceOrder?: number;
  }[]
): TokenMap {
  const selected = new Map<string, CascadeValue>();
  for (const [index, property] of properties.entries()) {
    if (property.name.startsWith('--lufa-') || property.name.startsWith('--')) {
      const existing = selected.get(property.name);
      const candidate = {
        value: property.value,
        important: property.important ?? false,
        layer: property.layer,
        specificity: property.specificity ?? [0, 0, 0],
        sourceOrder: property.sourceOrder ?? index,
      };
      if (existing && !candidateWins(existing, candidate)) continue;
      selected.set(property.name, candidate);
    }
  }
  return new Map([...selected].map(([name, declaration]) => [name, declaration.value]));
}

function loadBaseTokens(): ModeTokenSources {
  if (!baseTokensCache) {
    const tokensPath = new URL(import.meta.resolve('@grasdouble/lufa_design-system-tokens/tokens.css'));
    baseTokensCache = Object.fromEntries(parseThemeCSSContent(readFileSync(tokensPath, 'utf-8')));
  }
  return baseTokensCache;
}

function tokenMapToProperties(tokens: TokenMap): CSSCustomProperty[] {
  return [...tokens].map(([name, value], sourceOrder) => ({
    name,
    value,
    line: 1,
    specificity: [0, 0, 0],
    sourceOrder,
  }));
}

function basePropertiesForMode(baseTokens: BaseTokens, mode: ThemeMode): CSSCustomProperty[] {
  if (baseTokens instanceof Map) return tokenMapToProperties(baseTokens);
  const source = baseTokens[mode];
  if (!source) return [];
  return source instanceof Map ? tokenMapToProperties(source) : source;
}

function mergeModeTokens(baseTokens: BaseTokens, mode: ThemeMode, themeProperties: CSSCustomProperty[]): TokenMap {
  const baseProperties = basePropertiesForMode(baseTokens, mode);
  const lastBaseSourceOrder = baseProperties.reduce(
    (highest, property, index) => Math.max(highest, property.sourceOrder ?? index),
    -1
  );
  const orderedThemeProperties = themeProperties.map((property, index) => ({
    ...property,
    sourceOrder: lastBaseSourceOrder + 1 + (property.sourceOrder ?? index),
  }));
  return propertiesToTokenMap([...baseProperties, ...orderedThemeProperties]);
}

function validateMode(mergedTokens: TokenMap, mode: A11yMode, colorPairs: ColorPair[]): A11yModeResult {
  const violations: A11yViolation[] = [];
  const skippedChecks: SkippedContrastCheck[] = [];

  for (const [foregroundSuffix, backgroundSuffix, type] of colorPairs) {
    const foreground = `--lufa-${foregroundSuffix}`;
    const background = `--lufa-${backgroundSuffix}`;
    const foregroundRaw = mergedTokens.get(foreground);
    const backgroundRaw = mergedTokens.get(background);

    if (foregroundRaw === undefined || backgroundRaw === undefined) {
      const missing = [foregroundRaw === undefined ? foreground : null, backgroundRaw === undefined ? background : null]
        .filter(Boolean)
        .join(', ');
      skippedChecks.push({ foreground, background, reason: `missing token(s): ${missing}` });
      continue;
    }

    const foregroundResolution = resolveCSSVarValueDetailed(`var(${foreground})`, mergedTokens);
    const backgroundResolution = resolveCSSVarValueDetailed(`var(${background})`, mergedTokens);
    if (foregroundResolution.value === null || backgroundResolution.value === null) {
      const reasons = [
        foregroundResolution.value === null ? `${foreground}: ${foregroundResolution.reason}` : null,
        backgroundResolution.value === null ? `${background}: ${backgroundResolution.reason}` : null,
      ]
        .filter(Boolean)
        .join('; ');
      skippedChecks.push({ foreground, background, reason: reasons });
      continue;
    }

    const ratio = getContrastRatio(foregroundResolution.value, backgroundResolution.value);
    if (ratio === null) {
      skippedChecks.push({
        foreground,
        background,
        reason: `unsupported contrast colors: "${foregroundResolution.value}" on "${backgroundResolution.value}"`,
      });
      continue;
    }

    const meetsStandard = type === 'text' ? meetsWCAG_AA_Text(ratio) : meetsWCAG_AA_UI(ratio);
    if (!meetsStandard) {
      violations.push({
        foreground,
        background,
        ratio: Math.round(ratio * 100) / 100,
        required: type === 'text' ? 4.5 : 3,
        type,
        mode,
      });
    }
  }

  return {
    mode,
    valid: violations.length === 0,
    violations,
    totalChecks: colorPairs.length - skippedChecks.length,
    skipped: skippedChecks.length,
    skippedChecks,
  };
}

/**
 * Validate theme CSS content with explicit base tokens and metadata pairs.
 */
export function validateA11yContent(content: string, baseTokens: BaseTokens, colorPairs: ColorPair[]): A11yResult {
  const themeModes = parseThemeCSSContent(content);
  const modes: A11yModeResult[] = [];
  const errors: string[] = [];

  for (const mode of ['light', 'dark', 'high-contrast'] as const) {
    const properties = themeModes.get(mode);
    if (!properties) continue;
    const merged = mergeModeTokens(baseTokens, mode, properties);
    modes.push(validateMode(merged, mode, colorPairs));
  }

  if (modes.length === 0) {
    errors.push('No supported [data-theme] rules found');
  }

  const totalViolations = modes.reduce((total, mode) => total + mode.violations.length, 0);
  return {
    valid: errors.length === 0 && modes.every((mode) => mode.valid),
    modes,
    totalViolations,
    errors,
  };
}

/**
 * Validate WCAG AA contrast for a theme file across every declared mode.
 */
export async function validateA11y(themePath: string): Promise<A11yResult> {
  const [colorPairs, content] = await Promise.all([
    getColorPairsToCheck(),
    Promise.resolve(readFileSync(themePath, 'utf-8')),
  ]);
  return validateA11yContent(content, loadBaseTokens(), colorPairs);
}
