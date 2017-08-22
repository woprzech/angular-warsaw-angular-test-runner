//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '../node_modules/angular-test-runner/angular-test-runner.js',
            '../node_modules/sinon/lib/sinon.js',
            'bower_components/lodash/lodash.js',
            'app/autosaving-notes/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine-jquery', 'jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-babel-preprocessor',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            '**/*.js': ['babel'],
        },
        babelPreprocessor: {
            options: {
                presets: ['env'],
            },
        }

    });
};
