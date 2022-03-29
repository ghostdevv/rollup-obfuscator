import type { ObfuscatorOptions } from 'javascript-obfuscator';
import type { FilterPattern } from '@rollup/pluginutils';
import { createFilter } from '@rollup/pluginutils';
import Obfuscator from 'javascript-obfuscator';
import type { Plugin } from 'rollup';

interface PluginOptions extends ObfuscatorOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
}

const defaults: PluginOptions = {
    include: ['**/*.js'],
    exclude: [],
};

export function obfuscator(options: PluginOptions = {}): Plugin {
    options = { ...defaults, ...options };

    const filter = createFilter(options.include, options.exclude);

    return {
        name: 'obfuscator',

        transform: (code, id) => {
            if (!filter(id)) return;

            const obfuscated = Obfuscator.obfuscate(code, {
                ...options,
                inputFileName: id,
            });

            return {
                code: obfuscated.getObfuscatedCode(),

                map:
                    options.sourceMap && options.sourceMapMode != 'inline'
                        ? obfuscated.getSourceMap()
                        : undefined,
            };
        },

        renderChunk: (code, { fileName }) => {
            const obfuscated = Obfuscator.obfuscate(code, {
                ...options,
                inputFileName: fileName,
            });

            return {
                code: obfuscated.getObfuscatedCode(),

                map:
                    options.sourceMap && options.sourceMapMode != 'inline'
                        ? obfuscated.getSourceMap()
                        : undefined,
            };
        },
    };
}
