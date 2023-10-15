# Rollup Obfuscator

[![](https://img.shields.io/npm/v/rollup-obfuscator?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/rollup-obfuscator)

A rollup/vite plugin to obfuscate your code based on [javascript-obfuscator](https://www.npmjs.com/javascript-obfuscator)

# Requirements

- Rollup: v2, v3, or v4
- Node: v16+
- javascript-obfuscator: v4

# Installing

First install the plugin as a dev dependency:

```bash
npm install rollup-obfuscator -D
```

Next we should add it to the **end** of the plugins array:

Rollup:
```js
import { obfuscator } from 'rollup-obfuscator';

export default {
    plugins: [
        // ...
        obfuscator()
    ]
}
```

Vite:
```js
import { obfuscator } from 'rollup-obfuscator';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        // ...
        obfuscator()
    ]
})
```

## Configuring

The plugin should hopefully work out of the box. However, it's likely to break on larger applications - especially those that use complex frameworks. You should play with the options to find what works best for your application.

```js
plugins: [
    obfuscator({
        // options go here
    })
]
```

### Obfuscator Options

All config options can be found [here](https://www.npmjs.com/package/javascript-obfuscator). The plugin has the same default options, except setting `sourceMap: true` and `stringArray: false`.

### Plugin Specific Options

- `include` - A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to include. Defaults to `['**/*.js', '**/*.ts']`

- `exclude` - A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to exclude. Defaults to `['node_modules/**']`

# Support

-   Join the [discord](https://discord.gg/2Vd4wAjJnm)
-   Create a issue on the [GitHub](https://github.com/ghostdevv/rollup-obfuscator)
