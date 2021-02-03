# rollup-obfuscator

[![](https://img.shields.io/npm/v/rollup-obfuscator?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/rollup-obfuscator)
[![](https://img.shields.io/static/v1?label=&message=A%20GHOSTs%20Tools%20Project&color=informational&style=for-the-badge)](https://github.com/ghoststools)

A plugin to obfuscate javascript for rollup based on [javascript-obfuscator](https://www.npmjs.com/javascript-obfuscator)

# Install

```
npm install --save-dev rollup-obfuscator
```

# Use

```js
import obfuscator from 'rollup-obfuscator';

...
plugins: [
    ...
    obfuscator()
    ...
]
...
```

# Config
All config options can be found [here](https://www.npmjs.com/package/javascript-obfuscator) and are passed into the obfuscator plugin like this
```js
obfuscator({
    // options
})
```

# Support

-   Message me on discord: `GHOST#7524`<br>
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)
-   Create a issue on the [github](https://github.com/ghoststools/rollup-obfuscator)
