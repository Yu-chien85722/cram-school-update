const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
module.exports = {
    mode:"production",

    entry:"./src/index.js",

    output:{
        filename:"[name].[contenthash:10].js",
        path:path.resolve(__dirname,"dist")
    },
    // loader 配置
    module:{
        rules:[
            {
                oneOf:[
                    {
                        /*  
                            RegExp:/pattern/
                            .前面的"\"=> 讓『.』成為文字的『.』 而不是任意字母
                            （｜） ＝> 或
                            ＄ ＝>結尾字
                            i => 不分大小寫
                            ＝> 檔案名結尾為 .jpg or .png or .jpeg or.gif 不分大小寫 使用 asset/resource 打包
                        */
                        test:/\.(jpg|png|jpeg|gif)$/i,
                        type:"asset/resource",
                        generator:{
                            filename:"images/[hash:10][ext]"
                        }
                    },
                    {
                        test:/\.css$/i,
                        use:[
                            //"style-loader",
                            MiniCssExtractPlugin.loader,
                            "css-loader",
                            // 上線時需追加的 css 相容性
                            {
                                loader:"postcss-loader",
                                options:{
                                    postcssOptions:{
                                        plugins:['autoprefixer']
                                    }
                                }
                            }
                        ]
                    },
                    {
                        test:/\.s[ac]ss$/i,
                        use:[
                            MiniCssExtractPlugin.loader,
                            "css-loader",
                            // 上線時需追加的 css 相容性
                            {
                                loader:"postcss-loader",
                                options:{
                                    postcssOptions:{
                                        plugins:['autoprefixer']
                                    }
                                }
                            },
                            "sass-loader"
                        ]
        
                    },
                    {
                        test: /\.(m?js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    '@babel/preset-react',
                                    '@babel/preset-env'
                                ],
                                cacheDirectory:true
                            }
                        }
                    }
                ]

            }
        ]
    },

    // plugins 設置
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.htm",
            filename:"about.html",
            // 崩塌空白內容，delete 空格
            collapseWhitespace: true,
            // 移除註解
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }),
        new MiniCssExtractPlugin({
            filename:"css/[name].[contenthash:10].css"
        }),
        new CssMinimizerWebpackPlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim:true,
            skipWaiting:true
        })
    ],

    devtool:"cheap-module-source-map",

    resolve:{
        modules:["node_modules"]
    },

    optimization:{
        splitChunks:{
            chunks:"all"
        }
    },

    externals:{
        react:"React",
        reactDom:"ReactDOM"
    }

}