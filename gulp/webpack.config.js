'use strict';

var webpack = require('webpack');
var config = require('./config');
var path = require('path');

module.exports = {
    target: 'node',
    entry: config.js.entry,
    output: {
        path: config.js.dest,
        filename: '[name].js',
    },
    plugins: [

    ],
    module: {

        loaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.tag$/, exclude: /node_modules/, loader: 'tag' }

        ]
    },
    resolve: {
        alias: {
            riot: path.resolve(config.root, 'node_modules/riot/riot.min.js')
        }
    },
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
        })(),
        'node_modules'
    ],
    node: {
        __dirname: false,
        __filename: false
    }
};
