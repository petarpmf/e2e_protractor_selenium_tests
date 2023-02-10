import {browser, by, By, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {BasePage} from "./common/base.page";
import {ServicePropertiesStepPage} from './service/serviceProperties/service-properties-step.page';
import {TasksAndEffortsStepPage} from './service/tasksAndEfforts/tasks-and-efforts-step.page';
import {ProductEffortContributionStepPage} from './service/productEffortContributions/product-effort-contribution-step.page';
import {ScalingModelsStepPage} from './service/scalingModels/scaling-model-step.page';
import {ScopeDefinitionStepPage} from './service/scopeDefinitions/scope-definition-step.page';
import {AutoscaleTimelineStepPage} from './service/autoscaleTimeline/autoscale-timeline-step.page';
import {ServicePrerequisitesStepPage} from './service/servicePrerequisites/service-prerequisites-step.page';
import {CompleteServicesStepPage} from './service/completeServices/complete-services-step.page';
import {NavigatorPage} from './navigator.page';
import {IOrdinaryService} from './model/service/ordinary-service.model';
import {IIntegrateService} from './model/service/integrate-service.model';
import {IInteroperateService} from './model/service/interoperate-service.model';
import {serviceWorkflowSteps} from '../common/service-workflow-steps';

let navigatorPage = new NavigatorPage();
let servicePropertiesStepPage = new ServicePropertiesStepPage();
let tasksAndEffortsStepPage = new TasksAndEffortsStepPage();
let productEffortContributionsStepPage = new ProductEffortContributionStepPage();
let scalingModelsStepPage = new ScalingModelsStepPage();
let scopeDefinitionsStepPage = new ScopeDefinitionStepPage();
let autoscaleTimelineStepPage = new AutoscaleTimelineStepPage();
let servicePrerequisitesStepPage = new ServicePrerequisitesStepPage();
let completeServicesStepPage = new CompleteServicesStepPage();

export class ServiceWorkflowPage extends BasePage {

   nextBtn = element(By.id('next-btn'));
   prevBtn = element(By.id('previous-btn'));
   completeBtn = element(By.id('complete-btn'));
   confirmationBtn = element(By.id('confirmButton'));
   integrateServiceGridLocator = By.css('.k-grid-content .k-master-row');
   pageTitleSelector = element(By.css('h1.page-title'));
   scopeDefinitionTab = element(by.id('scopeDefinitionTab'));


   clickNextBtn(): promise.Promise<any> {
      expect(this.nextBtn.waitReady()).toBeTruthy();
      return this.nextBtn.click();
   };

   async clickScopeDefinitionTab(): promise.Promise<any> {
      expect(this.scopeDefinitionTab.waitReady()).toBeTruthy();
      return this.scopeDefinitionTab.click();
   };

   clickPrevBtn(): promise.Promise<any> {
      expect(this.prevBtn.waitReady()).toBeTruthy();
      return this.prevBtn.click();
   };

   clickCompleteBtn(): promise.Promise<any> {
      expect(this.completeBtn.waitReady()).toBeTruthy();
      return this.completeBtn.click();
   };

   clickConfirmBtn(): promise.Promise<any> {
      expect(this.confirmationBtn.waitReady()).toBeTruthy();
      return this.confirmationBtn.click();
   };

   getTitle() {
      return this.pageTitleSelector;
   }

   getTitleText() {
      return this.pageTitleSelector.getText();
   }

   private hasTab(tab, tabs) {
      return tabs.indexOf(tab) > -1 || tabs.length == 0;
   };

   createOrdinaryService(serviceData: IOrdinaryService, tabs): promise.Promise<any> {
      //Service properties step
      let addPropertiesPromise = navigatorPage.clickCreateServiceBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.PROPERTIES, tabs)) {
               return servicePropertiesStepPage.createService(serviceData.properties);
            }
         });

      let addModulePromise = addPropertiesPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.MODULES, tabs)) {
            return servicePropertiesStepPage.openModuleTab().then(() => {
               return servicePropertiesStepPage.addAllModules(serviceData.modules);
            });
         }
      });

      let addRoleMappingPromise = addModulePromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.ROLE_MAPPING, tabs)) {
            return servicePropertiesStepPage.openRoleMappingTab().then(() => {
               return servicePropertiesStepPage.addAllRoleMappings(serviceData.roleMappings);
            });
         }
      });

      let addTechnologyAttachmentPromise = addRoleMappingPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.TECHNOLOGY_ATTACHMENTS, tabs)) {
            return servicePropertiesStepPage.openTechnologyAttachmentsTab().then(() => {
               return servicePropertiesStepPage.addTechnologyAttachment(serviceData.technologyAttachments);
            });
         }
      });

      //Service tasks and efforts step
      let addTasksAndEffortsPromise = addTechnologyAttachmentPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.TASK_AND_EFFORTS, tabs)) {
               return tasksAndEffortsStepPage.addAllNewTasks(null,serviceData.taskAndEfforts);
            }
         });
      });

      //Service product effort contributions step
      let editProductEffortContributionsPromise = addTasksAndEffortsPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.PRODUCT_EFFORT_CONTRIBUTION, tabs)) {
               return productEffortContributionsStepPage.editForAllPhases(serviceData.productEffortContributions);
            }
         });
      });

      //Service scaling model step
      let addScalingQuestionPromise = editProductEffortContributionsPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.QUESTIONS, tabs)) {
               return scalingModelsStepPage.clickQuestionTabAccordion().then(() => {
                  return scalingModelsStepPage.addAllScalingQuestions(serviceData.scalingQuestions);
               });
            }
         });
      });

      let editScalingModelPromise = addScalingQuestionPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.SCALING_MODEL, tabs)) {
            return scalingModelsStepPage.clickScalingModelTabAccordion().then(() => {
               return scalingModelsStepPage.editAllScalingModel(serviceData.scalingModels);
            });
         }
      });

      //  //Service scope definition step
      let addInScopeAssociationPromise = editScalingModelPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.IN_SCOPE_ASSOCIATIONS, tabs)) {
               return scopeDefinitionsStepPage.clickInScopeAssociationsTabAccordion().then(() => {
                  return scopeDefinitionsStepPage.addAllInScopeAssociations(serviceData.inScopeAssociations);
               });
            }
         });
      });

      let addOutOfScopeAssociationPromise = addInScopeAssociationPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.OUT_OF_SCOPE_ASSOCIATIONS, tabs)) {
            return scopeDefinitionsStepPage.clickOutOfScopeAssociationsTabAccordion().then(() => {
               return scopeDefinitionsStepPage.addAllOutOfScopeAssociation(serviceData.outOfScopeAssociations);
            });
         }
      });

      //Service autoscale timeline step
      let editAutoscaleTimelinePromise = addOutOfScopeAssociationPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.AUTOSCALE_TIMELINE, tabs)) {
               return autoscaleTimelineStepPage.editForAllPhases(serviceData.autoscaleTimeline);
            }
         });
      });

      //Service prerequisites step
      let addNewTechnologyPrerequisitePromise =
         editAutoscaleTimelinePromise.then(() => {
            return this.clickNextBtn().then(() => {
               if (this.hasTab(serviceWorkflowSteps.tabs.TECHNOLOGY, tabs)) {
                  return servicePrerequisitesStepPage
                     .addAllNewTechnologyPrerequisites(serviceData.serviceTechnologyPrerequisites);
               }
            });
         });

      let addNewStakeholderPrerequisitePromise =
         addNewTechnologyPrerequisitePromise.then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.STAKEHOLDER, tabs)) {
               return servicePrerequisitesStepPage.clickStakeholderTabAccordion().then(() => {
                  return servicePrerequisitesStepPage
                     .addAllNewStakeholderPrerequisites(serviceData.serviceStakeholderPrerequisites);
               });
            }
         });

      let addNewFreeFormPrerequisitePromise =
         addNewStakeholderPrerequisitePromise.then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.FREE_FORM, tabs)) {
               return servicePrerequisitesStepPage.clickFreeFormTabAccordion().then(() => {
                  return servicePrerequisitesStepPage
                     .addAllNewFreeFormPrerequisites(serviceData.serviceFreeFormPrerequisites);
               });
            }
         });

      return addNewFreeFormPrerequisitePromise.then(() => {
         return completeServicesStepPage.checkService(serviceData.properties);
      });
   };

   createInteroperateService(serviceInteroperateData: IInteroperateService, tabs): promise.Promise<any> {
      //Service properties step
      let addPropertiesPromise = navigatorPage.clickServicePortfolioBtn().then(() => {
         return navigatorPage.clickCreateServiceBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.PROPERTIES, tabs)) {
               return servicePropertiesStepPage.createInteroperateService(serviceInteroperateData.properties);
            }
         })
      });
      let addModulePromise = addPropertiesPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.MODULES, tabs)) {
            return servicePropertiesStepPage.openModuleTab().then(() => {
               return servicePropertiesStepPage.addAllModules(serviceInteroperateData.modules);
            });
         }
      });

      //Service tasks and efforts step
      let addTasksAndEffortsPromise = addModulePromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.NET_NEW_TASKS, tabs)) {
               return tasksAndEffortsStepPage.clickNetNewTasksTabAccordion().then(() => {
                  return tasksAndEffortsStepPage.addAllNewTasks(null, serviceInteroperateData.taskAndEfforts);
               });
            }
         });
      });
      let addNewModifyingTaskPromise = addTasksAndEffortsPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.MODIFYING_TASKS, tabs)) {
            return tasksAndEffortsStepPage.clickModifyingTasksTabAccordion().then(() => {
               return tasksAndEffortsStepPage.addAllNewModifyingTasks(serviceInteroperateData.modifyingTasks);
            });
         }
      });

      //Service scaling model step
      let addScalingQuestionPromise = addNewModifyingTaskPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.QUESTIONS, tabs)) {
               return scalingModelsStepPage.clickQuestionTabAccordion().then(() => {
                  return scalingModelsStepPage.addAllScalingQuestions(serviceInteroperateData.scalingQuestions);
               });
            }
         });
      });
      let editScalingModelPromise = addScalingQuestionPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.SCALING_MODEL, tabs)) {
            return scalingModelsStepPage.clickScalingModelTabAccordion().then(() => {
               return scalingModelsStepPage.editAllScalingModel(serviceInteroperateData.scalingModels);
            });
         }
      });

      //  //Service scope definition step
      let addInScopeAssociationPromise =
         editScalingModelPromise.then(() => {
            return this.clickNextBtn().then(() => {
               if (this.hasTab(serviceWorkflowSteps.tabs.IN_SCOPE_ASSOCIATIONS, tabs)) {
                  return scopeDefinitionsStepPage.clickInScopeAssociationsTabAccordion().then(() => {
                     return scopeDefinitionsStepPage
                        .addAllInScopeAssociations(serviceInteroperateData.inScopeAssociations);
                  });
               }
            });
         });
      let addOutOfScopeAssociationPromise =
         addInScopeAssociationPromise.then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.OUT_OF_SCOPE_ASSOCIATIONS, tabs)) {
               return scopeDefinitionsStepPage.clickOutOfScopeAssociationsTabAccordion().then(() => {
                  return scopeDefinitionsStepPage
                     .addAllOutOfScopeAssociation(serviceInteroperateData.outOfScopeAssociations);
               });
            }
         });

      return addOutOfScopeAssociationPromise.then(() => {
         return completeServicesStepPage.checkService(serviceInteroperateData.properties);
      });
   };

   createIntegrateService(serviceIntegrateData: IIntegrateService, tabs): promise.Promise<any> {
      //Service properties step
      let addPropertiesPromise = navigatorPage.clickServicePortfolioBtn().then(() => {
         return navigatorPage.clickCreateServiceBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.PROPERTIES, tabs)) {
               return servicePropertiesStepPage.createIntegrateService(serviceIntegrateData.properties);
            }
         })
      });
      let addModulePromise = addPropertiesPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.MODULES, tabs)) {
            return servicePropertiesStepPage.openModuleTab().then(() => {
               return servicePropertiesStepPage.addAllModules(serviceIntegrateData.modules);
            });
         }
      });
      let addRoleMappingPromise = addModulePromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.ROLE_MAPPING, tabs)) {
            return servicePropertiesStepPage.openRoleMappingTab().then(() => {
               return servicePropertiesStepPage.addAllRoleMappings(serviceIntegrateData.roleMappings);
            });
         }
      });
      let addTechnologyAttachmentPromise =
         addRoleMappingPromise.then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.TECHNOLOGY_ATTACHMENTS, tabs)) {
               return servicePropertiesStepPage.openTechnologyAttachmentsTab(this.integrateServiceGridLocator).then(() => {
                  return servicePropertiesStepPage
                     .addAllIntegrateTechnologyAttachments(serviceIntegrateData.technologyAttachments);
               });
            }
         });

      //Service tasks and efforts step
      let addTasksAndEffortsPromise = addTechnologyAttachmentPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.TASK_AND_EFFORTS, tabs)) {
               return tasksAndEffortsStepPage.addAllNewTasks(null, serviceIntegrateData.taskAndEfforts);
            }
         });
      });

      let addNewModifyingTaskPromise = addTasksAndEffortsPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.MODIFYING_TASKS, tabs)) {
            return tasksAndEffortsStepPage.clickModifyingTasksTabAccordion().then(() => {
               return tasksAndEffortsStepPage.addAllNewModifyingTasks(serviceIntegrateData.modifyingTasks);
            });
         }
      });

      //Service scaling model step
      let addScalingQuestionPromise = addNewModifyingTaskPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.QUESTIONS, tabs)) {
               return scalingModelsStepPage.clickQuestionTabAccordion().then(() => {
                  return scalingModelsStepPage.addAllScalingQuestions(serviceIntegrateData.scalingQuestions);
               });
            }
         });
      });
      let editScalingModelPromise = addScalingQuestionPromise.then(() => {
         if (this.hasTab(serviceWorkflowSteps.tabs.SCALING_MODEL, tabs)) {
            return scalingModelsStepPage.clickScalingModelTabAccordion().then(() => {
               return scalingModelsStepPage.editAllScalingModel(serviceIntegrateData.scalingModels);
            });
         }
      });

      //  //Service scope definition step
      let addInScopeAssociationPromise = editScalingModelPromise.then(() => {
         return this.clickNextBtn().then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.IN_SCOPE_ASSOCIATIONS, tabs)) {
               return scopeDefinitionsStepPage.clickInScopeAssociationsTabAccordion().then(() => {
                  return scopeDefinitionsStepPage.addAllInScopeAssociations(serviceIntegrateData.inScopeAssociations);
               });
            }
         });
      });
      let addOutOfScopeAssociationPromise =
         addInScopeAssociationPromise.then(() => {
            if (this.hasTab(serviceWorkflowSteps.tabs.OUT_OF_SCOPE_ASSOCIATIONS, tabs)) {
               return scopeDefinitionsStepPage.clickOutOfScopeAssociationsTabAccordion().then(() => {
                  return scopeDefinitionsStepPage
                     .addAllOutOfScopeAssociation(serviceIntegrateData.outOfScopeAssociations);
               });
            }
         });

      return addOutOfScopeAssociationPromise.then(() => {
         return completeServicesStepPage.checkService(serviceIntegrateData.properties);
      });
   };

   async saveAndExitService(){
      await this.clickCompleteBtn();
      await this.clickConfirmBtn();
   }
}