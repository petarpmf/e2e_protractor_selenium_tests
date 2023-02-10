export class OpportunityWorkflow {
   static readonly SOLUTION_SETS = "Select Solution Sets";
   static readonly SOLUTION_ELEMENTS = "Select Solution Elements";
   static readonly PRODUCTS = "Configure Products";
   static readonly OPPORTUNITY_DETAILS = "Enter Details";
   static readonly DETAILS_OPPORTUNITY_DETAILS = "Opportunity details";
   static readonly SELECTED_SOLUTION_CONFIGURATION_ITEMS = "Selected Solution Configuration items";
   static readonly MERGED_SERVICES = "Merged Services";
   static readonly MODULES_CONFIGURATION = "Configure Modules";
   static readonly CUSTOM_TASK = "Configure Custom Task";
   static readonly CUSTOMIZE_WBS = "Configure WBS";
   static readonly SCALING_QUESTIONNAIRE = "Configure Scaling Questionnaire";
   static readonly AUTOSCALE_TIMELINE = "Configure Autoscale Timeline";
   static readonly SUMMARIES = "View Summaries";
   static readonly OPPORTUNITY_SUMMARY = "Opportunity Summary";
   static readonly OVERALL_EFFORT_SUMMARY = "Overall Effort Summary";
   static readonly MODULES_EFFORT_SUMMARY = "Modules Effort Summary";
   static readonly PRICING_SUMMARY = "Pricing Summary";
   static readonly MILESTONES_SUMMARY = "Milestones Summary";
}

interface IOpportunityWorkflowSteps {
   /*
    * Service Workflow Tabs.
    */
   tabs: any;
   /*
    * Service Workflow Steps.
    */
   steps: any;

   summarytabsNames: any;

   detailstabsNames: any;
}

export let opportunityWorkflowSteps: IOpportunityWorkflowSteps = {
   tabs: {
      SOLUTION_SETS: OpportunityWorkflow.SOLUTION_SETS,
      SOLUTION_ELEMENTS: OpportunityWorkflow.SOLUTION_ELEMENTS,
      PRODUCTS: OpportunityWorkflow.PRODUCTS,
      OPPORTUNITY_DETAILS: OpportunityWorkflow.OPPORTUNITY_DETAILS,
      DELIVERY_REGION: OpportunityWorkflow.SELECTED_SOLUTION_CONFIGURATION_ITEMS,
      MODULES_CONFIGURATION: OpportunityWorkflow.MODULES_CONFIGURATION,
      CUSTOM_TASK: OpportunityWorkflow.CUSTOM_TASK,
      CUSTOMIZE_WBS: OpportunityWorkflow.CUSTOMIZE_WBS,
      SCALING_QUESTIONNAIRE: OpportunityWorkflow.SCALING_QUESTIONNAIRE,
      AUTOSCALE_TIMELINE: OpportunityWorkflow.AUTOSCALE_TIMELINE,
      OPPORTUNITY_SUMMARY: OpportunityWorkflow.OPPORTUNITY_SUMMARY,
      OVERALL_EFFORT_SUMMARY: OpportunityWorkflow.OVERALL_EFFORT_SUMMARY,
      MODULES_EFFORT_SUMMARY: OpportunityWorkflow.MODULES_EFFORT_SUMMARY,
      PRICING_SUMMARY: OpportunityWorkflow.PRICING_SUMMARY,
      MILESTONES_SUMMARY: OpportunityWorkflow.MILESTONES_SUMMARY,
   },

   steps: {
      SOLUTION_SETS: {
         name: OpportunityWorkflow.SOLUTION_SETS
      },
      SOLUTION_ELEMENTS: {
         name: OpportunityWorkflow.SOLUTION_ELEMENTS
      },
      PRODUCTS: {
         name: OpportunityWorkflow.PRODUCTS
      },
      OPPORTUNITY_DETAILS: {
         name: OpportunityWorkflow.OPPORTUNITY_DETAILS,
         tabs: [
            OpportunityWorkflow.DETAILS_OPPORTUNITY_DETAILS,
            OpportunityWorkflow.SELECTED_SOLUTION_CONFIGURATION_ITEMS,
            OpportunityWorkflow.MERGED_SERVICES
         ]
      },
      MODULES_CONFIGURATION: {
         name: OpportunityWorkflow.MODULES_CONFIGURATION
      },
      CUSTOM_TASK: {
         name: OpportunityWorkflow.CUSTOM_TASK
      },
      CUSTOMIZE_WBS: {
         name: OpportunityWorkflow.CUSTOMIZE_WBS
      },
      SCALING_QUESTIONNAIRE: {
         name: OpportunityWorkflow.SCALING_QUESTIONNAIRE
      },
      AUTOSCALE_TIMELINE: {
         name: OpportunityWorkflow.AUTOSCALE_TIMELINE
      },
      SUMMARIES: {
         name: OpportunityWorkflow.SUMMARIES,
         tabs: [
            OpportunityWorkflow.OPPORTUNITY_SUMMARY,
            OpportunityWorkflow.OVERALL_EFFORT_SUMMARY,
            OpportunityWorkflow.MODULES_EFFORT_SUMMARY,
            OpportunityWorkflow.PRICING_SUMMARY,
            OpportunityWorkflow.MILESTONES_SUMMARY
         ]
      },
   },

   summarytabsNames: {
      OPPORTUNITY_SUMMARY: {
         name: OpportunityWorkflow.OPPORTUNITY_SUMMARY
      },
      OVERALL_EFFORT_SUMMARY: {
         name: OpportunityWorkflow.OVERALL_EFFORT_SUMMARY
      },
      MODULES_EFFORT_SUMMARY: {
         name: OpportunityWorkflow.MODULES_EFFORT_SUMMARY
      },
      PRICING_SUMMARY: {
         name: OpportunityWorkflow.PRICING_SUMMARY
      },
      MILESTONES_SUMMARY: {
         name: OpportunityWorkflow.MILESTONES_SUMMARY
      },
   },

   detailstabsNames: {
      OPPORTUNITY_DETAILS: {
         name: OpportunityWorkflow.DETAILS_OPPORTUNITY_DETAILS
      },
      SELECTED_SOLUTION_CONFIGURATION_ITEMS: {
         name: OpportunityWorkflow.SELECTED_SOLUTION_CONFIGURATION_ITEMS
      },
      MERGED_SERVICES: {
         name: OpportunityWorkflow.MERGED_SERVICES
      },
   },
}