module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [{
          src: 'bower_components/normalize.css/normalize.css',
          dest: 'css/normalize.css',
          filter: 'isFile'
        }]
      }
    }

  });


  grunt.registerTask('default', ['copy']);
  grunt.loadNpmTasks('grunt-contrib-copy');

}
