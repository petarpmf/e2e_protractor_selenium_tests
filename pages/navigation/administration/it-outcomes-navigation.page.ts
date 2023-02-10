import {browser, by, protractor, element, By, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {BaseNavigatorPage} from "../../common/base-navigator.page";
import {NavigatorPage} from '../../navigator.page';

/**
 * Navigation for It value model/Storefront configuration submenu
 *
 */

export class ItOutcomesNavigationPage extends BaseNavigatorPage {
   itValueModelTopLink = element(by.xpath('//*[@id="itValueModelLink"]'));
   businessPartnerSubLink = element(by.id('businessPartnerLink'));
   digitalEnterpriseSubLink = element(by.id('digitalEnterpriseLink'));
   consumerSubLink = element(by.id('consumerLink'));
   cyberSecuritySubLink = element(by.id('itvmCybersecurityLink'));
   infrastructureProviderSubLink = element(by.id('infrastructureProviderLink'));
   storyboardCapabilitySubLink = element(by.id('storyboardCapabilityLink'));
   solutionElementLink = element(by.id('solutionElementLink'));
   outcomeLink = element(by.id('outcomeLink'));
   itCapabilityLink = element(by.id('itCapabilityLink'));
   customerProblemLink = element(by.id('customerProblemLink'));
   serviceMappingLink = element(by.id('serviceMappingLink'));
   itOutcomesLinkButton = element(by.xpath('//*[@id="itOutcomesLink"]/div[1]/button'));
   itOutcomesLink = element(by.id('itOutcomesLink'));
   dwOutcomesLink = element(by.xpath('//*[@id="dwOutcomesLink"]/div[1]/button'));
   navigatorPage = new NavigatorPage();

   clickItValueModelTopLink(itValueModelTopLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return itValueModelTopLink.click();
   };

   async openBusinessPartner(itValueModelTopLink: ElementFinder, businessPartnerSubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(businessPartnerSubLink.waitReady()).toBeTruthy();
         return businessPartnerSubLink.click();
      })
   };

   openInfrastructureProvider(itValueModelTopLink: ElementFinder, infrastructureProviderSubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(infrastructureProviderSubLink.waitReady()).toBeTruthy();
         return infrastructureProviderSubLink.click();
      })
   };

   async openDigitalEnterprise(itValueModelTopLink: ElementFinder, digitalEnterpriseSubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(digitalEnterpriseSubLink.waitReady()).toBeTruthy();
         return digitalEnterpriseSubLink.click();
      })
   };

   async openConsumer(itValueModelTopLink: ElementFinder, consumerSubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(consumerSubLink.waitReady()).toBeTruthy();
         return consumerSubLink.click();
      })
   };

   async openCybersecurity(itValueModelTopLink: ElementFinder, cyberSecuritySubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(cyberSecuritySubLink.waitReady()).toBeTruthy();
         return cyberSecuritySubLink.click();
      })
   };

   clickStoryboardCapabilitySubLink(itValueModelTopLink: ElementFinder, storyboardCapabilitySubLink: ElementFinder): promise.Promise<any> {
      expect(itValueModelTopLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itValueModelTopLink).then(() => {
         expect(storyboardCapabilitySubLink.waitReady()).toBeTruthy();
         return storyboardCapabilitySubLink.click();
      })
   };

   clickOutcomeLink(itOutcomesLink: ElementFinder, outcomeLink: ElementFinder): promise.Promise<any> {
      expect(itOutcomesLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(itOutcomesLink).then(() => {
         expect(outcomeLink.waitReady()).toBeTruthy();
         return outcomeLink.click();
      })
   };

   clickItCapabilityLink(storefrontConfigurationlink: ElementFinder, itCapabilityLink: any): promise.Promise<any> {
      expect(storefrontConfigurationlink.waitReady()).toBeTruthy();
      return this.expandClarityElement(storefrontConfigurationlink).then(() => {
         expect(itCapabilityLink.waitReady()).toBeTruthy();
         return itCapabilityLink.click();
      })
   };

   clickCustomerProblemLink(storefrontConfigurationlink: ElementFinder, customerProblemLink: ElementFinder): promise.Promise<any> {
      expect(storefrontConfigurationlink.waitReady()).toBeTruthy();
      return this.expandClarityElement(storefrontConfigurationlink).then(() => {
         expect(customerProblemLink.waitReady()).toBeTruthy();
         return customerProblemLink.click();
      })
   };

   async clickServiceMappingLink(): promise.Promise<any> {
      expect(this.itOutcomesLink.waitReady()).toBeTruthy();
      return this.expandClarityElement(this.itOutcomesLink).then(() => {
         expect(this.serviceMappingLink.waitReady()).toBeTruthy();
         return this.serviceMappingLink.click();
      })
   };

   async isItvmStorefrontExpanded() {

      return this.itOutcomesLink.getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }

         return false;
      });
   }

   async expandItvmStorefrontConfigurations(): promise.Promise<any> {
      await this.scrollToElement(this.itOutcomesLink);
      await expect(this.itOutcomesLink.waitReady()).toBeTruthy();
      if (!await this.isItvmStorefrontExpanded()) {
         return await this.itOutcomesLinkButton.click();
      }
   }

   async expandDwjmStorefrontConfigurations(): promise.Promise<any> {
      return this.dwOutcomesLink.click();
   }

   async expandItvmBusinessRelationshipProfiles(): promise.Promise<any> {
      await this.scrollToElement(this.itOutcomesLink);
      return this.itValueModelTopLink.click();
   };
}
