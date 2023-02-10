import {OrdinaryService} from "../../../pages/model/service/ordinary-service.model"

export const ordinaryVcfPublishedService = new OrdinaryService({
   properties: {
      serviceName: 'Deploy VCF - TEST',
      serviceDescription: 'Deploy VCF - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.00',
      servicePortfolioName: 'SDDC',
      serviceClassName: 'Deploy',
      serviceTypeName: 'Deploy',
      serviceSolutionSlackName: 'Virtualization Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only',
      serviceSsadParagraph: 'SSaD Service Overview Text'
   },
   modules: [
      {
         moduleName: 'Deploy VCF - Test',
         moduleDescription: 'Test description'
      }
   ],
   roleMappings: [
      {
         roleType: 'OA',
         roleName: 'Operational Architect'
      },
      {
         roleType: 'CON',
         roleName: 'Consultant'
      },
      {
         roleType: 'SC',
         roleName: 'Senior Consultant'
      },
      {
         roleType: 'TOA',
         roleName: 'Technical Operations Architect'
      },
      {
         roleType: 'ARC',
         roleName: 'Consulting Architect'
      },
      {
         roleType: 'EAC',
         roleName: 'Enterprise Architect'
      }
   ],
   technologyAttachments: {
      primaryProductName: 'VCF',
      primaryProductVersion: '2.1',
      secondaryProducts: []
   },
   taskAndEfforts: [
      {
         phaseName: 'Execute: Deploy',
         taskName: 'Task name - Test',
         moduleName: 'Deploy VCF - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "SC",
               totalHours: 1,
               remoteHours: 1
            },
            {
               roleName: "EAC",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "ARC",
               totalHours: 3,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 4,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 5,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 6,
               remoteHours: 1
            }
         ]
      }
   ],
   productEffortContributions: [
      {
         taskName: 'Task name - Test',
         productEfforts: [
            {
               productName: 'VCF', // This product is expected to match with the products added in technology attachments view
               effort: 100
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'How many vRealize Automation deployments will be performed? - Test',
         defaultAnswer: 1,
         minimumAnswer: 0,
         maximumAnswer: 0,
         comments: ''
      }
   ],
   scalingModels: [
      {
         taskName: "Task name - Test",
         questionEfforts: [
            {
               question: "Q0",
               effort: 1
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: 'vRealize Automation Deployments',
         secondaryScopeText: '',
         description: 'Description - Test',
         moduleName: 'Deploy VCF - Test',
         scalingQuestionName: 'How many vRealize Automation deployments will be performed? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Deploy VCF - Test',
         inScopeTextAssociation: 'In scope text association - Test'
      }
   ],
   autoscaleTimeline: [
      {
         phaseName: 'Execute: Deploy',
         startWeekOverrideValue: 5
      }
   ],
   serviceTechnologyPrerequisites: [
      {
         prerequisitesStatementValue: 'Number of Windows VMs required',
         definedMinimumValue: 1
      },
      {
         prerequisitesStatementValue: 'Required Licensing Level',
         definedMinimumValue: 1
      }
   ],
   serviceStakeholderPrerequisites: [
      {
         prerequisitesStatementValue: 'Cloud Service Architect'
      },
      {
         prerequisitesStatementValue: 'Operations team leads'
      },
      {
         prerequisitesStatementValue: 'Cloud Architect'
      },
      {
         prerequisitesStatementValue: 'Cloud Engineering Manager'
      },
      {
         prerequisitesStatementValue: 'Enterprise Architect'
      },
      {
         prerequisitesStatementValue: 'Cloud Service Manager'
      }
   ],
   serviceFreeFormPrerequisites: [
      {
         prerequisitesStatementValue: ''
      }
   ]
});
export const ordinaryAdoptWorkspacefPublishedService = new OrdinaryService({
   properties: {
      serviceName: 'Adopt Workspace One - TEST',
      serviceDescription: 'Adopt Workspace One - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.01',
      servicePortfolioName: 'EUC',
      serviceClassName: 'Deploy',
      serviceTypeName: 'Deploy',
      serviceSolutionSlackName: 'Virtualization Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only',
      serviceSsadParagraph: 'EUC Service Overview Text'
   },
   modules: [
      {
         moduleName: 'Adopt Workspace One - Test',
         moduleDescription: 'Test description'
      }
   ],
   roleMappings: [
      {
         roleType: 'OA',
         roleName: 'Operational Architect'
      },
      {
         roleType: 'CON',
         roleName: 'Consultant'
      },
      {
         roleType: 'SC',
         roleName: 'Senior Consultant'
      },
      {
         roleType: 'TOA',
         roleName: 'Technical Operations Architect'
      },
      {
         roleType: 'ARC',
         roleName: 'Consulting Architect'
      },
      {
         roleType: 'EAC',
         roleName: 'Enterprise Architect'
      }
   ],
   technologyAttachments: {
      primaryProductName: 'VCF',
      primaryProductVersion: '2.1',
      secondaryProducts: []
   },
   taskAndEfforts: [
      {
         phaseName: 'Execute: Deploy',
         taskName: 'Task name - Test',
         moduleName: 'Adopt Workspace One - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "SC",
               totalHours: 1,
               remoteHours: 1
            },
            {
               roleName: "EAC",
               totalHours: 2,
               remoteHours: 1
            },
            {
               roleName: "ARC",
               totalHours: 3,
               remoteHours: 1
            },
            {
               roleName: "CON",
               totalHours: 4,
               remoteHours: 1
            },
            {
               roleName: "OA",
               totalHours: 5,
               remoteHours: 1
            },
            {
               roleName: "TOA",
               totalHours: 6,
               remoteHours: 1
            }
         ]
      }
   ],
   productEffortContributions: [
      {
         taskName: 'Task name - Test',
         productEfforts: [
            {
               productName: 'VCF', // This product is expected to match with the products added in technology attachments view
               effort: 100
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'How many vRealize Automation deployments will be performed? - Test',
         defaultAnswer: 1,
         minimumAnswer: 0,
         maximumAnswer: 0,
         comments: ''
      }
   ],
   scalingModels: [
      {
         taskName: "Task name - Test",
         questionEfforts: [
            {
               question: "Q0",
               effort: 1
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: 'vRealize Automation Deployments',
         secondaryScopeText: '',
         description: 'Description - Test',
         moduleName: 'Adopt Workspace One - Test',
         scalingQuestionName: 'How many vRealize Automation deployments will be performed? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Deploy VCF - Test',
         inScopeTextAssociation: 'In scope text association - Test'
      }
   ],
   autoscaleTimeline: [
      {
         phaseName: 'Execute: Deploy',
         startWeekOverrideValue: 5
      }
   ],
   serviceTechnologyPrerequisites: [
      {
         prerequisitesStatementValue: 'Number of Windows VMs required',
         definedMinimumValue: 1
      },
      {
         prerequisitesStatementValue: 'Required Licensing Level',
         definedMinimumValue: 1
      }
   ],
   serviceStakeholderPrerequisites: [
      {
         prerequisitesStatementValue: 'Cloud Service Architect'
      },
      {
         prerequisitesStatementValue: 'Operations team leads'
      },
      {
         prerequisitesStatementValue: 'Cloud Architect'
      },
      {
         prerequisitesStatementValue: 'Cloud Engineering Manager'
      },
      {
         prerequisitesStatementValue: 'Enterprise Architect'
      },
      {
         prerequisitesStatementValue: 'Cloud Service Manager'
      }
   ],
   serviceFreeFormPrerequisites: [
      {
         prerequisitesStatementValue: ''
      }
   ]
});

/*
 * Ordinary Hyperic Published Service.
 */

export const ordinaryHypericPublishedService = new OrdinaryService({
   properties: {
      serviceName: 'Deploy Hyperic - TEST',
      serviceDescription: 'Deploy Hyperic - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.00',
      servicePortfolioName: 'SDDC',
      serviceClassName: 'Deploy',
      serviceTypeName: 'Deploy',
      serviceSolutionSlackName: 'End User Computing',
      serviceMaturityName: 'Standard',
      contentMaturityName: 'Incomplete',
      serviceSsadParagraph: 'SSaD Service Overview Text',
      serviceDeliveryPreferenceName: 'Onsite Only',
   },
   modules: [
      {
         moduleName: 'Deploy Hyperic - Test',
         moduleDescription: 'Test description'
      }
   ],
   roleMappings: [
      {
         roleType: 'SC',
         roleName: 'Senior Consultant'
      }
   ],
   technologyAttachments: {
      primaryProductName: 'Hyperic',
      primaryProductVersion: '5.8.4',
      secondaryProducts: []
   },
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'Task name - Test',
         moduleName: 'Deploy Hyperic - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "SC",
               totalHours: 1,
               remoteHours: 1
            }
         ]
      },
      {
         phaseName: 'Initiate',
         taskName: 'New task name - Test',
         moduleName: 'Deploy Hyperic - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "SC",
               totalHours: 1,
               remoteHours: 1
            }
         ]
      }
   ],
   productEffortContributions: [
      {
         taskName: 'Task name - Test',
         productEfforts: [
            {
               productName: 'Hyperic', // This product is expected to match with the products added in technology attachments view
               effort: 100
            }
         ]
      }
   ],
   scalingQuestions: [
      {
         question: 'Number of logical switches? - Test',
         defaultAnswer: 4,
         minimumAnswer: 4,
         maximumAnswer: 5,
         comments: ''
      },
      {
         question: 'How many tier-1 logical router instance(s) to be designed? - Test',
         defaultAnswer: 1,
         minimumAnswer: 1,
         maximumAnswer: 8,
         comments: ''
      }
   ],
   scalingModels: [
      {
         taskName: "Task name - Test",
         questionEfforts: [
            {
               question: "Q0",
               effort: 1
            },
            {
               question: "Q1",
               effort: 1
            }
         ]
      }
   ],
   inScopeAssociations: [
      {
         scopeItemQuantityValue: 1,
         primaryScopeText: '1',
         secondaryScopeText: '',
         description: 'Description - Test',
         moduleName: 'Deploy Hyperic - Test',
         scalingQuestionName: 'Number of logical switches? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Deploy Hyperic - Test',
         inScopeTextAssociation: 'In scope text association - Test'
      }
   ],
   autoscaleTimeline: [
      {
         phaseName: 'Initiate',
         startWeekOverrideValue: 5
      }
   ],
   serviceTechnologyPrerequisites: [
      {
         prerequisitesStatementValue: 'Minimum number of VLANs required of',
         definedMinimumValue: 1
      }
   ],
   serviceStakeholderPrerequisites: [
      {
         prerequisitesStatementValue: 'Active Directory architects'
      }
   ],
   serviceFreeFormPrerequisites: [
      {
         prerequisitesStatementValue: 'Prerequisites Statement - Test'
      }
   ]
});

export let serviceCloneDataV1_01 = {
   properties: {
      serviceName: 'Deploy Hyperic - TEST',
      serviceDescription: 'clone service description',
      serviceVersion: '2',
      systemVersion: '1.01',
      servicePortfolioName: 'EUC',
      serviceClassName: 'Design',
      serviceTypeName: 'Design',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceSsadParagraph: 'test paragraph'
   }
};

export let serviceCloneDataV1_02 = {
   properties: {
      serviceName: 'Deploy Hyperic - TEST',
      serviceDescription: 'clone service description',
      serviceVersion: '2',
      systemVersion: '1.02',
      servicePortfolioName: 'EUC',
      serviceClassName: 'Design',
      serviceTypeName: 'Design',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceSsadParagraph: 'test paragraph'
   }
};

export let serviceCloneDataV1_03 = {
   properties: {
      serviceName: 'Deploy Hyperic - TEST',
      serviceDescription: 'clone service description',
      serviceVersion: '2',
      systemVersion: '1.03',
      servicePortfolioName: 'EUC',
      serviceClassName: 'Design',
      serviceTypeName: 'Design',
      serviceSolutionSlackName: 'Cloud Management Platform',
      serviceMaturityName: 'Initial Availability',
      contentMaturityName: 'Incomplete',
      serviceSsadParagraph: 'test paragraph'
   }
};