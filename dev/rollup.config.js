import obfuscator from 'rollup-obfuscator';

export default {
    input: 'dev/index.js',

    output: {
        file: 'dev/output.js',
    },

    plugins: [obfuscator()],
};
