import type { ObfuscatorOptions } from 'javascript-obfuscator';
import type { FilterPattern } from '@rollup/pluginutils';
import { createFilter } from '@rollup/pluginutils';
import Obfuscator from 'javascript-obfuscator';
import type { Plugin } from 'rollup';

export interface RollupObfuscatorOptions extends ObfuscatorOptions {
	/**
	 * A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to include. By default only allows js/ts files.
	 * @default ['**\/*.js', '**\/*.ts']
	 */
	include?: FilterPattern;

	/**
	 * A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to exclude. By default ignores node_modules.
	 * @default ['node_modules\/**']
	 */
	exclude?: FilterPattern;
}

export function obfuscator(options: RollupObfuscatorOptions = {}): Plugin {
	const {
		include = ['**/*.js', '**/*.ts'],
		exclude = ['node_modules/**'],
		sourceMap = true,
		...obfuscatorOptions
	} = options;

	const filter = createFilter(include, exclude);

	return {
		name: 'obfuscator',
		apply: 'build',
		enforce: 'post',

		transform(code, id) {
			if (!filter(id)) {
				this?.debug(`[rollup-obfuscator] Ignoring "${id}"`);
				return null;
			}

			this?.debug(`[rollup-obfuscator] Obfuscating "${id}"`);

			const result = Obfuscator.obfuscate(code, {
				stringArray: false,
				...obfuscatorOptions,
				inputFileName: id,
				sourceMap,
			});

			return {
				code: result.getObfuscatedCode(),
				map: sourceMap ? result.getSourceMap() : undefined,
			};
		},
	};
}
