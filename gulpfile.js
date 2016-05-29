var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
const babel = require('gulp-babel');




gulp.task('default', function () {
  return gulp.src('server.js')
    .pipe(webpack({
      watch: true,
      target: 'node',
      output: {
            filename: 'server.js',
        },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015']
            }
          },
          {
            test:/\.json/,
            loader: 'json'
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist/'));


});
