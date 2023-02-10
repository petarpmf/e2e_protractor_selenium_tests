import {promise} from "selenium-webdriver";
import {BaseNavigatorPage} from "../../common/base-navigator.page";
import {NavigatorPage} from '../../navigator.page';
import {by, element, By, ElementFinder, browser} from "protractor";

export class SalesPlayAdminNavigationPage extends BaseNavigatorPage {
   salesPlaysConfigurationLink = element(By.xpath('//*[@id="spOutcomesLink"]'));
   storyboardCapabilityLink = element(by.id('spStoryboardCapabilityLink'));
   pillars = element(by.xpath('//*[@id="spItValueModelLink"]'));
   modernizeDataCentersTab = element(by.id('spModernizeDataCentersLink'));
   intergatePublicCloudTab = element(by.id('spIntegratePublicCloudsLink'));
   empowerDigitalWorkspaceTab = element(by.id('spEmpowerDigitalWorkspaceLink'));
   transformNetworkSecurityeTab = element(by.id('spTransformNetworkingAndSecurityLink'));
   navigatorPage = new NavigatorPage();

   async expandSalesPlaysStorefrontConfigurations(): promise.Promise<any> {
      await this.scrollToElement(this.navigatorPage.administrationBtn);
      expect(this.navigatorPage.administrationBtn.waitReady()).toBeTruthy();
      await this.expandClarityElement(this.navigatorPage.administrationBtn);
      await this.scrollToElement(this.salesPlaysConfigurationLink);
      await this.expandClarityElement(this.salesPlaysConfigurationLink);
   }

   async expandSalesPlaysPillars(): promise.Promise<any> {
      await this.expandSalesPlaysStorefrontConfigurations();
      await this.scrollToElement(this.pillars);
      await this.expandClarityElement(this.pillars);
   };

   async openPillars(pillarSubLink: ElementFinder): promise.Promise<any> {
      expect(pillarSubLink.waitReady()).toBeTruthy();
      return pillarSubLink.click();
   };

   async openSolutionSetContainer(): promise.Promise<any> {
      await this.expandSalesPlaysStorefrontConfigurations();
      expect(this.storyboardCapabilityLink.waitReady()).toBeTruthy();
      await this.storyboardCapabilityLink.click();
   };

   async openModernizeDataCenter(): promise.Promise<any> {
      expect(this.modernizeDataCentersTab.waitReady()).toBeTruthy();
      await this.modernizeDataCentersTab.click();
   };

   async openIntegratePublicClouds(): promise.Promise<any> {
      expect(this.intergatePublicCloudTab.waitReady()).toBeTruthy();
      await this.intergatePublicCloudTab.click();
   };

   async openEmpowerDigitalWorkspace(): promise.Promise<any> {
      expect(this.empowerDigitalWorkspaceTab.waitReady()).toBeTruthy();
      await this.empowerDigitalWorkspaceTab.click();
   };

   async openTransformNetworkingSecurity(): promise.Promise<any> {
      expect(this.transformNetworkSecurityeTab.waitReady()).toBeTruthy();
      await this.transformNetworkSecurityeTab.click();
   };

}