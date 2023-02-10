import {promise} from "selenium-webdriver";
import {BasePage} from "./common/base.page";
import {NavigatorPage} from './navigator.page';
import {ItOutcomesNavigationPage} from '../pages/navigation/administration/it-outcomes-navigation.page';
import {AdministrationNavigationPage} from '../pages/navigation/administration/administration-navigation.page';
import {IItvmStorefront} from './model/administration/itvmStorefrontConfiguration/itvm-storefront.model';
import {IDwjmStorefront} from './model/administration/dwjmStorefrontConfiguration/dwjm-storefront.model';
import {ItvmStorefrontConfiguratorPage} from "./itvm-storefront-configurator.page";
import {StorefrontElement} from '../common/mocked-data/mocked-storefront-element.data';
import {DwjmAdminNavigationPage} from '../pages/navigation/administration/dwjm-admin-navigation.page';
import {SelectSolutionSetsPage} from "./guidedMode/select-solution-sets.page";
import {IProductFocusedStorefront} from "./model/administration/ProductsStorefrontConfiguration/product-storefront.model";
import {ProductFocusedAdminNavigationPage} from "./navigation/administration/productFocused-admin-navigation.page";
import {ISalesPlayStorefront} from "./model/administration/salesPlaysStorefrontConfiguration/salesPlay-storefront.model";
import {SalesPlayAdminNavigationPage} from "./navigation/administration/salesPlay-admin-navigation.page";
import {browser} from "protractor";

export class AdministrationPanelPage extends BasePage {
   navigatorPage = new NavigatorPage();
   itOutcomesNavigationPage = new ItOutcomesNavigationPage();
   administrationNavigationPage = new AdministrationNavigationPage();
   itvmStorefrontConfiguratorPage = new ItvmStorefrontConfiguratorPage();
   dwjmAdminNavigationPage = new DwjmAdminNavigationPage();
   productFocusedAdminNavigationPage = new ProductFocusedAdminNavigationPage();
   salesPlaysAdminNavigationPage = new SalesPlayAdminNavigationPage();
   startPage = new SelectSolutionSetsPage();


   private hasObjectKey(key, keys): Boolean {

      if (typeof(keys) == "undefined") {
         keys = [];
      }
      return keys.indexOf(key) > -1 || keys.length == 0;
   };

   async createItvmElements(itvmData: IItvmStorefront, keys?: Array<string>): promise.Promise<any> {
      await this.navigatorPage.openSolutionElementLink(this.navigatorPage.itOutcomesLink, this.navigatorPage.solutionElementLink);
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         //creates solution element
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.createSolutionElements(itvmData.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Create ItCapabilities
         await this.administrationNavigationPage.scrollDown();
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.createItCapabilities(itvmData.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         //Create CustomerProblems
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.createCustomerProblems(itvmData.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         //Create Outcomes
         await this.itvmStorefrontConfiguratorPage.outcomePage.createOutcomes(itvmData.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         await this.itOutcomesNavigationPage.clickItValueModelTopLink(this.itOutcomesNavigationPage.itValueModelTopLink);
         await this.itOutcomesNavigationPage.expandItvmBusinessRelationshipProfiles();
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.storyboardCapabilitySubLink);
         //Create Storyboard Capabilities
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.createStoryboardCapabilities(itvmData.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.INFRASTRUCTURE_PROVIDERS, keys)) {
         //Create Infrastructure Providers
         await this.itOutcomesNavigationPage.openInfrastructureProvider(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.infrastructureProviderSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(itvmData.infrastructureProviders);
      }

      if (this.hasObjectKey(StorefrontElement.BUSINESS_PARTNERS, keys)) {
         //Create Business partners
         await this.itOutcomesNavigationPage.openBusinessPartner(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.businessPartnerSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(itvmData.businessPartners);
      }

      if (this.hasObjectKey(StorefrontElement.DIGITAL_ENTERPRISES, keys)) {
         //Create Digital enterprises
         await this.itOutcomesNavigationPage.openDigitalEnterprise(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.digitalEnterpriseSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(itvmData.digitalEnterprises);
      }

      if (this.hasObjectKey(StorefrontElement.CONSUMERS, keys)) {
         //Create consumers
         await this.itOutcomesNavigationPage.openConsumer(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.consumerSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(itvmData.consumers);
      }

      if (this.hasObjectKey(StorefrontElement.CYBER_SECURITIES, keys)) {
         //Create cybersecurities
         await this.itOutcomesNavigationPage.openCybersecurity(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.cyberSecuritySubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(itvmData.cybersecurities);
      }
   }

   //Delete Itvm Elements function
   async deleteItvmElements(itvmData: IItvmStorefront, keys?: Array<string>): promise.Promise<any> {

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         //Delete Outcomes
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         await this.itvmStorefrontConfiguratorPage.outcomePage.deleteOutcomes(itvmData.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         //Delete CustomerProblems
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.deleteCustomerProblems(itvmData.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Delete the created it capability
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.deleteItCapabilities(itvmData.itCapabilities);
      }

      //Delete the created solution element
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         await this.navigatorPage.clickSolutionElementLink(this.navigatorPage.solutionElementLink);
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.deleteSolutionElement(itvmData.solutionElements);
         await expect(this.itvmStorefrontConfiguratorPage.solutionElementPage.getSolutionElementsGridValues()).not.toContain(itvmData.solutionElements);

      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         //Delete the created storyboard capability
         //await this.itOutcomesNavigationPage.clickItValueModelTopLink(this.itOutcomesNavigationPage.itValueModelTopLink);
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.storyboardCapabilitySubLink);
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.deleteStoryboardCapabilities(itvmData.solutionSetContainers);
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.checkSolutionSetContainerIsDeleted(itvmData.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.INFRASTRUCTURE_PROVIDERS, keys)) {
         //Delete the created infrastructure provider
         await this.itOutcomesNavigationPage.openInfrastructureProvider(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.infrastructureProviderSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(itvmData.infrastructureProviders);
      }

      if (this.hasObjectKey(StorefrontElement.BUSINESS_PARTNERS, keys)) {
         //Delete the Business partners
         await this.itOutcomesNavigationPage.openBusinessPartner(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.businessPartnerSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(itvmData.businessPartners);
      }

      if (this.hasObjectKey(StorefrontElement.DIGITAL_ENTERPRISES, keys)) {
         //Delete the Digital enterprises
         await this.itOutcomesNavigationPage.openDigitalEnterprise(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.digitalEnterpriseSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(itvmData.digitalEnterprises);
      }

      if (this.hasObjectKey(StorefrontElement.CONSUMERS, keys)) {
         //Delete the consumers
         await this.itOutcomesNavigationPage.openConsumer(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.consumerSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(itvmData.consumers);
      }

      if (this.hasObjectKey(StorefrontElement.CYBER_SECURITIES, keys)) {
         //Delete the cyberSecurities
         await this.itOutcomesNavigationPage.openCybersecurity(this.itOutcomesNavigationPage.itValueModelTopLink, this.itOutcomesNavigationPage.cyberSecuritySubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(itvmData.cybersecurities);
      }
   }

   //Create DWJM Elements function
   async createDwjmElements(dwjmData: IDwjmStorefront, keys?: Array<string>): promise.Promise<any> {
      await this.dwjmAdminNavigationPage.solutionElementLink.click();
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         //creates solution element
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.createSolutionElements(dwjmData.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Create ItCapabilities
         await this.administrationNavigationPage.scrollDown();
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.createItCapabilities(dwjmData.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.customerProblemLink);
         //Create CustomerProblems
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.createCustomerProblems(dwjmData.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.outcomeLink);
         //Create Outcomes
         await this.itvmStorefrontConfiguratorPage.outcomePage.createOutcomes(dwjmData.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         await this.itOutcomesNavigationPage.clickItValueModelTopLink(this.dwjmAdminNavigationPage.itValueModelTopLink);
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.dwjmAdminNavigationPage.itValueModelTopLink, this.dwjmAdminNavigationPage.storyboardCapabilityLink);
         //Create Storyboard Capabilities
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.createStoryboardCapabilities(dwjmData.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.IT_DEFINED, keys)) {
         //Create Infrastructure Providers
         await this.dwjmAdminNavigationPage.openItDefined();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(dwjmData.itDefineds);
      }

      if (this.hasObjectKey(StorefrontElement.USER_CENTRIC, keys)) {
         //Create Business partners
         await this.dwjmAdminNavigationPage.openUserCentric();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(dwjmData.userCentrics);
      }

      if (this.hasObjectKey(StorefrontElement.DIGITAL_ENTERPRISES, keys)) {
         //Create Digital enterprises
         await this.dwjmAdminNavigationPage.openDigitalEnterprise();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(dwjmData.digitalEnterprises);
      }
      if (this.hasObjectKey(StorefrontElement.CYBER_SECURITIES, keys)) {
         //Create Digital enterprises
         await this.dwjmAdminNavigationPage.openCyberSecurity();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(dwjmData.cybersecurities);
      }
      if (this.hasObjectKey(StorefrontElement.INFRASTRUCTURE, keys)) {
         //Create Digital enterprises
         await this.dwjmAdminNavigationPage.openInfratructure();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(dwjmData.infrastructures);
      }

   }

   //Delete DWJM Elements function
   async deleteDwjmElements(dwjmData: IDwjmStorefront, keys?: Array<string>): promise.Promise<any> {
      await this.administrationNavigationPage.scrollDown();
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         //Delete the created solution element
         await this.navigatorPage.openSolutionElementLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.solutionElementLink);
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.deleteSolutionElement(dwjmData.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Delete the created it capability
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.deleteItCapabilities(dwjmData.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         //Delete CustomerProblems
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.customerProblemLink);
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.deleteCustomerProblems(dwjmData.customerProblems);
      }
      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         //Delete Outcomes
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.dwjmAdminNavigationPage.storefrontConfigurationLink, this.dwjmAdminNavigationPage.outcomeLink);
         await this.itvmStorefrontConfiguratorPage.outcomePage.deleteOutcomes(dwjmData.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         //Delete the created storyboard capability
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.dwjmAdminNavigationPage.itValueModelTopLink, this.dwjmAdminNavigationPage.storyboardCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.deleteStoryboardCapabilities(dwjmData.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.IT_DEFINED, keys)) {
         //Delete the created
         await this.dwjmAdminNavigationPage.openItDefined();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(dwjmData.itDefineds);
      }

      if (this.hasObjectKey(StorefrontElement.USER_CENTRIC, keys)) {
         //Delete the Business partners
         await this.dwjmAdminNavigationPage.openUserCentric();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(dwjmData.userCentrics);
      }
      if (this.hasObjectKey(StorefrontElement.DIGITAL_ENTERPRISES, keys)) {
         //Delete the Digital enterprise
         await this.dwjmAdminNavigationPage.openDigitalEnterprise();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(dwjmData.digitalEnterprises);
      }

      if (this.hasObjectKey(StorefrontElement.CYBER_SECURITIES, keys)) {
         //Delete the Cyber security
         await this.dwjmAdminNavigationPage.openCyberSecurity();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(dwjmData.cybersecurities);
      }

      if (this.hasObjectKey(StorefrontElement.INFRASTRUCTURE, keys)) {
         //Delete the Infrastructure
         await this.dwjmAdminNavigationPage.openInfratructure();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(dwjmData.infrastructures);
      }
   }

   //Create Product Focus Elements function
   async createProductsElements(productData: IProductFocusedStorefront, keys?: Array<string>): promise.Promise<any> {
      await this.navigatorPage.openSolutionElementLink(this.navigatorPage.itOutcomesLink, this.navigatorPage.solutionElementLink);
      await this.itOutcomesNavigationPage.solutionElementLink.click();
      //create solution element, outcome, it capability, customer problem in ITVM store front
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         //creates solution element
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.createSolutionElements(productData.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Create ItCapabilities
         await this.administrationNavigationPage.scrollDown();
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.createItCapabilities(productData.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         //Create CustomerProblems
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.createCustomerProblems(productData.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         //Create Outcomes
         await this.itvmStorefrontConfiguratorPage.outcomePage.createOutcomes(productData.outcomes);
      }
      await this.productFocusedAdminNavigationPage.expandProductFocusedPillars();

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         await this.itOutcomesNavigationPage.clickItValueModelTopLink(this.productFocusedAdminNavigationPage.pillars);
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.productFocusedAdminNavigationPage.pillars, this.productFocusedAdminNavigationPage.storyboardCapabilitySubLink);
         //Create Storyboard Capabilities
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.createStoryboardCapabilities(productData.solutionSetContainers, true);
      }
      await this.productFocusedAdminNavigationPage.expandProductFocusedPillars();

      if (this.hasObjectKey(StorefrontElement.SDDC, keys)) {
         //Create SDDC
         await this.productFocusedAdminNavigationPage.openPillars(this.productFocusedAdminNavigationPage.sddcSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(productData.sddcs);
      }

      if (this.hasObjectKey(StorefrontElement.NETWORKINGANDSECURITY, keys)) {
         //Create Networking & Security
         await this.productFocusedAdminNavigationPage.openPillars(this.productFocusedAdminNavigationPage.networkingSecuritySubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(productData.networkingSecuritys);
      }

      if (this.hasObjectKey(StorefrontElement.EUC, keys)) {
         //Create EUC
         await this.productFocusedAdminNavigationPage.openPillars(this.productFocusedAdminNavigationPage.eucSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(productData.eucs);
      }
      if (this.hasObjectKey(StorefrontElement.PLATFORM, keys)) {
         //Delete the Digital enterprises

         await this.productFocusedAdminNavigationPage.openPillars(this.productFocusedAdminNavigationPage.platformSubLink);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(productData.platforms);

      }

   }

   //Delete Product Focus  Elements function
   async deleteProductsElements(productData: IProductFocusedStorefront, keys?: Array<string>): promise.Promise<any> {

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         //Delete Outcomes
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         await this.itvmStorefrontConfiguratorPage.outcomePage.deleteOutcomes(productData.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         //Delete CustomerProblems
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.deleteCustomerProblems(productData.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Delete the created it capability
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.deleteItCapabilities(productData.itCapabilities);
      }

      //Delete the created solution element
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         await this.navigatorPage.clickSolutionElementLink(this.navigatorPage.solutionElementLink);
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.deleteSolutionElement(productData.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         //Delete the created storyboard capability

         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.productFocusedAdminNavigationPage.pillars, this.productFocusedAdminNavigationPage.storyboardCapabilitySubLink);
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.deleteStoryboardCapabilities(productData.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.SDDC, keys)) {
         //Delete the created infrastructure provider
         await this.productFocusedAdminNavigationPage.openSDDC();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(productData.sddcs);
      }

      if (this.hasObjectKey(StorefrontElement.NETWORKINGANDSECURITY, keys)) {
         //Delete the Business partners
         await this.productFocusedAdminNavigationPage.openNetworkingSecurity();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(productData.networkingSecuritys);
      }

      if (this.hasObjectKey(StorefrontElement.EUC, keys)) {
         //Delete the Digital enterprises
         await this.productFocusedAdminNavigationPage.openEUC();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(productData.eucs);
      }

      if (this.hasObjectKey(StorefrontElement.PLATFORM, keys)) {
         //Delete the Digital enterprises
         await this.productFocusedAdminNavigationPage.openPlatform();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(productData.platforms);
      }

   }

   //Create Sales Plays Elements function
   async createSalesPlaysElements(salesPlaysdata: ISalesPlayStorefront, keys?: Array<string>): promise.Promise<any> {
      await this.navigatorPage.openSolutionElementLink(this.navigatorPage.itOutcomesLink, this.navigatorPage.solutionElementLink);

      // create solution element, outcome, it capability, customer problem in ITVM store front
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         //creates solution element
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.createSolutionElements(salesPlaysdata.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Create ItCapabilities
         await this.administrationNavigationPage.scrollDown();
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.createItCapabilities(salesPlaysdata.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         //Create CustomerProblems
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.createCustomerProblems(salesPlaysdata.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         //Create Outcomes
         await this.itvmStorefrontConfiguratorPage.outcomePage.createOutcomes(salesPlaysdata.outcomes);
      }
      await this.salesPlaysAdminNavigationPage.expandSalesPlaysPillars();

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         // await this.itOutcomesNavigationPage.clickItValueModelTopLink(this.salesPlaysAdminNavigationPage.pillars);
         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.salesPlaysAdminNavigationPage.pillars, this.salesPlaysAdminNavigationPage.storyboardCapabilityLink);
         //Create Storyboard Capabilities
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.createStoryboardCapabilities(salesPlaysdata.solutionSetContainers, true);
      }
      // await this.salesPlaysAdminNavigationPage.expandSalesPlaysPillars();

      if (this.hasObjectKey(StorefrontElement.MODERNIZE_DATA_CENTERS, keys)) {
         //Create Modernize Data Centers
         await this.salesPlaysAdminNavigationPage.openPillars(this.salesPlaysAdminNavigationPage.modernizeDataCentersTab);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(salesPlaysdata.modernizeDataCenters);
      }

      if (this.hasObjectKey(StorefrontElement.INTEGRATE_PUBLIC_CLOUDS, keys)) {
         //Create Empower the Digital Workspace
         await this.salesPlaysAdminNavigationPage.openPillars(this.salesPlaysAdminNavigationPage.intergatePublicCloudTab);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(salesPlaysdata.integratePublicCloudss);
      }

      if (this.hasObjectKey(StorefrontElement.EMPOWER_THE_DIGITAL_WORKSPACE, keys)) {
         //Create Transform Networking and Security
         await this.salesPlaysAdminNavigationPage.openPillars(this.salesPlaysAdminNavigationPage.empowerDigitalWorkspaceTab);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(salesPlaysdata.empowerDigitalWorkspacee);
      }

      if (this.hasObjectKey(StorefrontElement.TRANSFORM_NETWORKING_AND_SECURITY, keys)) {
         browser.sleep(3000);
         //Create Integrate Public Clouds
         await this.salesPlaysAdminNavigationPage.openPillars(this.salesPlaysAdminNavigationPage.transformNetworkSecurityeTab);
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.createSolutionSets(salesPlaysdata.transformNetworkingSecurity);
      }

   }

   //Delete SalesPlays Elements function
   async deleteSalesPlaysElements(salesPlaysdata: ISalesPlayStorefront, keys?: Array<string>): promise.Promise<any> {

      //Delete the created solution element
      if (this.hasObjectKey(StorefrontElement.SOLUTION_ELEMENT, keys)) {
         await this.navigatorPage.clickSolutionElementLink(this.navigatorPage.solutionElementLink);
         await this.itvmStorefrontConfiguratorPage.solutionElementPage.deleteSolutionElement(salesPlaysdata.solutionElements);
      }

      if (this.hasObjectKey(StorefrontElement.SOLUTION_SET_CONTAINERS, keys)) {
         //Delete the created storyboard capability

         await this.itOutcomesNavigationPage.clickStoryboardCapabilitySubLink(this.salesPlaysAdminNavigationPage.pillars, this.salesPlaysAdminNavigationPage.storyboardCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.storyboardCapabilityPage.deleteStoryboardCapabilities(salesPlaysdata.solutionSetContainers);
      }

      if (this.hasObjectKey(StorefrontElement.OUTCOMES, keys)) {
         //Delete Outcomes
         await this.itOutcomesNavigationPage.clickOutcomeLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.outcomeLink);
         await this.itvmStorefrontConfiguratorPage.outcomePage.deleteOutcomes(salesPlaysdata.outcomes);
      }

      if (this.hasObjectKey(StorefrontElement.CUSTOMER_PROBLEMS, keys)) {
         //Delete CustomerProblems
         await this.itOutcomesNavigationPage.clickCustomerProblemLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.customerProblemLink);
         await this.itvmStorefrontConfiguratorPage.customerProblemPage.deleteCustomerProblems(salesPlaysdata.customerProblems);
      }

      if (this.hasObjectKey(StorefrontElement.IT_CAPABILITIES, keys)) {
         //Delete the created it capability
         await this.itOutcomesNavigationPage.clickItCapabilityLink(this.itOutcomesNavigationPage.itOutcomesLink, this.itOutcomesNavigationPage.itCapabilityLink);
         await this.itvmStorefrontConfiguratorPage.itCapabilityPage.deleteItCapabilities(salesPlaysdata.itCapabilities);
      }

      if (this.hasObjectKey(StorefrontElement.MODERNIZE_DATA_CENTERS, keys)) {
         //Delete the Modernize Data Centers
         await this.salesPlaysAdminNavigationPage.openModernizeDataCenter();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(salesPlaysdata.modernizeDataCenters);
      }

      if (this.hasObjectKey(StorefrontElement.INTEGRATE_PUBLIC_CLOUDS, keys)) {
         //Delete the Integrate Public Clouds
         await this.salesPlaysAdminNavigationPage.openIntegratePublicClouds();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(salesPlaysdata.integratePublicCloudss);
      }

      if (this.hasObjectKey(StorefrontElement.EMPOWER_THE_DIGITAL_WORKSPACE, keys)) {
         //Delete the Empower the Digital Workspace
         await this.salesPlaysAdminNavigationPage.openEmpowerDigitalWorkspace();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(salesPlaysdata.empowerDigitalWorkspacee);
      }

      if (this.hasObjectKey(StorefrontElement.TRANSFORM_NETWORKING_AND_SECURITY, keys)) {
         //Delete the Transform Networking and Security
         await this.salesPlaysAdminNavigationPage.openTransformNetworkingSecurity();
         await this.itvmStorefrontConfiguratorPage.solutionSetPage.deleteSolutionSets(salesPlaysdata.transformNetworkingSecurity);
      }

   }

}