import {OrdinaryService} from "../../../pages/model/service/ordinary-service.model"

export const ordinaryVsphereDeployService = new OrdinaryService({
   properties: {
      serviceName: 'Deploy Vsphere for Network Virtualization - TEST',
      serviceDescription: 'Deploy Vsphere for Network Virtualization - TEST',
      serviceVersion: 1.0,
      systemVersion: '1.00',
      servicePortfolioName: 'SDDC',
      serviceClassName: 'Deploy',
      serviceTypeName: 'Deploy',
      serviceSolutionSlackName: 'Virtualization Platform',
      serviceMaturityName: 'Exploration',
      contentMaturityName: 'Incomplete',
      serviceDeliveryPreferenceName: 'Onsite Only',
      serviceSsadParagraph: 'SSaD Service Overview Text'
   },
   modules: [
      {
         moduleName: 'Deploy Vsphere for Network Virtualization - Test',
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
      primaryProductName: 'vSphere',
      primaryProductVersion: '4.0',
      secondaryProducts: [
         'Hyperic'
      ]
   },
   taskAndEfforts: [
      {
         phaseName: 'Initiate',
         taskName: 'Task name - Test',
         moduleName: 'Deploy Vsphere for Network Virtualization - Test',
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
               productName: 'vSphere', // This product is expected to match with the products added in technology attachments view
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
         moduleName: 'Deploy Vsphere for Network Virtualization - Test',
         scalingQuestionName: 'How many NSX Edge cluster(s) to be designed? - Test'
      }
   ],
   outOfScopeAssociations: [
      {
         scopeText: 'Scope text',
         moduleName: 'Deploy Vsphere for Network Virtualization - Test',
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