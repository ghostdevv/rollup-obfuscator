import obfuscator from '../src/index.js';

export default {
    input: 'dev/index.js',
    output: {
        file: 'dev/output.js',
    },
    plugins: [obfuscator()],
};
