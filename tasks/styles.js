const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.src('public/css/*.css')
.pipe(cssnano())
.pipe(rename('style.min.css'))
.pipe(gulp.dest('dist'));