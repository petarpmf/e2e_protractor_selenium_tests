import {navigatorPage} from "../pages/navigator.page";
import {openedServicesPage} from "../pages/service/opened-services.page";
import {publishedServicesPage} from "../pages/service/published-services.page";
import {retractedServicesPage} from "../pages/service/retracted-services.page";


export function executeServicesPermissionTestsForRole(data) {

      it(data.user + " correct permissions on services", async () => {

         for (let i in data.servicesData) {
            await navigatorPage.clickSandwichMenu();
            let serviceInfo = data.servicesData[i];
            let serviceRowValues = [serviceInfo.name, serviceInfo.systemVersion, serviceInfo.products, serviceInfo.owner];
            let servicePage;

            if (serviceInfo.state == "OPENED") {
               await navigatorPage.clickOpenedServicesBtn();
               servicePage = openedServicesPage;
            }

            if (serviceInfo.state == "PUBLISHED") {
               await navigatorPage.clickPublishedServicesBtn();
               servicePage = publishedServicesPage;
            }

            if (serviceInfo.state == "RETRACTED") {
               await navigatorPage.clickRetractedServicesBtn();
               servicePage = retractedServicesPage;
            }

            expect(await servicePage.hasServiceByValues(serviceRowValues)).toBe(serviceInfo.visible, "Service [" + serviceInfo.name + "] of state [" + serviceInfo.state + "] expected visible state: " + serviceInfo.visible);

            if (serviceInfo.visibleButtons) {

               let visibleButtons = await servicePage.getVisibleButtonLabels(serviceRowValues);

               for (let buttonLabel in serviceInfo.visibleButtons) {
                  let visibleState = serviceInfo.visibleButtons[buttonLabel];
                  expect(visibleButtons.indexOf(buttonLabel) > -1).toBe(visibleState, "Service [" + serviceInfo.name + "] button [" + buttonLabel + "] expected visible state: " + visibleState);
               }
            }
         }
      });
}
