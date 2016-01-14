var gulp = require('gulp');
var del = require('del');
gulp.task('clean:build',function(){
	return del(['./build/css/']);
});

gulp.task('')