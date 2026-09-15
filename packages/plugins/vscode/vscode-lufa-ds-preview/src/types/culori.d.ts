/**
 * Type declarations for the culori dependency used by the extension.
 */
declare module 'culori' {
  /**
   * RGB color representation with values in the range [0, 1]
   */
  export type Rgb = {
    /** Culori color-space discriminator. */
    mode: 'rgb';
    /** Red channel: 0-1 */
    r: number;
    /** Green channel: 0-1 */
    g: number;
    /** Blue channel: 0-1 */
    b: number;
    /** Alpha channel: 0-1 (default: 1) */
    alpha?: number;
  };

  /**
   * Creates the RGB converter used by the extension.
   * @param space - RGB is the only supported output space.
   * @returns Converter function; invalid colors return undefined.
   */
  export function converter(space: 'rgb'): (input: string) => Rgb | undefined;
}
