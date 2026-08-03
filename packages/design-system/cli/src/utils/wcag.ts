/**
 * WCAG contrast utilities.
 */

import valueParser from 'postcss-value-parser';

export type RGBAColor = { r: number; g: number; b: number; a: number };

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let digits = hex.replace(/^#/, '');
  if (digits.length === 3) {
    digits = digits
      .split('')
      .map((character) => character.repeat(2))
      .join('');
  }
  if (!/^[0-9a-f]{6}$/i.test(digits)) return null;
  return {
    r: parseInt(digits.slice(0, 2), 16),
    g: parseInt(digits.slice(2, 4), 16),
    b: parseInt(digits.slice(4, 6), 16),
  };
}

function parseChannel(value: string): number | null {
  if (value.endsWith('%')) {
    const percentage = Number(value.slice(0, -1));
    return Number.isFinite(percentage) && percentage >= 0 && percentage <= 100 ? (percentage / 100) * 255 : null;
  }
  const channel = Number(value);
  return Number.isFinite(channel) && channel >= 0 && channel <= 255 ? channel : null;
}

function parseAlpha(value: string | undefined): number | null {
  if (value === undefined) return 1;
  if (value.endsWith('%')) {
    const percentage = Number(value.slice(0, -1));
    return Number.isFinite(percentage) && percentage >= 0 && percentage <= 100 ? percentage / 100 : null;
  }
  const alpha = Number(value);
  return Number.isFinite(alpha) && alpha >= 0 && alpha <= 1 ? alpha : null;
}

function parseFunctionArguments(value: string): { channels: string[]; alpha?: string } | null {
  if (value.includes(',')) {
    const parts = value.split(',').map((part) => part.trim());
    if (parts.some((part) => !part) || (parts.length !== 3 && parts.length !== 4)) return null;
    return { channels: parts.slice(0, 3), alpha: parts[3] };
  }

  const slashParts = value.split('/').map((part) => part.trim());
  if (slashParts.length > 2 || slashParts.some((part) => !part)) return null;
  const channels = slashParts[0].split(/\s+/);
  return channels.length === 3 ? { channels, alpha: slashParts[1] } : null;
}

function hueToDegrees(value: string): number | null {
  const match = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(deg|grad|rad|turn)?$/i.exec(value);
  if (!match) return null;
  const amount = Number(match[1]);
  const unit = match[2]?.toLowerCase();
  if (unit === 'grad') return amount * 0.9;
  if (unit === 'rad') return (amount * 180) / Math.PI;
  if (unit === 'turn') return amount * 360;
  return amount;
}

function hslToRgb(hue: number, saturation: number, lightness: number): { r: number; g: number; b: number } {
  const h = ((hue % 360) + 360) % 360;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lightness - chroma / 2;

  let rgb: [number, number, number];
  if (h < 60) rgb = [chroma, x, 0];
  else if (h < 120) rgb = [x, chroma, 0];
  else if (h < 180) rgb = [0, chroma, x];
  else if (h < 240) rgb = [0, x, chroma];
  else if (h < 300) rgb = [x, 0, chroma];
  else rgb = [chroma, 0, x];

  return {
    r: (rgb[0] + m) * 255,
    g: (rgb[1] + m) * 255,
    b: (rgb[2] + m) * 255,
  };
}

/**
 * Parse #RGB, #RRGGBB, #RRGGBBAA, rgb(a), and hsl(a).
 */
export function colorToRgba(color: string): RGBAColor | null {
  const normalized = color.trim();
  const hexMatch = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(normalized);
  if (hexMatch) {
    let digits = hexMatch[1];
    if (digits.length === 3) {
      digits = digits
        .split('')
        .map((character) => character.repeat(2))
        .join('');
    }
    return {
      r: parseInt(digits.slice(0, 2), 16),
      g: parseInt(digits.slice(2, 4), 16),
      b: parseInt(digits.slice(4, 6), 16),
      a: digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1,
    };
  }

  const parsed = valueParser(normalized);
  const nodes = parsed.nodes.filter((node) => node.type !== 'space' && node.type !== 'comment');
  if (nodes.length !== 1 || nodes[0].type !== 'function') return null;

  const functionName = nodes[0].value.toLowerCase();
  const args = parseFunctionArguments(valueParser.stringify(nodes[0].nodes));
  if (!args) return null;

  if (functionName === 'rgb' || functionName === 'rgba') {
    const channels = args.channels.map(parseChannel);
    const alpha = parseAlpha(args.alpha);
    if (channels.some((channel) => channel === null) || alpha === null) return null;
    return { r: channels[0]!, g: channels[1]!, b: channels[2]!, a: alpha };
  }

  if (functionName !== 'hsl' && functionName !== 'hsla') return null;
  const hue = hueToDegrees(args.channels[0]);
  const saturationMatch = /^(\d+(?:\.\d+)?|\.\d+)%$/.exec(args.channels[1]);
  const lightnessMatch = /^(\d+(?:\.\d+)?|\.\d+)%$/.exec(args.channels[2]);
  const saturation = saturationMatch ? Number(saturationMatch[1]) : Number.NaN;
  const lightness = lightnessMatch ? Number(lightnessMatch[1]) : Number.NaN;
  const alpha = parseAlpha(args.alpha);

  if (
    hue === null ||
    !Number.isFinite(saturation) ||
    !Number.isFinite(lightness) ||
    saturation < 0 ||
    saturation > 100 ||
    lightness < 0 ||
    lightness > 100 ||
    alpha === null
  ) {
    return null;
  }
  return { ...hslToRgb(hue, saturation / 100, lightness / 100), a: alpha };
}

export function getRelativeLuminance(rgb: { r: number; g: number; b: number }): number {
  const transform = (channel: number) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : Math.pow((normalized + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * transform(rgb.r) + 0.7152 * transform(rgb.g) + 0.0722 * transform(rgb.b);
}

export function getContrastRatio(foregroundColor: string, backgroundColor: string): number | null {
  const foreground = colorToRgba(foregroundColor);
  const background = colorToRgba(backgroundColor);
  if (!foreground || !background || background.a < 1) return null;

  const compositedForeground = {
    r: foreground.r * foreground.a + background.r * (1 - foreground.a),
    g: foreground.g * foreground.a + background.g * (1 - foreground.a),
    b: foreground.b * foreground.a + background.b * (1 - foreground.a),
  };
  const foregroundLuminance = getRelativeLuminance(compositedForeground);
  const backgroundLuminance = getRelativeLuminance(background);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

export const WCAG_LEVELS = {
  AA_NORMAL_TEXT: 4.5,
  AA_LARGE_TEXT: 3,
  AAA_NORMAL_TEXT: 7,
  AAA_LARGE_TEXT: 4.5,
  UI_COMPONENTS: 3,
} as const;

export function meetsWCAG_AA_Text(contrastRatio: number): boolean {
  return contrastRatio >= WCAG_LEVELS.AA_NORMAL_TEXT;
}

export function meetsWCAG_AA_UI(contrastRatio: number): boolean {
  return contrastRatio >= WCAG_LEVELS.UI_COMPONENTS;
}

export function meetsWCAG_AAA(contrastRatio: number): boolean {
  return contrastRatio >= WCAG_LEVELS.AAA_NORMAL_TEXT;
}

export function getWCAGLevel(contrastRatio: number): string {
  if (contrastRatio >= WCAG_LEVELS.AAA_NORMAL_TEXT) return 'AAA (Normal Text)';
  if (contrastRatio >= WCAG_LEVELS.AA_NORMAL_TEXT) return 'AA (Normal Text)';
  if (contrastRatio >= WCAG_LEVELS.AAA_LARGE_TEXT) return 'AAA (Large Text) / AA (Normal Text - Fail)';
  if (contrastRatio >= WCAG_LEVELS.AA_LARGE_TEXT) return 'AA (Large Text) / AA (Normal Text - Fail)';
  return 'Fail (Does not meet WCAG standards)';
}
