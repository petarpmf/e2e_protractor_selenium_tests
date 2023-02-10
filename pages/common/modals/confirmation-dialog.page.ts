import {BasePage} from "../base.page";
import {by, element, ElementFinder} from "protractor";
import {Localization} from "../../../common/localization";
import {promise} from "selenium-webdriver";

let localization = new Localization();
let translate = localization.getLocalization();

export class ConfirmationDialogPage extends BasePage {

   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', this.title));

   constructor(public readonly title: string) {
      super();
   }

   /**
    * Click Yes button
    * @returns {Promise<void>}
    */
   async clickYes(): promise.Promise<any> {
      await this.confirmOperation(translate.common.yes);
   }

   /**
    * Click No button
    * @returns {Promise<void>}
    */
   async clickNo(): promise.Promise<any> {
      await this.confirmOperation(translate.common.no);
   }

   /**
    * Click Cancel button
    * @returns {Promise<void>}
    */
   async clickCancel(): promise.Promise<any> {
      await this.confirmOperation(translate.common.cancel);
   }

   /**
    * Click Ok button
    * @returns {Promise<void>}
    */
   async clickOk(): promise.Promise<any> {
      await this.confirmOperation(translate.common.ok);
   }

   /**
    * Confirm deletion
    * @param {string} operation
    * @returns {Promise<void>}
    */
   private async confirmOperation(operation: string): promise.Promise<any> {
      expect(this.modalTitle.waitReady()).toBeTruthy("Confirm deletion dialog not opened");
      await this.clickModalButton(operation);
   }
}