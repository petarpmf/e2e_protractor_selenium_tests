import {config} from "../conf";

export class ProtractorConfigChecker {
   /**
    * Check for set of given suite
    * @returns {boolean}
    */
    isHeadlessMode() {
      return config.capabilities.chromeOptions.args.includes('--headless');
   }
}