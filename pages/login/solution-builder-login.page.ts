import {browser, By, by, element, protractor} from 'protractor';
import {VidmLoginPage} from './vIdm-login.page';
import {ProtractorUtils} from "../../common/utils/protractor.utils";
import {Urls} from "../../common/urls";
import {promise} from "selenium-webdriver";
import {HeaderPage} from "../header.page";
import {SeleniumGridApiController} from "../../common/utils/services/selenium-grid-api-controller";

let url = new Urls();
let utils = new ProtractorUtils();
let vIdmLoginPage = new VidmLoginPage();

export class SolutionBuilderLoginPage {
   username = element(By.id('username'));
   password = element(By.id('password'));
   loginButton = element(By.id('loginButton'));
   signIn = element(By.id('signIn'));
   logoutButton = element(By.id('logout'));
   logInNextButton = element(By.id('nextBtnField'));
   loginForm = element(By.css('.login-form'));

   /**
    * Set user name
    * @param {string} username
    * @returns {promise.Promise<any>}
    */
   setUsername(username: string): promise.Promise<any> {
      expect(this.username.waitReady()).toBeTruthy();
      return this.username.sendKeys(username);
   };

   /**
    * Set user password
    * @param {string} password
    * @returns {promise.Promise<any>}
    */
   setPassword(password: string): promise.Promise<any> {
      expect(this.password.waitReady()).toBeTruthy();
      return this.password.sendKeys(password);
   };

   /**
    * Wait Login button to be visible and clicked it.
    * @returns {promise.Promise<void>}
    */
   async clickLogin(): promise.Promise<void> {
      expect(this.loginButton.waitReady()).toBeTruthy();
      return this.loginButton.click();
   };

   /**
    * Wait Logout button to be visible and clicked it.
    * @returns {promise.Promise<void>}
    */
   async logout(): promise.Promise<void> {
      if (await utils.isExecutionParallel() != true) {
         await this.logoutButton.waitReady();
         await this.logoutButton.click();
         await this.logoutRole();
      }
   };

   /**
    * Wait Logout button to be visible and clicked it not Parallel.
    * @returns {promise.Promise<void>}
    */
   async logoutRole(): promise.Promise<void> {
      await this.logoutButton.waitReady();
      await this.logoutButton.click();
      await browser.sleep(5000);
      await this.logOutFromDTPS();
   };

   /**
    * Log in in vIdm Login Page. Set user and password and check  url
    * @param {string} username
    * @param {string} password
    * @param {string} urlEnvironment
    * @returns {promise.Promise<any>}
    */
   async login(username: string, password: string, urlEnvironment: string = url.baseAppUrl): promise.Promise<any> {
      return utils
         .runNonAngular(async () => {
            browser.driver.get(urlEnvironment);
            await this.loginButton.waitReady();
            await this.loginButton.click();

            if (urlEnvironment !== url.baseAppUrl) {
               expect(this.logInNextButton.waitReady()).toBeTruthy();
               await this.logInNextButton.click();
               expect(this.loginForm.waitReady()).toBeTruthy();
               await browser.get(url.workSpaceOneUrl);
            }

            let usernamePromise = vIdmLoginPage.setUsername(username);
            let passwordPromise = vIdmLoginPage.setPassword(password);
            return protractor.promise
               .all([
                  usernamePromise,
                  passwordPromise
               ])
               .then(async (results) => {
                  await  vIdmLoginPage.logIn();
                  return browser
                     .getCurrentUrl()
                     .then(async (res) => {
                        // Workaround for the dev vIDM - if we're not redirected properly to the app,
                        // navigate to it
                        // manually
                        if (res.indexOf(urlEnvironment) == -1) {
                           console.log("vIDM didn't redirect to the app - navigating back to the app manually. This might indicate a problem"
                              + "with that functionality.");
                           await browser.get(urlEnvironment);
                           return this.loginButton.click();
                        }
                     });
               });
         });
   }

   /**
    * Log out from dtps. Navigate to gtps link for logout
    * @returns {promise.Promise<any>}
    */
   async logOutFromDTPS(): promise.Promise<any> {
      await browser.waitForAngularEnabled(false).then(async () => {
         await browser.get(url.vidmLogoutLink);
         await browser.sleep(5000);
         await browser.waitForAngularEnabled(true);
      });
   };

   /**
    *
    * @param {string} username
    * @param {boolean} workSpaceOne. If is true the application log in to
    * @returns {promise.Promise<any>}
    */
   async loginWithUser(username: string, urlEnvironment: string = url.baseAppUrl, timeout: number = 60): promise.Promise<any> {
      await this.login(username, browser.params.customerUser.password, urlEnvironment).then(async () => {
         let headerPage = new HeaderPage();

         if (await (headerPage.logo).waitReady({timeout: timeout * 1000}) == false)
            throw new Error("User is not logged in");
      });
      await SeleniumGridApiController.logTestSession()
   };


   async navigateToApp(urlEnvironment: string = url.baseAppUrl): promise.Promise<any> {
      await browser.waitForAngularEnabled(false).then(async () => {
         browser.driver.get(urlEnvironment);
         await this.loginButton.waitReady();
      });
   };
}

export let solutionBuilderLoginPage = new SolutionBuilderLoginPage();