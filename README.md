# Rollup Obfuscator

[![](https://img.shields.io/npm/v/rollup-obfuscator?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/rollup-obfuscator)

A rollup/vite plugin to obfuscate your code based on [javascript-obfuscator](https://www.npmjs.com/javascript-obfuscator)

# Install

```bash
npm install -D rollup-obfuscator
```

# Use

```js
import { obfuscator } from 'rollup-obfuscator';

...
plugins: [
    ...
    obfuscator()
    ...
]
...
```

# Config

All config options can be found [here](https://www.npmjs.com/package/javascript-obfuscator) and are passed into the obfuscator plugin like this:

```js
obfuscator({
    // options
})
```

You can also pass in the following additional options:

- `global` - It's recommended to keep this enabled, since it might cause issues. However if you need access to `include` and `exclude` options you can disable this

- `include` - A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to include. By default only allows js/ts files - only works with global set to false

- `exclude` - A [FilterPattern](https://github.com/rollup/plugins/blob/master/packages/pluginutils/types/index.d.ts#L23) of files to exclude. By default ignores node_modules - only works with global set to false

# I get an error after runing obfuscated code

It's quite common to see errors after running obfuscated code. The obfuscation changes it so much that you're bound to see errors, especailly if your codebase is complex. I would recommend playing with the config and try relaxing your settings, if that still doesn't work file an issue on [GitHub](https://github.com/ghostdevv/rollup-obfuscator).


# Support

-   Join the [discord](https://discord.gg/2Vd4wAjJnm)
-   Create a issue on the [GitHub](https://github.com/ghostdevv/rollup-obfuscator)
