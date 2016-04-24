'use strict';

var path = require('path');
var root = global.PROJECT_BASE || path.resolve(__dirname, '../');

module.exports = {
    css: {
        src: path.resolve(root, 'assets/styles/'),
        dest: path.resolve(root, '_site/assets/styles/')
    },
    js: {
        src: path.resolve(root, 'src/scripts/'),
        entry: path.resolve(root, 'src/scripts/main.js'),
        dest: path.resolve(root, 'dist/'),
        watchSrc: path.resolve(root, 'src/scripts/**/*.*')
    },
    html: {
      src: path.resolve(root, 'src/views/**/*.*'),
      partials: path.resolve(root, 'src/views/partials/**/*.hbs'),
      layouts: path.resolve(root, 'src/views/layouts/**/*.hbs'),
      pages: path.resolve(root, 'src/views/pages/**/*.hbs'),
      dest: path.resolve(root, 'dist/')
    }
};
