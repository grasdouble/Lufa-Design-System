/**
 * Metadata-driven theme completeness validation.
 */

import { readFile } from 'node:fs/promises';

import type { ThemeMode } from '../utils/parse-css.js';
import { parseThemeCSSContent } from '../utils/parse-css.js';
import { camelToKebab, loadTokenMetadata } from '../utils/token-metadata.js';

export type ThemeLevel = 'starter' | 'extended' | 'advanced';

export type CompletenessModeResult = {
  mode: ThemeMode;
  missingTokens: string[];
};

export type CompletenessResult = {
  valid: boolean;
  level: ThemeLevel;
  totalRequired: number;
  modes: CompletenessModeResult[];
};

type MetadataToken = {
  value?: unknown;
  extensions?: {
    lufa?: {
      themeable?: boolean;
      themeLevel?: ThemeLevel;
    };
  };
};

const LEVELS: ThemeLevel[] = ['starter', 'extended', 'advanced'];

function collectRequiredTokens(
  object: Record<string, unknown>,
  allowedLevels: Set<ThemeLevel>,
  path: string[] = []
): string[] {
  const required: string[] = [];

  for (const [key, value] of Object.entries(object)) {
    if (!value || typeof value !== 'object') continue;
    const currentPath = [...path, camelToKebab(key)];
    const token = value as MetadataToken;
    const lufa = token.extensions?.lufa;

    if ('value' in token) {
      if (lufa?.themeable === true && lufa.themeLevel && allowedLevels.has(lufa.themeLevel)) {
        required.push(`--lufa-${currentPath.join('-')}`);
      }
      continue;
    }

    required.push(...collectRequiredTokens(value as Record<string, unknown>, allowedLevels, currentPath));
  }

  return required;
}

export async function getRequiredThemeTokens(level: ThemeLevel): Promise<string[]> {
  const maxLevel = LEVELS.indexOf(level);
  const metadata = await loadTokenMetadata();
  return collectRequiredTokens(metadata, new Set(LEVELS.slice(0, maxLevel + 1))).sort();
}

export function validateCompletenessContent(
  content: string,
  requiredTokens: string[],
  level: ThemeLevel = 'starter'
): CompletenessResult {
  const themeModes = parseThemeCSSContent(content);
  const modes = (['light', 'dark', 'high-contrast'] as const).map((mode) => {
    const declared = new Set((themeModes.get(mode) ?? []).map((property) => property.name));
    return {
      mode,
      missingTokens: requiredTokens.filter((token) => !declared.has(token)),
    };
  });

  return {
    valid: modes.every((mode) => mode.missingTokens.length === 0),
    level,
    totalRequired: requiredTokens.length,
    modes,
  };
}

export async function validateCompleteness(themePath: string, level: ThemeLevel): Promise<CompletenessResult> {
  const [content, requiredTokens] = await Promise.all([readFile(themePath, 'utf-8'), getRequiredThemeTokens(level)]);
  return validateCompletenessContent(content, requiredTokens, level);
}
