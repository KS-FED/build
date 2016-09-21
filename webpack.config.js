/**
 * webpack 配置
 */
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry:{
		index:__dirname+'/dev/js/app.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'app.js',
		chunkFilename: '[name].[chunkhash:8].js',
		publicPath: '/dist/'
	},
	module:{
		loaders:[
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass-loader-once')
            },
            {
                test: /\.(tpl|html)$/,
                loader: 'html'
            },
            {
	            test: /\.vue$/,
	            loader: 'vue',
	        },
            {
	            test: /\.js$/,
		        exclude: /(.\.min\.js)|node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
		        loader: 'babel'
	            
	        },
	        

            // {test: /\.(js|tag)$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"}
		]
	},
	babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

	plugins:[
		new ExtractTextPlugin('app.css'),
        new CleanWebpackPlugin(['dist'], {
          root: __dirname,
          verbose: true, 
          dry: false
        })
	],
    devtool: 'source-map'
}