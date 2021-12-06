const { defineConfig } = require('vite')
const { treatAsCommonjs } = require('vite-plugin-treat-umd-as-commonjs')

module.exports = defineConfig({
  plugins: [
    treatAsCommonjs({
    include: [/umd-module/, /node_modules\/.*\.jsx?/]
    }),
  ],
})
