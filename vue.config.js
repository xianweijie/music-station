module.exports = {
    //configureWebpack可以接受对象或函数两种参数
    //configureWebpack当为对象时，会跟webpack.config.js合并
    configureWebpack : {
        resolve : {
            //alias为路径别名的配置
            alias : {
                //在VUE-CLI3 @已经配置默认路径为目录src,所以可以这样用
                //"assets" : '@/assets',
                "components" : '@/components',
                "network" : '@/network',
                "views" : '@/views'
            }
        }
    }
}