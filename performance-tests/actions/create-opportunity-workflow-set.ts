import {EnterBasicInformationPage} from "../../pages/guidedMode/enter-basic-information.page";
import {CreateOpportunityWorkflowPage} from "../../pages/create-opportunity-workflow.page";
import {DashboardPage} from "../../pages/dashboard.page";
import {SelectSolutionSetsPage} from "../../pages/guidedMode/select-solution-sets.page";
import {SelectProductsPage} from "../../pages/guidedMode/select-products.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";
import {HeaderPage} from "../../pages/header.page";
import {SelectSolutionElementsPage} from "../../pages/guidedMode/select-solution-elements.page";
import {CompletePage} from "../../pages/guidedMode/complete-review.page";
import {browser, By, by, element, protractor} from "protractor";
import {ItvmSolutionSetsContainer} from "../../pages/model/opportunity/guidedMode/itvm-storyboard-capabilities-container.model";
import {DeliveryPage} from "../../pages/guidedMode/delivery.page";
import {promise} from "selenium-webdriver";

const headerPage = new HeaderPage();
let opportunityWorkflowPage = new CreateOpportunityWorkflowPage();
let selectProductsPage = new SelectProductsPage();
let enterBasicInformationPage = new EnterBasicInformationPage();
let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());
let selectSolutionSets = new SelectSolutionSetsPage();
let selectSolutionElementsPage = new SelectSolutionElementsPage();
let completePage = new CompletePage();
let deliveryPage = new DeliveryPage();

export const hybridCloudSolutionSet = new ItvmSolutionSetsContainer({
   infrastructureProviders: [
      {
         name: "InfrastructureProvider",
         solutionSetContainers: [
            'Hybrid Cloud'
         ]
      }
   ],
   solutionSetContainers: [
      'Hybrid Cloud'
   ]
});

export const product = ['Cloud on AWS 1.5.x', 'VCF for Automation 3.0.x', 'VCF Operations Management 3.0.x', 'NSX-V 6.4.x', 'vRealize Automation 7.5.x'];

export let CreateOpportunityWorkflowASet = {
   'Open Enter base info page': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await expect(dashboardPage.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
         await dashboardPage.scrollToElement(dashboardPage.createOpportunityBtn);
      },
      'method': async function () {
         await dashboardPage.createOpportunityBtn.click();
         await expect(enterBasicInformationPage.customerNameLabel.waitReady()).toBeTruthy();
      },

      'description': 'Click create opportunity button',
      'ac': 0.7
   },
   'Open Solution Set Tab: in GM': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await expect(await enterBasicInformationPage.isTestOpportunityCheckboxSelected())
            .toBeTruthy("The 'Test Opportunity' checkbox is NOT selected!");


      }, 'method': async function () {
         await element(by.id('solutionSetsTab')).click();
        await expect(selectSolutionSets.lastSolutionSet.waitReady()).toBeTruthy();
      },

      'description': 'wait for Solution elements to appear',
      'ac': 0.7
   },
   'Open Solution Elements Tab in GM': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
      },
      'method': async function () {
         await element(by.id('solutionElementsTab')).click();
         await expect(selectSolutionElementsPage.customerProblemsList.waitReady()).toBeTruthy("Solution Elements tab is not opened");


      },

      'description': 'Wait for customer problems to become visible',
      'ac': 1
   },
   'Open Product Tab in GM': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Sol Product');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await opportunityWorkflowPage.clickNextBtn();
      },
      'method': async function () {
         await    element(by.id('productsTab')).click();
         await   expect(selectProductsPage.productsView.waitReady()).toBeTruthy("Products tab is not opened");

      },

      'description': 'wait for products to load',
      'ac': 0.7
   },
   // disabled until this tab is enable for sales role

   'Open Complete Tab': {
      'preparations': async function () {
         await headerPage.clickHomeLink();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance');
         await enterBasicInformationPage.selectCountry('United States');

         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectSolutionSetContainer(hybridCloudSolutionSet, hybridCloudSolutionSet.infrastructureProviders[0].name);
         await  opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.selectTab('productsTab');

         await selectProductsPage.selectProducts(['Cloud on AWS 1.5.x']);
         await  opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.clickContinueRemoveSoluitonElements();
         await opportunityWorkflowPage.selectTab('productsTab');

      },
      'method': async function () {
         await  opportunityWorkflowPage.nextBtn.click();
         await   expect(completePage.productSummarySectionLabel.waitReady()).toBeTruthy();

      },

      'description': 'Click complete tab',
      'ac': 0.5
   },

};

export let CreateOpportunityWorkflowSelectAllSet = {

   'Open Solution Elements Tab in GM[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Select All');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll()
      },
      'method': async function () {
         await element(by.id('solutionElementsTab')).click();
         await expect(selectSolutionElementsPage.customerProblemsList.waitReady()).toBeTruthy("Solution Elements tab is not opened");

      },

      'description': 'Wait for customer problems to become visible',
      'ac': 0.7
   },
   'Open Product Tab in GM[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Select All');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await  opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await  opportunityWorkflowPage.clickNextBtn();
      },
      'method': async function () {
         await   element(by.id('productsTab')).click();
         await   expect(selectProductsPage.productsGrid.waitReady()).toBeTruthy("Products tab is not opened");

      },

      'description': 'wait for products grid to load',
      'ac': 0.7
   },

   'Open Complete Tab[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('E2E Test Performance Select All');
         await enterBasicInformationPage.selectCountry('United States');

         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.selectTab('productsTab');

         await selectProductsPage.selectProducts(product);
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.clickContinueRemoveSoluitonElements();
         await opportunityWorkflowPage.selectTab('productsTab');


      },
      'method': async function () {
         await opportunityWorkflowPage.nextBtn.click();
         await    expect(completePage.productSummarySectionLabel.waitReady()).toBeTruthy();

      },

      'description': 'Click complete tab',
      'ac': 0.5
   },
};