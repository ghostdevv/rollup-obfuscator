import { obfuscator } from 'rollup-obfuscator';

/** @type {import('rollup').RollupOptions} */
const options = {
	input: './src/index.js',

	logLevel: 'debug',

	output: {
		sourcemap: true,
		file: './src/output.js',
	},

	plugins: [obfuscator()],
};

export default options;
