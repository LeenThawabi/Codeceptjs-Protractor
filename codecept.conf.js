exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Protractor: {
      url: 'https://google.com',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'thirdTest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
 wdio: {
        enabled: true,
        services: ['selenium-standalone']
    }
  }
}