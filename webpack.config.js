var path = require('path');

module.exports = {
	entry: './src/fragment-innerhtml.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'fragment-innerhtml.js',
	}
};
