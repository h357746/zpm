module.exports = {
  devServer: {
    // open: true, // 配置自动启动浏览器
    port: 8081, //  不为8080
    headers:
        {
          'Access-Control-Allow-Origin': '*'
        },
    proxy: {
      '/api': {
        target: 'http://192.168.3.206:8080',
        // ws: true,
        // secure: false,
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    } // 配置多个代理
  }
}
