var webpack = require('webpack');
var path = require('path');


var config ={
	context:path.resolve('dev'),
	entry:['whatwg-fetch','./app.js'],
	output:{
		path:path.resolve('prod/'),
		publicPath:'public',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.jsx?$/, exclude:/node_modules/,loader:'babel-loader', query:{presets:['react','es2015']}},			
			{test:/\.json$/,loader:'json-loader'}
		]
	},
	resolve:{
		extensions:['','.js','.jsx']
	},
	devServer:{
		historyApiFallback:true,
		contentBase:'public'
	},
	watch:true,
	devtool:'eval-source-map'
}

module.exports = config;