var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

var sassFiles = 'app/source/sass/**/*.scss',
    cssDest = 'app/web/css/';

gulp.task('styles', function(){
    gulp.src('app/web/css').pipe(clean());
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});