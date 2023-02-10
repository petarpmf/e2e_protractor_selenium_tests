import {promise} from "selenium-webdriver";
import {DataGridActionBarPage} from "./data-grid-action-bar.page";
import {ClarityDatagridPage} from "./clarity-datagrid.page";
import {SowType} from "../../../app/common/constants/sow-type.enum";
import {by} from "protractor";
import {selectProductsPage} from "../guidedMode/select-products.page";
import {EdmDownloadConfigDialogPage} from "./modals/edm/edm-download-config-dialog.page";
import {Localization} from "../../common/localization";
import {languageNotificationDialogPage} from "./modals/language-notification-dialog.page";

/**
 * Opportunity datagrid page (such as All opportunities and Dahboard)
 *
 */

let localization = new Localization();
let translate = localization.getLocalization();

export class OpportunitiesDatagridPage extends ClarityDatagridPage {

   /**
    * Download SSaD file for an opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadSSaD(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.clickDownloadSSaD();

   }

   /**
    * Download SoW file for an opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @param {SowType} sowType
    * @param {boolean} expectLanguageNotification - whether to expect a language notification dialog. default is false
    * @returns {promise.Promise<any>}
    */
   async downloadSoW(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>, sowType: SowType, expectLanguageNotification = false): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      if (SowType.FF === sowType) {
         await datagridActionBar.clickDownloadSowFF();
      } else {
         await datagridActionBar.clickDownloadSowTM();
      }
      if(expectLanguageNotification){
         await languageNotificationDialogPage.clickYes();

      }
   }

   /**
    * Download Proposal file for an opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadProposal(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.clickDownloadProposalPPTX();

   }


   /**
    * Download EDM file for an opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadEDM(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>, setIncludeProductDocuments: boolean = true): promise.Promise<any> {

      let edmDownloadDialogPage = new EdmDownloadConfigDialogPage();
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.clickDownloadEDM();
      if (await this.isElementWithLocatorVisibleOnPage(by.css('solution-elements-dialog .modal-title'))) {
         await selectProductsPage.clickContinueRemoveSoluitonElements();
      }

      await edmDownloadDialogPage.setIncludeProductDocuments(setIncludeProductDocuments);
      await edmDownloadDialogPage.clickOk();
   }


   /**
    * Delete multiple opportunities
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<Array<string>>} rows
    * @param {boolean} confirm
    * @returns {promise.Promise<any>}
    */
   async deleteOpportunities(datagridActionBar: DataGridActionBarPage, rows: Array<Array<string>>, confirm: boolean): promise.Promise<any> {
      await this.selectRows(await datagridActionBar.getDatagridElement(), rows);
      await datagridActionBar.deleteOpportunity(confirm);
   }

   /**
    * Delete single opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @param {boolean} confirm
    * @returns {promise.Promise<any>}
    */
   async deleteOpportunity(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>, confirm: boolean): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.deleteOpportunity(confirm);
   }

   /**
    * Mark an opportunity as closed
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @param {string} closingStatus
    * @param {string} modalButtonText
    * @returns {promise.Promise<any>}
    */
   async markOpportunityAsClosed(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>, closingStatus: string, modalButtonText: string): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.markOpportunityAsClosed(closingStatus, modalButtonText);
   }

   /**
    * Edit an opportunity
    * @param {DataGridActionBarPage} datagridActionBar
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async editOpportunity(datagridActionBar: DataGridActionBarPage, rowValues: Array<string>): promise.Promise<any> {
      await this.selectRow(await datagridActionBar.getDatagridElement(), rowValues);
      await datagridActionBar.clickEditOpportynityButton();
   }
}
