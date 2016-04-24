'use strict';

var gulp = require('gulp');
var config = require('../config');

function watchFiles() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.js.watchSrc, ['scripts']);
}

module.exports = gulp.task('watch', watchFiles);

