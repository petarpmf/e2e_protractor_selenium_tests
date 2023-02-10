import {browser, by, protractor, element, By, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {BaseNavigatorPage} from "../../common/base-navigator.page";
import {NavigatorPage} from '../../navigator.page';

/**
 * Navigation for DwjmAdminNavigationPage
 *
 */

export class DwjmAdminNavigationPage extends BaseNavigatorPage {
   storefrontConfigurationLink = element(By.xpath('//*[@id="dwOutcomesLink"]'));
   itCapabilityLink = element(By.id('eucItCapabilityLink'));
   customerProblemLink = element(By.id('eucCustomerProblemLink'));
   outcomeLink = element(by.id('eucOutcomeLink'));
   itValueModelTopLink = element(by.xpath('//*[@id="eucItValueModelLink"]'));
   storyboardCapabilityLink = element(by.id('eucStoryboardCapabilityLink'));
   itDefinedSubLink = element(by.id('eucInfrastructureProviderLink'));
   infrastructureSubLink = element(by.id('eucInfrastructure'));
   userCentricSubLink = element(by.id('eucBusinessPartnerLink'));
   businessPartnerSubLink = element(by.id('eucBusinessPartnerLink'));
   digitalEnterpriseSubLink = element(by.id('eucDigitalEnterpriseLink'));
   solutionElementLink = element(By.id('eucSolutionElementLink'));
   cyberSecuritySubLink = element(by.id('eucCybersecurityLink'));
   serviceMappingLink = element(by.id('eucServiceMappingLink'));

   navigatorPage = new NavigatorPage();


   /**
    * Open It Defined menu.
    */
   async openItDefined(): promise.Promise<any> {
      expect(this.itDefinedSubLink.waitReady()).toBeTruthy();
      await this.itDefinedSubLink.click();
   };

   async openUserCentric(): promise.Promise<any> {
      expect(this.userCentricSubLink.waitReady()).toBeTruthy();
      await this.userCentricSubLink.click();
   };

   async openDigitalEnterprise(): promise.Promise<any> {
      expect(this.digitalEnterpriseSubLink.waitReady()).toBeTruthy();
      await this.digitalEnterpriseSubLink.click();
   };

   async openCyberSecurity(): promise.Promise<any> {
      expect(this.cyberSecuritySubLink.waitReady()).toBeTruthy();
      await this.cyberSecuritySubLink.click();
   };

   async openInfratructure(): promise.Promise<any> {
      expect(this.infrastructureSubLink.waitReady()).toBeTruthy();
      await this.infrastructureSubLink.click();
   };

   isDwjmStorefrontConfigurationsExpanded() {
      return element(by.id('dwOutcomesLink')).getAttribute('class').then(function (classes) {
         return classes.indexOf('is-expanded') > -1;
      });
   }

   /**
    * Expand Dwjm Storefront Configurations menu.
    */
   public async expandDwjmStorefrontConfigurations(): promise.Promise<any> {
      await this.scrollToElement(this.navigatorPage.administrationBtn);
      expect(this.navigatorPage.administrationBtn.waitReady()).toBeTruthy();
      await this.scrollToElement(this.storefrontConfigurationLink);
      if (!this.isDwjmStorefrontConfigurationsExpanded()) {
         await this.storefrontConfigurationLink.click();
      }
   }

   async isDwjmBusinessRelationshipProfilesExpanded() {
      return element(by.id('eucItValueModelLink')).getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }
         return false;
      });
   }

   /**
    * Expand Dwjm Business Relationship Profiles.
    */
   async expandDwjmBusinessRelationshipProfiles(): promise.Promise<any> {
      await this.expandDwjmStorefrontConfigurations();
      await this.scrollToElement(this.itValueModelTopLink);
      if (!await this.isDwjmBusinessRelationshipProfilesExpanded()) {
         await this.itValueModelTopLink.click();
      }
   };

   clickServiceMappingLink(): promise.Promise<any> {
      expect(this.storefrontConfigurationLink.waitReady()).toBeTruthy();
      return this.serviceMappingLink.click();
   };

}