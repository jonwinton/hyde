'use strict';

var config = require('./config');

module.exports = {
    entry: config.js.entry,
    output: {
        path: config.js.dest,
        filename: '[name].js',
    },
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {},
    externals: [
        (function() {
            var IGNORES = [
                'electron'
            ];
            return function(context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ]
};
