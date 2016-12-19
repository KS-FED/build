/**
 * @description webpack 配置
 * @author zdzDesigner
 */
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var _package = require('./package.json')

console.log(process.env.NODE_ENV ? 'pro':'dev')

module.exports = {
    entry: {
        css: __dirname + '/dev/sass/app.scss',
        app: __dirname + '/dev/js/app.js',
        vuecore: __dirname + '/dev/js/vuecore.js'
    },

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: './dist/'
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }, {
            test: /\.(tpl|html)$/,
            loader: 'html'
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.js$/,
            // excluding some local linked packages.
            // for normal use cases only node_modules is needed.
            exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel'

        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader-path?limit=8192&name=[name].[ext]?[hash:8]&path=../[name].[ext]?[hash:8]'
        }]
    },
    vue: {
        loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            html: 'vue-html-loader'
        }
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },

    plugins: [
        new webpack.DefinePlugin({
            'APP_ENV': JSON.stringify(process.env.NODE_ENV ? 'pro':'dev'),
            'APP_VERSION': JSON.stringify(_package.version)
        }),
        new webpack.ProvidePlugin({
            'Vue': 'vue',
            'Vuex': 'vuex',
            'VueResource': 'vue-resource',
            'VueRouter': 'vue-router',
            'VueValidator': 'vue-validator'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vuecore',
            filename: 'vuecore.js'
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.optimize.DedupePlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]

};