var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('src/scss/**/*.sass')
    .pipe(sass())
    .pipe(prefix("last 2 version"))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('img', function() {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', ['browserSync', 'sass', 'img', 'compress'], function(){
  gulp.watch('src/scss/**/*.sass', ['sass']);
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch('src/images/*', ['img']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
})