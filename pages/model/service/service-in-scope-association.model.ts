export interface IServiceInScopeAssociation {
   scopeItemQuantityValue: number;
   primaryScopeText: string;
   secondaryScopeText: string;
   description: string;
   moduleName: string;
   scalingQuestionName: string;
}

export class ServiceInScopeAssociation implements IServiceInScopeAssociation {
   scopeItemQuantityValue: number;
   primaryScopeText: string;
   secondaryScopeText: string;
   description: string;
   moduleName: string;
   scalingQuestionName: string;

   constructor({scopeItemQuantityValue, primaryScopeText, secondaryScopeText, description, moduleName, scalingQuestionName}: IServiceInScopeAssociation) {
      this.scopeItemQuantityValue = scopeItemQuantityValue;
      this.primaryScopeText = primaryScopeText;
      this.secondaryScopeText = secondaryScopeText;
      this.description = description;
      this.moduleName = moduleName;
      this.scalingQuestionName = scalingQuestionName;
   };

   /**
    * Gets array of all the property values for the current In Scope item.
    *
    * @returns {Array<string>}
    */
   getValuesArray(): Array<string> {
      let properties = [];
      if (this.scopeItemQuantityValue) {
         properties.push(this.scopeItemQuantityValue);
      }
      if (this.primaryScopeText) {
         properties.push(this.primaryScopeText);
      }
      if (this.secondaryScopeText) {
         properties.push(this.secondaryScopeText);
      }
      if (this.moduleName) {
         properties.push(this.moduleName);
      }
      if (this.description) {
         properties.push(this.description);
      }
      if (this.scalingQuestionName) {
         properties.push(this.scalingQuestionName);
      }
      return properties;
   }

   getScopeItemQuantityValue(): number {
      return this.scopeItemQuantityValue;
   };

   setScopeItemQuantityValue(value: number) {
      this.scopeItemQuantityValue = value;
   };

   getPrimaryScopeText(): string {
      return this.primaryScopeText;
   };

   setPrimaryScopeText(value: string) {
      this.primaryScopeText = value;
   };

   getSecondaryScopeText(): string {
      return this.secondaryScopeText;
   };

   setSecondaryScopeText(value: string) {
      this.secondaryScopeText = value;
   };

   getDescription(): string {
      return this.description;
   };

   setDescription(value: string) {
      this.description = value;
   };

   getModuleName(): string {
      return this.moduleName;
   };

   setModuleName(value: string) {
      this.moduleName = value;
   };

   getScalingQuestionName(): string {
      return this.scalingQuestionName;
   };

   setScalingQuestionName(value: string) {
      this.scalingQuestionName = value;
   };
}