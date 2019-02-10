var gulp=require('gulp')
var minjs=require('gulp-uglify')

gulp.task('test',function(){
	console.log('hola este es mi primer task con gulp')
});

gulp.task('mainminjs',function(){
	gulp.src('./src/js/main.js')
		.pipe(minjs())
		.pipe(gulp.dest('./build/js/'))
});

gulp.task('watch',function(){
	gulp.watch('./src/js/*.js',gulp.series('mainminjs'))
})
