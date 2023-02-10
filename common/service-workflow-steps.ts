export class ServiceWorkflowTab {
   static readonly PROPERTIES = "Properties";
   static readonly MODULES = "Modules";
   static readonly ROLE_MAPPING = "Role Mapping"
   static readonly TECHNOLOGY_ATTACHMENTS = "Technology Attachments";
   static readonly TASK_AND_EFFORTS = "Tasks and efforts";
   static readonly PRODUCT_EFFORT_CONTRIBUTION = "Product Effort Contribution";
   static readonly QUESTIONS = "Questions";
   static readonly SCALING_MODEL = "Scaling Model";
   static readonly SCOPE_DEFINITION = "Scope Definition";
   static readonly IN_SCOPE_ASSOCIATIONS = "In Scope Associations";
   static readonly OUT_OF_SCOPE_ASSOCIATIONS = "Out of Scope Associations";
   static readonly AUTOSCALE_TIMELINE = "Autoscale Timeline";
   static readonly SERVICE_PREREQUISITES = "Service Prerequisites";
   static readonly TECHNOLOGY = "Technology";
   static readonly STAKEHOLDER = "Stakeholder";
   static readonly FREE_FORM = "Free Form";
   static readonly NET_NEW_TASKS = "Net New Tasks";
   static readonly MODIFYING_TASKS = "Modifying Tasks"
}

export class ServicePropertyValues {
   static readonly SERVICE_CLASS = "Extend";
   static readonly SERVICE_TYPE_INTEROPERATE = "Interoperate";
   static readonly SERVICE_TYPE_INTEGRATE = "Integrate";
   static readonly SERVICE_TYPE_CONSUME = "Consume";
   static readonly SERVICE_RELATED_CLASS_DESIGN = "Design";
   static readonly SERVICE_RELATED_CLASS_DEPLOY = "Deploy";
}

export class ServicePropertyFields {
   static readonly PORTFOLIO = "Portfolio";
   static readonly SSAD_SERVICE_OVERVIEW = "SSaD Service Overview";
   static readonly MATURITY = "Maturity";
}

interface IServiceWorkflowSteps {
   /*
    * Service Workflow Tabs.
    */
   tabs: any;
   /*
    * Service Workflow Steps.
    */
   steps: any;
   /*
    * Service Property Values.
    */
   propertyValues: any;
   /*
    * Service Property Fields.
    */
   propertyFields: any;
}

export let serviceWorkflowSteps: IServiceWorkflowSteps = {
   tabs: {
      PROPERTIES: ServiceWorkflowTab.PROPERTIES,
      MODULES: ServiceWorkflowTab.MODULES,
      ROLE_MAPPING: ServiceWorkflowTab.ROLE_MAPPING,
      TECHNOLOGY_ATTACHMENTS: ServiceWorkflowTab.TECHNOLOGY_ATTACHMENTS,
      TASK_AND_EFFORTS: ServiceWorkflowTab.TASK_AND_EFFORTS,
      PRODUCT_EFFORT_CONTRIBUTION: ServiceWorkflowTab.PRODUCT_EFFORT_CONTRIBUTION,
      QUESTIONS: ServiceWorkflowTab.QUESTIONS,
      SCALING_MODEL: ServiceWorkflowTab.SCALING_MODEL,
      IN_SCOPE_ASSOCIATIONS: ServiceWorkflowTab.IN_SCOPE_ASSOCIATIONS,
      OUT_OF_SCOPE_ASSOCIATIONS: ServiceWorkflowTab.OUT_OF_SCOPE_ASSOCIATIONS,
      AUTOSCALE_TIMELINE: ServiceWorkflowTab.AUTOSCALE_TIMELINE,
      TECHNOLOGY: ServiceWorkflowTab.TECHNOLOGY,
      STAKEHOLDER: ServiceWorkflowTab.STAKEHOLDER,
      FREE_FORM: ServiceWorkflowTab.FREE_FORM,
      NET_NEW_TASKS: ServiceWorkflowTab.NET_NEW_TASKS,
      MODIFYING_TASKS: ServiceWorkflowTab.MODIFYING_TASKS
   },
   steps: {
      SERVICE_PROPERTIES: {
         name: ServiceWorkflowTab.PROPERTIES,
         tabs: [
            ServiceWorkflowTab.PROPERTIES,
            ServiceWorkflowTab.MODULES,
            ServiceWorkflowTab.ROLE_MAPPING,
            ServiceWorkflowTab.TECHNOLOGY_ATTACHMENTS
         ]
      },
      SERVICE_TASKS_AND_EFFORTS: {
         name: ServiceWorkflowTab.TASK_AND_EFFORTS,
         tabs: [
            ServiceWorkflowTab.TASK_AND_EFFORTS
         ]
      },
      SERVICE_PRODUCT_EFFORT_CONTRIBUTION: {
         name: ServiceWorkflowTab.PRODUCT_EFFORT_CONTRIBUTION,
         tabs: [
            ServiceWorkflowTab.PRODUCT_EFFORT_CONTRIBUTION
         ]
      },
      SERVICE_SCALING_MODEL: {
         name: ServiceWorkflowTab.SCALING_MODEL,
         tabs: [
            ServiceWorkflowTab.QUESTIONS,
            ServiceWorkflowTab.SCALING_MODEL
         ]
      },
      SERVICE_SCOPE_DEFINITION: {
         name: ServiceWorkflowTab.SCOPE_DEFINITION,
         tabs: [
            ServiceWorkflowTab.IN_SCOPE_ASSOCIATIONS,
            ServiceWorkflowTab.OUT_OF_SCOPE_ASSOCIATIONS
         ]
      },
      SERVICE_AUTOSCALE_TIMELINE: {
         name: ServiceWorkflowTab.AUTOSCALE_TIMELINE,
         tabs: [
            ServiceWorkflowTab.AUTOSCALE_TIMELINE
         ]
      },
      SERVICE_PREREQUISITES: {
         name: ServiceWorkflowTab.SERVICE_PREREQUISITES,
         tabs: [
            ServiceWorkflowTab.TECHNOLOGY,
            ServiceWorkflowTab.STAKEHOLDER,
            ServiceWorkflowTab.FREE_FORM
         ]
      }
   },

   propertyValues: {
      SERVICE_CLASS: ServicePropertyValues.SERVICE_CLASS,
      SERVICE_TYPE_INTEROPERATE: ServicePropertyValues.SERVICE_TYPE_INTEROPERATE,
      SERVICE_TYPE_INTEGRATE: ServicePropertyValues.SERVICE_TYPE_INTEGRATE,
      SERVICE_TYPE_CONSUME: ServicePropertyValues.SERVICE_TYPE_CONSUME,
      SERVICE_RELATED_CLASS_DESIGN: ServicePropertyValues.SERVICE_RELATED_CLASS_DESIGN,
      SERVICE_RELATED_CLASS_DEPLOY: ServicePropertyValues.SERVICE_RELATED_CLASS_DEPLOY,
   },

   propertyFields: {
      PORTFOLIO: ServicePropertyFields.PORTFOLIO,
      SSAD_SERVICE_OVERVIEW: ServicePropertyFields.SSAD_SERVICE_OVERVIEW,
      MATURITY: ServicePropertyFields.MATURITY,
   }
}