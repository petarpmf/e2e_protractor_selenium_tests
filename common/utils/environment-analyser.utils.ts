import {browser} from "protractor";
import {Capabilities, promise} from "selenium-webdriver";

export class EnvironmentAnalyser {

   private static readonly BROWSER_NAME_CAPABILITY: string = "browserName";
   private static readonly BROWSER_VERSION_CAPABILITY: string = "version";
   private static readonly PLATFORM_CAPABILITY: string = "platform";

   /**
    * Checks if the browser is Safari.
    *
    * @returns {Promise<boolean>}
    */
   static async isSafari(): promise.Promise<boolean> {
      let browserName: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.BROWSER_NAME_CAPABILITY);
      browserName = browserName.toLowerCase() || browserName;

      let isSafari = /safari/.test(browserName);

      return isSafari;
   }

   /**
    * Checks if the browser is Firefox.
    *
    * @returns {promise.Promise<boolean>}
    */
   static async isFirefox(): promise.Promise<boolean> {
      let browserName: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.BROWSER_NAME_CAPABILITY);
      browserName = browserName.toLowerCase() || browserName;
      let isFirefox = /firefox/.test(browserName);

      return isFirefox;
   }

   /**
    * Checks if the browser is Chrome. Furthermore, could checked for particular version of Chrome if passed as parameter.
    * If version is not passed, then only the browser type will be checked.
    *
    * @param {string} version
    * @returns {promise.Promise<boolean>}
    */
   static async isChrome(version: string = null): promise.Promise<boolean> {
      let browserName: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.BROWSER_NAME_CAPABILITY);
      let browserVersion: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.BROWSER_VERSION_CAPABILITY);
      browserName = browserName.toLowerCase() || browserName;
      browserVersion = browserVersion.toLowerCase() || browserVersion;

      let isChrome = /chrome/.test(browserName);

      if (version == null) {
         return isChrome;
      } else {
         return isChrome && browserVersion.indexOf(version) > 0;
      }
   }

   /**
    * Checks if the browser is Internet Explorer.
    *
    * @returns {promise.Promise<boolean>}
    */
   static async isInternetExplorer(): promise.Promise<boolean> {
      let browserName: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.BROWSER_NAME_CAPABILITY);
      browserName = browserName.toLowerCase() || browserName;
      let isIE = /i.*explore/.test(browserName);

      return isIE;
   }

   /**
    * Checks if the OS is Windows.
    *
    * @returns {promise.Promise<boolean>}
    */
   static async isWindows(): promise.Promise<boolean> {
      let platform: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.PLATFORM_CAPABILITY);

      platform = platform.toUpperCase() || platform;
      return /^WIN|XP/.test(platform);
   }

   /**
    * Checks if the OS is Mac.
    *
    * @returns {promise.Promise<boolean>}
    */
   static async isMacOS(): promise.Promise<boolean> {
      let platform: string = await EnvironmentAnalyser.extract(EnvironmentAnalyser.PLATFORM_CAPABILITY);

      platform = platform.toUpperCase() || platform;
      let isMac = /^MAC/.test(platform);
      return isMac;
   }

   /**
    * Generic function that returns the value of particular capability which should appear in capabilities map provided
    * by Protractor.
    *
    * @param {string} capabilityKey
    * @returns {promise.Promise<string>}
    */
   private static async extract(capabilityKey: string): promise.Promise<string> {
      let capabilities: Capabilities = await browser.getCapabilities();
      let capabilityValue: string = capabilities.get(capabilityKey);

      return capabilityValue;
   }
}