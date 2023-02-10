import * as fs from 'fs';
import {mkdirp} from 'mkdirp';
import * as report from 'cucumber-html-reporter';

const Cucumber = require('cucumber')

export class CucumberReporterConfig {

   private jsonDir = process.cwd() + "/reporting/cucumber-reports/json";
   private htmlDir = process.cwd() + "/reporting/cucumber-reports/html";
   private jsonFile = this.jsonDir + "/cucumber_report.json";

   private cucumberReporterOptions = {
      theme: "bootstrap",
      jsonFile: this.jsonFile,
      output: this.htmlDir + "/cucumber_report.html",
      reportSuiteAsScenarios: true,
      metadata: {
         "App Version": "0.0.1",
         "Test Environment": "Testing",
         "Browser": "Chrome  59.0.945",
         "Platform": "Windows 10",
         "Parallel": "Scenarios",
         "Executed": "Local"
      }
   };

   private CreateReportFile(dirName, fileName, fileContent) {
      //Check if the directory exist
      if (!fs.existsSync(dirName))
         mkdirp.sync(dirName);
      try {
         fs.writeFileSync(fileName, fileContent);
      }
      catch (message) {
         console.log("Failed to create File/Directory :" + message);
      }
   }

   private GenerateCucumberReport(cucumberReportOption) {
      report.generate(cucumberReportOption);
   }

   JsonFormatter = new Cucumber.JsonFormatter({
      log: jLog => {
         this.CreateReportFile(this.jsonDir, this.jsonFile, jLog);
         this.GenerateCucumberReport(this.cucumberReporterOptions);
      }
   });
}

export let JsonFormatter = new CucumberReporterConfig().JsonFormatter;