import {BasePage} from "../base.page";
import {by, element, ElementFinder} from "protractor";
import {Localization} from "../../../common/localization";
import {promise} from "selenium-webdriver";

let localization = new Localization();
let translate = localization.getLocalization();

export class LanguageNotificationDialogPage extends BasePage {

   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', translate.home.opportunities.create.guidedMode.steps.complete.dialogLabels.title));
   private btnYes: ElementFinder = element(by.cssContainingText('.btn', "yes"));
   private btnNo: ElementFinder = element(by.cssContainingText('.btn', "no"));

   /**
    * Click Yes button
    * @returns {Promise<void>}
    */
   async clickYes(): promise.Promise<any> {
      expect(this.modalTitle.waitReady()).toBeTruthy("Language Dialog not opened");
      await this.btnYes.click();
      await this.modalTitle.waitToHide();
   }

   /**
    * Click No button
    * @returns {Promise<void>}
    */
   async clickNo(): promise.Promise<any> {
      expect(this.modalTitle.waitReady()).toBeTruthy("Language Dialog not opened");
      await this.btnNo.click();
      await this.modalTitle.waitToHide();
   }
}

export let languageNotificationDialogPage =  new LanguageNotificationDialogPage();
