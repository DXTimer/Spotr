exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){
    require('protractor-http-mock').config = {
      rootDirectory: process.cwd(),
      protractorConfig: 'test/protractor.conf.js'
    };
  }

};

