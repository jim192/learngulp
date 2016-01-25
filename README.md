# learngulp
start to learn gulp
#运行：
	$ gulp  
	1. 首先运行 gulpfile.js，因为使用了 require-dir  
	2. 找到 `requireDir` 指定的目录 `'./scripts/tasks'`  
	3. 运行 default.js
	4. 因为 `gulp.task('default', ['less','watch'])` ，所以会依次执行任务 less watch default
	5. 运行 `less.js` ，将 config.src 指定的文件执行编译，并输出到 config.dest 指定的目录  
	6. 运行 `watch.js`
#Note
**tasks** 目录存放任务  
**config.js** 配置任务  
**gulpfile.js** 是gulp 入口文件
由于对 `config.less.all` 进行了监听，所以任何修改都会立刻执行 less 任务  
修改 default ，使用buildwithclean 中的 tasks  

#插件
**gulp-ruby-sass**: sass 编译，需要先安装ruby，才能使用 sass  
**gulp-autoprefixer**: 自动添加 css 前缀  
**gulp-minify-css**: 压缩 css  
**gulp-jshint**: js 代码校验  
**gulp-concat**: 合并 js 文件  
**gulp-uglify**: 压缩 js 代码  
**gulp-imagemin**: 压缩图片  
**gulp-rename**: 重命名  
**gulp-livereload**: 自动刷新页面  
**gulp-cache**: 图片缓存，只有替换之后才压缩
**gulp-notify**: 更改提醒  
**del**: 清除文件