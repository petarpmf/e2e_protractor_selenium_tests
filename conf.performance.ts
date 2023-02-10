import {config} from './conf';
import {specsManager} from "./specs-manager";

let HtmlBeautifulReporter = require('protractor-beautiful-reporter');

config.params = {
   customerUser: {
      username: 'svc.fieldtools',
      password: ''
   },

   localization: 'en',
   coverage: false,
};
config.suites = {
   //performanceTest: specsManager.performanceTestSpec,

};
config.params.htmlConfigurations = {
   baseDirectory: 'e2e/reports/html-report',
   screenshotsSubfolder: 'images',
   jsonsSubfolder: 'jsons',
   docName: 'e2e-report.html',
   docTitle: 'Performance  Test Results',
   excludeSkippedSpecs: false,
   showSummary: true,
   showQuickLinks: true,
   showConfiguration: true,
   reportTitle: "Performance Title",
   reportFailedUrl: true,
   columnSettings: {
      displayTime: false,
      displayBrowser: true,
      displaySessionId: false,
      inlineScreenshots: false
   },
   searchSettings: {
      allselected: true,
      passed: true,
      failed: true,
      pending: true,
      withLog: true
   }

}
config.capabilities.shardTestFiles = false;
exports.config = config;