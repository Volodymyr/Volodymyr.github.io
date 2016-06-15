var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('hello', function() {
  console.log('Hello Zell');
});


gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('default', function () {
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function() {
       return gulp.src('app/scss/**/*.scss')
            .pipe(plugins.plumber())
            .pipe(plugins.less())
            .on('error', function (err) {
                gutil.log(err);
                this.emit('end');
            })
            // .pipe(plugins.cssmin())
            .pipe(plugins.autoprefixer(
                {
                    browsers: [
                        '> 1%',
                        'last 2 versions',
                        'firefox >= 4',
                        'safari 7',
                        'safari 8',
                        'IE 8',
                        'IE 9',
                        'IE 10',
                        'IE 11'
                    ],
                    cascade: false
                }
            ))
            .pipe(gulp.dest('build')).on('error', gutil.log)
            .pipe(plugins.livereload());
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
})



