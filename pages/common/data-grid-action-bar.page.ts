import {browser, By, by, element, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {BasePage} from "../common/base.page";
import {IDataGridOperations, TableColumn, TableHeader} from "../common/data-grid-operations.page";
import {HeaderPage} from "../header.page";
import {Urls} from "../../common/urls";
import {OpportunitiesClosingDialogPage} from "./modals/opportunities-closing-dialog.page";
import {ConfirmationDialogPage} from "./modals/confirmation-dialog.page";
import {Localization} from "../../common/localization";


/**
 * Opportunity Datagrid Action Bar page - contains the common action buttons (Edit, AssignTo, Download Proposal, MarkAsClosed)
 * and their operations
 *
 * Created by lsavova.
 */

let localization = new Localization();
let translate = localization.getLocalization();

export class DataGridActionBarPage extends BasePage {

   public datagridElement;

   editOpportunityBtn = element(by.id('editOpportunityLink'));
   assignedToBtn = element(by.id('assignToBtn'));
   markAsClosedBtn = element(by.id('markAsClosedBtn'));
   downloadBtn = element(by.id('download-dropdown')).element(by.tagName("button"));
   deleteOpportunityBtn = element(by.id('deleteOpportunityButton'));
   downloadProposalLink = element(by.id('downloadProposalLink'));
   downloadSsadLink = element(by.id('downloadSsadLink'));
   downloadFfSowLink = element(by.id('downloadFfSowLink'));
   downloadTmSowLink = element(by.id('downloadTmSowLink'));
   downloadEDMLink = element(by.id('downloadBomLink'));

   constructor(datagridElement: ElementFinder) {
      super();
      this.datagridElement = datagridElement;
      this.editOpportunityBtn = this.datagridElement.element(by.id('editOpportunityLink'));
      this.assignedToBtn = this.datagridElement.element(by.id('assignToBtn'));
      this.markAsClosedBtn = this.datagridElement.element(by.id('markAsClosedBtn'));
      this.downloadBtn = this.datagridElement.element(by.id('download-dropdown')).element(by.tagName("button"));
      this.deleteOpportunityBtn = this.datagridElement.element(by.id('deleteOpportunityButton'));
   }

   confirmOpportunitiesDeletion = new ConfirmationDialogPage(translate.home.opportunities.modals.delete.title);

   /**
    * Click Edit Opportunity button
    * @returns {promise.Promise<any>}
    */
   async clickEditOpportynityButton(): promise.Promise<any> {
      await this.clickElementWithScroll(this.editOpportunityBtn);
   }

   /**
    * Click AssignTo button
    * @returns {promise.Promise<any>}
    */
   async clickAssignOpportynityButton(): promise.Promise<any> {
      await this.clickElementWithScroll(this.assignedToBtn);
   }

   /**
    * Click DownloadProposal link
    * @returns {promise.Promise<any>}
    */
   async clickDownloadProposalPPTX(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadBtn);
      expect(this.downloadProposalLink.waitReady()).toBeTruthy();
      return this.clickElementWithScroll(this.downloadProposalLink);
   }

   /**
    * Click download SSaD link
    * @returns {promise.Promise<any>}
    */
   async clickDownloadSSaD(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadBtn);
      expect(this.downloadSsadLink.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadSsadLink);
   }

   /**
    * Click download SoW FF link
    * @returns {promise.Promise<any>}
    */
   async clickDownloadSowFF(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadBtn);
      expect(this.downloadFfSowLink.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadFfSowLink);
   }

   /**
    * Click download SoW TM link
    * @returns {promise.Promise<any>}
    */
   async clickDownloadSowTM(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadBtn);
      expect(this.downloadTmSowLink.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadTmSowLink);
   }

   /**
    * Click download button
    * @returns {promise.Promise<any>}
    */
   async clickDownload(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.downloadBtn.click();
   }

   /**
    * Click download EDM link
    * @returns {promise.Promise<any>}
    */
   async clickDownloadEDM(): promise.Promise<any> {
      expect(this.downloadBtn.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadBtn);
      expect(this.downloadEDMLink.waitReady()).toBeTruthy();
      await this.clickElementWithScroll(this.downloadEDMLink);
   }

   /**
    * Check whether Time And Materials SOW Link is Disabled.
    */
   async isTimeAndMaterialsSOWLinkDisabled(): promise.Promise<any> {
      await this.clickDownload();
      return await this.downloadTmSowLink.getAttribute('class').then(async (classes) => {
         if (classes.split(' ').indexOf('disabled') > -1) {
            return true;
         } else {
            return false;
         }
      });
   }

   /**
    * Click Mark as Closed button
    * @returns {promise.Promise<any>}
    */
   async clickMarkAsClosedButton(): promise.Promise<any> {
      await this.clickElementWithScroll(this.markAsClosedBtn);
   }

   /**
    * Mark the selected opportunity as closed with status
    * @param {string} closingStatus - CLOSED_WON, CLOSED_LOST
    * @param {string} modalButtonText - Ok, Cancel
    * @returns {promise.Promise<any>}
    */
   async markOpportunityAsClosed(closingStatus: string, modalButtonText: string): promise.Promise<any> {
      let selectClosingStatusDialog = new OpportunitiesClosingDialogPage();
      await this.clickMarkAsClosedButton();
      await selectClosingStatusDialog.selectClosingStatus(closingStatus, modalButtonText)
   }

   /**
    * Click Delete Opportunity button
    * @returns {promise.Promise<any>}
    */
   async clickDeleteOpportunityButton(): promise.Promise<any> {
      await this.clickElementWithScroll(this.deleteOpportunityBtn);
   }

   /**
    * Click Delete Opportunity button and handle confirm dialog
    * @param {boolean} confirm - whether to click yes or no
    * @returns {promise.Promise<any>}
    */
   async deleteOpportunity(confirm: boolean): promise.Promise<any> {
      await this.clickDeleteOpportunityButton();
      confirm ? await this.confirmOpportunitiesDeletion.clickYes() : await this.confirmOpportunitiesDeletion.clickNo();
   }

   /**
    * Get datagrid element associated with the action bar
    * @returns {promise.Promise<ElementFinder>}
    */
   getDatagridElement(): promise.Promise<ElementFinder> {
      return this.datagridElement;
   }

}