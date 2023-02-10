import {BasePage} from "../../base.page";
import {by, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";
import {translate} from "../../../../common/localization";

export class EdmDownloadProgressDialogPage extends BasePage {

   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', EdmDownloadProgressDialogPage.MODAL_TITLE));

   public static readonly MODAL_TITLE = translate.home.opportunities.modals.edmDownloadProgress.title;

   /**
    * Check if dialog is present
    * @returns {promise.Promise<boolean>}
    */
   public isDialogPresent(): promise.Promise<boolean>{
      return this.modalTitle.isDisplayed();
   }

   /**
    * Wait for dialog to disappear
    * @returns {boolean}
    */
   public waitToDisappear(): boolean{
       return expect(this.modalTitle.waitToBeInvisible()).toBeTruthy();
   }
}