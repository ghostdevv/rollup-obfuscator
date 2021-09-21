import { obfuscate } from 'javascript-obfuscator';

export default function obfuscator(options = {}) {
    return {
        name: 'obfuscator',

        transform: (code) => {
            const obfuscated = obfuscate(code, options);
            
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
