'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'copy': {
            'main': {
                'files': [
                    {
                        'src': 'bower_components/angular/angular.min.js',
                        'dest': 'assets/scripts/angular.min.js'
                    },
                ]
            }
        },
        'uglify': {
            'main': {
                'files': {
                    'assets/scripts/intrastart.min.js': [
                        'scripts/intrastart.app.js',
                        'scripts/nav.controller.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
