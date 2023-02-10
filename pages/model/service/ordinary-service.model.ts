import {
   ServiceRoleMapping,
   IServiceRoleMapping,
   PrimarySecondaryProducts,
   IPrimarySecondaryProducts,
   ServiceProductEffortContribution,
   IServiceProductEffortContribution,
   ServiceAutoscaleTimeline,
   IServiceAutoscaleTimeline,
   ServiceTechnologyPrerequisite,
   IServiceTechnologyPrerequisite,
   ServiceStakeholderPrerequisite,
   IServiceStakeholderPrerequisite,
   ServiceFreeFormPrerequisite,
   IServiceFreeFormPrerequisite,
   Service,
   IService
} from './service-model.barrel';

export interface IOrdinaryService extends IService {
   /*
    * Data for Role Mappings.
    */
   roleMappings ?: Array<IServiceRoleMapping>;
   /*
    * Data for Technology Attachments.
    */
   technologyAttachments ?: IPrimarySecondaryProducts;
   /*
    * Data for Product Effort Contributions.
    */
   productEffortContributions ?: Array<IServiceProductEffortContribution>;
   /*
    * Data for Autoscale Timeline.
    */
   autoscaleTimeline ?: Array<IServiceAutoscaleTimeline>;
   /*
    * Data for Service Technology Prerequisites.
    */
   serviceTechnologyPrerequisites ?: Array<IServiceTechnologyPrerequisite>;
   /*
    * Data for Service Stakeholder Prerequisites.
    */
   serviceStakeholderPrerequisites ?: Array<IServiceStakeholderPrerequisite>;
   /*
    * Data for Service Free Form Prerequisites.
    */
   serviceFreeFormPrerequisites ?: Array<IServiceFreeFormPrerequisite>;
   attachedSolutionElement?: any;
}

export class OrdinaryService extends Service implements IOrdinaryService {
   roleMappings ?: Array<IServiceRoleMapping>;
   technologyAttachments ?: IPrimarySecondaryProducts;
   productEffortContributions ?: Array<IServiceProductEffortContribution>;
   autoscaleTimeline ?: Array<IServiceAutoscaleTimeline>;
   serviceTechnologyPrerequisites ?: Array<IServiceTechnologyPrerequisite>;
   serviceStakeholderPrerequisites ?: Array<IServiceStakeholderPrerequisite>;
   serviceFreeFormPrerequisites ?: Array<IServiceFreeFormPrerequisite>;
   attachedSolutionElement?: any;
   serviceDeliveryPreferenceName?: string;

   constructor(service ?: IOrdinaryService) {
      super(service);
      this.setServiceRoleMappings(service.roleMappings);
      this.setServiceTechnologyAttachments(new PrimarySecondaryProducts(service.technologyAttachments));
      this.setServiceProductEffortContributions(service.productEffortContributions);
      this.setServiceAutoscaleTimelines(service.autoscaleTimeline);
      this.setServiceTechnologyPrerequisites(service.serviceTechnologyPrerequisites);
      this.setServiceStakeholderPrerequisites(service.serviceStakeholderPrerequisites);
      this.setServiceFreeFormPrerequisites(service.serviceFreeFormPrerequisites);
      this.setAttachedSolutionElement(service.attachedSolutionElement);
   };

   getServiceRoleMappings(): Array<IServiceRoleMapping> {
      return this.roleMappings;
   };

   setServiceRoleMappings(roleMappings: Array<IServiceRoleMapping>) {
      this.roleMappings = [];
      for (let roleMapping in roleMappings) {
         this.roleMappings.push(new ServiceRoleMapping(roleMappings[roleMapping]));
      }
   };

   getServiceTechnologyAttachments(): IPrimarySecondaryProducts {
      return this.technologyAttachments;
   };

   setServiceTechnologyAttachments(value: IPrimarySecondaryProducts) {
      this.technologyAttachments = value;
   };

   getServiceProductEffortContributions(): Array<IServiceProductEffortContribution> {
      return this.productEffortContributions;
   };

   setServiceProductEffortContributions(productEffortContributions: Array<IServiceProductEffortContribution>) {
      this.productEffortContributions = [];
      for (let productEffortContribution in productEffortContributions) {
         this.productEffortContributions.push(new ServiceProductEffortContribution(productEffortContributions[productEffortContribution]));
      }
   };

   getServiceAutoscaleTimelines(): Array<IServiceAutoscaleTimeline> {
      return this.autoscaleTimeline;
   };

   setServiceAutoscaleTimelines(autoscaleTimelines: Array<IServiceAutoscaleTimeline>) {
      this.autoscaleTimeline = [];
      for (let autoscaleTimeline in autoscaleTimelines) {
         this.autoscaleTimeline.push(new ServiceAutoscaleTimeline(autoscaleTimelines[autoscaleTimeline]));
      }
   };

   getServiceTechnologyPrerequisites(): Array<IServiceTechnologyPrerequisite> {
      return this.serviceTechnologyPrerequisites;
   };

   setServiceTechnologyPrerequisites(technologyPrerequisites: Array<IServiceTechnologyPrerequisite>) {
      this.serviceTechnologyPrerequisites = [];
      for (let technologyPrerequisite in technologyPrerequisites) {
         this.serviceTechnologyPrerequisites.push(new ServiceTechnologyPrerequisite(technologyPrerequisites[technologyPrerequisite]));
      }
   };

   getServiceStakeholderPrerequisites(): Array<IServiceStakeholderPrerequisite> {
      return this.serviceStakeholderPrerequisites;
   };

   setServiceStakeholderPrerequisites(stakeholderPrerequisites: Array<IServiceStakeholderPrerequisite>) {
      this.serviceStakeholderPrerequisites = [];
      for (let stakeholderPrerequisite in stakeholderPrerequisites) {
         this.serviceStakeholderPrerequisites.push(new ServiceStakeholderPrerequisite(stakeholderPrerequisites[stakeholderPrerequisite]));
      }
   };

   getServiceFreeFormPrerequisites(): Array<IServiceFreeFormPrerequisite> {
      return this.serviceFreeFormPrerequisites;
   };

   setServiceFreeFormPrerequisites(freeFormPrerequisites: Array<IServiceFreeFormPrerequisite>) {
      this.serviceFreeFormPrerequisites = [];
      for (let freeFormPrerequisite in freeFormPrerequisites) {
         this.serviceFreeFormPrerequisites.push(new ServiceFreeFormPrerequisite(freeFormPrerequisites[freeFormPrerequisite]));
      }
   };

   getAttachedSolutionElement(): any {
      return this.attachedSolutionElement;
   };

   setAttachedSolutionElement(value: any) {
      this.attachedSolutionElement = value;
   };
}