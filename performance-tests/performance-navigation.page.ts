import {HeaderPage} from "../pages/header.page";
import {element, by, By, browser} from "../node_modules/protractor";

export class PerformancePageNavigation {
   serviceMappingLink = element(By.id('serviceMappingLink'));
   createOpportunityBtn = element(By.id('createOpportunityBtn'));
   results = {};
   logging = true;
   headerPage = new HeaderPage();
   roleGroups = element(by.id('roleTypes'));

   /**
    * Returns the performancePages array.
    * @param actionSet
    * @returns {string[]}
    */
   getAllActionNamesInActionSet(actionSet) {
      return Object.keys(actionSet)
   }

   /**
    * Execute Preparation steps, start counter, execute measure steps and stop counter. Create it.
    * This method is for easu execute only specific set of sets
    * @param actionSet
    * @param actionName
    * @param timeout
    * @returns {Promise<void>}
    */
   async measurePerformanceForAction(actionSet, actionName, timeout) {
      await this.measurePerformanceForActions(actionSet, [actionName], timeout);
   }

   /**
    * This method goes through the action set,execute Preparation steps, start counter, execute measure steps and stop counter. Create it.
    * @param actionSet
    * @param actionNames
    * @param {number} timeout
    * @returns {Promise<void>}
    */
   async measurePerformanceForActions(actionSet, actionNames, timeout = 6) {

      let now = require("performance-now");
      for (let i = 0; i < actionNames.length; i++) {
         it('[Expected: ' + [actionSet[actionNames[i]].ac] + 's] ' + actionNames[i] + ' [Desc: ' + actionSet[actionNames[i]].description + ']', async () => {
            let action = await actionSet[actionNames[i]];
            if (action.hasOwnProperty('preparations')) {
               await action.preparations();
            }

            await browser.waitForAngularEnabled(false);
            let start = await now();
            await action.method();
            let end = await now();
            await browser.waitForAngularEnabled(true);

            let executionTime = await (end - start);
            let executionTimeSec = executionTime / 1000;
            await expect(executionTimeSec).toBeLessThan(actionSet[actionNames[i]].ac, 'Real Execution Time is ' + executionTimeSec);
            await  console.log('EXECUTION TIME: ' + actionNames[i] + " " + actionSet[actionNames[i]].description + ' Tooks: ' + executionTimeSec);
            if (action.hasOwnProperty('afterAction')) {
               await action.afterAction();
            }
         });
      }
   }
}