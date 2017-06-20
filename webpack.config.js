var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client',
		'react-hot-loader/patch',
       	'./src/index.js',
    ],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
		  {
		    test: /\.jsx?$/,
		    include: [path.resolve(__dirname, 'src')],
		    exclude: [path.resolve(__dirname,"node_modules")],
		    use: {
		    	loader: 'babel-loader',
		    	options: {
		    		presets: [["env", {"modules":false}],
		    		"react"],
 					plugins: ["react-hot-loader/babel"]
		    	}
		    }
		  }
		]
	},
	devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};
