import {Users} from "../common/users";
import {adminNavigatorState} from "../common/mocked-data/permission-data/navigator-state/local-admin-navigator-state";
import {solutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {adminPagesState} from "../common/mocked-data/permission-data/page-elements-state/local-admin-pages-state";
import {adminOpportunitiesState} from "../common/mocked-data/permission-data/opportunities-state/admin-opportunities-states";
import {executeServicesPermissionTestsForRole} from "./permissions-test-common-services.spec";
import {adminServicesState} from "../common/mocked-data/permission-data/services-state/admin-services-states";
import {executeCommonPermissionTestsForRole} from "./permissions-test-common.spec";
import {executeOpportunitiesPermissionTestsForRole} from "./permissions-test-common-opportunities.spec";


let data = {
   user: Users.ADMIN,
   expectedNavigatorState: adminNavigatorState,
   pageElementState: adminPagesState,
   opportunitiesData: adminOpportunitiesState,
   servicesData: adminServicesState,
   localizationEnabled: true
};

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