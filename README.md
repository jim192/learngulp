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
