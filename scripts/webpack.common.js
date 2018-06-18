const path = require('path');
const helpers = require('./helpers');

module.exports = {
    name: 'woody_js',
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', path.join(__dirname, 'src/client')]
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    output: {
        path: helpers.root(''),
        filename: '[name].js',
        library: 'woody_js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
