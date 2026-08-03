import { describe, expect, it } from 'vitest';

import { createBuildOptions } from '../../esbuild-options.mjs';

describe('createBuildOptions', () => {
  it('should minify production bundles without source maps', () => {
    expect(createBuildOptions(true)).toMatchObject({
      minify: true,
      sourcemap: false,
    });
  });

  it('should retain source maps for development bundles', () => {
    expect(createBuildOptions(false)).toMatchObject({
      minify: false,
      sourcemap: true,
    });
  });
});
