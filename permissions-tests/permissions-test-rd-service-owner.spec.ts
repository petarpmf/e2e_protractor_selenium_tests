import {Users} from "../common/users";
import {executeCommonPermissionTestsForRole} from "./permissions-test-common.spec";
import {serviceOwnerNavigatorState} from "../common/mocked-data/permission-data/navigator-state/service-owner-navigator-state";
import {solutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {serviceOwnerPagesState} from "../common/mocked-data/permission-data/page-elements-state/services-owner-pages-state";
import {executeOpportunitiesPermissionTestsForRole} from "./permissions-test-common-opportunities.spec";
import {serviceOwnerOpportunitiesState} from "../common/mocked-data/permission-data/opportunities-state/service-owner-opportunities-states";
import {rdServiceOwnerServicesState} from "../common/mocked-data/permission-data/services-state/rd-service-owner-services-states";
import {executeServicesPermissionTestsForRole} from "./permissions-test-common-services.spec";


let data = {
   user: Users.RD_SERVICE_OWNER,
   expectedNavigatorState: serviceOwnerNavigatorState,
   pageElementState: serviceOwnerPagesState,
   opportunitiesData: serviceOwnerOpportunitiesState,
   servicesData: rdServiceOwnerServicesState,
   localizationEnabled: false

}

describe(data.user + " Permission tests", async () => {

   beforeAll(async () => {
      await solutionBuilderLoginPage.loginWithUser(data.user);
   });

   describe(" Navigator state and pages", async () => {
      await executeCommonPermissionTestsForRole(data);
   });

   describe(" Opportunities permissions", async () => {
      await executeOpportunitiesPermissionTestsForRole(data);
   });

   describe(" Services permissions", async () => {
      await executeServicesPermissionTestsForRole(data);
   });

   afterAll(async () => {
      await solutionBuilderLoginPage.logout();
   });

});
