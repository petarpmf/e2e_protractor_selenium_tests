import {browser, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {BasePage} from "./common/base.page";
import {
   selectProductsPage,
   selectSolutionElementsPage,
   selectSolutionSetsPage
} from "./guidedMode/guided-mode-workflow-steps.barrel";
import {StringUtils} from "../common/utils/utils.barrel";
import {completePage} from "./guidedMode/complete-review.page";
import {enterBasicInformationPage} from "./guidedMode/enter-basic-information.page";

/**
 * Navigation for opportunity workflow.
 */

export class CommonOpportunityWorkflowPage extends BasePage {
   nextBtn = element(by.css('.next-btn > button'));
   prevBtn = element(by.css('.previous-btn > button'));
   saveBtn = element(by.css('.save-and-exit > button'));
   completeButton = element(by.css('#complete-button > button'));
   goToDashboardBtn = element(by.css('#go-to-dashboard-button > button'));
   customtaskTabID = 'customTasksTab';
   moduleConfigurationTab = element(by.id('modulesConfigurationTab'));
   deliveryTab = element(by.id('deliveryTab'));
   customtaskTab = element(by.id('customTasksTab'));
   customizeWBSTab = element(by.id('customizeWbsTab'));
   scalingQuestionnaireTab = element(by.id('scalingQuestionnaireTab'));
   autoscaleTimelineTab = element(by.id('autoscaleTimelineTab'));
   summariesTab = element(by.id('summariesTab'));
   tabs = element.all(by.css('.clr-wizard-stepnav-list li'));
   verticalTabs = element.all(by.css("[uisref^='mainContainer.opportunities.create.scoping']"));
   notificationPopup = element(by.css('.wrong-pass .fa-times-circle'));
   activeTab = element(by.css('[ui-view="navigationData"] ui-view li.active'));
   detailsTab = element(by.id('detailsTab'));

   mergedServicesGrid = element(by.css('.merged-services-grid'));
   mergedServicestab = element(by.id('mergedServicesTab'));
   milestonesSummarystab = element(by.id('milestonesSummaryTab'));
   milestoneInfo = element(by.id('milestone-info'));

   confirmForm = element(by.id('kendoInfoWindow'));
   confirmButton = this.confirmForm.element(by.id('confirmButton'));
   serviceModulesNameBtn = element(by.css('clr-dg-column.module-effort-column'));

   async openSolutionSetsTab(): promise.Promise<any> {
      await selectSolutionSetsPage.openSolutionSetsTab();
   }

   async checkolutionSetsTabIsOpened(): promise.Promise<any> {
      await selectSolutionSetsPage.checkSolutionSetsTabIsOpened();
   }

   async openSolutionElementsTab(): promise.Promise<any> {
      await selectSolutionElementsPage.openSolutionElementsTab();
   }

   async checkSolutionElementsTabIsOpened(): promise.Promise<any> {
      await selectSolutionElementsPage.checkSolutionElementsTabIsOpened();
   }

   async openProductsTab(): promise.Promise<any> {
      await selectProductsPage.openProductsTab();
   }

   async checkProductsTabIsOpened(): promise.Promise<any> {
      await selectProductsPage.checkProductsTabIsOpened();
   }

   async clickNextBtn(): promise.Promise<any> {
      expect(this.nextBtn.waitReady()).toBeTruthy();
      return this.nextBtn.click();
   }

   async verifyModulesTabNotEmpty() {
      await expect(this.serviceModulesNameBtn.waitReady()).toBeTruthy();
      return await this.serviceModulesNameBtn.isDisplayed();
   }

   async isTabEmpty(tab) {
      let tabEmpty = true;
      let status = await tab.isPresent();
      if (status === true) {
         return tabEmpty = false;
      }
      return tabEmpty;
   }

   async clickSaveBtn(): promise.Promise<any> {
      expect(this.saveBtn.waitReady()).toBeTruthy();
      await this.saveBtn.click();
   }

   async clickPrevBtn(): promise.Promise<any> {
      expect(this.prevBtn.waitReady()).toBeTruthy();
      await this.prevBtn.click();
   }

   async clickCompleteButton(): promise.Promise<any> {
      expect(this.completeButton.waitReady()).toBeTruthy();
      await this.completeButton.click();
   }

   async clickGoToDashboardButton(): promise.Promise<any> {
      expect(this.goToDashboardBtn.waitReady()).toBeTruthy();
      return this.goToDashboardBtn.click();
   }

   hasValidationErrors(): promise.Promise<any> {
      // check if validation message is visible
      return element.all(by.css('.k-notification-error')).all(by.css('div ul li')).filter((item) => {
         return item.isDisplayed();
      }).then((items) => {
         //Click on notification error popup
         return this.notificationPopup.click().then(() => {
            return items.length > 0;
         })
      });
   }

   protected hasTab(tab, tabs) {
      return tabs.indexOf(tab) > -1 || tabs.length == 0;
   };

   resolveCompleteWorkflow(): promise.Promise<any> {
      expect(this.saveBtn.waitReady()).toBeTruthy();
      return this.saveBtn.click().then(() => {
         expect(this.confirmForm.waitReady()).toBeTruthy();
         expect(this.confirmButton.waitReady()).toBeTruthy();
         return browser.executeScript('arguments[0].scrollIntoView()', this.confirmButton.getWebElement()).then(() => {
            return this.confirmButton.click();
         })
      });
   }

   /**
    * Return  active tab text
    * @returns {promise.Promise<string>}
    */
   async getActiveTabText(): promise.Promise<string> {
      let activeTabText: string = await this.activeTab.getText();
      return activeTabText.trim().replace(/\n/g, ' ');
   }

   /**
    * Click over the '2 Select Solution Sets' tab to navigate to this step/page.
    * @returns {promise.Promise<void>}
    */
   clickOnSelectSolutionSetsTab(): promise.Promise<void> {
      return selectSolutionSetsPage.clickTab();
   }

   clickOnSelectSolutionSetsTabGuidedAndContentAccessMode(): promise.Promise<void> {
      return selectSolutionSetsPage.clickTabGuidedAndContentAccessMode();
   }


   /**
    * Click over the '3 Select Solution Elements' tab to navigate to this step/page.
    * @returns {promise.Promise<void>}
    */
   clickOnSelectSolutionElementsTab(): promise.Promise<void> {
      return selectSolutionElementsPage.clickTab();
   }

   clickOnSelectSolutionElementsTabGuidedMode(): promise.Promise<void> {
      return selectSolutionElementsPage.clickTabGuidedMode();
   }


   /**
    * Click over the '4 Select Products' tab to navigate to this step/page.
    * @returns {promise.Promise<void>}
    */
   clickOnSelectProductsTab(): promise.Promise<void> {
      return selectProductsPage.clickTab();
   }


   /**
    * Works for pages in the Opportunity workflow having UUID (of an opportunity)
    * inside their URL.
    * Gets the last part of the URL (after the UUID)
    * @returns {promise.Promise<string>} The obtained url suffix.
    */
   public async getPageUrlSuffix(): promise.Promise<string> {
      let url: string = await this.getPageURL();
      let uuid: string = await StringUtils.extractUuidFromString(url);
      return url.substr(url.indexOf(uuid) + uuid.length);
   }

   async selectTab(tabId): promise.Promise<void> {
      expect(element(by.id(tabId)).waitReady()).toBeTruthy();
      await element(by.id(tabId)).click();
   }

   /**
    * Get all tab names in an array of strings
    * @param contextArrayElement selector for all tabs vertical or horizontal
    * @returns {promise.Promise<Array<String>>}
    */
   async getAllTabNames(contextArrayElement): promise.Promise<Array<String>> {
      let tabNames = [];
      for (let i: number = 0; i < await contextArrayElement.count(); i++) {
         let text = await contextArrayElement.get(i).getText();
         text = text.trim().replace(/\n/g, ' ');

         tabNames.push(text);
      }
      return tabNames;
   }

   protected async clickOnSaveAndExitIf(tabToSaveAndExit): promise.Promise<boolean> {
      let currentTabText = await this.getActiveTabText();
      currentTabText = currentTabText.trim().replace(/\n/g, ' ');

      if (currentTabText == tabToSaveAndExit) {
         await this.clickSaveBtn();
         return true;
      } else {
         return false;
      }
   }

   clickOnEnterBasicInformationTab(): promise.Promise<void> {
      return enterBasicInformationPage.clickTab();
   }

   clickOnCompleteTab(): promise.Promise<void> {
      return completePage.clickTab()
   }
}