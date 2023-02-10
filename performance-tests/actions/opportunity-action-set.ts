import {HeaderPage} from "../../pages/header.page";
import {AllOpportunitiesPage} from "../../pages/opportunity/all-opportunities.page";

import {BasePage} from "../../pages/common/base.page";
import {
   createOpportunityWorkflowPage,
   CreateOpportunityWorkflowPage
} from "../../pages/create-opportunity-workflow.page";
import {GuidedMode, IGuidedMode} from "../../pages/model/opportunity/guidedMode/guided-mode.model";
import {SelectProductsPage} from "../../pages/guidedMode/select-products.page";
import {EnterBasicInformationPage} from "../../pages/guidedMode/enter-basic-information.page";
import {DashboardPage} from "../../pages/dashboard.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";
import {SelectSolutionSetsPage} from "../../pages/guidedMode/select-solution-sets.page";
import {by, element} from "protractor";
import {SelectSolutionElementsPage} from "../../pages/guidedMode/select-solution-elements.page";
import {OpportunityDetailsTabPage} from "../../pages/scopingMode/opportunityDetails/opportunity-details-tab.page";

const headerPage = new HeaderPage();
let allOpportunitiesPage = new AllOpportunitiesPage(new OpportunitiesDatagridPage());
let basePage = new BasePage();
let enterBasicInformationPage = new EnterBasicInformationPage();
let opportunityDetailsTabPage = new OpportunityDetailsTabPage();

export const opportunityDataDraft = new GuidedMode(<IGuidedMode>{
   storyboardCapabilities:
      {
         infrastructureProviders: [
            {
               name: "Infrastructure Provider",
               solutionSetContainers: [
                  "Hybrid Cloud"
               ]
            }
         ]
      },
   solutionItems: {
      solutionElements: [
         "Design secure and seamless infrastructure hybridity"
      ]
   },
   selectedProducts: [
      "Hybrid Cloud eXtension (NSX Hybrid Connect) 3.x"
   ],
   allowCompatibleProducts: true,
   customerName: "E2E Test Performance",
   description: "Opportunity description",
   country: "United States",
});


export let OpportunitiesActionSet = {
   'Open All Opportunities Grid': {
      'preparations': async function () {
         await headerPage.clickLogo();
      },
      'method': async function () {
         await headerPage.allOpportunitiesIcon.click();
         await  expect(element.all(by.css('.opportunity-name-column')).last().waitReady()).toBeTruthy();
      },
      'description': 'Click all opportunities button',
      'ac': 1.5
   },

   'Search in all opportunities': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await headerPage.clickAllOpportunitiesIcon();
         await expect(element.all(by.css('.opportunity-name-column')).last().waitReady()).toBeTruthy();

      }, 'method': async function () {
         await allOpportunitiesPage.findOpportunity('test ')
         await  expect(basePage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await expect(element.all(by.css('.opportunity-name-column')).last().waitReady()).toBeTruthy();
      },
      'afterAction': async function () {
         await headerPage.clickLogo();
      },
      'description': 'Insert "test" in search input and wait for result',
      'ac': 1
   },


   'Open edit workflow for draft opportunity': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await headerPage.clickAllOpportunitiesIcon();
         await allOpportunitiesPage.findOpportunity('E2E Test Performance Sol Product');

         await allOpportunitiesPage.filterByStatus("DRAFT");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("DRAFT");
         await allOpportunitiesPage.selectOpportunity(['E']);


      }, 'method': async function () {
         await allOpportunitiesPage.actionBarPage.clickEditOpportynityButton();
         await  expect(enterBasicInformationPage.customerNameLabel.waitReady()).toBeTruthy();
      },
      'description': 'Click edit and load enter basic info tab to load',
      'ac': 1
   },
   'Open edit workflow for draft opportunity[Select All]': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await headerPage.clickAllOpportunitiesIcon();
         await allOpportunitiesPage.findOpportunity('E2E Test Performance Select All');
         await allOpportunitiesPage.filterByStatus("DRAFT");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("DRAFT");
         await allOpportunitiesPage.selectOpportunity(['E']);


      }, 'method': async function () {
         await allOpportunitiesPage.actionBarPage.clickEditOpportynityButton();
         await expect(enterBasicInformationPage.customerNameLabel.waitReady()).toBeTruthy();
      },

      'description': 'Click edit and load enter basic info tab to load',
      'ac': 1
   },
   'Open edit workflow for open opportunity': {
      'preparations': async function () {
         await headerPage.clickLogo();
         await headerPage.clickAllOpportunitiesIcon();
         await allOpportunitiesPage.findOpportunity('TransRe');
         await allOpportunitiesPage.filterByStatus("OPENED");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.selectOpportunity(['E']);


      }, 'method': async function () {
         await  allOpportunitiesPage.actionBarPage.clickEditOpportynityButton();
         await  expect(opportunityDetailsTabPage.customerInfoTab.waitReady()).toBeTruthy();
      },
      'description': 'click edit, wait for details tap',
      'ac': 1
   },

};