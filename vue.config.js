
module.exports = {
  // configureWebpack可以接受对象或函数两种参数
  // configureWebpack当为对象时，会跟webpack.config.js合并
  configureWebpack: {
    resolve: {
      // alias为路径别名的配置
      alias: {
        // 在VUE-CLI @已经配置默认路径为目录src,所以可以这样用
        components: '@/components',
        network: '@/network',
        views: '@/views',
        network: '@/network'
      }
    }
  },
  devServer: {
    host: "127.0.0.1",
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
    // 配置多个或一个代理
      "/app": {
        // 所有/product的路径请求都会被代理
        target: "http://musicapi.leanapp.cn/", // 需要跨域访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理
        pathRewrite: {
          // 比如说：'^/api': '/api'   // 这种接口配置出来http://test.happymmall.com:8083/api/login
          // 比如说：'^/api': ''   // 这种接口配置出来http://test.happymmall.com:8083/login
          "^/app": ""
        }
      }
    }
  }
}
