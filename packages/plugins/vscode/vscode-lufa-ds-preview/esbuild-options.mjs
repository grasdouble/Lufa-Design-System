/**
 * Create the shared esbuild options for development and production bundles.
 *
 * @param {boolean} production
 * @param {import('esbuild').Plugin[]} plugins
 * @returns {import('esbuild').BuildOptions}
 */
const createBuildOptions = (production, plugins = []) => ({
  entryPoints: ['src/index.ts'],
  bundle: true,
  format: 'cjs',
  minify: production,
  sourcemap: !production,
  sourcesContent: false,
  platform: 'node',
  outfile: 'dist/extension.js',
  external: ['vscode'],
  logLevel: 'silent',
  plugins,
});

export { createBuildOptions };
