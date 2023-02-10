import {OrdinaryService} from "../../../pages/model/service/ordinary-service.model"

export const onsiteOnlyDefaultTasks =
   [
      {
         phaseName: 'Initiate',
         taskName: 'Pre-engagement Call',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
      {
         phaseName: 'Initiate',
         taskName: 'Create Kickoff Presentation',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
      {
         phaseName: 'Initiate',
         taskName: 'Develop Project Plan',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
      {
         phaseName: 'Plan',
         taskName: 'Kickoff Meeting',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
      {
         phaseName: 'Plan',
         taskName: 'Generic Solution Overview Presentation',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
      {
         phaseName: 'Close',
         taskName: 'Conclusion Presentation',
         moduleName: 'Base Service',
         taskDeliveryType: 'Onsite Only'
      },
   ]

/*
 * Onsite only Service data.
 */
export const onsiteOnlyService = new OrdinaryService({
   properties: {
      serviceName: 'ONSITE ONLY Design NSX for Network Virtualization - TEST',
      serviceDescription: 'Design NSX for Network Virtualization - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.00',
      servicePortfolioName: 'SDDC',
      serviceClassName: 'Design',
      serviceTypeName: 'Design',
      serviceDeliveryPreferenceName: 'Onsite Only',
      serviceSolutionSlackName: 'Virtualization Platform',
      serviceMaturityName: 'New',
      serviceSsadParagraph: 'SSaD Service Overview Text'
   },
   modules: [
      {
         moduleName: 'Design NSX for Network Virtualization - Test',
         moduleDescription: 'Test description'
      }
   ],
   roleMappings: [
      {
         roleType: 'TOA',
         roleName: 'Technical Operations Architect'
      },
      {
         roleType: 'OA',
         roleName: 'Operational Architect'
      },
      {
         roleType: 'ARC',
         roleName: 'Consulting Architect'
      },
      {
         roleType: 'CON',
         roleName: 'Consultant'
      },
      {
         roleType: 'EAC',
         roleName: 'Enterprise Architect'
      }
   ],
   technologyAttachments: {
      primaryProductName: 'NSX',
      primaryProductVersion: '6.2.1',
      secondaryProducts: [
         'Hyperic'
      ]
   },
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'Task name - Test',
         moduleName: 'Design NSX for Network Virtualization - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "TOA",
               totalHours: 10,
               remoteHours: 6
            },
            {
               roleName: "OA",
               totalHours: 9,
               remoteHours: 5
            },
            {
               roleName: "ARC",
               totalHours: 8,
               remoteHours: 3
            },
            {
               roleName: "CON",
               totalHours: 7,
               remoteHours: 4
            },
            {
               roleName: "EAC",
               totalHours: 6,
               remoteHours: 2
            }
         ]
      }
   ],
   productEffortContributions: [
      {
         taskName: 'Task name - Test',
         productEfforts: [
            {
               productName: 'NSX', // This product is expected to match with the products added in technology attachments view
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
         question: 'How many NSX Edge cluster(s) to be designed? - Test',
         defaultAnswer: 1,
         minimumAnswer: 2,
         maximumAnswer: 4,
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
               effort: 50
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
         moduleName: 'Design NSX for Network Virtualization - Test',
         scalingQuestionName: 'How many NSX Edge cluster(s) to be designed? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Design NSX for Network Virtualization - Test',
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

/*
 * Onsite preferred Service data.
 */
export const onsitePreferredService = new OrdinaryService({
   properties: {
      serviceName: 'ONSITE PREFERRED Design NSX for Network Virtualization - TEST',
      serviceDescription: 'Design NSX for Network Virtualization - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.00',
      servicePortfolioName: 'SDDC',
      serviceClassName: 'Design',
      serviceTypeName: 'Design',
      serviceDeliveryPreferenceName: 'Onsite Preferred',
      serviceSolutionSlackName: 'Virtualization Platform',
      serviceMaturityName: 'New',
      serviceSsadParagraph: 'SSaD Service Overview Text'
   },
   modules: [
      {
         moduleName: 'added module',
         moduleDescription: 'added module description'
      },
   ],
   roleMappings: [
      {
         roleType: 'SC',
         roleName: 'Remote Senior Consultant'
      },
      {
         roleType: 'TOA',
         roleName: 'Technical Operations Architect'
      },
      {
         roleType: 'OA',
         roleName: 'Operational Architect'
      },
      {
         roleType: 'ARC',
         roleName: 'Consulting Architect'
      },
      {
         roleType: 'CON',
         roleName: 'Consultant'
      },
      {
         roleType: 'EAC',
         roleName: 'Enterprise Architect'
      },
   ],
   technologyAttachments: {
      primaryProductName: 'NSX',
      primaryProductVersion: '6.2.1',
      secondaryProducts: [
         'Hyperic'
      ]
   },
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'Task name - Test',
         moduleName: 'Design NSX for Network Virtualization - Test',
         activityTypeName: 'AnalysisWork',
         ableToDeliverOption: 'No',
         taskDeliveryType: 'Onsite Only',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "TOA",
               totalHours: 10,
               remoteHours: 6
            },
            {
               roleName: "OA",
               totalHours: 9,
               remoteHours: 5
            },
            {
               roleName: "ARC",
               totalHours: 8,
               remoteHours: 3
            },
            {
               roleName: "CON",
               totalHours: 7,
               remoteHours: 4
            },
            {
               roleName: "EAC",
               totalHours: 6,
               remoteHours: 2
            }
         ]
      },
      {
         phaseName: 'Execute: Design',
         taskName: 'OR REMOTE Task',
         moduleName: 'Base Service',
         activityTypeName: 'DocumentationDevelopment',
         ableToDeliverOption: 'Yes',
         taskDeliveryType: 'OR Remote',
         assignedDeliverableName: 'Conceptual Design Document',
         efforts: [
            {
               roleName: "SC",
               totalHours: 2,
               remoteHours: 0
            },
            {
               roleName: "RSC",
               totalHours: 3,
               remoteHours: 0
            },
         ]
      }
   ],
   productEffortContributions: [
      {
         taskName: 'Task name - Test',
         productEfforts: [
            {
               productName: 'NSX', // This product is expected to match with the products added in technology attachments view
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
         question: 'How many NSX Edge cluster(s) to be designed? - Test',
         defaultAnswer: 1,
         minimumAnswer: 2,
         maximumAnswer: 4,
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
               effort: 50
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
         moduleName: 'Design NSX for Network Virtualization - Test',
         scalingQuestionName: 'How many NSX Edge cluster(s) to be designed? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Design NSX for Network Virtualization - Test',
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
         prerequisitesStatementValue: 'Minimum number of hosts required of',
         definedMinimumValue: 1
      }
   ],
   serviceStakeholderPrerequisites: [
      {
         prerequisitesStatementValue: 'Availability Manager'
      }
   ],
   serviceFreeFormPrerequisites: [
      {
         prerequisitesStatementValue: 'Prerequisites Statement - Test'
      }
   ]
});





