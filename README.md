# vite-plugin-treat-umd-as-commonjs

Make code runs when using requireJS/amd in browser with vite. This plugin is for a paticular edge case. check [RequireJS environment in browser will break the UMD module conversion](https://github.com/vitejs/vite/issues/5900)

[![NPM](https://nodei.co/npm/vite-plugin-treat-umd-as-commonjs.png)](https://npmjs.org/package/vite-plugin-treat-umd-as-commonjs/)

## Usage

```javascript
// vite.config.js
const { defineConfig } = require("vite");
const { treatAsCommonjs } = require("vite-plugin-treat-umd-as-commonjs");

module.exports = defineConfig({
  plugins: [treatAsCommonjs()],
});
```

It will simple add `var define = false;` in modules from node_modules by default which avoid the browser requireJS/amd environment to register the module to amd. You can also specifically include or exclude pattern.

## Options

```javascript
type Options = {
  // moduleId/files to include
  indluce?: Array<string | RegExp> | string | RegExp
  // moduleId/files to exclude
  exclude?: Array<string | RegExp> | string | RegExp
}
```

## License

[MIT](LICENSE)
