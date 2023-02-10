import {IntegrateService} from "../../../pages/model/service/integrate-service.model";

export const integrateService = new IntegrateService({
   properties: {
      serviceName: 'Integrate test service',
      serviceDescription: 'Integrate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Integrate',
      serviceDeliveryPreferenceName: 'Onsite Only',
      relatedServicesClass: 'Deploy',
      relatedService: 'Deploy VCF - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete'
   },
   modules: [
      {
         moduleName: 'Integrate module name',
         moduleDescription: 'Integrate module description'
      }
   ],
   roleMappings: [
      {
         roleType: 'DM',
         roleName: 'VSD Delivery Manager'
      }
   ],
   technologyAttachments: [
      {
         thirdPartyProductName: 'Integrate product name',
         softwareVendor: 'Software Vendor',
         softwareProduct: 'Software Product',
         softwareProductVersion: 1,
         hardwareVendor: 'Hardware Vendor',
         hardwareProduct: 'Hardware Product',
         hardwareSoftwareVersion: 2
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'Integrate module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Requirements Workbook',
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         moduleName: 'Integrate module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'Integrate module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ],
});


export const integrateNewService = new IntegrateService({
   properties: {
      serviceName: '',
      serviceDescription: 'Integrate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Integrate',
      relatedServicesClass: 'Deploy',
      relatedService: 'Deploy First - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only'
   },
   modules: [
      {
         moduleName: 'Integrate module name',
         moduleDescription: 'Integrate module description'
      }
   ],
   roleMappings: [
      {
         roleType: 'DM',
         roleName: 'VSD Delivery Manager'
      }
   ],
   technologyAttachments: [
      {
         thirdPartyProductName: 'Integrate product name',
         softwareVendor: 'Software Vendor',
         softwareProduct: 'Software Product',
         softwareProductVersion: 1,
         hardwareVendor: 'Hardware Vendor',
         hardwareProduct: 'Hardware Product',
         hardwareSoftwareVersion: 2
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'Integrate module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Requirements Workbook',
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         moduleName: 'Integrate module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'Integrate module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ],
});


export const integrateClonedNewService = new IntegrateService({
   properties: {
      serviceName: '',
      serviceDescription: 'Integrate service description',
      serviceVersion: 2,
      systemVersion: '1.00',
      serviceClassName: 'Extend',
      serviceTypeName: 'Integrate',
      relatedServicesClass: 'Deploy',
      relatedService: 'First Deploy Service - TEST',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only',
   },
   modules: [
      {
         moduleName: 'Integrate module name',
         moduleDescription: 'Integrate module description'
      }
   ],
   roleMappings: [
      {
         roleType: 'DM',
         roleName: 'VSD Delivery Manager'
      }
   ],
   technologyAttachments: [
      {
         thirdPartyProductName: 'Integrate product name',
         softwareVendor: 'Software Vendor',
         softwareProduct: 'Software Product',
         softwareProductVersion: 1,
         hardwareVendor: 'Hardware Vendor',
         hardwareProduct: 'Hardware Product',
         hardwareSoftwareVersion: 2
      }
   ],
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'test task',
         moduleName: 'Integrate module name',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Requirements Workbook',
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         efforts: [
            {
               roleName: "DM",
               totalHours: 1,
               remoteHours: 1
            },
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
         moduleName: 'Integrate module name',
         scalingQuestionName: 'test question'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'scope text1',
         moduleName: 'Integrate module name',
         inScopeTextAssociation: 'in scope text1'
      }
   ],
});