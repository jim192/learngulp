var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify');

gulp.task('scripts',function(){
	return gulp.src('./src/scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('result.js'))
		.pipe(gulp.dest('./build/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./build/minjs'))
		.pipe(notify({message:'gulpscripts task complete'}));
});