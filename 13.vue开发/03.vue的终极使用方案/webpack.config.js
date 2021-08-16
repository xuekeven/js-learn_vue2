const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  VueLoaderPlugin  = require('vue-loader/lib/plugin');

module.exports = {

    entry: {
        index: './src/js/index.js'
    },

    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build')
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            // css-loader只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中
            // 使用多个loader时, 是从右向左
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'less-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
                  // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
                  limit: 13000,
                  name: 'img/[name].[hash:8].[ext]'
                },
              }
            ]
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: file => (
              /node_modules/.test(file) &&
              !/\.vue\.js/.test(file)
            )
          }
          
        ]
      },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ],

    mode: 'development',

    resolve: {
        // alias:别名
        alias: {
            
          'vue$': 'vue/dist/vue.min.js'
        }
    }
}