import {headerPage} from "../pages/header.page";
import {allOpportunitiesPage} from "../pages/opportunity/all-opportunities.page";
import {by, element} from "protractor";


export function executeOpportunitiesPermissionTestsForRole(data) {

      it(data.user + " correct permissions on opportunities", async () => {

         for (let i in data.opportunitiesData) {
            await headerPage.clickAllOpportunitiesIcon();
            let opportunityInfo = data.opportunitiesData[i];
            let opportunityRowValues = [opportunityInfo.name, opportunityInfo.status, opportunityInfo.assignedTo];
            await allOpportunitiesPage.findOpportunity(opportunityInfo.name);

            expect(element(by.css('div.spinner')).waitToHide()).toBeTruthy()

            expect(await allOpportunitiesPage.hasOpportunity(opportunityRowValues)).toBe(opportunityInfo.visible, "Opportunity [" + opportunityInfo.name + "] expected visible state: " + opportunityInfo.visible);

            if (opportunityInfo.permissions) {
               await allOpportunitiesPage.selectOpportunity(opportunityRowValues);
               let expectedButtonStates = [opportunityInfo.permissions.edit, opportunityInfo.permissions.assign, opportunityInfo.permissions.download, opportunityInfo.permissions.close, opportunityInfo.permissions.delete];
               let stateInfo = await allOpportunitiesPage.checkActionButtonStates(expectedButtonStates);
               expect(stateInfo[0]).toBeTruthy(stateInfo[1]);
            }

            if (opportunityInfo.permissions && opportunityInfo.permissions.downloadPermissions) {

               let downloadPermissions = opportunityInfo.permissions.downloadPermissions;

               await allOpportunitiesPage.actionBarPage.clickDownload();

               expect(await allOpportunitiesPage.isElementVisibleOnPage(allOpportunitiesPage.actionBarPage.downloadProposalLink)).toBe(downloadPermissions.proposal, "Opportunity [" + opportunityInfo.name + "] expected download proposal state: " + downloadPermissions.proposal);

               expect(await allOpportunitiesPage.isElementVisibleOnPage(allOpportunitiesPage.actionBarPage.downloadSsadLink)).toBe(downloadPermissions.SSaD, "Opportunity [" + opportunityInfo.name + "] expected download SSaD state: " + downloadPermissions.SSaD);

               expect(await allOpportunitiesPage.isElementVisibleOnPage(allOpportunitiesPage.actionBarPage.downloadFfSowLink)).toBe(downloadPermissions.fixedFee, "Opportunity [" + opportunityInfo.name + "] expected download fixedFee state: " + downloadPermissions.fixedFee);

               expect(await allOpportunitiesPage.isElementVisibleOnPage(allOpportunitiesPage.actionBarPage.downloadTmSowLink)).toBe(downloadPermissions.timeMaterials, "Opportunity [" + opportunityInfo.name + "] expected download timeMaterials state: " + downloadPermissions.timeMaterials);

               expect(await allOpportunitiesPage.isElementVisibleOnPage(allOpportunitiesPage.actionBarPage.downloadEDMLink)).toBe(downloadPermissions.EDM, "Opportunity [" + opportunityInfo.name + "] expected download EDM state: " + downloadPermissions.EDM);
            }
         }
      });
}
