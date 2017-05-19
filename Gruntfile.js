module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'public/javascripts/**/*.js']
        },
        copy: {
            html: {
                files: [
                    {
                        src: '**/*.html',
                        cwd: 'public/views/',
                        dest: 'dist/views/',
                        expand: true
                    }
                ]
            },
            js: {
                files: [
                    {
                        src: '**/*.js',
                        cwd: 'public/javascripts/',
                        dest: 'dist/js/',
                        expand: true
                    }
                ]
            },
            semantic: {
                files: [
                    {
                        src: '**',
                        cwd: 'node_modules/semantic-ui/dist/',
                        dest: 'public/assets/semantic-ui/',
                        expand: true                    }
                ]
            },
            jquery: {
                files: [
                    {
                        src: 'jquery.min.js',
                        cwd: 'bower_components/jquery/dist/',
                        dest: 'public/assets/js/jquery/',
                        expand: true                    }
                ]
            }

        },
        clean: {
            contents: ['dist/*']
        }
    });

    // load the jshint plugin
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register tasks
    grunt.registerTask('build', ['clean', 'copy']);
};