var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  gulp.src('./app/sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
});