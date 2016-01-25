var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var config = require('../config').less; 

gulp.task('clean:build',function(){
	return del([
		'./build/**/*'
		//delete all folder in /build/
	]);
});
gulp.task('buildclean',['clean:build'],function(){
	gulp.start('less');
});