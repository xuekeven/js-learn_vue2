const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        index: './src/js/index.js'
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],

    mode: 'development',

    resolve: {
        // alias:别名
        alias: {
            //指定vue使用vue.esm.js
          'vue$': 'vue/dist/vue.esm.js'
        }
    }
}