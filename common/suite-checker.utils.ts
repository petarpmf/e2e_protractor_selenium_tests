export class SuiteChecker {
   /**
    * Check for set of given suite
    * @param {Array<string>} expectedSuites
    * @returns {boolean}
    */
   checkForSuites(expectedSuites: Array<string>) {
      let status = false;
      for (let i = 0; i < expectedSuites.length; i++) {
         if (require('yargs').argv.suite === expectedSuites[i]) {
            status = true;
            break;
         }
      }
      return status;
   }
}