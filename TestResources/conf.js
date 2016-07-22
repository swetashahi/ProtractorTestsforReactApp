// conf.js
exports.config = {
   framework: 'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
   specs: ['spec.js'],
   jasmineNodeOpts: {
		  defaultTimeoutInterval: 60000,
		  includeStackTrace: true
	 },

	onPrepare: function () {
    	var AllureReporter = require('jasmine-allure-reporter');
    	jasmine.getEnv().addReporter(new AllureReporter({
        	resultsDir: 'allure-results'
    	}));

    	jasmine.getEnv().afterEach(function(done){
        	browser.takeScreenshot().then(function (png) {
        		allure.createAttachment('Screenshot', function () {
           			return new Buffer(png, 'base64')
        		}, 
        	'image/png')();
        	done();
        	})
    	});
    }
    
/*
    onPrepare : function() {
      var AllureReporter = require('jasmine-allure-reporter');
      var reporter = new AllureReporter({
        allureReport : {
            resultsDir : 'allure-results'
        }
      });
      jasmine.getEnv().addReporter(reporter);

      jasmine.getEnv().topSuite().afterEach({
        fn: function() {
          browser.takeScreenshot().then(function(png) {
            allure.createAttachment('Screenshot', function() {
                return new Buffer(png, 'base64')
            }, 
            'image/png')();
            done();
          })
      
        });
      }

    }*/
  }

