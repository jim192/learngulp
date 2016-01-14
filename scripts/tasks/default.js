//默认任务
var gulp = require('gulp');  
//监听 less 修改 began
gulp.task('default', ['less','watch']);//默认添加 less 和 watch 任务
//监听 less 修改 end