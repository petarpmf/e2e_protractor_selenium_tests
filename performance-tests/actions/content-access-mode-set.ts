import {HeaderPage} from "../../pages/header.page";
import {DashboardPage} from "../../pages/dashboard.page";
import {SelectSolutionSetsPage} from "../../pages/guidedMode/select-solution-sets.page";
import {CreateOpportunityWorkflowPage} from "../../pages/create-opportunity-workflow.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";
import {SelectProductsPage} from "../../pages/guidedMode/select-products.page";
import {SelectSolutionElementsPage} from "../../pages/guidedMode/select-solution-elements.page";
import {hybridCloudSolutionSet} from "./create-opportunity-workflow-set";
import {ISolutionItemsContainer} from "../../pages/model/opportunity/guidedMode/solution-items-container.model";
import {CommonOpportunityWorkflowPage} from "../../pages/common-opportunity-workflow.page";
import {by, element} from "protractor";

const headerPage = new HeaderPage();
let opportunityWorkflowPage = new CreateOpportunityWorkflowPage();
let selectProductsPage = new SelectProductsPage();
let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());
let selectSolutionSets = new SelectSolutionSetsPage();
let selectSolutionElementsPage = new SelectSolutionElementsPage();
let commonOpportunityWorkflowPage = new CommonOpportunityWorkflowPage();

export let solutionItems: ISolutionItemsContainer = {
   solutionElements:
      ["Assess readiness for extending the data center to cloud providers"]
};

export let ContentAccessModeSet = {

   'Open Content Access mode workflow': {
      'preparations': async function () {
         await headerPage.clickLogo();
      },
      'method': async function () {
         await dashboardPage.contentAccessModeBtn.click();
         await expect(selectSolutionSets.solutionSetContainer.waitReady()).toBeTruthy("Solution sets tab is not opened");

      },
      'description': 'Click Content Access Mode button, wait for solution set container   ',
      'ac': 1
   },

   'Solution Elements': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickContentAccessModeButton();
         await  expect(selectSolutionSets.modelSelect.waitReady()).toBeTruthy("Solution sets tab is not opened");
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await expect(commonOpportunityWorkflowPage.nextBtn.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await commonOpportunityWorkflowPage.nextBtn.click();
         await expect(selectSolutionElementsPage.customerProblemsList.waitReady()).toBeTruthy("Solution Elements tab is not opened");

      },
      'description': 'Click next button in Solution Elements ',
      'ac': 1
   },

   'Solution Products': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickContentAccessModeButton();
         await  expect(selectSolutionSets.modelSelect.waitReady()).toBeTruthy("Solution sets tab is not opened");
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionElementsPage.selectSolutionItems(solutionItems);
         await expect(commonOpportunityWorkflowPage.nextBtn.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await commonOpportunityWorkflowPage.nextBtn.click();
         await  expect(selectProductsPage.productsGrid.waitReady()).toBeTruthy("Products tab is not opened");
      },
      'description': 'Click next button in Solution Products ',
      'ac': 1
   },
};