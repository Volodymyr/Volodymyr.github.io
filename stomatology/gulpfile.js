var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass');

gulp.task('sass', function () { 
     return gulp.src('./src/style/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest('./build/css/'));
});

gulp.task('js', function() {
    gulp.src([
                './src/js/jquery-2.1.4.js',
                './src/js/slick.js',
                './src/js/main.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
});

gulp.task('watch', function () {
    gulp.watch('./src/style/**/*.scss', ['sass']);
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/images/**/*', ['images']);
});