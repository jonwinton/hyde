'use strict';

var gulp = require('gulp');
var config = require('../config');
var extname = require('gulp-extname');
var assemble = require('assemble');
var app = assemble();
 
gulp.task('load', function(cb) {
  app.partials(config.html.partials);
  app.layouts(config.html.layouts);
  app.pages(config.html.pages);
  cb();
});
 
gulp.task('assemble', ['load'], function() {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest(config.html.dest));
});
 
gulp.task('html', ['assemble']);