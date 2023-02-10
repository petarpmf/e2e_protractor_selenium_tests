import {Localization} from "./localization";

let localization = new Localization();
let translate = localization.getLocalization();

export enum BrpTypesEnum {

   INFRASTRUCTURE_PROVIDER = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.itValueModel.infrastructureProviders,
   BUSINESS_PARTNER = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.itValueModel.businessPartners,
   DIGITAL_ENTERPRISE = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.itValueModel.digitalEnterprises,
   CYBERSECURITY = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.itValueModel.cybersecurity,
   CONSUMER = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.itValueModel.consumer,
   IT_DEFINED = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.dwJourneyModel.itDefined,
   USER_CENTRIC = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.dwJourneyModel.userCentric,
   INFRASTRUCTURE = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.dwJourneyModel.infrastructure,
   SDDC_TEP = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.sddcTep,
   NETWORKING_AND_SECURITY_TEP = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.networkingAndSecurityTep,
   EUC_TEP = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.eucTep,
   PLATFORM_TEP = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.platformTep
}


