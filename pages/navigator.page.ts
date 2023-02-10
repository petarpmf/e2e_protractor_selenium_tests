import {BaseNavigatorPage} from "./common/base-navigator.page";
import {HeaderPage} from "./header.page";
import {browser, by, By, element, ElementFinder, protractor} from 'protractor';
import {promise} from "selenium-webdriver";
import {ItOutcomesNavigationPage} from "./navigation/administration/it-outcomes-navigation.page";

export class NavigatorPage extends BaseNavigatorPage {
   servicePortfolioBtn = element(By.xpath('//*[@id="servicesPortfolioMainLink"]/div[1]/button'));
   createServiceBtn = element(By.id('createServicesLink'));
   openedServicesBtn = element(By.id('openedServices'));
   publishedServicesBtn = element(By.id('publishedServices'));
   scopingModeLink = element(By.id('scopingMode'));
   opportunitiesBtn = element(By.id('opportunitiesLink'));
   openedOpportunitiesBtn = element(By.id('openedOpportunities'));
   incompleteOpportunitiesBtn = element(By.id('incompleteOpportunities'));
   administrationBtn = element(By.xpath("//*[@id=\"administration\"]"));
   guidedModeLink = element(By.id('guidedMode'));
   sandwichMenu = element(By.xpath("//*[@id=\"sidenav-menu\"]/button"));
   loadingElement = element(By.id('spinnerMask'));
   crossServiceDataElemsLink = element(By.id('cross-service-data-menu'));
   itOutcomesLink = element(By.xpath('//*[@id="itOutcomesLink"]'));
   itOutcomesLinkButton = element(By.xpath('//*[@id="itOutcomesLink"]/div[1]/button'));
   serviceMappingLink = element(By.id('serviceMappingLink'));
   retractedServicesLink = element(By.id('retractedServices'));
   solutionElementLink = element(By.id('solutionElementLink'));
   dwjmStorefrontConfigurationLink = element(By.xpath('//*[@id="dwOutcomesLink"]/div[1]/button'));
   dwjmBusinessRelationshipProfileLink = element(By.id('eucItValueModelLink'));
   dwjmItDefinedLink = element(By.id('eucInfrastructureProviderLink'));
   dwjmUserCentricLink = element(By.id('eucBusinessPartnerLink'));
   dwjmDigitalEnterpriseLink = element(By.id('eucDigitalEnterpriseLink'));
   dwjmSolutionElementLink = element(By.id('eucSolutionElementLink'));
   dashboardLink = element(By.id('dashboardLink'));
   createOpportunityBtn = element(By.id('createOpportunityBtn'));
   usersMenuBtn = element(By.css('#users .nav-group-trigger'));
   userManagementLink = element(By.id('userManagement'));
   manageRolesLink = element(By.id('manageRolesLink'));
   headerPage = new HeaderPage();
   sideMenu = element(by.id('sidenav-menu'));
   roleGroups = element(by.id('roleTypes'));
   rolesLink = element(by.id('roles'));
   sandwichMenuHidden = element(By.css('.main-nav-sandwich-menu-hidden'));
   servicePortfolioMainLink = element(by.id('servicesPortfolioMainLink'));
   verticalNavigator = element(By.css('clr-vertical-nav'));
   manageProductsLink = element(by.id('manageProducts'));
   thirdPartyProductsLink = element(by.id('thirdPartyProductsLink'));
   vendorsLink = element(by.id('vendorsLink'));
   vendorProductsLink = element(by.id('vendorProductsLink'));
   vendorProductVersionsLink = element(by.id('vendorProductVersionsLink'));
   configurationsLink = element(by.id('configurationsLink'));

   async isServicePortfolioExpanded() {
      return this.isNavigationGroupExpanded(await this.servicePortfolioMainLink);
   }

   private async isNavigationGroupExpanded(element: ElementFinder) {
      return element.getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }
         return false;
      });
   }

   private async expandNavigatorGroup(element: ElementFinder) {
      if (!(await this.isNavigationGroupExpanded(element))) {
         await element.click();
      }
   }

   async clickServicePortfolioBtn(): promise.Promise<any> {
      expect(await this.servicePortfolioBtn.waitReady()).toBeTruthy();
      if (!(await this.isServicePortfolioExpanded())) {
         return this.servicePortfolioBtn.click();
      }
   };

   async clickCreateServiceBtn(): promise.Promise<any> {
      expect(this.servicePortfolioBtn.waitReady()).toBeTruthy();
      await this.clickServicePortfolioBtn();
      expect(this.createServiceBtn.waitReady()).toBeTruthy();
      //await this.createServiceBtn.click();
      // expect(this.servicePortfolioBtn.waitReady()).toBeTruthy();
      return this.createServiceBtn.click();
   };

   async clickOpenedServicesBtn(): promise.Promise<any> {
      expect(this.servicePortfolioBtn.waitReady()).toBeTruthy();
      await this.clickServicePortfolioBtn();
      //await this.expandElement(this.servicePortfolioBtn);
      expect(this.openedServicesBtn.waitReady()).toBeTruthy();
      // await this.openedServicesBtn.click();
      // return this.servicePortfolioBtn.click();
      return this.openedServicesBtn.click();
   };

   async clickPublishedServicesBtn(): promise.Promise<any> {
      expect(this.servicePortfolioBtn.waitReady()).toBeTruthy();
      await this.clickServicePortfolioBtn();
      //await this.expandElement(this.servicePortfolioBtn);
      expect(this.publishedServicesBtn.waitReady()).toBeTruthy();
      //await this.publishedServicesBtn.click();
      return this.publishedServicesBtn.click();
      //return this.servicePortfolioBtn.click();
   };

   async clickRetractedServicesBtn(): promise.Promise<any> {
      expect(this.servicePortfolioBtn.waitReady()).toBeTruthy();
      //await this.expandElement(this.servicePortfolioBtn);
      expect(this.retractedServicesLink.waitReady()).toBeTruthy();
      // await this.retractedServicesLink.click();
      // return this.servicePortfolioBtn.click();
      return this.retractedServicesLink.click();
   };

   async expandOpportunitiesMenu(): promise.Promise<any> {
      expect(this.opportunitiesBtn.waitReady()).toBeTruthy();
      await this.expandElement(this.opportunitiesBtn);
   };

   async clickScopingModeLink(): promise.Promise<any> {
      await this.scrollUp();
      await this.expandElement(this.opportunitiesBtn);
      expect(this.scopingModeLink.waitReady()).toBeTruthy();
      await this.scopingModeLink.click();
      return this.opportunitiesBtn.click();
   };

   async clickOpenedOpportunitiesBtn(): promise.Promise<any> {
      expect(this.opportunitiesBtn.waitReady()).toBeTruthy();
      await this.expandElement(this.opportunitiesBtn);
      expect(this.openedOpportunitiesBtn.waitReady()).toBeTruthy();
      await this.openedOpportunitiesBtn.click();
      return this.opportunitiesBtn.click();
   };

   async clickIncompleteOpportunitiesBtn(): promise.Promise<any> {
      expect(this.opportunitiesBtn.waitReady()).toBeTruthy();
      await this.expandElement(this.opportunitiesBtn);
      expect(this.incompleteOpportunitiesBtn.waitReady()).toBeTruthy();
      await this.incompleteOpportunitiesBtn.click();
      return this.opportunitiesBtn.click();
   };

   async isSidebarExpanded() {
      return element(by.id('sidenav-menu')).getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-collapsed') > 0) {
            return true;
         }
         return false;
      });
   }

   async clickSandwichMenu(): promise.Promise<any> {
      expect(element(By.id('spinnerMask')).waitToHide()).toBeTruthy();
      expect(this.headerPage.logo.waitReady()).toBeTruthy();
      let expandSideBAr = await this.isSidebarExpanded();
      if (expandSideBAr) {
         return await this.sandwichMenu.click();
      }
   };

   async clickSideBarMenu(): promise.Promise<any> {
      expect(this.headerPage.logo.waitReady()).toBeTruthy();
      return await this.sandwichMenu.click();
   }

   async clickGuidedModeLink(): promise.Promise<any> {
      await this.scrollToElement(this.opportunitiesBtn);
      expect(this.opportunitiesBtn.waitReady()).toBeTruthy();
      await this.expandElement(this.opportunitiesBtn);
      expect(this.guidedModeLink.waitReady()).toBeTruthy();
      return this.guidedModeLink.click();
   };


   async isAdminMenuExpanded() {
      return element(by.id('administration')).getAttribute('class').then(function (classes) {
         if (classes.indexOf('is-expanded') > -1) {
            return true;
         }
         return false;
      });
   }

   async expandAdministrationMenu(): promise.Promise<any> {
      await this.scrollToElement(this.administrationBtn);
      expect(this.administrationBtn.waitReady()).toBeTruthy();
      let expandAdminMenu = await this.isAdminMenuExpanded();
      if (!expandAdminMenu) {
         return await this.administrationBtn.click();
      }

   };


   async openCrossServiceDataElemsLink(): promise.Promise<any> {
      await this.scrollToElement(this.administrationBtn);
      expect(this.administrationBtn.waitReady()).toBeTruthy();
      await this.expandElement(this.administrationBtn);
      expect(this.crossServiceDataElemsLink.waitReady()).toBeTruthy();
      return this.expandElement(this.crossServiceDataElemsLink);
   };

   async openServiceConfigurationLink(): promise.Promise<any> {
      let itOutcomesNavigationPage = new ItOutcomesNavigationPage();

      //await this.expandClarityElement(this.itOutcomesLink);
      await itOutcomesNavigationPage.expandItvmStorefrontConfigurations();
      expect(this.serviceMappingLink.waitReady()).toBeTruthy();
      return this.serviceMappingLink.click();

   };

   async clickServiceConfigurationLink(): promise.Promise<any> {
      await this.itOutcomesLinkButton.click();
      return this.serviceMappingLink.click();
   }

   async clickSolutionElementLink(solutionElementLink: any): promise.Promise<any> {
      await this.scrollToElement(this.solutionElementLink);
      expect(solutionElementLink.waitReady()).toBeTruthy();
      return solutionElementLink.click();
   };

   async openSolutionElementLink(storefrontConfigurationLink: any, solutionElementLink: any): promise.Promise<any> {
      await this.expandAdministrationMenu();
      await this.scrollToElement(storefrontConfigurationLink);
      await this.expandClarityElement(storefrontConfigurationLink);
      await this.scrollToElement(solutionElementLink);
      await this.clickSolutionElementLink(solutionElementLink);
   };

   async openUserManagementLink() {
      await this.expandAdministrationMenu();
      await this.usersMenuBtn.click();
      await this.scrollToElement(this.userManagementLink);
      return this.userManagementLink.click();
   }

   /**
    * Open Role Types Link.
    * @returns {Promise<any>}
    */
   async openRoleTypesLink() {
      await this.expandAdministrationMenu();
      await this.expandClarityElement(this.crossServiceDataElemsLink);
      await this.scrollToElement(this.manageRolesLink);
      await this.manageRolesLink.click();
      await this.scrollToElement(this.roleGroups);
      return this.roleGroups.click();
   }

   /**
    * Open Roles Link.
    * @returns {Promise<any>}
    */
   async openRolesLink() {
      await this.expandAdministrationMenu();
      await this.expandClarityElement(this.crossServiceDataElemsLink);
      await this.scrollToElement(this.manageRolesLink);
      await this.manageRolesLink.click();
      await this.scrollToElement(this.rolesLink);
      return this.rolesLink.click();
   }

   /**
    * Check if navigation menu is visible.
    * @returns {Promise<any>}
    */
   async hasNavigationMenu(): promise.Promise<any> {
      return await this.sideMenu.isPresent();
   }

   /**
    * Check if expand navigation button is visible.
    * @returns {Promise<any>}
    */
   async hasExpandNavigationButton(): promise.Promise<any> {
      return await this.sandwichMenu.isPresent();
   }

   /**
    * Expand all expandable elements in the navigator and return its state in a json file.
    * @returns {promise.Promise<any>} json object
    */
   async getNavigatorMenuElementsStateInJSON(): promise.Promise<any> {
      let navigatorJsonObject = [];
      await navigatorPage.clickSandwichMenu();
      expect(await this.verticalNavigator.waitReady()).toBeTruthy();

      let ordinaryChildren = await this.getVisibleChildElementsOfElement(this.verticalNavigator, By.css(".nav-text"));
      let navGroupChildren = await this.getVisibleChildElementsOfElement(this.verticalNavigator, By.css("clr-vertical-nav-group"));

      for (let i = 0; i < ordinaryChildren.length; i++) {
         let name = await ordinaryChildren[i].getText();
         navigatorJsonObject.push({"name": name});
      }

      for (let i = 0; i < navGroupChildren.length; i++) {
         await this.expandNavigatorGroupChildrenRecursively(navGroupChildren[i], navigatorJsonObject);
      }

      return navigatorJsonObject;
   }

   /**
    * Click an element navigator with path to open a certain page
    * @param {string} path - use '>' sign as a path separator, example: Services Portfolio > Opened services
    * @returns {promise.Promise<any>}
    */
   async clickElementWithPath(path: string): promise.Promise<any> {
      // Service Portfolio > Create a new service
      let elementToclick = await this.getElementFinderWithPath(path);
      return elementToclick.click();
   }

   /**
    * Helper method to recursively expand all navigator items and return a constructed json describing elements and subelements
    * @param {ElementFinder} element
    * @param parentNode
    * @returns {promise.Promise<any>}
    */
   private async expandNavigatorGroupChildrenRecursively(element: ElementFinder, parentNode): promise.Promise<any> {
      await this.expandNavigatorGroup(element);
      let expandedElementText = await element.element(By.xpath('div[contains(@class, "nav-group-content")]/button/div[contains(@class, "nav-group-text")]')).getText();

      let navGroupChildren = [];
      let ordinaryChildren = await this.getVisibleChildElementsOfElement(element, By.css(".nav-text:first-child"));
      if (parentNode.isEmpty) {
         navGroupChildren = await this.getVisibleChildElementsOfElement(this.verticalNavigator, By.css("clr-vertical-nav-group"));
      } else {
         navGroupChildren = await this.getVisibleChildElementsOfElement(element, By.xpath('div[contains(@class, "nav-group-children")]/clr-vertical-nav-group-children/clr-vertical-nav-group'));
      }

      let currentNode = {};
      parentNode[expandedElementText] = [];
      currentNode[expandedElementText] = [];

      for (let i = 0; i < ordinaryChildren.length; i++) {
         let name = await ordinaryChildren[i].getText();
         currentNode[expandedElementText].push({"name": name})
      }

      for (let i = 0; i < navGroupChildren.length; i++) {
         let subNode = await this.expandNavigatorGroupChildrenRecursively(navGroupChildren[i], parentNode[expandedElementText]);
         currentNode[expandedElementText].push(subNode)
      }

      parentNode.push(currentNode);

      return currentNode;
   }

   /**
    *  A helper method that returns the protractor ElementFinder object at a certain path in the navigator.
    * @param {string} path
    * @returns {promise.Promise<ElementFinder>}
    */
   private async getElementFinderWithPath(path: string): promise.Promise<ElementFinder> {
      // Service Portfolio > Create a new service
      let pathArray = path.split(">");
      let locator = '';

      for (let i = 0; i < pathArray.length; i++) {
         if (i == pathArray.length - 1) {
            locator = locator + '//span[contains(.,"' + pathArray[i].trim() + '")]';
         } else {
            locator = locator + '//clr-vertical-nav-group[contains(.,"' + pathArray[i].trim() + '")]';
            await this.expandNavigatorGroup(element(by.xpath(locator)));
         }
      }
      return element(by.xpath(locator));
   }

   /**
    * Open Third-Party Product Link.
    */
   async openThirdPartyProductLink() {
      await this.expandAdministrationMenu();
      await this.openManageProductsLink();
      await this.scrollToElement(this.thirdPartyProductsLink);
      return this.thirdPartyProductsLink.click();
   }

   /**
    * Open manage products link.
    */
   async openManageProductsLink() {
      await this.scrollToElement(this.manageProductsLink);
      await this.manageProductsLink.click();
   }

   /**
    * Click vendor link.
    */
   async clickVendorsLink() {
      await this.scrollToElement(this.vendorsLink);
      await this.vendorsLink.click();
   }

   /**
    * Click vendor products link.
    */
   async clickVendorProductsLink() {
      await this.scrollToElement(this.vendorProductsLink);
      await this.vendorProductsLink.click();
   }

   /**
    * Click vendor product versions link.
    */
   async clickVendorProductVersionsLink() {
      await this.scrollToElement(this.vendorProductVersionsLink);
      await this.vendorProductVersionsLink.click();
   }

   /**
    * Click configurations link.
    */
   async clickConfigurationsLink() {
      await this.scrollToElement(this.configurationsLink);
      await this.configurationsLink.click();
   }
}

export let navigatorPage = new NavigatorPage();