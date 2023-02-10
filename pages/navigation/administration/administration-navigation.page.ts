import {by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {BaseNavigatorPage} from "../../common/base-navigator.page";
import {NavigatorPage} from "../../navigator.page";
import {ImportPcalcPage} from "../../administration/import-pcalc.page";

let navigatorPage = new NavigatorPage();

/**
 * Navigation for Administration submenu
 *
 */

export class AdministrationNavigationPage extends BaseNavigatorPage {
   itOutcomesLink = element(by.css('#itOutcomesLink .nav-group-trigger'));
   importPCalcLink = element(by.id('importPCalcLink'));
   crossServiceDataMenu = element(by.id('#cross-service-data-menu .nav-group-trigger'));
   deliverableDatagrid = element(by.id('deliverableDocumentsDatagrid'));

   clickItOutcomesLink(): promise.Promise<any> {
      expect(this.itOutcomesLink.waitReady()).toBeTruthy();
      return this.itOutcomesLink.click();
   };

   async clickCrossServiceDataMenuLink(): promise.Promise<any> {
      await this.scrollToElement(this.crossServiceDataMenu);
      expect(this.crossServiceDataMenu.waitReady()).toBeTruthy();
      return this.crossServiceDataMenu.click();
   };

   async openServiceConfigurationLink(): promise.Promise<any> {
      await this.scrollToElement(this.itOutcomesLink);
      await navigatorPage.openServiceConfigurationLink();
   };

   async openImportPCalc(): promise.Promise<any> {
      await navigatorPage.expandAdministrationMenu();
      expect(this.importPCalcLink.waitReady()).toBeTruthy();
      await this.importPCalcLink.click();
      expect(new ImportPcalcPage().uploadLabel.waitReady()).toBeTruthy();
   };
}