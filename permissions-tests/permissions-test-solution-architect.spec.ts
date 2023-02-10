import {Users} from "../common/users";
import {executeCommonPermissionTestsForRole} from "./permissions-test-common.spec";
import {solutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {salesCommonNavigatorState} from "../common/mocked-data/permission-data/navigator-state/sales-common-navigator-state";
import {salesCommonPagesState} from "../common/mocked-data/permission-data/page-elements-state/sales-common-pages-state";
import {solutionArchitectOpportunitiesState} from "../common/mocked-data/permission-data/opportunities-state/solution-architect-opportunities-states";
import {executeOpportunitiesPermissionTestsForRole} from "./permissions-test-common-opportunities.spec";


let data = {
   user: Users.SOLUTION_ARCHITECT,
   expectedNavigatorState: salesCommonNavigatorState,
   pageElementState: salesCommonPagesState,
   opportunitiesData: solutionArchitectOpportunitiesState,
   localizationEnabled: false

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

   afterAll(async () => {
      await solutionBuilderLoginPage.logout();
   });
});
