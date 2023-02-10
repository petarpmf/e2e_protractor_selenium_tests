import {HeaderPage} from "../../pages/header.page";
import {DashboardPage} from "../../pages/dashboard.page";
import {OpportunitiesDatagridPage} from "../../pages/common/opportunities-data-grid.page";

const headerPage = new HeaderPage();
let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());

export let NavigationSet = {

   'Load Dashboard Page': {
      'preparations': async function () {
         await headerPage.clickAllOpportunitiesIcon();
      },
      'method': async function () {
         await  headerPage.clickHomeLink();
         await expect(dashboardPage.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
         await  expect(dashboardPage.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();

      },
      'description': 'Click to home button and wait for recently viewed and recently created grids to be loaded',
      'ac': 1
   }
};