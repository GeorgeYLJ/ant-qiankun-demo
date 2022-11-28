// 配置打包 vue.config.js
module.exports = {
    /*    module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|webp|woff2?|eot|ttf|otf)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {},
                        },
                    ],
                },
            ],
        },*/
    devServer: {
        port: 8082,
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域
        }
    },
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd'
        }
    }
};
