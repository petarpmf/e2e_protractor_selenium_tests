import {By, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {opportunityWorkflowSteps} from '../common/opportunity-workflow-steps';
import {
   opportunityDetailsStepPage,
} from './scopingMode/opportunityDetails/opportunity-details-step.page';
import {IOpportunity} from './model/opportunity/scopingMode/opportunity.model';
import {customTasksStepPage} from "./scopingMode/customTask/custom-tasks-step.page";
import {customTasksPage} from "./scopingMode/customTask/custom-tasks.page";
import {customizeWbsStepPage} from "./scopingMode/customizeWBS/customize-wbs-step.page";
import {customizeWbsPage} from "./scopingMode/customizeWBS/customize-wbs.page";

import {dashboardPage,} from "./dashboard.page";
import {CommonOpportunityWorkflowPage} from "./common-opportunity-workflow.page";
import {enterBasicInformationPage} from "./guidedMode/enter-basic-information.page";
import {opportunityDetailsTabPage} from "./scopingMode/opportunityDetails/opportunity-details-tab.page";
import {
   scalingQuestionnairePage,
   scalingQuestionnaireStepPage
} from "./scopingMode/scalingQuestionnaire/scaling-questionnaire.page";
import {modulesConfigurationPage} from "./scopingMode/modulesConfiguration/modules-configuration.page";
import {modulesConfigurationStepPage} from "./scopingMode/modulesConfiguration/modules-configuration-step.page";
import {completePage} from "./guidedMode/complete-review.page";
import {CreateOpportunityWorkflowPage} from "./create-opportunity-workflow.page";
import {summariesStepPage} from "./scopingMode/summaries/summaries-step.page";

/**
 * Navigation for opportunity workflow.
 */
export class EditOpportunityWorkflowPage extends CommonOpportunityWorkflowPage {
   switchAdvancedAndStandartMode = element(By.css('#advancedMode > div.toggle-switch'));

   async changeMode(isAdvanced: boolean): promise.Promise<any> {
      if (isAdvanced) {
         expect(this.switchAdvancedAndStandartMode.waitReady()).toBeTruthy();
         await this.switchAdvancedAndStandartMode.click();
      }
   }

   /**
    * Compares two arrays: vertical or horizontal tabs present and tabs which should be present
    * @param contextArrayElement selector for all vertical or horizontal tabs present
    * @param tabNames array of the tabs which should be present
    * @returns {promise.Promise<Array<String>>}
    */
   async areTabsPresent(tabNames: String[], contextArrayElement): promise.Promise<boolean> {
      let tabsPresent = false;
      let foundTabNames: String[] = await this.getAllTabNames(contextArrayElement);
      let missing = tabNames.filter(item => foundTabNames.indexOf(item) < 0);
      if (missing.length < 1) {
         tabsPresent = true;
      }
      return tabsPresent;
   }

   async clickSaveExitButton(): promise.Promise<any> {
      expect(this.saveBtn.waitReady()).toBeTruthy();
      await this.saveBtn.click();
   }

   async clickModulesConfigTab(): promise.Promise<any> {
      await expect(this.moduleConfigurationTab.waitReady()).toBeTruthy();
      return await this.moduleConfigurationTab.click()
   }

   async clickDeliveryTab(): promise.Promise<any> {
      await expect(this.deliveryTab.waitReady()).toBeTruthy();
      return await this.deliveryTab.click()
   }

   async clickCustomTaskTab(): promise.Promise<any> {
      expect(this.customtaskTab.waitReady()).toBeTruthy();
      return this.customtaskTab.click()
   }

   async clickCustomizeWBSTab(): promise.Promise<any> {
      expect(await this.customizeWBSTab.waitReady()).toBeTruthy();
      await this.customizeWBSTab.click()
   }

   async clickScalingQuestionnaireTab(): promise.Promise<any> {
      expect(this.scalingQuestionnaireTab.waitReady()).toBeTruthy();
      await this.scalingQuestionnaireTab.click();
   }

   async clickAutoscaleTimelineTab(): promise.Promise<any> {
      expect(this.autoscaleTimelineTab.waitReady()).toBeTruthy();
      await this.autoscaleTimelineTab.click();
   }

   async clickSummariesTab(): promise.Promise<any> {
      expect(this.summariesTab.waitReady()).toBeTruthy();
      await this.summariesTab.click();
   }

   async clickDetailsTab(): promise.Promise<void> {
      expect(this.detailsTab.waitReady()).toBeTruthy();
      await this.detailsTab.click();
   }

   /*Clicks on the merged services tab */
   async clickMergedServicestab(): promise.Promise<void> {
      let status = await this.mergedServicestab.isDisplayed();
      if (status === true) {
         return this.mergedServicestab.click();
      }
   }

   /*Clicks on the milestones tab */
   async clickMilestonestab(): promise.Promise<void> {
      let status = await this.milestonesSummarystab.isPresent();
      if (status) {
         return this.milestonesSummarystab.click();
      }
   }

   clickOnEnterBasicInformationTab(): promise.Promise<void> {
      return enterBasicInformationPage.clickTab();
   }

   /**Clicks on the complete tab*/
   clickOnCompleteTab(): promise.Promise<void> {
      return completePage.clickTab()
   }

   createOpportunity(opportunityData: IOpportunity, tabs, opportunityName: string): promise.Promise<any> {
      //Service properties step
      let addOpportunityDetailsPromise = dashboardPage.editNewestRecentlyCreatedOpportunity(opportunityName).then(() => {
         if (this.hasTab(opportunityWorkflowSteps.tabs.OPPORTUNITY_DETAILS, tabs)) {
            return opportunityDetailsStepPage.fillOpportunityDetails(opportunityData.opportunityCustomer);
         }
      });

      let modulesConfigurationPromise = addOpportunityDetailsPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(opportunityWorkflowSteps.tabs.MODULES_CONFIGURATION, tabs)) {
               return modulesConfigurationStepPage.editAllModules(opportunityData.modules);
            }
         });
      });

      let customTaskPromise = modulesConfigurationPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(opportunityWorkflowSteps.tabs.CUSTOM_TASK, tabs)) {
               return customTasksStepPage.addAllCustomTasks(opportunityData.customTasks);
            }
         });
      });

      let customizeWbsPromise = customTaskPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(opportunityWorkflowSteps.tabs.CUSTOMIZE_WBS, tabs)) {
               return customizeWbsStepPage.editAllTasks(opportunityData.customizeWBS);
            }
         });
      });

      let scalingQuestionnairePromise = customizeWbsPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(opportunityWorkflowSteps.tabs.SCALING_QUESTIONNAIRE, tabs)) {
               return scalingQuestionnaireStepPage.configureAnswers(opportunityData.scalingQuestions, opportunityData.services);
            }
         });
      });

      return scalingQuestionnairePromise.then(() => {
         // return this.clickNextBtn().then(() => {
         return this.resolveCompleteWorkflow();
         //});
      });
   }

   async openDetailsTab(): promise.Promise<void> {
      await opportunityDetailsTabPage.openDetailsTab();
   }

   async checkDetailsTabIsOpened(): promise.Promise<void> {
      await opportunityDetailsTabPage.checkDetailsTabIsOpened();
   }

   async openModulesTab(): promise.Promise<any> {
      await modulesConfigurationPage.openModulesTab();
   }

   async checkModulesTabIsOpened() : promise.Promise<any>{
      await modulesConfigurationPage.checkModulesTabIsOpened();
   }

   async openCustomTaskTab(): promise.Promise<any> {
      await customTasksPage.openCustomTaskTab();
   }

   async checkCustomTaskTabIsOpened(): promise.Promise<any> {
      await customTasksPage.checkCustomTaskTabIsOpened();
   }

   async openWBSTab(): promise.Promise<any> {
      await customizeWbsPage.openWBSTab();
   }

   async checkWBSTabIsOpened(){
      await customizeWbsPage.checkWBSTabIsOpened();
   }

   async openScalingQuiestionnaireTab(): promise.Promise<any> {
      await scalingQuestionnairePage.openScalingQuiestionnaireTab();
   }

   async checkScalingQuiestionnaireTabIsOpened(){
      await scalingQuestionnairePage.checkScalingQuiestionnaireTabIsOpened();
   }

   async openSummariesTab(): promise.Promise<any> {
      await summariesStepPage.openSummariesTab();
   }

   async checkSummariesTabIsOpened() {
      await summariesStepPage.checkSummariesTabIsOpened();
   }
}

export let editOpportunityWorkflowPage = new EditOpportunityWorkflowPage();