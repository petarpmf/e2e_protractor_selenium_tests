import {browser, by, protractor, element, By, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {BaseNavigatorPage} from "../../common/base-navigator.page";
import {NavigatorPage} from '../../navigator.page';

/**
 * Navigation for ProductFocusedAdminNavigationPage
 *
 */

export class ProductFocusedAdminNavigationPage extends BaseNavigatorPage {
   storefrontConfigurationLink = element(By.id("tepOutcomesLink"));
   storefrontConfigurationButton = element(By.xpath('//*[@id="tepOutcomesLink"]/div[1]/button'));
   storyboardCapabilityLink = element(by.id('eucSubLinkStoryboardCapabilityLink'));
   sddcSubLink = element(by.id('tepsddcTepLink'));
   storyboardCapabilitySubLink = element(by.id('tepStoryboardCapabilityLink'));
   pillars = element(by.id('tepItValueModelLink'));
   pillarsButton = element(By.xpath('//*[@id="tepItValueModelLink"]/div[1]/button'));
   networkingSecuritySubLink = element(by.id('tepnetworkingAndSecurityTepLink'));
   eucSubLink = element(by.id('tepeucTepLink'));
   platformSubLink = element(by.id('platformTepLink'));
   navigatorPage = new NavigatorPage();


   async openSDDC(): promise.Promise<any> {
      await this.expandProductFocusedPillars();
      expect(this.sddcSubLink.waitReady()).toBeTruthy();
      await this.sddcSubLink.click();
   };

   async openEUC(): promise.Promise<any> {
      await this.expandProductFocusedPillars();
      expect(this.eucSubLink.waitReady()).toBeTruthy();
      await this.eucSubLink.click();
   };

   async openNetworkingSecurity(): promise.Promise<any> {
      await this.expandProductFocusedPillars();
      expect(this.networkingSecuritySubLink.waitReady()).toBeTruthy();
      await this.networkingSecuritySubLink.click();
   };

   async openPlatform(): promise.Promise<any> {
      await this.expandProductFocusedPillars();
      expect(this.platformSubLink.waitReady()).toBeTruthy();
      await this.platformSubLink.click();
   };

   async isProductFocusedStorefrontConfigurationsExpanded(): promise.Promise<boolean> {
      return element(by.id('tepOutcomesLink')).getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }
         return false;
      });
   }

   async isPillarExpanded() {
      return this.pillars.getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }
         return false;
      });
   }

   async expandProductFocusedStorefrontConfigurations(): promise.Promise<any> {
      await this.scrollToElement(this.navigatorPage.administrationBtn);
      expect(this.navigatorPage.administrationBtn.waitReady()).toBeTruthy();
      await this.scrollToElement(this.storefrontConfigurationLink);
      if (!(await this.isProductFocusedStorefrontConfigurationsExpanded())) {
         await this.storefrontConfigurationButton.click();
      }
   }

   async expandProductFocusedPillars(): promise.Promise<any> {
      await this.expandProductFocusedStorefrontConfigurations();
      await this.scrollToElement(this.pillars);
      if (!(await this.isPillarExpanded())) {
         await this.pillarsButton.click();
      }
   };

   async openPillars(pillarSubLink: ElementFinder): promise.Promise<any> {
      await this.expandProductFocusedPillars();
      expect(await pillarSubLink.waitReady()).toBeTruthy();
      await pillarSubLink.click();
   };
}