import {Users} from "../common/users";
import {executeCommonPermissionTestsForRole} from "./permissions-test-common.spec";
import {solutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {servicePublisherNavigatorState} from "../common/mocked-data/permission-data/navigator-state/service-publisher-navigator-state";
import {servicePublisherPagesState} from "../common/mocked-data/permission-data/page-elements-state/services-publisher-pages-state";
import {servicePublisherServicesState} from "../common/mocked-data/permission-data/services-state/service-publisher-services-states";
import {executeServicesPermissionTestsForRole} from "./permissions-test-common-services.spec";


let data = {
   user: Users.SERVICE_PUBLISHER,
   expectedNavigatorState: servicePublisherNavigatorState,
   pageElementState: servicePublisherPagesState,
   servicesData: servicePublisherServicesState,
   localizationEnabled: false

}

describe(data.user + " Permission tests", async () => {

   beforeAll(async () => {
      await solutionBuilderLoginPage.loginWithUser(data.user);
   });

   describe(" Navigator state and pages", async () => {
      await executeCommonPermissionTestsForRole(data);
   });

   describe(" Services permissions", async () => {
      await executeServicesPermissionTestsForRole(data);
   });

   afterAll(async () => {
      await solutionBuilderLoginPage.logout();
   });

});
