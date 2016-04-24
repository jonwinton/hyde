'use strict';

var gulp = require('gulp');
var config = require('../config');
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config.js');

function buildJS() {
    return gulp.src(config.js.src)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.js.dest));
}

module.exports = gulp.task('scripts', buildJS);