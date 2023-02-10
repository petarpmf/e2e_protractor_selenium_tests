import {BasePage} from "./common/base.page";
import {by, element} from 'protractor';
import {promise} from "selenium-webdriver";

/**
 * It contains all the function of the header.
 */
export class HeaderPage extends BasePage {
   logo = element(by.id('logo'));
   userProfileIcon = element(by.id('user-settings-icon'));
   allOpportunitiesIcon = element(by.id('all-opportunities-icon'));
   homeLink = element(by.css('[shape="home"]'));


   /**
    * Click Logo.
    * @returns {Promise<void>}
    */
   async clickLogo(): promise.Promise<void> {
      expect(this.logo.waitReady()).toBeTruthy();
      return this.logo.click();
   }

   /**
    * Click User Profile icon.
    * @returns {Promise<void>}
    */
   async clickUserProfileIcon(): promise.Promise<void> {
      expect(this.userProfileIcon.waitReady()).toBeTruthy();
      return await this.userProfileIcon.click();
   }

   /**
    * Click All Opportunities Icon.
    * @returns {Promise<void>}
    */
   async clickAllOpportunitiesIcon(): promise.Promise<void> {
      expect(this.allOpportunitiesIcon.waitReady()).toBeTruthy();
      return this.allOpportunitiesIcon.click();
   }

   /**
    * Click Home Link.
    * @returns {promise.Promise<any>}
    */
   async clickHomeLink(): promise.Promise<any> {
      expect(this.homeLink.waitReady()).toBeTruthy();
      return this.homeLink.click();
   }

}

export let headerPage = new HeaderPage();