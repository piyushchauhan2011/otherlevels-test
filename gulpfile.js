var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var ngAnnotate = require('gulp-ng-annotate');
var browserify = require('gulp-browserify');

var templateCache = require('gulp-angular-templatecache');

function onError(err) {
  console.log(err);
}

gulp.task('templates', function() {
  return gulp.src('frontend/javascripts/templates/**/*.html')
    .pipe(templateCache({
      standalone: true,
    }))
    .pipe(gulp.dest('frontend/javascripts'));
});

gulp.task('sass', function() {
  return sass('frontend/stylesheets/**/*.scss')
    .on('error', sass.logError)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(concat('all.css'))

    // .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('uglify', function() {
  return gulp.src(['frontend/javascripts/app.js'])
    .pipe(ngAnnotate())
    .pipe(browserify({
      insertGlobals: true,
      debug: true,
    }))

    // .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('watch', function() {
  gulp.watch(['frontend/javascripts/**/*.js', 'frontend/javascripts/**/*.html'], ['templates', 'uglify']);
  gulp.watch(['frontend/stylesheets/**/*.scss'], ['sass']);

})

gulp.task('default', ['watch', 'sass', 'templates', 'uglify']);
