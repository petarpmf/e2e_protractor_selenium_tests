import {HeaderPage} from "../../pages/header.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";
import {OpportunityDetailsTabPage} from "../../pages/scopingMode/opportunityDetails/opportunity-details-tab.page";
import {AllOpportunitiesPage} from "../../pages/opportunity/all-opportunities.page";
import {EditOpportunityWorkflowPage} from "../../pages/edit-opportunity-workflow.page";
import {SummariesStepPage} from "../../pages/scopingMode/summaries/summaries-step.page";
import {ClarityDatagridPage} from "../../pages/common/clarity-datagrid.page";
import {SelectedSolutionConfigurationItemsPage} from "../../pages/scopingMode/opportunityDetails/selected-solution-configuration-items-tab.page";
import {CustomizeWbsPage} from "../../pages/scopingMode/customizeWBS/customize-wbs.page";
import {CustomizeWbsTask, ICustomizeWbsTask} from "../../pages/model/opportunity/scopingMode/customize-wbs.model";
import {modulesConfigurationPage} from "../../pages/scopingMode/modulesConfiguration/modules-configuration.page";
import {selectSolutionSetsPage} from "../../pages/guidedMode/select-solution-sets.page";
import {selectSolutionElementsPage} from "../../pages/guidedMode/select-solution-elements.page";
import {SelectProductsPage} from "../../pages/guidedMode/select-products.page";
import {by, element} from "protractor";
import {customerNameSalesPlay} from "../../common/mocked-data/salesRoles/mocked-solution-elements.data";

const headerPage = new HeaderPage();
let allOpportunitiesPage = new AllOpportunitiesPage(new OpportunitiesDatagridPage());
let opportunityDetailsTabPage = new OpportunityDetailsTabPage();
let opportunityWorkflowPage = new EditOpportunityWorkflowPage();
let summariesStepPage = new SummariesStepPage();
let selectProductsPage = new SelectProductsPage();
let customizeWbsPage = new CustomizeWbsPage(new ClarityDatagridPage());
let selectedSolutionConfigurationItemsTab = new SelectedSolutionConfigurationItemsPage(new ClarityDatagridPage());

export const ExecuteTask = new CustomizeWbsTask(<ICustomizeWbsTask>{
   taskName: "Kickoff Meeting",
   phaseName: "Plan",
   moduleName: "Base Service",
   include: "Yes",
   deliverRemotely: 'Yes',
   efforts: [
      {
         roleName: "SC",
         fullRoleName: "Senior Consultant",
         totalHours: 2,
         remoteHours: 0
      }
   ]
});

export let EditOpportunityWorkflowSet = {

   'Open Edit opportunity workflow': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Acea");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.selectOpportunity(['Acea']);

      },
      'method': async function () {
         await  allOpportunitiesPage.actionBarPage.clickEditOpportynityButton();
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

      },

      'description': 'click edit button, wait for details page',
      'ac': 1
   },
   'Open Details: Selected Solution Configuration items tab': {

      'method': async function () {
         await selectedSolutionConfigurationItemsTab.openSelectedSolutionConfigurationItemsTab();

      },

      'description': 'wait grid to load',
      'ac': 1
   },

   'Open WBS Tab': {
      'preparations': async function () {
         await opportunityWorkflowPage.changeMode(true);
         await  expect(customizeWbsPage.customizeWbsTab.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await  customizeWbsPage.customizeWbsTab.click();
         await  expect(customizeWbsPage.customizeWbsGrid.waitReady()).toBeTruthy("WBS tab is not opened")
      },

      'description': 'wait for task grid to load',
      'ac': 1
   },
   'Open WBS Tab- expand tasks': {
      'preparations': async function () {
         await opportunityWorkflowPage.changeMode(true);
         await opportunityWorkflowPage.openWBSTab();
         await opportunityWorkflowPage.checkWBSTabIsOpened();
         await expect(element(by.cssContainingText('.datagrid-cell', 'Execute: Design')).element(by.css('button')).waitReady()).toBeTruthy();

      },
      'method': async function () {
         await   element(by.cssContainingText('.datagrid-cell', 'Execute: Design')).element(by.css('button')).click();

      },

      'description': 'expand phase and wait for last task',
      'ac': 0.3
   },
   'Open Module Tab': {
      'preparations': async function(){
         await opportunityWorkflowPage.changeMode(true);
      },
      'method': async function () {
         await   modulesConfigurationPage.modulesConfigurationTab.click();
         await    expect(modulesConfigurationPage.modulesConfigurationDatagrid.waitReady()).toBeTruthy("Modules tab is not opened");

      },

      'description': 'wait for module tab',
      'ac': 0.5
   },
   'Open Scalling Questionnaire  tab': {

      'method': async function () {
         await  opportunityWorkflowPage.selectTab('scalingQuestionnaireTab');
         await opportunityWorkflowPage.checkScalingQuiestionnaireTabIsOpened();
      },

      'description': 'open tab and wait for page load',
      'ac': 0.5
   },
   'Open Opportunity summary tab': {

      'method': async function () {
         await opportunityWorkflowPage.openSummariesTab();
         await opportunityWorkflowPage.checkSummariesTabIsOpened();
      },

      'description': 'open tab and wait for details label',
      'ac': 0.5
   },
   'Open Summaries: Overall Effort Summary tab': {
      'preparations': async function () {

         await opportunityWorkflowPage.openSummariesTab();
      },
      'method': async function () {
         await summariesStepPage.expandOverallEffortSummaryTab();
      },

      'description': 'open tab and wait for grid',
      'ac': 0.5
   },
   'Open Summaries: Modules Effort Summary tab': {
      'preparations': async function () {

         await opportunityWorkflowPage.openSummariesTab();
      },
      'method': async function () {
         await summariesStepPage.expandModuleEffortSummaryTab();
      },

      'description': 'expand tab and wait for grid',
      'ac': 0.5
   },
   'Open Solution Sets': {

      'method': async function () {
         await opportunityWorkflowPage.openSolutionSetsTab();
         await opportunityWorkflowPage.checkolutionSetsTabIsOpened();
      },

      'description': 'open tab and wait for storefront drop down',
      'ac': 0.5
   },
   'Open Solution elements': {

      'method': async function () {
         await opportunityWorkflowPage.openSolutionElementsTab();
         await opportunityWorkflowPage.checkSolutionElementsTabIsOpened();
      },

      'description': 'open tab and wait for customer Problems List',
      'ac': 0.5
   },
   'Open Products ': {
      'method': async function () {
         await opportunityWorkflowPage.openProductsTab();
         await opportunityWorkflowPage.checkProductsTabIsOpened();
      },

      'description': 'open tab and wait for products List',
      'ac': 0.5
   },

   'Open WBS Tab- edit tasks hours': {
      'preparations': async function () {
         await opportunityWorkflowPage.changeMode(true);
         await opportunityWorkflowPage.openWBSTab();
         await opportunityWorkflowPage.checkWBSTabIsOpened();
         let roleName = ExecuteTask.efforts[0].fullRoleName;
         await customizeWbsPage.selectTask(ExecuteTask, true);
         await customizeWbsPage.clickEditButton();
         await customizeWbsPage.typeTotalHoursForRole(7, roleName);
         await customizeWbsPage.typeRemoteHoursForRole(5, roleName);

      },
      'method': async function () {
         await  customizeWbsPage.clickSaveButton();
         await    expect(customizeWbsPage.modifiedTasksLabel.waitReady()).toBeTruthy("Modified tasks label does not exist");

      },

      'description': 'click save button after changing task hours in WBS',
      'ac': 0.5
   },


};
export let EditOpportunityWorkflowSetSelectAll = {
   'Open Edit opportunity workflow': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.selectOpportunity(['E']);

      },
      'method': async function () {
         await allOpportunitiesPage.actionBarPage.clickEditOpportynityButton();
         await    expect(opportunityDetailsTabPage.customerInfoTab.waitReady()).toBeTruthy();
      },

      'description': 'click edit button, wait for details page',
      'ac': 1
   },
   'Open Details: Selected Solution Configuration items tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await selectedSolutionConfigurationItemsTab.openSelectedSolutionConfigurationItemsTab();
      },

      'description': 'wait grid to load',
      'ac': 1
   },


   'Open WBS Tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await opportunityWorkflowPage.changeMode(true);
         await  expect(customizeWbsPage.customizeWbsTab.waitReady()).toBeTruthy();

      },
      'method': async function () {
         await customizeWbsPage.customizeWbsTab.click();
         await expect(customizeWbsPage.customizeWbsGrid.waitReady()).toBeTruthy("WBS tab is not opened")

      },

      'description': 'wait for task grid to load',
      'ac': 1
   },


   'Open WBS Tab- expand tasks': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await opportunityWorkflowPage.openWBSTab();
         await opportunityWorkflowPage.checkWBSTabIsOpened();
         await expect(element(by.cssContainingText('.datagrid-cell', 'Execute: Assess')).element(by.css('button')).waitReady()).toBeTruthy();

      },
      'method': async function () {
         await element(by.cssContainingText('.datagrid-cell', 'Execute: Assess')).element(by.css('button')).click();

      },

      'description': 'expand phase and wait for last task',
      'ac': 0.3
   },
   'Open Module Tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await modulesConfigurationPage.modulesConfigurationTab.click();
         await expect(modulesConfigurationPage.modulesConfigurationDatagrid.waitReady()).toBeTruthy("Modules tab is not opened");
      },

      'description': 'wait for module tab',
      'ac': 1
   },
   'Open Scalling Questionnaire  tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await  opportunityWorkflowPage.selectTab('scalingQuestionnaireTab');
         await opportunityWorkflowPage.checkScalingQuiestionnaireTabIsOpened();
      },

      'description': 'open tab and wait for page load',
      'ac': 1
   },
   'Open Opportunity summary tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await opportunityWorkflowPage.openSummariesTab();
         await opportunityWorkflowPage.checkSummariesTabIsOpened();
      },

      'description': 'open tab and wait for details label',
      'ac': 1
   },
   'Open Summaries: Overall Effort Summary tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await opportunityWorkflowPage.openSummariesTab();
      },
      'method': async function () {
         await summariesStepPage.expandOverallEffortSummaryTab();
      },

      'description': 'open tab and wait for grid',
      'ac': 1
   },
   'Open Summaries: Modules Effort Summary tab': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await opportunityWorkflowPage.openSummariesTab();
      },
      'method': async function () {
         await summariesStepPage.expandModuleEffortSummaryTab();
      },

      'description': 'expand tab and wait for grid',
      'ac': 1
   },

   'Open WBS Tab- edit tasks hours': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await opportunityWorkflowPage.openWBSTab();
         await opportunityWorkflowPage.checkWBSTabIsOpened();
         let roleName = ExecuteTask.efforts[0].fullRoleName;
         await customizeWbsPage.selectTask(ExecuteTask, true);
         await customizeWbsPage.clickEditButton();
         await customizeWbsPage.typeTotalHoursForRole(7, roleName);
         await customizeWbsPage.typeRemoteHoursForRole(5, roleName);

      },
      'method': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await customizeWbsPage.clickSaveButton();
         await expect(customizeWbsPage.modifiedTasksLabel.waitReady()).toBeTruthy("Modified tasks label does not exist");


      },

      'description': 'click save button after changing task hours in WBS',
      'ac': 1
   },
   'Open Solution Sets [Select All]': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await expect(selectSolutionSetsPage.solutionSetsTab.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await selectSolutionSetsPage.solutionSetsTab.click();
         await   expect(selectSolutionSetsPage.solutionSetContainer.waitReady()).toBeTruthy("Solution sets tab is not opened");

      },

      'description': 'open tab and wait for solution Set Container',
      'ac': 1
   },
   'Open Solution elements': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();

         await expect(selectSolutionElementsPage.solutionElementsTab.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await selectSolutionElementsPage.solutionElementsTab.click();
         await  expect(selectSolutionElementsPage.customerProblemsList.waitReady()).toBeTruthy("Solution Elements tab is not opened");

      },

      'description': 'open tab and wait for customer Problems List',
      'ac': 1
   },
   'Open Products': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
         await  expect(allOpportunitiesPage.loadingSpinnerID.waitToBeInvisible()).toBeTruthy();
         await allOpportunitiesPage.findOpportunity("Select All E2E Test Performance");
         await expect<any>(allOpportunitiesPage.getStatusColumnText()).toEqual("OPENED");
         await allOpportunitiesPage.editOpportunity(['Select All E2E Test Performance']);
         await expect(opportunityDetailsTabPage.customerInfoGrid.waitReady()).toBeTruthy();
         await expect(selectProductsPage.productsTab.waitReady()).toBeTruthy();
      },
      'method': async function () {
         await selectProductsPage.productsTab.click();
         await expect(selectProductsPage.productsGrid.waitReady()).toBeTruthy("Products tab is not opened");


      },

      'description': 'open tab and wait for products List',
      'ac': 1
   },

};