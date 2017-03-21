module.exports = function (grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        mochaTest: {
            local: {
                options: {
                    reporter: 'spec',
                    quiet: false,
                    clearRequiredCache: false,
                    ui: 'tdd'
                },
                src: ['tests/**/*.js']
            }

        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('test', ['mochaTest:local']);

};