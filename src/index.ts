import type { ObfuscatorOptions } from 'javascript-obfuscator';
import { obfuscate } from 'javascript-obfuscator';
import type { Plugin } from 'rollup';

export function obfuscator(options: ObfuscatorOptions = {}): Plugin {
    return {
        name: 'obfuscator',

        transform: (code) => {
            const obfuscated = obfuscate(code, options);

            return {
                code: obfuscated.getObfuscatedCode(),
                map: obfuscated.getSourceMap(),
            };
        },
    };
}
