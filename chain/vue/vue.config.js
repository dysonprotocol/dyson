const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

module.exports = {
  assetsDir: 'static',
  transpileDependencies: ['@starport/client-js'],
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue$: path.resolve('./node_modules/vue/dist/vue.esm-bundler.js'),
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0'
  }
}
