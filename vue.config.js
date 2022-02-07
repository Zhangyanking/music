module.exports = {
  devServer: {
    open: true,
    // 反向代理
    proxy: {
      '/fxdl': {
        target: 'http://www.9sky.com',
        changeOrigin: true,
        pathRewrite: {
          '/fxdl': '',
        },
      },
    },
  },
}
