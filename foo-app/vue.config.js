const packageName = require('./package.json').name

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.VUE_APP_BASE_PATH,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 5002,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, ra-ver, ra-sid'
    }
  },
  chainWebpack: config => {
    config.output
      .library(`${packageName}-[name]`)
      .libraryTarget('umd')
      .jsonpFunction(`webpackJsonp_${packageName}`)
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({})
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({})
      .end()
  }
}
