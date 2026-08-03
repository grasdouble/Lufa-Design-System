/**
 * CSS Parser Utilities
 *
 * Parse CSS files and extract custom properties (CSS variables)
 */

import { readFile } from 'fs/promises';
import type { AtRule, Node, Root, Rule } from 'postcss';
import { resolveNestedSelector } from '@csstools/selector-resolve-nested';
import { selectorSpecificity } from '@csstools/selector-specificity';
import { parse } from 'postcss';
import selectorParser from 'postcss-selector-parser';
import valueParser from 'postcss-value-parser';

export type CSSSpecificity = [number, number, number];

export type CSSCustomProperty = {
  name: string;
  value: string;
  line: number;
  important?: boolean;
  layer?: number[];
  modeSpecific?: boolean;
  specificity?: CSSSpecificity;
  sourceOrder?: number;
};

export type ThemeMode = 'light' | 'dark' | 'high-contrast';

export type CSSVarResolution =
  | {
      value: string;
      reason?: never;
    }
  | {
      value: null;
      reason: string;
      cyclic?: true;
    };

function normalizeCSSValue(value: string): string {
  const parsed = valueParser(value);
  parsed.walk((node) => {
    if (node.type === 'space') {
      node.value = ' ';
    } else if (node.type === 'div') {
      node.before = node.value === ',' ? '' : ' ';
      node.after = ' ';
    }
  });
  return valueParser.stringify(parsed.nodes).trim();
}

function isLayerAtRule(node: Node): node is AtRule {
  return node.type === 'atrule' && (node as AtRule).name.toLowerCase() === 'layer';
}

type LayerTree = {
  children: Map<string, LayerTree & { order: number }>;
};

function collectLayerOrder(root: Root): WeakMap<AtRule, number[]> {
  const layerTree: LayerTree = { children: new Map() };
  const layerPaths = new WeakMap<AtRule, string[]>();
  const blockIndexes = new WeakMap<AtRule, number[]>();
  let anonymousLayer = 0;

  const register = (path: string[]): number[] => {
    const indexes: number[] = [];
    let current = layerTree;
    for (const segment of path) {
      let child = current.children.get(segment);
      if (!child) {
        child = { order: current.children.size, children: new Map() };
        current.children.set(segment, child);
      }
      indexes.push(child.order);
      current = child;
    }
    return indexes;
  };

  const nearestParentLayerPath = (node: Node): string[] => {
    let parent: Node | undefined = node.parent;
    while (parent) {
      if (isLayerAtRule(parent)) return layerPaths.get(parent) ?? [];
      parent = parent.parent;
    }
    return [];
  };

  root.walkAtRules(/^layer$/i, (atRule) => {
    const parentPath = nearestParentLayerPath(atRule);
    if (!atRule.nodes) {
      for (const parameter of atRule.params.split(',')) {
        const path = parameter
          .trim()
          .split('.')
          .map((segment) => segment.trim())
          .filter(Boolean);
        if (path.length > 0) register([...parentPath, ...path]);
      }
      return;
    }

    const localPath = atRule.params.trim()
      ? atRule.params
          .trim()
          .split('.')
          .map((segment) => segment.trim())
          .filter(Boolean)
      : [`__anonymous-${anonymousLayer++}`];
    const fullPath = [...parentPath, ...localPath];
    layerPaths.set(atRule, fullPath);
    blockIndexes.set(atRule, register(fullPath));
  });

  return blockIndexes;
}

function declarationLayer(node: Node, layerOrder: WeakMap<AtRule, number[]>): number[] | undefined {
  let parent: Node | undefined = node.parent;
  while (parent) {
    if (isLayerAtRule(parent)) return layerOrder.get(parent);
    parent = parent.parent;
  }
  return undefined;
}

/**
 * Parse CSS file and extract all custom properties
 */
export async function parseCSSFile(filePath: string): Promise<CSSCustomProperty[]> {
  const content = await readFile(filePath, 'utf-8');
  return parseCSSContent(content);
}

/**
 * Parse CSS content and extract all custom properties
 */
export function parseCSSContent(content: string): CSSCustomProperty[] {
  const properties: CSSCustomProperty[] = [];
  const root = parse(content);

  root.walkDecls(/^--/, (declaration) => {
    properties.push({
      name: declaration.prop,
      value: normalizeCSSValue(declaration.value),
      line: declaration.source?.start?.line ?? 1,
      ...(declaration.important && { important: true }),
    });
  });

  return properties;
}

function compareSpecificity(left: CSSSpecificity, right: CSSSpecificity): number {
  for (let index = 0; index < left.length; index++) {
    if (left[index] !== right[index]) return left[index] - right[index];
  }
  return 0;
}

type ThemeSelection = {
  modes: ThemeMode[];
  specific: boolean;
  specificity: CSSSpecificity;
};

type SelectorBranch = {
  hasTheme: boolean;
  hasModeConstraint: boolean;
  invalid: boolean;
  modes: Set<ThemeMode>;
};

const ALL_THEME_MODES: ThemeMode[] = ['light', 'dark', 'high-contrast'];

function selectorSubjectNodes(selectorNode: selectorParser.Selector): selectorParser.Node[] {
  let subjectStart = 0;
  selectorNode.nodes.forEach((node, index) => {
    if (node.type === 'combinator') subjectStart = index + 1;
  });
  return selectorNode.nodes.slice(subjectStart);
}

function intersectModes(left: Set<ThemeMode>, right: Set<ThemeMode>): Set<ThemeMode> {
  return new Set([...left].filter((mode) => right.has(mode)));
}

function combineBranches(left: SelectorBranch, right: SelectorBranch): SelectorBranch {
  return {
    hasTheme: left.hasTheme || right.hasTheme,
    hasModeConstraint: left.hasModeConstraint || right.hasModeConstraint,
    invalid: left.invalid || right.invalid,
    modes: intersectModes(left.modes, right.modes),
  };
}

function analyzeSelector(selectorNode: selectorParser.Selector): SelectorBranch[] {
  let branches: SelectorBranch[] = [
    {
      hasTheme: false,
      hasModeConstraint: false,
      invalid: false,
      modes: new Set(ALL_THEME_MODES),
    },
  ];

  for (const node of selectorSubjectNodes(selectorNode)) {
    if (node.type === 'attribute') {
      const attribute = node.attribute.toLowerCase();
      if (attribute === 'data-theme') {
        branches = branches.map((branch) => ({
          ...branch,
          hasTheme: !node.operator || node.operator === '=',
          invalid: branch.invalid || (!!node.operator && node.operator !== '='),
        }));
        continue;
      }

      if (attribute === 'data-mode') {
        const mode = node.operator === '=' ? node.value : undefined;
        const supportedMode = !node.operator
          ? new Set(ALL_THEME_MODES)
          : mode === 'light' || mode === 'dark' || mode === 'high-contrast'
            ? new Set<ThemeMode>([mode])
            : new Set<ThemeMode>();
        branches = branches.map((branch) => ({
          ...branch,
          hasModeConstraint: true,
          invalid: branch.invalid || supportedMode.size === 0,
          modes: intersectModes(branch.modes, supportedMode),
        }));
        continue;
      }
    }

    if (node.type !== 'pseudo' || !node.nodes) continue;
    const pseudo = node.value.toLowerCase();
    const nestedBranches = node.nodes.flatMap((nestedSelector) => analyzeSelector(nestedSelector));

    if (pseudo === ':is' || pseudo === ':where') {
      branches = branches.flatMap((branch) =>
        nestedBranches.map((nestedBranch) => combineBranches(branch, nestedBranch))
      );
      continue;
    }

    if (pseudo === ':not') {
      const excludedModes = new Set<ThemeMode>();
      let excludesEveryTheme = false;
      for (const nestedBranch of nestedBranches) {
        if (nestedBranch.hasModeConstraint) {
          nestedBranch.modes.forEach((mode) => excludedModes.add(mode));
        } else if (nestedBranch.hasTheme) {
          excludesEveryTheme = true;
        }
      }
      branches = branches.map((branch) => ({
        ...branch,
        invalid: branch.invalid || excludesEveryTheme,
        modes: new Set([...branch.modes].filter((mode) => !excludedModes.has(mode))),
      }));
    }
  }

  return branches;
}

function modesFromSelector(selectorNode: selectorParser.Selector): ThemeSelection | null {
  const branches = analyzeSelector(selectorNode).filter(
    (branch) => !branch.invalid && branch.hasTheme && branch.modes.size > 0
  );
  if (branches.length === 0) return null;

  const modes = new Set<ThemeMode>();
  branches.forEach((branch) => branch.modes.forEach((mode) => modes.add(mode)));
  const specificityValue = selectorSpecificity(selectorNode);
  const specificity: CSSSpecificity = [specificityValue.a, specificityValue.b, specificityValue.c];
  const supportedModes = ALL_THEME_MODES.filter((mode) => modes.has(mode));
  return {
    modes: supportedModes,
    specific: supportedModes.length !== ALL_THEME_MODES.length,
    specificity,
  };
}

function nearestParentRule(node: Node): Rule | null {
  let parent = node.parent;
  while (parent) {
    if (parent.type === 'rule') return parent as Rule;
    parent = parent.parent;
  }
  return null;
}

function resolvedSelectors(rule: Rule): selectorParser.Selector[] {
  let selectorRoot = selectorParser().astSync(rule.selector);
  let parentRule = nearestParentRule(rule);
  while (parentRule) {
    selectorRoot = resolveNestedSelector(selectorRoot, selectorParser().astSync(parentRule.selector));
    parentRule = nearestParentRule(parentRule);
  }
  return selectorRoot.nodes;
}

function declarationBelongsToRule(declaration: Node, rule: Node): boolean {
  let parent = declaration.parent;
  while (parent && parent !== rule) {
    if (parent.type === 'rule') return false;
    parent = parent.parent;
  }
  return parent === rule;
}

/**
 * Parse custom properties from theme rules, preserving each supported mode.
 */
export function parseThemeCSSContent(content: string): Map<ThemeMode, CSSCustomProperty[]> {
  const result = new Map<ThemeMode, CSSCustomProperty[]>();
  const root = parse(content);
  const layerOrder = collectLayerOrder(root);
  const sourceOrder = new WeakMap<Node, number>();
  let declarationIndex = 0;
  root.walkDecls(/^--/, (declaration) => {
    sourceOrder.set(declaration, declarationIndex++);
  });

  root.walkRules((rule) => {
    const selections = resolvedSelectors(rule)
      .map(modesFromSelector)
      .filter((selection): selection is NonNullable<typeof selection> => selection !== null);
    if (selections.length === 0) return;

    const declarations: CSSCustomProperty[] = [];
    rule.walkDecls(/^--/, (declaration) => {
      if (!declarationBelongsToRule(declaration, rule)) return;
      declarations.push({
        name: declaration.prop,
        value: normalizeCSSValue(declaration.value),
        line: declaration.source?.start?.line ?? 1,
        ...(declaration.important && { important: true }),
        ...(declarationLayer(declaration, layerOrder) !== undefined && {
          layer: declarationLayer(declaration, layerOrder),
        }),
        sourceOrder: sourceOrder.get(declaration),
      });
    });

    const appliedSelections = new Map<string, ThemeSelection>();
    for (const selection of selections) {
      for (const mode of selection.modes) {
        const selectionKey = `${selection.specific ? 'specific' : 'shared'}:${mode}`;
        const existing = appliedSelections.get(selectionKey);
        if (!existing || compareSpecificity(selection.specificity, existing.specificity) > 0) {
          appliedSelections.set(selectionKey, selection);
        }
      }
    }

    for (const [selectionKey, selection] of appliedSelections) {
      const mode = selectionKey.slice(selectionKey.indexOf(':') + 1) as ThemeMode;
      const modeProperties = result.get(mode) ?? [];
      modeProperties.push(
        ...declarations.map((declaration) => ({
          ...declaration,
          ...(selection.specific && { modeSpecific: true }),
          specificity: selection.specificity,
        }))
      );
      result.set(mode, modeProperties);
    }
  });

  return result;
}

/**
 * Extract token name from CSS custom property name
 * Example: --lufa-primitive-color-blue-500 -> primitive.color.blue.500
 */
export function tokenNameFromCSSVar(cssVarName: string): string {
  // Remove leading -- and lufa- prefix
  const cleaned = cssVarName.replace(/^--lufa-/, '');

  // Convert kebab-case to dot notation
  return cleaned.replace(/-/g, '.');
}

/**
 * Convert token name to CSS variable name
 * Example: primitive.color.blue.500 -> --lufa-primitive-color-blue-500
 */
export function cssVarNameFromToken(tokenName: string): string {
  // Convert dot notation to kebab-case
  const kebab = tokenName.replace(/\./g, '-');

  // Add --lufa- prefix
  return `--lufa-${kebab}`;
}

/**
 * Check if a value is a CSS variable reference
 */
export function isCSSVarReference(value: string): boolean {
  return parseCSSVarReference(value) !== null;
}

/**
 * Extract CSS variable name from a var() reference
 * Example: var(--lufa-primitive-color-blue-500) -> --lufa-primitive-color-blue-500
 */
export function extractCSSVarName(varReference: string): string | null {
  return parseCSSVarReference(varReference)?.name ?? null;
}

function parseCSSVarReference(value: string): { name: string; fallback: string | null } | null {
  const parsed = valueParser(value.trim());
  const nodes = parsed.nodes.filter((node) => node.type !== 'space' && node.type !== 'comment');

  if (nodes.length !== 1 || nodes[0].type !== 'function' || nodes[0].value.toLowerCase() !== 'var') {
    return null;
  }

  const functionNodes = nodes[0].nodes;
  const commaIndex = functionNodes.findIndex((node) => node.type === 'div' && node.value === ',');
  const nameNodes = commaIndex === -1 ? functionNodes : functionNodes.slice(0, commaIndex);
  const name = valueParser.stringify(nameNodes).trim();

  if (!/^--[\w-]+$/.test(name)) {
    return null;
  }

  const fallback = commaIndex === -1 ? null : valueParser.stringify(functionNodes.slice(commaIndex + 1)).trim();
  if (commaIndex !== -1 && !fallback) {
    return null;
  }

  return { name, fallback };
}

/**
 * Resolve a CSS variable value by following var() references
 *
 * @param value - The CSS value to resolve (may contain var())
 * @param properties - Map of all CSS custom properties
 * @param visitedVars - Track visited variables to prevent circular references
 * @returns The resolved value (without var() references) or null if circular/not found
 *
 * @example
 * // properties = {
 * //   '--lufa-core-color-brand-primary': 'var(--lufa-primitive-color-blue-600)',
 * //   '--lufa-primitive-color-blue-600': '#2563eb'
 * // }
 * resolveCSSVarValue('var(--lufa-core-color-brand-primary)', properties)
 * // Returns: '#2563eb'
 */
export function resolveCSSVarValue(
  value: string,
  properties: Map<string, string>,
  visitedVars = new Set<string>()
): string | null {
  return resolveCSSVarValueDetailed(value, properties, visitedVars).value;
}

/**
 * Resolve a CSS variable and retain the failure reason for diagnostics.
 */
export function resolveCSSVarValueDetailed(
  value: string,
  properties: Map<string, string>,
  visitedVars = new Set<string>(),
  resolvingProperty = false
): CSSVarResolution {
  const reference = parseCSSVarReference(value);
  if (!reference) {
    return { value };
  }

  if (visitedVars.has(reference.name)) {
    return { value: null, reason: `unresolved circular variable ${reference.name}`, cyclic: true };
  }

  const referencedValue = properties.get(reference.name);
  if (referencedValue === undefined) {
    if (reference.fallback) {
      return resolveCSSVarValueDetailed(reference.fallback, properties, visitedVars, resolvingProperty);
    }
    return { value: null, reason: `unresolved variable ${reference.name} (not defined)` };
  }

  const nextVisited = new Set(visitedVars);
  nextVisited.add(reference.name);
  const resolved = resolveCSSVarValueDetailed(referencedValue, properties, nextVisited, true);

  if (resolved.value === null && reference.fallback && (!resolved.cyclic || !resolvingProperty)) {
    return resolveCSSVarValueDetailed(reference.fallback, properties, visitedVars, resolvingProperty);
  }

  return resolved;
}

/**
 * Check if a value is a valid hex color
 */
export function isValidHexColor(value: string): boolean {
  return /^(?:#[0-9A-Fa-f]{3}|#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{8})$/.test(value.trim());
}

/**
 * Check if a value is a valid dimension (px, rem, em, etc.)
 * Also accepts `0` without a unit (valid CSS for zero-length values)
 */
export function isValidDimension(value: string): boolean {
  return /^-?\d+(\.\d+)?(px|rem|em|%|vh|vw|vmin|vmax)$/.test(value.trim()) || value.trim() === '0';
}

/**
 * Check if a value is a valid duration (ms, s)
 */
export function isValidDuration(value: string): boolean {
  return /^\d+(\.\d+)?(ms|s)$/.test(value.trim());
}

/**
 * Group custom properties by category (primitive, core, semantic, component)
 */
export function groupPropertiesByLevel(properties: CSSCustomProperty[]): Record<string, CSSCustomProperty[]> {
  const grouped: Record<string, CSSCustomProperty[]> = {
    primitive: [],
    core: [],
    semantic: [],
    component: [],
    unknown: [],
  };

  properties.forEach((prop) => {
    if (prop.name.startsWith('--lufa-primitive-')) {
      grouped.primitive.push(prop);
    } else if (prop.name.startsWith('--lufa-core-')) {
      grouped.core.push(prop);
    } else if (prop.name.startsWith('--lufa-semantic-')) {
      grouped.semantic.push(prop);
    } else if (prop.name.startsWith('--lufa-component-')) {
      grouped.component.push(prop);
    } else {
      grouped.unknown.push(prop);
    }
  });

  return grouped;
}
