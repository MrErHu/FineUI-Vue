const path = require("path")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig, {
    devtool: "eval-source-map",

    entry: {
        main: path.join(__dirname, "../examples/index")
    },

    output: {
        path: path.join(__dirname, "../examples/dist"),
        filename: '[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, "../examples/dist/index.html"),
            template: path.join(__dirname, "../examples/index.html")
        })
    ]
})
