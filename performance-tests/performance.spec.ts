import {solutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {browser} from "protractor";
import {PerformancePageNavigation} from "./performance-navigation.page";
import {Urls} from "../common/urls";
import {OpportunitiesActionSet, opportunityDataDraft} from "./actions/opportunity-action-set";
import {ServicesActionSet} from "./actions/services-action-set";
import {EditOpportunityWorkflowSet, EditOpportunityWorkflowSetSelectAll} from "./actions/edit-opportunity-workflow-set";
import {
   CreateOpportunityWorkflowASet,
   CreateOpportunityWorkflowSelectAllSet
} from "./actions/create-opportunity-workflow-set";
import {HeaderPage} from "../pages/header.page";
import {OpportunitiesDatagridPage} from "../pages/common/opportunities-data-grid.page";
import {AllOpportunitiesPage} from "../pages/opportunity/all-opportunities.page";
import {NavigationSet} from "./actions/navigation-set";
import {ContentAccessModeSet} from "./actions/content-access-mode-set";
import {UserProfileDialogPage} from "../pages/user-profile-dialog.page";
import {DataGridActionBarPage} from "../pages/common/data-grid-action-bar.page";
import {CreateOpportunityWorkflowPage, createOpportunityWorkflowPage} from "../pages/create-opportunity-workflow.page";
import now = require("performance-now");
import {SelectProductsPage} from "../pages/guidedMode/select-products.page";
import {DashboardPage} from "../pages/dashboard.page";
import {EnterBasicInformationPage} from "../pages/guidedMode/enter-basic-information.page";
import {SelectSolutionSetsPage} from "../pages/guidedMode/select-solution-sets.page";
import {
   SaveAndExitDraftOpportunitySet,
   SaveAndExitDraftOpportunitySettSelectAll
} from "./actions/save-and-exit-draft-opportunity-set";
import {OpportunityDetailsTabPage} from "../pages/scopingMode/opportunityDetails/opportunity-details-tab.page";

let performancePageNavigation = new PerformancePageNavigation();
let url = new Urls();
const headerPage = new HeaderPage();
let allOpportunitiesPage = new AllOpportunitiesPage(new OpportunitiesDatagridPage());
let userProfileDialogPage = new UserProfileDialogPage();
let dataGridActionBarPage = new DataGridActionBarPage(allOpportunitiesPage.allOpportunitiesGrid);
let selectProductsPage = new SelectProductsPage();
let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());
let enterBasicInformationPage = new EnterBasicInformationPage();
let opportunityWorkflowPage = new CreateOpportunityWorkflowPage();
let selectSolutionSets = new SelectSolutionSetsPage();
let opportunityDetailsTabPage = new OpportunityDetailsTabPage();


/**
 * The login doesn't re use standard performance method because the login page is not angular, and show errors.
 */

describe('Login Action verify  ', async () => {
   it('[Expected:1 s] Load app URL', async () => {
      let start = await now();
      await solutionBuilderLoginPage.navigateToApp(url.stagingEnvUrl);
      let end = await now();
      let executionTime = await (end - start);
      let executionTimeSec = executionTime / 1000;

      await expect(executionTimeSec).toBeLessThan(1);
      await console.log('EXECUTION TIME: Load app URL navigate to app URL wait for login button' + ' Tooks: ' + executionTimeSec);

   });
   it('[Expected:15 s] load dashboard navigate to app URL login through the VIDM and wait for dashboard', async () => {
      let start = await now();
      await solutionBuilderLoginPage.loginWithUser(browser.params.customerUser.username, url.stagingEnvUrl);
      await expect(dashboardPage.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      let end = await now();
      let executionTime = await (end - start);
      let executionTimeSec = executionTime / 1000;
      await expect(executionTimeSec).toBeLessThan(15);
      await console.log('EXECUTION TIME: Login Action verify load dashboard navigate to app URL login through the VIDM and wait for dashboard' + ' Tooks: ' + executionTimeSec);
   });
});

describe('Performance Tests for ', async () => {
   beforeAll(async () => {
      await solutionBuilderLoginPage.loginWithUser(browser.params.customerUser.username, url.stagingEnvUrl);
      let isFillYourProfileDetailsModalIsOpenStatus = await  userProfileDialogPage.isFillYourProfileDetailsModalOpen();

      if (isFillYourProfileDetailsModalIsOpenStatus) {
         await userProfileDialogPage.clickProfileDetailsLinkInModal();
         await userProfileDialogPage.updateUserDetails("AMERICAS", "Address", "123456");
         await userProfileDialogPage.clickOkInUpdatingGEOModal();
      }
   });

   describe('Create Opportunity workflow ', async () => {
      await  performancePageNavigation.measurePerformanceForActions(CreateOpportunityWorkflowASet, performancePageNavigation.getAllActionNamesInActionSet(CreateOpportunityWorkflowASet));
   });

   describe('Create Opportunity workflow with select all', async () => {
      await  performancePageNavigation.measurePerformanceForActions(CreateOpportunityWorkflowSelectAllSet, performancePageNavigation.getAllActionNamesInActionSet(CreateOpportunityWorkflowSelectAllSet));
   });

   describe('Save Draft opportunity with a few elements', async () => {
      await  performancePageNavigation.measurePerformanceForActions(SaveAndExitDraftOpportunitySet, performancePageNavigation.getAllActionNamesInActionSet(SaveAndExitDraftOpportunitySet));
   });

   describe('Save Draft opportunity with all elements', async () => {
      await  performancePageNavigation.measurePerformanceForActions(SaveAndExitDraftOpportunitySettSelectAll, performancePageNavigation.getAllActionNamesInActionSet(SaveAndExitDraftOpportunitySettSelectAll));
   });
   describe('Opportunity Actions ', async () => {
      await  performancePageNavigation.measurePerformanceForActions(OpportunitiesActionSet, performancePageNavigation.getAllActionNamesInActionSet(OpportunitiesActionSet));
   });

   describe('Navigation set  ', async () => {
      await  performancePageNavigation.measurePerformanceForActions(NavigationSet, performancePageNavigation.getAllActionNamesInActionSet(NavigationSet));
   });
   describe('Edit opportunity workflow: with few element', async () => {
      beforeEach(async () => {
         await headerPage.clickAllOpportunitiesIcon();
         await expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("CACU_bnorris");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['C']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
      });
      await  performancePageNavigation.measurePerformanceForActions(EditOpportunityWorkflowSet, performancePageNavigation.getAllActionNamesInActionSet(EditOpportunityWorkflowSet));
   });

   describe('Edit opportunity workflow with all elements', async () => {
      beforeAll(async () => {

         await dashboardPage.clickCreateOpportunityButton();
         await enterBasicInformationPage.populateCustomerName('Select All E2E Test Performance');
         await enterBasicInformationPage.selectCountry('United States');
         await enterBasicInformationPage.clickTestOpportunityCheckbox();
         await opportunityWorkflowPage.clickNextBtn();
         await selectSolutionSets.selectAll();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.selectProducts(['vSphere 6.7.x', 'App Volumes 2.14.x', 'Horizon 7.6.x', ' vRealize Business 7.4.x']);
         await opportunityWorkflowPage.clickNextBtn();
         await selectProductsPage.clickContinueRemoveSoluitonElements();
         await opportunityWorkflowPage.clickNextBtn();
         await opportunityWorkflowPage.clickCompleteButton();
      });
      await  performancePageNavigation.measurePerformanceForActions(EditOpportunityWorkflowSetSelectAll, performancePageNavigation.getAllActionNamesInActionSet(EditOpportunityWorkflowSetSelectAll));
   });

   describe('Content Access Mode workflow ', async () => {
      await  performancePageNavigation.measurePerformanceForActions(ContentAccessModeSet, performancePageNavigation.getAllActionNamesInActionSet(ContentAccessModeSet));
   });

   // They are comment until user has permissions
   xdescribe('Service Action verify ', async () => {
      await  performancePageNavigation.measurePerformanceForActions(ServicesActionSet, performancePageNavigation.getAllActionNamesInActionSet(ServicesActionSet));
   });

   afterAll(async () => {
      //Delete created opportunity
      await headerPage.clickAllOpportunitiesIcon();
      await expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
      await allOpportunitiesPage.findOpportunity("E2E Test Performance");
      await allOpportunitiesPage.selectAllOpportunities();
      await dataGridActionBarPage.deleteOpportunity(true);
   });
});


