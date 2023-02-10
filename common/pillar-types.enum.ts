import {Localization} from "./localization";

let localization = new Localization();
let translate = localization.getLocalization();

export enum StorefrontPillarType {

   SDDC = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.sddcTep,
   NETWORKING_SECURITY = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.networkingAndSecurityTep,
   EUC = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.technologyEntryPoint.eucTep,
   MODERNIZE_DATA_CENTERS = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.salesPlay.modernizeDataCenters,
   INTEGRATE_PUBLIC_CLOUDS = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.salesPlay.integratePublicClouds,
   EMPOWER_DIGITAL_WORKSPACE = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.salesPlay.empowerDigitalWorkspace,
   TRANSFORM_NETWORKING_SECURITY = translate.home.opportunities.create.guidedMode.steps.selectSolutionSets.salesPlay.transformNetworkingAndSecurity
}