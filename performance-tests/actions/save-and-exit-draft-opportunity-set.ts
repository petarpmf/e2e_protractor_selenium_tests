import {hybridCloudSolutionSet} from "./create-opportunity-workflow-set";
import {EnterBasicInformationPage} from "../../pages/guidedMode/enter-basic-information.page";
import {DashboardPage} from "../../pages/dashboard.page";
import {SelectSolutionSetsPage} from "../../pages/guidedMode/select-solution-sets.page";
import {SelectProductsPage} from "../../pages/guidedMode/select-products.page";
import {HeaderPage} from "../../pages/header.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";
import {CreateOpportunityWorkflowPage} from "../../pages/create-opportunity-workflow.page";

const headerPage = new HeaderPage();
let opportunityWorkflowPage = new CreateOpportunityWorkflowPage();
let selectProductsPage = new SelectProductsPage();
let enterBasicInformationPage = new EnterBasicInformationPage();
let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());
let selectSolutionSets = new SelectSolutionSetsPage();
export let SaveAndExitDraftOpportunitySet = {

   'save draft opportunity on Solution set Tab in GM': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Solution Set');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await  opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from solution set tab in Guided Mode and wait for dashboard ',
      'ac': 1.5
   },
   'Solution Element Tab in GM': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance sol element');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await  opportunityWorkflowPage.saveBtn.click();
         await   expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from solution element tab in Guided Mode and wait for dashboard',
      'ac': 1.5
   },

   'Select product tab': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Product');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['vSphere 6.7.x']);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await  opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from product tab in Guided Mode and wait for dashboard ',
      'ac': 1.5
   },
   'Select Delivery tab': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Product');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['vSphere 6.7.x']);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from delivery tab in Guided Mode and wait for dashboard ',
      'ac': 1.5
   },
   'Complete': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance SelectAll products');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['App Volumes 2.14.x', 'Horizon 7.6.x',
            'Cloud on AWS 1.5.x', 'VCF for Automation 3.0.x', 'VCF Operations Management 3.0.x', 'NSX-V 6.4.x', 'NSX-T 2.3.x']);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button in complete tab wait for dashboard ',
      'ac': 1
   },
};

export let SaveAndExitDraftOpportunitySettSelectAll = {

   'Solution set Tab in GM[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance SelectAll Sol set');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await  opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save and exit and wait for dashboard ',
      'ac': 1.5
   },
   'Solution Element Tab in GM[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance SelectAll Sol Product');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await  opportunityWorkflowPage.clickNextBtn();
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await opportunityWorkflowPage.saveBtn.click();
         await   expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();

      },

      'description': 'Click save button from solution element tab in Guided Mode and wait for dashboard',
      'ac': 1.5
   },

   'Select product tab[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance SelectAll products');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['App Volumes 2.14.x', 'Horizon 7.6.x',
            'Cloud on AWS 1.5.x', 'VCF for Automation 3.0.x', 'VCF Operations Management 3.0.x', 'NSX-V 6.4.x', 'NSX-T 2.3.x']);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from product tab in Guided Mode and wait for dashboard',
      'ac': 1
   },
   'Complete [Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance SelectAll products');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['App Volumes 2.14.x', 'Horizon 7.6.x',
            'Cloud on AWS 1.5.x', 'VCF for Automation 3.0.x', 'VCF Operations Management 3.0.x', 'NSX-V 6.4.x', 'NSX-T 2.3.x']);
         await expect(opportunityWorkflowPage.saveBtn.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await   opportunityWorkflowPage.saveBtn.click();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      },

      'description': 'Click save button from complete tab in Guided Mode and wait for dashboard',
      'ac': 3
   },
};