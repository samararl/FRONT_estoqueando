var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

var sassFiles = 'app/source/sass/**/*.scss',
  cssDest = 'app/web/css/';

var source = {
  npm: 'node_modules',
  js: 'app'
};


gulp.task('styles', function () {
  gulp.src('app/web/css').pipe(clean());
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});


gulp.task('scripts', function () {
  return gulp.src([
      '!' + source.js + '/app.min.js',
      source.npm + '/angular-ui-validate/dist/validate.min.js',
      source.npm + '/angular-ui-mask/dist/mask.min.js',
      source.npm + '/angular-translate/dist/angular-translate.min.js',
      source.npm + '/angular-translate-loader-partial/angular-translate-loader-partial.min.js',
      source.npm + '/angular-dynamic-locale/dist/tmhDynamicLocale.min.js',
      source.js + '/app.js',
      source.js + '/config.js',
      source.js + '/services/*.js',
      source.js + '/routes/routes.js',
      source.js + '/controllers/**/*.js',
      source.js + '/filters/*.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(source.js))
    .pipe(livereload());
});

gulp.task('default', ['styles', 'scripts']);
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch(sassFiles, ['styles']);
  gulp.watch(['!' + source.js + '/app.min.js', source.js + '/**/*.js'], ['scripts']);
});