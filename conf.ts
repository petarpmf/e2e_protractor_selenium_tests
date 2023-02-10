import {browser, Config} from "protractor";
import {specsManager} from "./specs-manager";
import {CommandLineManagerUtils} from "./common/utils/command-line-manager.util";
import {TimeProcessor} from "./config/time-processor.config";
import {StringUtils} from "./common/utils/string.utils";

let fs = require('fs');
let JasmineReporters = require('jasmine-reporters');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let path = require('path');
let downloadFolderPath = path.resolve(__dirname, './e2e/downloads') + "/";
let HtmlBeautifulReporter = require('protractor-beautiful-reporter');

const allScriptsTimeout: number = 90000;
const defaultTimeoutInterval: number = 560000;

function capitalize(input: string): string {
   return input.charAt(0).toUpperCase() + input.slice(1);
}

function mkdir_recursive(dirpath) {
   let sep = path.sep;
   const initDir = path.isAbsolute(dirpath) ? sep : '';
   dirpath.split(sep).reduce((parentDir, childDir) => {
      const curDir = path.resolve(parentDir, childDir);
      if (!fs.existsSync(curDir)) {
         fs.mkdirSync(curDir);
      }
      return curDir;
   }, initDir);
}

async function login() {
   // use it here instead after import because the error: E/configParser - Error code: 105
   let sbLoginPage = require("./pages/login/solution-builder-login.page");
   let solutionBuilderLoginPage = new sbLoginPage.SolutionBuilderLoginPage();
   let username = browser.params.customerUser.username;
   let password = browser.params.customerUser.password;

   await solutionBuilderLoginPage.login(username, password);
}

export let config: Config = {
   allScriptsTimeout: allScriptsTimeout,
   seleniumAddress: 'http://localhost:4444/wd/hub',
   framework: "jasmine",
   useAllAngular2AppRoots: true,
   //ng12Hybrid: true,
   //Enables blocking proxy
   useBlockingProxy: true,
   //Delays for 80m before interacting with element and highlighting it before that
   highlightDelay: 80,

   onPrepare: async () => {
      //This will wrap every test with jasmineCo(); Just like in the docs: https://www.npmjs.com/package/jasmine-co
      require('jasmine-co').install();
      require('./lib/waitReady.js');
      // use this statement to clear default reporters
      jasmine.getEnv().clearReporters();
      let data = await browser.getProcessedConfig();
      // Start up the jasmine reporter
      let junitReporter = new JasmineReporters.JUnitXmlReporter({
         savePath: 'e2e/reports/junit-report',
         filePrefix: StringUtils.getRandomAlpha(10),
         consolidateAll: false
      });

      let writeCoverageReporter = {
         specDone: (result) => {
            let roleName: string = '';
            browser.params.customerUser.username.split('_').forEach((input: string): void => {
               roleName += capitalize(input);
            });

            let coverageFolder = path.join('.', 'reporting', 'e2e-tests-coverage', roleName);
            mkdir_recursive(coverageFolder);

            browser.driver.executeScript('return __coverage__;').then((results: any) => {
               fs.writeFileSync(path.join(coverageFolder, roleName + '-e2e-tests-coverage.json'), JSON.stringify(results));
            }).catch((error) => {
               console.error("Coverage not found, the files can't be instrumented!");
            });
         }
      };

      //jasmine.getEnv().addReporter(junitReporter);

      // // Real time console spec reporter for jasmine testing framework.
      // // https://github.com/bcaudan/jasmine-spec-reporter
      jasmine.getEnv().addReporter(new SpecReporter({
         customProcessors: [TimeProcessor],
         spec: {
            displayStacktrace: true,     // display stacktrace for each failed assertion
         }
      }));


      // Angularized HTML Reporter with Screenshots for Protractor
      // https://github.com/Evilweed/protractor-beautiful-reporter
      jasmine.getEnv().addReporter(new HtmlBeautifulReporter(config.params.htmlConfigurations).getJasmine2Reporter());


      // Optional report for coverage
      let coverageReport = browser.params.coverage ? browser.params.coverage == 'true' : false;
      if (coverageReport) {
         jasmine.getEnv().addReporter(writeCoverageReporter);
      }

   },
   // A callback function called once tests are finished.
   onComplete: async () => {
      // await logout();
   },
   // suites: {
   //    serviceOwner: specsManager.serviceOwner
   // },
   exclude: [],
   jasmineNodeOpts: {
      defaultTimeoutInterval: defaultTimeoutInterval,
      showColors: true,
      includeStackTrace: true,
      print: () => {
      },
   },
    multiCapabilities: [
    {
      'browserName': 'chrome',
      'platform': 'ANY',
      'version': 'ANY',
      'chromeOptions': {
         'args': [
            //"--headless",
            '--start-maximized',
            'incognito',
            '--disable-extensions',
         ],
         'prefs': {
            'download': {
               'prompt_for_download': false,
               'default_directory': downloadFolderPath
            }
         }
      },
      'specs': [ './specs/first.spec.js'  ],
      shardTestFiles: true,
      maxInstances: 1,
    }
   ],
   verboseMultiSessions: false,
   params: {
      externalTestResourceStorage: '//10.180.253.20/var/nfsshare/',
      webApplicationPort: '8080',
      customerUser: {
         username: 'local_admin',
         password: ''
      },
      get specAppendedPrefix() {
         let customerName = CommandLineManagerUtils.getArgValue('params.customerUser.username');
         if (customerName != "") {
            return customerName + ': ';
         }
         return this.customerUser.username + ': ';
      },
      localization: 'en',
      downloadDefaultDirectory: downloadFolderPath,
      coverage: false,
      htmlConfigurations:
         {
            baseDirectory: 'e2e/reports/html-report',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'e2e-report.html',
            docTitle: 'E2E Test Results',
            excludeSkippedSpecs: false,
            showSummary: true,
            showQuickLinks: true,
            showConfiguration: true,
            reportTitle: "Report Title",
            reportFailedUrl: true,
            clientDefaults: {
               columnSettings: {
                  displayTime: true,
                  displayBrowser: true,
                  displaySessionId: true,
                  inlineScreenshots: true
               },
               searchSettings: {
                  allselected: false,
                  passed: false,
                  failed: true,
                  pending: true,
                  withLog: true
               }
            },
         }
   }
};