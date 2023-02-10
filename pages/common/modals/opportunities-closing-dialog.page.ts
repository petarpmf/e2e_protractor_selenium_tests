
import {BasePage} from "../base.page";
import {by, element, ElementFinder} from "protractor";
import {Localization} from "../../../common/localization";
import {promise} from "selenium-webdriver";
import {ClarityDatagridPage} from "../clarity-datagrid.page";
import {IDataGridOperations} from "../data-grid-operations.page";


let localization = new Localization();
let translate = localization.getLocalization();

export class OpportunitiesClosingDialogPage extends BasePage {

   private closeStatusSelect : ElementFinder= element(by.id('closeStatusSelect'));
   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', OpportunitiesClosingDialogPage.MODAL_TITLE));
   private datagridControlPage : IDataGridOperations = new ClarityDatagridPage();

   public static readonly MODAL_TITLE = translate.home.opportunities.modals.close.title;

   /**
    * Select closing status
    * @param {string} closingStatus - CLOSED_LOST, CLOSED_WON
    * @param {string} modalButtonText - Ok, Cancel
    * @returns {promise.Promise<any>}
    */
   async selectClosingStatus(closingStatus: string, modalButtonText: string): promise.Promise<any> {
      expect(this.modalTitle.waitReady()).toBeTruthy("Select closing status dialog not opened");
      await this.datagridControlPage.selectItemFromListbox(this.closeStatusSelect, closingStatus);
      await this.clickModalButton(modalButtonText);
   }

}