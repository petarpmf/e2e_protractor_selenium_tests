import {By, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {BasePage} from "./common/base.page";
import {TableColumn, TableHeader} from "./common/data-grid-operations.page";
import {HeaderPage} from "./header.page";
import {Urls} from "../common/urls";
import {DataGridActionBarPage} from "./common/data-grid-action-bar.page";
import {OpportunitiesDatagridPage} from "./common/opportunities-data-grid.page";
import {TextFieldPage} from "./common/text-field.page";
import {Localization} from "../common/localization";

let urls = new Urls();

let localization = new Localization();
let translate = localization.getLocalization();

export class DashboardPage extends BasePage {
   dashboardLink = element(By.id('dashboardLink'));
   createOpportunityBtn = element(By.id('createOpportunityBtn'));
   contentAccessModeBtn = element(By.id('contentAccessModeBtn'));
   recentlyCreatedOpportunitiesGrid = element(by.css('dashboard-opportunities[ng-reflect-grid-id="recently-created-grid"]'));
   recentlyViewedOpportunitiesGrid = element(by.css('dashboard-opportunities[ng-reflect-grid-id="recently-viewed-grid"]'));
   viewAllOpportunitiesRecentlyCreatedLink = this.recentlyCreatedOpportunitiesGrid.element(by.css('.view-all-opportunities'));
   viewAllOpportunitiesRecentlyViewedLink = this.recentlyViewedOpportunitiesGrid.element(by.css('.view-all-opportunities'));
   allOpportunitiesGrid = element(By.id('all-opportunities-grid'));
   notificationPopup = element(by.id('kendoInfoWindow'));
   confirmButton = element(by.id('confirmButton'));
   closeFilter = element(by.css('.datagrid-filter-close-wrapper .close'));
   filterInput = element(by.css('.datagrid-filter input'));
   filterStatusRecentlyViewed = this.recentlyViewedOpportunitiesGrid.element(by.css('.status-column.datagrid-column button.datagrid-filter-toggle'));
   filterAssignToRecentlyViewed = this.recentlyViewedOpportunitiesGrid.element(by.css('.assigned-to-column.datagrid-column button.datagrid-filter-toggle'));
   filterCreatedByRecentlyViewed = this.recentlyViewedOpportunitiesGrid.element(by.css('.created-by-column.datagrid-column button.datagrid-filter-toggle'));
   filterStatusRecentlyCreated = this.recentlyCreatedOpportunitiesGrid.element(by.css('.status-column.datagrid-column button.datagrid-filter-toggle'));
   filterAssignToRecentlyCreated = this.recentlyCreatedOpportunitiesGrid.element(by.css('.assigned-to-column.datagrid-column button.datagrid-filter-toggle'));
   filterCreatedByRecentlyCreated = this.recentlyCreatedOpportunitiesGrid.element(by.css('.created-by-column.datagrid-column button.datagrid-filter-toggle'));

   statusColumnCell = element(by.css("clr-dg-cell.status-column"));
   assignedToColumnCell = element(by.css("clr-dg-cell.assigned-to-column"));
   createdByColumnCell = element(by.css("clr-dg-cell.created-by-column"));
   customerColumnCell = element(by.css('.customer-name-column.datagrid-cell.datagrid-fixed-width'));

   headerPage = new HeaderPage();
   recentlyCreatedActionBarPage = new DataGridActionBarPage(this.recentlyCreatedOpportunitiesGrid);
   recentlyViewedActionBarPage = new DataGridActionBarPage(this.recentlyViewedOpportunitiesGrid);
   allOpportunitiesGridBarPage = new DataGridActionBarPage(this.allOpportunitiesGrid);
   textFieldPage = new TextFieldPage(this.filterInput);
   deliveryMaterialsDropdown = element(by.id('delivery-materials-dropdown'));
   searchByChangepointIdDropdownBtn = element(by.id('searchByChangepointIdDropdownBtn'));
   contentAccessModeDropdownBtn = element(by.id('contentAccessModeDropdownBtn'));

   openedServicesCard = element(by.cssContainingText('.card-content', translate.home.services.opened.title));
   publishedServicesCard = element(by.cssContainingText('.card-content', translate.home.services.published.title));
   retractedServicesCard = element(by.cssContainingText('.card-content', translate.home.services.retracted.title));
   closedOpportunitiesCard = element(by.cssContainingText('.card-content', translate.home.opportunities.closedOpportunities.title));

   private opportunitiesDatagridPage: OpportunitiesDatagridPage;

   public static readonly URL_SUFFIX: string = urls.dashboard;

   constructor(opportunitiesDatagridPage: OpportunitiesDatagridPage) {
      super();
      this.opportunitiesDatagridPage = opportunitiesDatagridPage;
   }

   /**
    * Click Dashboard Link.
    * @returns {promise.Promise<any>}
    */
   async clickDashboardLink(): promise.Promise<any> {
      expect(this.dashboardLink.waitReady()).toBeTruthy();
      await this.scrollToElement(this.dashboardLink);
      return this.dashboardLink.click();
   }

   async getCustomerNameColumnText(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.customerColumnCell.getText();
   }


   async isCreateOpportunityVisible(): promise.Promise<boolean> {
      return await this.createOpportunityBtn.waitReady().toBeTruthy();
   }

   /**
    * Click the 'VM' logo in the header first
    * and then click 'Create Opportunity' Button on the Dashboard.
    * @returns {promise.Promise<any>}
    */
   async clickCreateOpportunityButton(): promise.Promise<any> {
      await this.scrollToElement(this.headerPage.homeLink);
      expect(this.headerPage.homeLink.waitReady()).toBeTruthy();
      await this.headerPage.clickLogo();
      expect(this.createOpportunityBtn.waitReady()).toBeTruthy();
      await this.scrollToElement(this.createOpportunityBtn);
      return this.createOpportunityBtn.click();
   }

   /**
    * Click the 'VM' logo in the header first
    * and then click 'Create Opportunity' Button on the Dashboard.
    * @returns {promise.Promise<any>}
    */
   async clickContentAccessModeButton(): promise.Promise<any> {
      await this.scrollToElement(this.headerPage.homeLink);
      expect(this.headerPage.homeLink.waitReady()).toBeTruthy();
      await this.headerPage.clickLogo();
      await this.contentAccessModeBtn.isPresent().then(async (hasElement: boolean) => {
         if (hasElement) {
            expect(this.contentAccessModeBtn.waitReady()).toBeTruthy();
            await this.scrollToElement(this.contentAccessModeBtn);
            return this.contentAccessModeBtn.click();
         } else {
            await this.clickDeliveryMaterialsLink();
            expect(this.contentAccessModeDropdownBtn.waitReady()).toBeTruthy();
            await this.scrollToElement(this.contentAccessModeDropdownBtn);
            return this.contentAccessModeDropdownBtn.click();
         }
      });

   }

   /**
    * Edit Newest Recently Created Opportunity by name.
    * @param {string} opportunityName
    * @returns {promise.Promise<any>}
    */
   async editNewestRecentlyCreatedOpportunity(opportunityName: string): promise.Promise<any> {
      //Find table
      await this.scrollToElement(this.recentlyCreatedOpportunitiesGrid);
      expect(this.recentlyCreatedOpportunitiesGrid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).last().waitReady()).toBeTruthy();
      let items = await this.recentlyCreatedOpportunitiesGrid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).filter((item) => {
         return item.getText().then((text: string) => {
            //Find opportunityName
            return text.indexOf(opportunityName) != -1;
         });
      });
      if (items.length > 0) {
         if (items.length > 1) {
            console.error('There are more than one rows in the data grid that map with this opportunity name "' + opportunityName + '".The first will be select');

         }
         expect(items[0].waitReady()).toBeTruthy();
         let opportunityLink = items[0].element(by.css('.opportunity-link'));
         await this.scrollToElement(opportunityLink);
         await opportunityLink.click();
      } else {
         console.error('There are zero row in the data grid that map with this opportunity name "' + opportunityName + '".');
      }
   }

   /**
    * Select Opportunities ( DRAFT or OPENED ).
    * @param {Array<Array<string>>} opportunities
    * @returns {promise.Promise<any>}
    */
   async selectRecentlyCreatedOpportunities(opportunities: Array<Array<string>>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.selectRows(this.recentlyCreatedOpportunitiesGrid, opportunities);
   }


   /**
    * Select Opportunities ( DRAFT or OPENED ).
    * @param {Array<Array<string>>} opportunities
    * @returns {promise.Promise<any>}
    */
   async selectRecentlyViewedOpportunities(opportunities: Array<Array<string>>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.selectRows(this.recentlyViewedOpportunitiesGrid, opportunities);
   }

   /**
    * Delete Recently Created Opportunities.
    * @param {Array<Array<string>>} opportunities
    * @returns {Promise<void>}
    */
   async deleteRecentlyCreatedOpportunities(opportunities: Array<Array<string>>, confirm: boolean = true): promise.Promise<any> {
      await this.opportunitiesDatagridPage.deleteOpportunities(this.recentlyCreatedActionBarPage, opportunities, confirm);
   }

   /**
    * Delete Recently Viewed Opportunities.
    * @param {Array<Array<string>>} opportunities
    * @returns {Promise<void>}
    */
   async deleteRecentlyViewedOpportunities(opportunities: Array<Array<string>>, confirm: boolean = true): promise.Promise<any> {
      await this.opportunitiesDatagridPage.deleteOpportunities(this.recentlyViewedActionBarPage, opportunities, confirm);
   }

   /**
    * Mark As Closed Recently Created.
    * @param {Array<string>} rowValues
    * @param {string} closingStatus
    * @param {string} modalButton
    * @returns {promise.Promise<any>}
    */
   async markAsClosedRecentlyCreated(rowValues: Array<string>, closingStatus: string, modalButton: string): promise.Promise<any> {
      await this.opportunitiesDatagridPage.markOpportunityAsClosed(this.recentlyCreatedActionBarPage, rowValues, closingStatus, modalButton);
   }

   /**
    * Mark As ClosedIn All Opportunities Grid.
    * @param {Array<string>} rowValues
    * @param {string} closingStatus
    * @param {string} modalButton
    * @returns {promise.Promise<any>}
    */
   async markAsClosedInAllOpportunitiesGrid(rowValues: Array<string>, closingStatus: string, modalButton: string): promise.Promise<any> {
      await this.opportunitiesDatagridPage.markOpportunityAsClosed(this.allOpportunitiesGridBarPage, rowValues, closingStatus, modalButton);
   }

   /**
    * Mark As Closed Recently Viewed.
    * @param {Array<string>} rowValues
    * @param {string} closingStatus
    * @param {string} modalButton
    * @returns {promise.Promise<any>}
    */
   async markAsClosedRecentlyViewed(rowValues: Array<string>, closingStatus: string, modalButton: string): promise.Promise<any> {
      await this.opportunitiesDatagridPage.markOpportunityAsClosed(this.recentlyViewedActionBarPage, rowValues, closingStatus, modalButton);
   }

   /**
    * Download Recently Created Opportunity Proposal.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadRecentlyCreatedOpportunityProposal(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.downloadProposal(this.recentlyCreatedActionBarPage, rowValues);
   }

   /**
    * Download Recently Viewed Opportunity Proposal.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadRecentlyViewedOpportunityProposal(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.downloadProposal(this.recentlyViewedActionBarPage, rowValues);
   }

   /**
    * Download Recently Created Opportunity SSaD.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadRecentlyCreatedOpportunitySSaD(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.downloadSSaD(this.recentlyCreatedActionBarPage, rowValues);
   }

   /**
    * Download Recently Viewed Opportunity SSaD.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async downloadRecentlyViewedOpportunitySSaD(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.downloadSSaD(this.recentlyViewedActionBarPage, rowValues);
   }

   /**
    * Edit Recently Created Opportunity.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async editRecentlyCreatedOpportunity(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.editOpportunity(this.recentlyCreatedActionBarPage, rowValues);
   }

   /**
    * Edit Recently Viewed Opportunity.
    * @param {Array<string>} rowValues
    * @returns {promise.Promise<any>}
    */
   async editRecentlyViewedOpportunity(rowValues: Array<string>): promise.Promise<any> {
      await this.opportunitiesDatagridPage.editOpportunity(this.recentlyViewedActionBarPage, rowValues);
   }

   /**
    * Get grid values (as array of arrays) of a dashboard grid.
    * @param gridId
    * @returns {promise.Promise<any>}
    */
   async getGridValues(gridId): promise.Promise<any> {
      expect((gridId).waitReady()).toBeTruthy();
      return await this.opportunitiesDatagridPage.getGridValues(gridId);
   }

   /**
    * Returns true if the given dashboard grid has row containing rowValues (array of cell values)
    * @param gridId
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<boolean>}
    */
   async hasRowByValues(gridId, rowValues: Array<any>): promise.Promise<boolean> {
      return await this.opportunitiesDatagridPage.hasRowByValues(gridId, rowValues);
   }

   /**
    * Returns row index in the dashboard grid of the first met row with the given rowValues (array of cell values)
    * or -1 if there is no such row
    * @param gridID
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<number>}
    */
   async getRowIndexByValues(gridID, rowValues: Array<any>): promise.Promise<number> {
      return await this.opportunitiesDatagridPage.getRowIndexByValues(gridID, rowValues);
   }

   /**
    * Select (pick) ALL records in the Recently Viewed list using the "Select All" checkbox.
    * @returns {promise.Promise<number>} Return the number of records in the grid.
    */
   async selectAllRecentlyViewedOpportunities(): promise.Promise<number> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();

      let selectAllChkbx = await this.recentlyViewedOpportunitiesGrid.element(by.css("div.datagrid-head")).element(by.tagName("clr-checkbox"));
      // click if unticked:
      if (await selectAllChkbx.getAttribute("ng-reflect-model") != "true") {
         await selectAllChkbx.click();
      }

      return this.getNumberOfRecordsInRecentlyViewed();

   }

   /**
    * Select (pick) all records in the Recently Created list using the "Select All" checkbox.
    * @returns {promise.Promise<number>}  Return the number of records in the grid.
    */
   async selectAllRecentlyCreatedOpportunities(): promise.Promise<number> {

      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();

      let selectAllChkbx = await this.recentlyCreatedOpportunitiesGrid.element(by.css("div.datagrid-head")).element(by.tagName("clr-checkbox"));
      // click if unticked:
      if (await selectAllChkbx.getAttribute("ng-reflect-model") != "true") {
         await selectAllChkbx.click();
      }

      return this.getNumberOfRecordsInRecentlyCreated();

   }

   /**
    * Click the "Select All" checkbox in Recently Viewed grid, regardless of it's current state (toggle)
    * @returns {promise.Promise<void>} .
    */
   async clickSelectAllRecentlyViewedOpportunities(): promise.Promise<void> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.recentlyViewedOpportunitiesGrid.element(by.css("div.datagrid-head")).element(by.tagName("clr-checkbox")).click();
   }

   /**
    * Click the "Select All" checkbox in Recently Created grid, regardless of it's current state (toggle)
    * @returns {promise.Promise<void>} .
    */
   async clickSelectAllRecentlyCreatedOpportunities(): promise.Promise<void> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.recentlyCreatedOpportunitiesGrid.element(by.css("div.datagrid-head")).element(by.tagName("clr-checkbox")).click();
   }

   /**
    * Get the number of selected records inside Recently Viewed grid.
    * @returns {promise.Promise<number>} Return the count
    */
   async getNumberOfSelectedRowsInRecentlyViewed(): promise.Promise<number> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getSelectedRowsCount(this.recentlyViewedOpportunitiesGrid);
   }

   /**
    * Get the number of selected records inside Recently Created grid.
    * @returns {promise.Promise<number>} Return the count
    */
   async getNumberOfSelectedRowsInRecentlyCreated(): promise.Promise<number> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getSelectedRowsCount(this.recentlyCreatedOpportunitiesGrid);
   }

   /**
    * Get the number of NON selected records inside Recently Viewed grid.
    * @returns {promise.Promise<number>} Return the count
    */
   async getNumberOfNonSelectedRowsInRecentlyViewed(): promise.Promise<number> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getNonSelectedRowsCount(this.recentlyViewedOpportunitiesGrid);
   }

   /**
    * Get the number of NON selected records inside Recently Created grid.
    * @returns {promise.Promise<number>} Return the count
    */
   async getNumberOfNonSelectedRowsInRecentlyCreated(): promise.Promise<number> {
      expect(await this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getNonSelectedRowsCount(this.recentlyCreatedOpportunitiesGrid);
   }

   /**
    * Click this column header in the Recently <b>Viewed</b> datagrid.
    * Result - column data is sorted if column is sortable. Nothing happens if not srotable.
    * @param {TableHeader} header The header to be clicked (enum)
    * @returns {promise.Promise<void>}
    */
   async clickRecentlyViewedColumnHeader(header: TableHeader): promise.Promise<void> {
      expect(await this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.clickHeader(this.recentlyViewedOpportunitiesGrid, header);
   }

   /**
    * Click this column header in the Recently <b>Created</b> datagrid.
    * Result - column data is sorted if column is sortable. Nothing happens if not srotable.
    * @param {TableHeader} header The header to be clicked (enum)
    * @returns {promise.Promise<void>}
    */
   async clickRecentlyCreatedColumnHeader(header: TableHeader): promise.Promise<void> {
      expect(await this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.clickHeader(this.recentlyCreatedOpportunitiesGrid, header);
   }

   /**
    * Click on view all opportunities link below the recently created grid
    * @returns {promise.Promise<void>}
    */
   async clickViewAllOpportunitiesRecentlyCreatedLink(): promise.Promise<void> {
      await expect(this.viewAllOpportunitiesRecentlyCreatedLink.waitReady()).toBeTruthy();
      await this.viewAllOpportunitiesRecentlyCreatedLink.click();
   }

   /**
    * Click on view all opportunities link below the recently viewed grid
    * @returns {promise.Promise<void>}
    */
   async clickViewAllOpportunitiesRecentlyViewedLink(): promise.Promise<void> {
      await expect(this.viewAllOpportunitiesRecentlyViewedLink.waitReady()).toBeTruthy();
      await this.viewAllOpportunitiesRecentlyViewedLink.click();
   }

   /**
    * Get the data from the given column inside the Recently <b>Viewed</b> datagrid.
    * @param {TableColumn} column The column the date need to be taken from (enum).
    * @returns {promise.Promise<string[]>} Array of strings. 1 element per each row in the datagrid.
    */
   async getRecentlyViewedDataFromColumn(column: TableColumn): promise.Promise<string []> {
      expect(await this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getDataFromColumn(this.recentlyViewedOpportunitiesGrid, column);
   }

   /**
    * Get the data from the given column inside the Recently <b>Created</b> datagrid.
    * @param {TableColumn} column The column the date need to be taken from (enum).
    * @returns {promise.Promise<string[]>} Array of strings. 1 element per each row in the datagrid.
    */
   async getRecentlyCreatedDataFromColumn(column: TableColumn): promise.Promise<string []> {
      expect(await this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getDataFromColumn(this.recentlyCreatedOpportunitiesGrid, column);
   }

   /**
    * Get the current number of records in the Recently <b>Viewed</b> datagrid.
    * @returns {promise.Promise<number>}
    */
   async getNumberOfRecordsInRecentlyViewed(): promise.Promise<number> {
      expect(await this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getRowsCount(this.recentlyViewedOpportunitiesGrid);
   }

   /**
    * Get the current number of records in the Recently <b>Created</b> datagrid.
    * @returns {promise.Promise<number>}
    */
   async getNumberOfRecordsInRecentlyCreated(): promise.Promise<number> {
      expect(await this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.opportunitiesDatagridPage.getRowsCount(this.recentlyCreatedOpportunitiesGrid);
   }

   async getRecentlyViewedGridValues(): promise.Promise<any> {
      return this.getGridValues(this.recentlyViewedOpportunitiesGrid);
   }

   async getRecentlyCreatedGridValues(): promise.Promise<any> {
      return this.getGridValues(this.recentlyCreatedOpportunitiesGrid);
   }

   async checkRecentlyViewedHasRowByValues(rowValues: Array<any>): promise.Promise<boolean> {
      return this.hasRowByValues(this.recentlyViewedOpportunitiesGrid, rowValues);
   }

   async checkRecentlyCreatedHasRowByValues(rowValues: Array<any>): promise.Promise<boolean> {
      return this.hasRowByValues(this.recentlyCreatedOpportunitiesGrid, rowValues);
   }

   async getRecentlyViewedRowIndexByValues(rowValues: Array<any>): promise.Promise<number> {
      return this.getRowIndexByValues(this.recentlyViewedOpportunitiesGrid, rowValues);
   }

   async getRecentlyCreatedRowIndexByValues(rowValues: Array<any>): promise.Promise<number> {
      return this.getRowIndexByValues(this.recentlyCreatedOpportunitiesGrid, rowValues);
   }

   async hasRecentlyViewedOpportunity(rowValues: Array<any>): promise.Promise<boolean> {
      return await this.opportunitiesDatagridPage.hasRowByValues(this.recentlyViewedOpportunitiesGrid, rowValues);
   }

   async hasRecentlyCreatedOpportunity(rowValues: Array<any>): promise.Promise<boolean> {
      return await this.opportunitiesDatagridPage.hasRowByValues(this.recentlyCreatedOpportunitiesGrid, rowValues);
   }

   async hasNotificationPopup(): promise.Promise<boolean> {
      // check if validation message is visible
      return await this.notificationPopup.all(by.css('div span')).filter((item) => {
         return item.isDisplayed();
      }).then((items) => {
         //Click on notification error popup
         if (items.length > 0) {
            return this.confirmButton.click().then(() => {
               return true;
            })
         }
         return false
      });
   }

   /**
    * Filter Recently Viewed opportunities by Status
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyViewedByStatus(status: string): promise.Promise<any> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterStatusRecentlyViewed.click();
      await this.filterInput.sendKeys(status);
   }


   /**
    * Filter Recently Created opportunities by Status
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyCreatedByStatus(status: string): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterStatusRecentlyCreated.click();
      await this.filterInput.sendKeys(status);
   }


   /**
    * Filter Recently Viewed opportunities by Assign To
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyViewedByAssignedTo(assignTo: string): promise.Promise<any> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterAssignToRecentlyViewed.click();
      return this.filterInput.sendKeys(assignTo);
   }

   /**
    * Filter Recently Created opportunities by Assign To
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyCreatedByAssignedTo(assignTo: string): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterAssignToRecentlyCreated.click();
      return this.filterInput.sendKeys(assignTo);
   }

   /**
    * Filter dashboard recently viewed opportunities by Created By
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyViewedByCreatedBy(createdBy: string): promise.Promise<any> {
      expect(this.recentlyViewedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterCreatedByRecentlyViewed.click();
      return this.filterInput.sendKeys(createdBy);
   }

   /**
    * Filter dashboard recently created opportunities by Created By
    * @param {Array<any>} status
    * @returns {promise.Promise<boolean>}
    */
   async filterRecentlyCreatedByCreatedBy(createdBy: string): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.filterCreatedByRecentlyCreated.click();
      return this.filterInput.sendKeys(createdBy);
   }

   /**
    * Clear Recently created filter by Created By
    * @returns {promise.Promise<boolean>}
    */
   async clearFilter(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.textFieldPage.clear();
      await this.closeFilter.click();
   }


   /**
    * Get text from Status column
    * @returns {promise.Promise<any>}
    */
   async getStatusColumnText(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.statusColumnCell.getText();
   }

   /**
    * Get text from AssignTo column
    * @returns {promise.Promise<any>}
    */
   async getAssignToColumnText(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.assignedToColumnCell.getText();
   }

   /**
    * Get text from CreatedBy column
    * @returns {promise.Promise<any>}
    */
   async getCreatedByColumnText(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      return this.createdByColumnCell.getText();
   }

   /**
    * Close All Opportunities filter
    * @returns {promise.Promise<boolean>}
    */
   async closeOpportunitiesFilter(): promise.Promise<any> {
      expect(this.recentlyCreatedOpportunitiesGrid.waitReady()).toBeTruthy();
      await this.closeFilter.click();
   }

   /**
    * Click delivery materials link.
    * @returns {promise.Promise<any>}
    */
   async clickDeliveryMaterialsLink(): promise.Promise<any> {
      expect(this.deliveryMaterialsDropdown.waitReady()).toBeTruthy();
      await this.scrollToElement(this.deliveryMaterialsDropdown);
      return this.deliveryMaterialsDropdown.click();
   }

   /**
    * Click search by changepoint Id link.
    * @returns {promise.Promise<any>}
    */
   async clickSearchByChangepointIdLink(): promise.Promise<any> {
      await this.clickDeliveryMaterialsLink();
      expect(this.searchByChangepointIdDropdownBtn.waitReady()).toBeTruthy();
      return this.searchByChangepointIdDropdownBtn.click();
   }

}

export let dashboardPage = new DashboardPage(new OpportunitiesDatagridPage());