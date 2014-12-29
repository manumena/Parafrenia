var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

gulp.task('default', function () {
	// body...
});

gulp.task('sass', function(){
	return gulp.src('styles/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}));
});

//Vigila los archivos por cambios y recargas
gulp.task('serve', function(){
	browserSync({
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch(['views/**/*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, browserSync.reload);
});

