import {browser, protractor} from 'protractor';

export class ProtractorUtils {

   runNonAngular(fn): void {
      let flow = protractor.promise.controlFlow();
      flow.execute(() => {
         browser.ignoreSynchronization = true;
      });
      flow.execute(fn);
      flow.execute(() => {
         browser.ignoreSynchronization = false;
      });
   };

   async isExecutionParallel() {
      let data = await browser.getProcessedConfig();
      return data.capabilities.shardTestFiles;
   }
}