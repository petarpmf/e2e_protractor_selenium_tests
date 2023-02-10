export interface IServiceProperties {
   serviceName: string;
   serviceDescription: string;
   serviceDeliveryPreferenceName: string;
   serviceVersion?: number;
   servicePortfolioName?: string;
   serviceClassName?: string;
   serviceTypeName?: string;
   serviceSolutionSlackName?: string;
   serviceMaturityName?: string;
   contentMaturityName?: string;
   serviceSsadParagraph?: string;
   systemVersion?: string;
   relatedServicesClass?: string;
   firstRelatedService?: string;
   secondRelatedService?: string;
   relatedService?: string;
}

export class ServiceProperties implements IServiceProperties {
   serviceName: string;
   serviceDescription: string;
   serviceVersion?: number;
   servicePortfolioName?: string;
   serviceClassName?: string;
   serviceTypeName?: string;
   serviceDeliveryPreferenceName: string;
   serviceSolutionSlackName?: string;
   serviceMaturityName?: string;
   contentMaturityName?: string;
   serviceSsadParagraph?: string;
   systemVersion?: string;
   relatedServicesClass?: string;
   firstRelatedService?: string;
   secondRelatedService?: string;
   relatedService?: string;

   constructor(properties: IServiceProperties) {
      this.serviceName = properties.serviceName;
      this.serviceDescription = properties.serviceDescription;
      this.serviceVersion = properties.serviceVersion;
      this.servicePortfolioName = properties.servicePortfolioName;
      this.serviceClassName = properties.serviceClassName;
      this.serviceTypeName = properties.serviceTypeName;
      this.serviceDeliveryPreferenceName = properties.serviceDeliveryPreferenceName;
      this.serviceSolutionSlackName = properties.serviceSolutionSlackName;
      this.serviceMaturityName = properties.serviceMaturityName;
      this.contentMaturityName = properties.contentMaturityName;
      this.serviceSsadParagraph = properties.serviceSsadParagraph;
      this.systemVersion = properties.systemVersion;
      this.relatedServicesClass = properties.relatedServicesClass;
      this.firstRelatedService = properties.firstRelatedService;
      this.secondRelatedService = properties.secondRelatedService;
      this.relatedService = properties.relatedService;
   }

   getServiceName(): string {
      return this.serviceName;
   };

   setServiceName(value: string): void {
      this.serviceName = value;
   };

   getServiceDescription(): string {
      return this.serviceDescription;
   };

   setServiceDescription(value: string): void {
      this.serviceDescription = value;
   };

   getServiceVersion(): number {
      return this.serviceVersion;
   };

   setServiceVersion(value ?: number): void {
      this.serviceVersion = value;
   };

   getServicePortfolioName(): string {
      return this.servicePortfolioName;
   };

   setServicePortfolioName(value ?: string): void {
      this.servicePortfolioName = value;
   };

   getServiceClassName(): string {
      return this.serviceClassName;
   };

   setServiceClassName(value ?: string): void {
      this.serviceClassName = value;
   };

   getServiceTypeName(): string {
      return this.serviceTypeName;
   };

   setServiceTypeName(value ?: string): void {
      this.serviceTypeName = value;
   };

   getServiceDeliveryPreferenceName(): string {
      return this.serviceDeliveryPreferenceName;
   }

   setServiceDeliveryPreferenceName(value?: string): void {
      this.serviceDeliveryPreferenceName = value;
   }

   getServiceSolutionSlackName(): string {
      return this.serviceSolutionSlackName;
   };

   setServiceSolutionSlackName(value ?: string): void {
      this.serviceSolutionSlackName = value;
   };

   getServiceMaturityName(): string {
      return this.serviceMaturityName;
   };

   setServiceMaturityName(value ?: string): void {
      this.serviceMaturityName = value;
   };

   getContentMaturityName(): string {
      return this.contentMaturityName;
   }

   setContentMaturityName(value: string): void {
      this.contentMaturityName = value;
   }

   getServiceSsadParagraph(): string {
      return this.serviceSsadParagraph;
   };

   setServiceSsadParagraph(value ?: string): void {
      this.serviceSsadParagraph = value;
   };

   getSystemVersion(): string {
      return this.systemVersion;
   };

   setSystemVersion(value ?: string): void {
      this.systemVersion = value;
   };

   getRelatedServicesClass(): string {
      return this.relatedServicesClass;
   };

   setRelatedServicesClass(value ?: string): void {
      this.relatedServicesClass = value;
   };

   getFirstRelatedService(): string {
      return this.firstRelatedService;
   };

   setFirstRelatedService(value ?: string): void {
      this.firstRelatedService = value;
   };

   getSecondRelatedService(): string {
      return this.secondRelatedService;
   };

   setSecondRelatedService(value ?: string): void {
      this.secondRelatedService = value;
   };

   getRelatedService(): string {
      return this.relatedService;
   };

   setRelatedService(value ?: string): void {
      this.relatedService = value;
   };
}