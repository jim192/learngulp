//默认任务
var gulp = require('gulp');  
//监听 less 修改 began
// gulp.task('default', ['less','watch']);//默认添加 less 和 watch 任务
//监听 less 修改 end
//先清空build 目录，再编译 began
gulp.task('default',['buildclean'],function(){
	console.log("cleaned before build...");
});
//先清空build 目录，再编译 end