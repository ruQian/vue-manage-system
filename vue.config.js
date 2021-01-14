module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
     devServer: {
         port: 8824,     // 端口号
		 disableHostCheck: true,
         /*proxy: {
             '/api':{
                 target:'https://www.ylhzzy.top:8826/',
                 changeOrigin:true,
                 pathRewrite:{
                     '^/api':''
                 }
             }
         }*/
    }
}