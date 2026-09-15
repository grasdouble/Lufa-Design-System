declare module '*esbuild-options.mjs' {
  import type { BuildOptions, Plugin } from 'esbuild';

  export const createBuildOptions: (production: boolean, plugins?: Plugin[]) => BuildOptions;
}
