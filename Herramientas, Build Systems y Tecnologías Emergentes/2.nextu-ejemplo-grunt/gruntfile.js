module.exports =function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    author:'christian',
    uglify:{
      dist:{
        files:{
          'build/<%= pkg.name %>.min.js':[
            'src/js/main.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default',['uglify'])
}
