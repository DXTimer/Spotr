module.exports = function(config){
  config.set({

    basePath: '../../',

    files: [
      'lib/assets/bower_components/angular/angular.js',
      'lib/assets/bower_components/angular-mocks/angular-mocks.js',
      'lib/assets/bower_components/ngmap/build/scripts/ng-map.min.js',
      'app/assets/javasripts/**/*.js',
      'app/assets/javasripts/**/**/*.js',
      'app/assets/javasripts/*.js',
      'spec/javasripts/unit/**/*.js',
    ],

    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage', 'coveralls'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-coveralls'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
