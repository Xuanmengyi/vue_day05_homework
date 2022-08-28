const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    }
  }
})
