const gulp = require('gulp');
const rev = require('gulp-rev');

const inputDir = 'dist/';
const manifestFilename = 'rev-manifest.json';


gulp.src('dist/*.css')
    .pipe(rev())
    .pipe(gulp.dest(inputDir))
    .pipe(rev.manifest(manifestFilename))
    .pipe(gulp.dest(inputDir));












