var gulp = require('gulp'); 
var less = require('gulp-less'); 
var config = require('../config').less;  //引入配置文件 config.js

//pipe()方法会依次执行
gulp.task('less', function(){     
	return gulp.src(config.src)         //less源文件，即 /src/less/ 目录下的 .less         
	.pipe(less(config.settings))    //执行编译         
	.pipe(gulp.dest(config.dest))   //输出目录 
});