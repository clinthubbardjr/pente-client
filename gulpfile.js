var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    include = require('gulp-include'),
    concat = require('gulp-concat'),
    haml = require('gulp-ruby-haml'),
    sass = require('gulp-ruby-sass'),
    neat = require('node-neat').includePaths,
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  haml: './src/views/*.haml',
  js: './src/assets/js/**/*.js',
  scss: './src/assets/scss/**/*.scss',
  images: './src/assets/img/**/*',
  fonts: './src/assets/fonts/*'
};

// Haml templates
gulp.task('views', function () {
  gulp.src(paths.haml)
    .pipe(haml())
    .pipe(gulp.dest('./public'));
});

// Scss stylesheets
gulp.task('scss', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      loadPath: [paths.scss].concat(neat)
    }))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./public/assets/css'));
});

// Javascripts
gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    //.pipe(include())
    .pipe(sourcemaps.write())
    //.pipe(uglify())
    .pipe(gulp.dest('./public/assets/js'));
});

// Copy images
gulp.task('images', function () {
  gulp.src(paths.images)
    .pipe(gulp.dest('./public/assets/img'));
});

// Copy fonts
gulp.task('fonts', function () {
  gulp.src(paths.fonts)
    .pipe(gulp.dest('./public/assets/fonts'));
});

// Server
gulp.task('server', function() {
  browsersync({
    server: {
      baseDir: "./public",
    },
    port: 4000,
    notify: false,
    open: false
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.haml, ['views']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.fonts, ['fonts']);
  gulp.watch('./public/*.html', browsersync.reload);
  gulp.watch('./public/assets/css/*.css', browsersync.reload);
  gulp.watch('./public/assets/js/*.js', browsersync.reload);
  gulp.watch('./public/assets/img/*', browsersync.reload);
  gulp.watch('./public/assets/fonts/*', browsersync.reload);
});

// Run
gulp.task('default', ['views', 'scss', 'js', 'images', 'fonts', 'server', 'watch'], function() {

});


