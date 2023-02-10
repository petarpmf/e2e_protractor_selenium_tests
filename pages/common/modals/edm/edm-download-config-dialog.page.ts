
import {BasePage} from "../../base.page";
import {by, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";
import {translate} from "../../../../common/localization";
import {ClarityDropdownElement} from "../../clarity-dropdown.element";

export class EdmDownloadConfigDialogPage extends BasePage {

   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', EdmDownloadConfigDialogPage.MODAL_TITLE));
   private modalDialog: ElementFinder = element(by.cssContainingText('.modal-dialog', EdmDownloadConfigDialogPage.MODAL_TITLE));
   private downloadBomSelect: ElementFinder = element(by.id('downloadBomSelect'))
   private okBtn: ElementFinder = this.modalDialog.element(by.cssContainingText('.btn', translate.common.ok))
   private cancelBtn: ElementFinder = this.modalDialog.element(by.cssContainingText('.btn', translate.common.cancel))

   public static readonly MODAL_TITLE = translate.home.opportunities.modals.downloadEdm.title;


   /**
    * Select include product document option (Yes | No)
    * @param {boolean} yes - will set Yes if yes is true and No if yes is false
    * @returns {promise.Promise<void>}
    */
   public async setIncludeProductDocuments(yes: boolean): promise.Promise<void> {
      expect(this.modalTitle.waitReady()).toBeTruthy();
      let optionToSet = yes ? translate.common.yes : translate.common.no;
      let countryDropdownElement = new ClarityDropdownElement(this.downloadBomSelect);
      await countryDropdownElement.selectOptionByText(optionToSet);
   }

   /**
    * Click OK
    * @returns {promise.Promise<void>}
    */
   public async clickOk(): promise.Promise<void>{
      expect(this.modalTitle.waitReady()).toBeTruthy();
      await this.okBtn.click();
   }

   /**
    * Click Cancel
    * @returns {promise.Promise<void>}
    */
   public async clickCancel(): promise.Promise<void>{
      expect(this.modalTitle.waitReady()).toBeTruthy();
      await this.cancelBtn.click();
   }

}