var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
