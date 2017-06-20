var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack.config.js');

var app = express();
var compiler = webpack(config);

const env = process.env.APP_ENV || process.env.NODE_ENV || 'development';

if (env !== 'production') {
	app.use(require('webpack-dev-middleware')(compiler, {
		hot: true,
		stats: {
			colors: true
		}
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('Listening at http://localhost:3000/');
});
