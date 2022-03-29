import { obfuscator } from 'rollup-obfuscator';

export default {
    input: 'dev/src/index.js',

    output: {
        file: 'dev/src/output.js',
    },

    plugins: [obfuscator()],
};
