import { readFile } from 'node:fs/promises';

let metadataCache: Promise<Record<string, unknown>> | null = null;

export function camelToKebab(value: string): string {
  return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function dotPathToCSSVarSuffix(dotPath: string): string {
  return dotPath.split('.').map(camelToKebab).join('-');
}

/**
 * Load the token metadata exported by the tokens package.
 */
export function loadTokenMetadata(): Promise<Record<string, unknown>> {
  metadataCache ??= (async () => {
    const metadataPath = new URL(import.meta.resolve('@grasdouble/lufa_design-system-tokens/metadata'));
    const content = await readFile(metadataPath, 'utf-8');
    return JSON.parse(content) as Record<string, unknown>;
  })();

  return metadataCache;
}
