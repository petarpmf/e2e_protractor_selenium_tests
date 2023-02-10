import {navigatorPage} from "../pages/navigator.page";
import {elementLocatorsBindings} from "../common/mocked-data/permission-data/elements-locators-bindings";
import {userProfilePage} from "../pages/user-profile-dialog.page";
import {headerPage} from "../pages/header.page";

export function executeCommonPermissionTestsForRole(data) {

   it(data.user + ' Navigator state is correct', async () => {

      await navigatorPage.clickSandwichMenu();
      let actualNavigatorState = await navigatorPage.getNavigatorMenuElementsStateInJSON();
      expect(JSON.stringify(data.expectedNavigatorState)).toEqual(JSON.stringify(actualNavigatorState));

   });

   it('[Non] Localization user has the language dropdown in User Profile settings [non] available', async () => {
      await headerPage.clickHomeLink();
      await userProfilePage.openUserProfile();
      expect(await userProfilePage.isLanguageDropdownVisible()).toBe(data.localizationEnabled, "Language dropdown expected visible state: " + data.localizationEnabled);
      await userProfilePage.clickCancel();
   });


   describe("Check pages", async () => {

      beforeAll(async () => {
         await navigatorPage.clickSandwichMenu();
      });

      for (let i in data.pageElementState) {
         (async (i) => {
            let pageInfo = data.pageElementState[i];

            it(data.user + ': Page [' + pageInfo.pageName + '] elements states are correct', async () => {

               if (pageInfo.navigateFrom.navigatorPath) {
                  await navigatorPage.clickElementWithPath(pageInfo.navigateFrom.navigatorPath);
               }
               if (pageInfo.navigateFrom.headerMenu) {
                  expect(elementLocatorsBindings[pageInfo.navigateFrom.headerMenu].waitReady()).toBeTruthy()
                  await elementLocatorsBindings[pageInfo.navigateFrom.headerMenu].click();
               }

               for (let i in pageInfo.visibleElements) {
                  let elementName = pageInfo.visibleElements[i];
                  expect(await elementLocatorsBindings[elementName].waitReady()).toBeTruthy()
               }

               for (let i in pageInfo.nonVisibleElements) {
                  let elementName = pageInfo.nonVisibleElements[i];
                  expect(await elementLocatorsBindings[elementName].waitToBeInvisible()).toBeTruthy('Element [' + elementName + '] expected to not be visible, but it is')
               }
            });
         })(i);
      }

   });

}
