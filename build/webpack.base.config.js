const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const assetsRoot = path.resolve(__dirname, '../assets')

module.exports = {

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpeg|gif)?$/,
                loader: 'url-loader',
                query: {
                    limit: 4000,
                    name: path.resolve(assetsRoot, 'img/[name].[hash:8].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 4000,
                    name: path.resolve(assetsRoot, 'fonts/[name].[hash:8].[ext]')
                }
            }
        ]
    },

    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": path.resolve(__dirname,'../src'),
            "assets": path.resolve(__dirname,'../assets')
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};
