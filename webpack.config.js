const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react', 'flow'] 
            }
        }]
    },
    stats: {
        colors: true
    },
};