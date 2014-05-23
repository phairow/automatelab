module.exports = function(grunt) {

grunt.initConfig({
    clean: ['./dist'],
    copy: {
        release: {
            files: [ { src: './**', dest: './dist/' } ]
        }
    },
    version: {
        release: { 
            buildNumber: (+new Date())
        },
        dev: {
            buildNumber: '-pre'
        }
    }
});

require('load-grunt-tasks')(grunt);

grunt.registerTask('default', ['clean', 'copy', 'version:release']);

};
