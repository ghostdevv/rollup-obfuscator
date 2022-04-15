import type { ObfuscatorOptions } from 'javascript-obfuscator';
import type { FilterPattern } from '@rollup/pluginutils';
import { createFilter } from '@rollup/pluginutils';
import Obfuscator from 'javascript-obfuscator';
import type { Plugin } from 'rollup';

interface ObfuscatorPluginOptions extends ObfuscatorOptions {
    /**
     * It's recommended to keep this enabled, since it might cause issues. However if you need access to `include` and `exclude` options you can disable this
     * @default true
     */
    global: boolean;

    /**
     * A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to include. By default only allows js/ts files.
     * Only works with global set to false
     */
    include?: FilterPattern;

    /**
     * A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to exclude. By default ignores node_modules.
     * Only works with global set to false
     */
    exclude?: FilterPattern;
}

export function obfuscator(
    options: ObfuscatorPluginOptions = { global: true },
): Plugin {
    const filter = createFilter(
        options.include || ['**/*.js', '**/*.ts'],
        options.exclude || ['node_modules/**'],
    );

    return {
        name: 'obfuscator',

        transform: options.global
            ? undefined
            : (code, id) => {
                  if (!filter(id)) return null;

                  const obfuscated = Obfuscator.obfuscate(code, {
                      ...options,
                      inputFileName: id,
                  });

                  return {
                      code: obfuscated.getObfuscatedCode(),
                      map: options.sourceMap
                          ? obfuscated.getSourceMap()
                          : undefined,
                  };
              },

        renderChunk: options.global
            ? (code, { fileName }) => {
                  const obfuscated = Obfuscator.obfuscate(code, {
                      ...options,
                      inputFileName: fileName,
                  });

                  return {
                      code: obfuscated.getObfuscatedCode(),
                      map: options.sourceMap
                          ? obfuscated.getSourceMap()
                          : undefined,
                  };
              }
            : undefined,
    };
}
