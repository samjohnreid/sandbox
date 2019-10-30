const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
}

gulp.task('css', () => {
  const postcss    = require('gulp-postcss')
  const sourcemaps = require('gulp-sourcemaps')

  return gulp.src('css/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
})

exports.watch = watch;