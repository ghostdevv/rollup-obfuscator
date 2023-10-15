import { obfuscator } from 'rollup-obfuscator';
import { join } from 'desm';

/** @type {import('rollup').RollupOptions} */
const options = {
	input: join(import.meta.url, './src/index.js'),

	logLevel: 'debug',

	output: {
		sourcemap: true,
		file: join(import.meta.url, './src/output.js'),
	},

	plugins: [obfuscator()],
};

export default options;
