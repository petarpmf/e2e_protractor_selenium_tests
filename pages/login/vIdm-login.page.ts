import {By, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {ProtractorUtils} from "../../common/utils/protractor.utils";
import {Urls} from "../../common/urls";

let url = new Urls();
let utils = new ProtractorUtils();


export class VidmLoginPage {

   username = element(By.id('username'));
   password = element(By.id('password'));
   loginButton = element(By.id('signIn'));
   logoutButton = element(by.id('dropdown-carat'));
   signoutLink = element(by.id('signout-link'));

   async setUsername(username) {
      await this.username.waitReady();
      return this.username.sendKeys(username);
   };

   async setPassword(password) {
      await this.password.waitReady();
      return this.password.sendKeys(password);
   };

   async logIn() {
      await this.loginButton.waitReady();
      return this.loginButton.click();
   };

   async logout() {
      return this.logoutButton.click().then(() => {
         return this.signoutLink.click();
      });
   };

   async clickSingIn(urlEnvironment: string = url.baseAppUrl): promise.Promise<any> {
      return utils
         .runNonAngular(async () => {
            await this.logIn();
         });
   }

}