import {by} from 'protractor';
import {promise} from "selenium-webdriver";
import {IGuidedMode} from './model/opportunity/guidedMode/guided-mode.model';
import {dashboardPage} from "./dashboard.page";
import {CommonOpportunityWorkflowPage} from "./common-opportunity-workflow.page";
import {selectProductsPage} from "./guidedMode/select-products.page";
import {selectSolutionElementsPage} from "./guidedMode/select-solution-elements.page";
import {selectSolutionSetsPage} from "./guidedMode/select-solution-sets.page";
import {enterBasicInformationPage} from "./guidedMode/enter-basic-information.page";

/**
 * Navigation for opportunity workflow.
 */

export class CreateOpportunityWorkflowPage extends CommonOpportunityWorkflowPage {

   async createOpportunityFromGuidedMode(guidedMode: IGuidedMode, tabNameToSaveAndExit: string = null): promise.Promise<string> {
      let opportunityName;

      // Select Storyboard capabilities
      await dashboardPage.clickCreateOpportunityButton();

      //Enter Basic Information
      await enterBasicInformationPage.populateCustomerName(guidedMode.customerName);
      await enterBasicInformationPage.selectCountry(guidedMode.country);
      opportunityName = await enterBasicInformationPage.getOpportunityName();

      // Go to next step or save and exit
      if (await this.clickOnSaveAndExitIf(tabNameToSaveAndExit)) {
         return opportunityName;
      }
      await this.clickNextBtn();

      if (guidedMode.storeFront !== undefined) {
         await selectSolutionSetsPage.selectStorefront(guidedMode.storeFront)
      }
      //Select Solution Sets
      await selectSolutionSetsPage.selectSolutionSetContainers(guidedMode.storyboardCapabilities);
      // Go to next step or save and exit
      if (await this.clickOnSaveAndExitIf(tabNameToSaveAndExit)) {
         return opportunityName;
      }
      await this.clickNextBtn();

      //Select Solution Elements
      await selectSolutionElementsPage.selectSolutionItems(guidedMode.solutionItems);
      // Go to next step or save and exit
      if (await this.clickOnSaveAndExitIf(tabNameToSaveAndExit)) {
         return opportunityName;
      }
      await this.clickNextBtn();

      //Select products
      await selectProductsPage.selectProducts(guidedMode.selectedProducts);
      // Go to next step or save and exit
      if (await this.clickOnSaveAndExitIf(tabNameToSaveAndExit)) {
         return opportunityName;
      }
      await this.clickNextBtn();

      if (await this.isElementWithLocatorVisibleOnPage(by.css('solution-elements-dialog .modal-title'))) {
         await selectProductsPage.clickContinueRemoveSoluitonElements();
      }

      // Skip Delivery tab
      if (await this.nextBtn.isPresent()) {
         await this.clickNextBtn();
      }

      //Click complete button
      await this.clickCompleteButton();
      return opportunityName;
   }
}

export let createOpportunityWorkflowPage = new CreateOpportunityWorkflowPage();