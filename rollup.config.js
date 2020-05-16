const { terser } = require('rollup-plugin-terser')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

const production = !process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/assets/js/index.js',
  output: {
    file: '_site/scripts/bundle.js',
    format: 'iife'
  },
  plugins: [
    production && terser(),
    commonjs(),
    resolve()
  ]
}
