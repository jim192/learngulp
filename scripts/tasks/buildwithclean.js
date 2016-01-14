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
	return gulp.src(config.src)         //less源文件，即 /src/less/ 目录下的 .less         
	.pipe(less(config.settings))    //执行编译         
	.pipe(gulp.dest(config.dest))   //输出目录 
});