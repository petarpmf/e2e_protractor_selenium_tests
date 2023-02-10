import {InteroperateService} from "../../../pages/model/service/interoperate-service.model";

export const interoperateService = new InteroperateService({
   properties: {
      serviceName: 'Interoperate test service',
      serviceDescription: 'Interoperate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Interoperate',
      serviceDeliveryPreferenceName: 'Onsite Only',
      relatedServicesClass: 'Deploy',
      firstRelatedService: 'Deploy VCF - TEST',
      secondRelatedService: 'Deploy Hyperic - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete'
   },
   modules: [
      {
         moduleName: 'module name',
         moduleDescription: 'module description'
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "EAC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "ARC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "SC",
               totalHours: 5,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   modifyingTasks: [
      {
         modifyingTaskName: 'Modifying Task Name',
         firstRelatedServiceTask: 'Pre-engagement call',
         secondRelatedServiceTask: 'Pre-engagement call',
         efforts: [
            {
               roleName: "SC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "EAC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "ARC",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'test question',
         defaultAnswer: 3,
         minimumAnswer: 3,
         maximumAnswer: 4,
         comments: 'test comments'
      }
   ],
   scalingModels: [
      {
         taskName: "test task",
         questionEfforts: [
            {
               question: "test question",
               effort: 50
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: 'primary text',
         secondaryScopeText: '',
         description: 'description1',
         moduleName: 'module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ]
});


export const interoperateNewService = new InteroperateService({
   properties: {
      serviceName: '',
      serviceDescription: 'Interoperate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Interoperate',
      relatedServicesClass: 'Deploy',
      firstRelatedService: 'Deploy First - TEST',
      secondRelatedService: 'Deploy Second - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only'
   },
   modules: [
      {
         moduleName: 'module name',
         moduleDescription: 'module description'
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "EAC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "ARC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "SC",
               totalHours: 5,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   modifyingTasks: [
      {
         modifyingTaskName: 'Modifying Task Name',
         firstRelatedServiceTask: 'Pre-engagement call',
         secondRelatedServiceTask: 'Pre-engagement call',
         efforts: [
            {
               roleName: "SC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "EAC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "ARC",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'test question',
         defaultAnswer: 3,
         minimumAnswer: 3,
         maximumAnswer: 4,
         comments: 'test comments'
      }
   ],
   scalingModels: [
      {
         taskName: "test task",
         questionEfforts: [
            {
               question: "test question",
               effort: 50
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: 'primary text',
         secondaryScopeText: '',
         description: 'description1',
         moduleName: 'module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ]
});


export const interoperateClonedNewService = new InteroperateService({
   properties: {
      serviceName: '',
      serviceDescription: 'Interoperate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Interoperate',
      relatedServicesClass: 'Deploy',
      firstRelatedService: 'First Deploy Service - TEST',
      secondRelatedService: 'Second Deploy Service - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only',
   },
   modules: [
      {
         moduleName: 'module name',
         moduleDescription: 'module description'
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "EAC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "ARC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "SC",
               totalHours: 5,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   modifyingTasks: [
      {
         modifyingTaskName: 'Modifying Task Name',
         firstRelatedServiceTask: 'Pre-engagement call',
         secondRelatedServiceTask: 'Pre-engagement call',
         efforts: [
            {
               roleName: "SC",
               totalHours: 8,
               remoteHours: 4
            },
            {
               roleName: "EAC",
               totalHours: 4,
               remoteHours: 2
            },
            {
               roleName: "ARC",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 2,
               remoteHours: 1
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'test question',
         defaultAnswer: 3,
         minimumAnswer: 3,
         maximumAnswer: 4,
         comments: 'test comments'
      }
   ],
   scalingModels: [
      {
         taskName: "test task",
         questionEfforts: [
            {
               question: "test question",
               effort: 50
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: 'primary text',
         secondaryScopeText: '',
         description: 'description1',
         moduleName: 'module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ]
});