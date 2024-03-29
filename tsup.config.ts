import type { Options } from 'tsup';

export const tsup: Options = {
	splitting: false,
	sourcemap: false,
	clean: true,
	dts: true,
	keepNames: true,
	target: 'es2021',
	format: ['esm', 'cjs'],
	entryPoints: ['src/index.ts'],
};
