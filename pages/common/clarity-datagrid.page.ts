import {By, by, element, ElementFinder, protractor} from 'protractor';
import {BasePage} from "./base.page";
import {promise} from "selenium-webdriver";
import {Localization} from "../../common/localization";
import {ActionButton, IDataGridOperations, TableColumn, TableHeader} from "./data-grid-operations.page";
import {StringUtils} from '../../common/utils/string.utils';
import {DataGridActionBarPage} from "./data-grid-action-bar.page";

let localization = new Localization();
let translate = localization.getLocalization();


/**
 * Class for clarity grids.
 *
 */

export class ClarityDatagridPage extends BasePage implements IDataGridOperations {
   editButton = element(by.css('clr-icon.is-solid'));

   /**
    * Select Row Grid.
    * @param grid
    * @param {Array<string>} row
    * @param def
    * @returns {promise.Promise<any>}
    */
   async selectRow(grid: any, row: Array<string>, def?): promise.Promise<any> {
      let deferred = def || protractor.promise.defer();
      expect(grid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).last().waitReady()).toBeTruthy();

      grid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return StringUtils.containStrings(text, row);
         });
      }).then((items) => {
         if (items.length > 0) {
            if (items.length > 1) {
               console.error('Found more than one rows on the page. First one is being used.');
            }
            expect(items[0].element(by.css('.datagrid-select')).waitReady()).toBeTruthy();
            items[0].element(by.css('.datagrid-select clr-checkbox')).click().then(() => {
               deferred.fulfill(true);
            });
         } else {
            this.clickNextPage(grid).then((hasMorePages) => {
               if (hasMorePages) {
                  this.selectRow(grid, row, deferred);
               } else {
                  deferred.reject("There are no element in the grid.");
               }
            });
         }
      });
      return deferred.promise;

   }

   /**
    * Select Rows Grid
    * @param grid
    * @param {Array<Array<string>>} rows
    * @returns {promise.Promise<any>}
    */
   async selectRows(grid: any, rows: Array<Array<string>>): promise.Promise<any> {
      if (rows.length == 0) {
         // we need to return a fulfilled promise anyway, so this is a custom promise that is fulfilled immediately.
         let deferred = protractor.promise.defer();
         deferred.fulfill();
         return deferred.promise;
      }
      for (let i = 0; i < rows.length; ++i) {
         await this.selectRow(grid, rows[i]);
      }
   }

   clickNextPage(grid: any): promise.Promise<boolean> {

      expect(grid.all(by.css('.datagrid-row')).last().waitReady()).toBeTruthy();

      let nextPageButton = grid.element(by.css('clr-dg-pagination'));
      return nextPageButton.isPresent().then((isAvailable) => {

         if (isAvailable) {
            this.hasClass(nextPageButton, 'pagination').then((isEnabled) => {
               if (isEnabled) {
                  expect(nextPageButton.waitReady()).toBeTruthy();
                  nextPageButton.click().then(() => {
                     return true;
                  });
               } else {
                  return false;
               }
            });
         }
         else {
            return false;

         }
      });

   }

   clickEditBtn(grid: any): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   /**
    * Select item from dropdown.
    *
    * @param listboxButton
    * @param listboxName
    * @param itemInListName
    */
   selectItemFromListbox(listboxButton: any, itemInListName: string): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      expect(listboxButton.waitReady()).toBeTruthy();
      listboxButton.click().then(() => {
         expect(listboxButton.all(by.css('option')).last().waitReady()).toBeTruthy();
         return listboxButton.all(by.css('option')).filter((item, index) => {
            return item.getText().then((text) => {
               return text.indexOf(itemInListName) != -1;
            });
         }).then((items) => {
            if (items.length == 1) {
               expect(items[0].waitReady()).toBeTruthy();
               return items[0].click().then(() => {
                  deferred.fulfill(true);
               });
            } else {
               deferred.fulfill(false);
            }
         });
      });
      return deferred.promise;
   }

   clickAddElementBtn(): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   clickUpdateBtn(): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   clickDeleteBtn(datagridContainerName: string, itemName: string): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   /**
    * Get rows and cells of the giver grid as an array of arrays
    *
    * @param grid
    * @returns {promise.Promise<any>}
    */
   getGridValues(grid: any): promise.Promise<any> {
      let arrayValues = [];
      expect(grid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).last().waitReady()).toBeTruthy();
      return grid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row'))
         .then((rows: any[]) => {
            let deferred = protractor.promise.defer();
            //forEach row find column
            rows.forEach((row) => {
               row.all(by.tagName('clr-dg-cell')).map(async (cell) => {
                  if (await cell.element(by.css('input[type="number"]')).isPresent()) {
                     return cell.element(by.css('input[type="number"]')).getAttribute('value');
                  }
                  else if (await cell.element(by.tagName('select')).isPresent()) {
                     return (cell.element(by.css('select option[selected="selected"]')).getText());
                  }

                  return cell.getText()
               })
                  .then((columnText) => {
                     arrayValues.push(columnText);
                  }).then(() => {
                  deferred.fulfill(arrayValues);
               });
            });
            return deferred.promise;
         });
   }

   hasActionButton(grid: any, action: ActionButton) {
      throw new Error('Should be implement');
   }

   /**
    * Returns true if the given grid has a row containing rowValues (array of cell values)
    *
    * @param grid
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<boolean>}
    */
   hasRowByValues(grid, rowValues: Array<any>): promise.Promise<boolean> {
      expect(grid.waitReady()).toBeTruthy();
      return element(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).isPresent().then((status) => {
         if (status) {
            return grid.all(by.css('.datagrid-table-wrapper .datagrid-body .datagrid-row')).filter((item, index) => {
               return item.getText().then((text: string) => {
                  return StringUtils.containStrings(text, rowValues);
               });
            }).then((rows) => {
               return rows && rows.length > 0;
            });
         }
         else {
            return false;
         }
      });
   }

   /**
    * Returns row index in the grid of the first met row with the given rowValues (array of cell values)
    * or -1 if there is no such row
    *
    * @param grid
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<number>}
    */
   async getRowIndexByValues(grid, rowValues: Array<any>): promise.Promise<number> {
      let allRowsValues = await this.getGridValues(grid);
      let result = -1;
      allRowsValues.forEach((currentRowValues, index) => {
         if (rowValues.every(val => currentRowValues.indexOf(val) >= 0) && result == -1) {
            result = index;
         }
      });

      return result;
   }

   deselectElement(multiselectId, elementName: string) {
      throw new Error('Should be implement');
   }

   getRowsCount(datagridContainer): promise.Promise<any> {
      return datagridContainer.element(By.css("div.datagrid-body")).all(By.tagName("clr-dg-row")).count();
   }

   setInputValue(inputFieldId: any, value: string): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   editRowInputField(grid: any, inputFieldId: any, uniqueRowValues: Array<string>, newValue: string): promise.Promise<any> {
      throw new Error('Should be implement');
   }

   getSelectedRowsCount(datagridContainer): promise.Promise<number> {
      return datagridContainer.element(By.css("div.datagrid-body")).all(By.css("clr-dg-row.datagrid-selected")).count();
   }

   getNonSelectedRowsCount(datagridContainer): promise.Promise<number> {
      return datagridContainer.element(By.css("div.datagrid-body")).all(By.css("clr-dg-row:not(.datagrid-selected)")).count();
   }

   /**
    * Used for sorting. (sort by this column)
    * @param datagridContainer datagrid to be used
    * @param {TableHeader} header which header to click on
    * @returns {promise.Promise<void>}
    */
   clickHeader(datagridContainer, header: TableHeader): promise.Promise<void> {
      return datagridContainer.element(header.byLocator).click();
   }

   /**
    * Get the data from a given Clarity Datagrid column. One element per row.
    * @param datagridContainer the container to use
    * @param column the column to get the data from
    * @returns {promise.Promise<any>} Array of strings, where each element is taken from a given row in the table
    */
   async getDataFromColumn(datagridContainer: ElementFinder, column: TableColumn): promise.Promise<any[]> {
      return datagridContainer.all(column.byLocator).map(async (entry) => {
         return (await entry.getText()).trim();
      });
   }

   async editRow(gridId: any, byNames: Array<string>, def?): promise.Promise<any> {
      let deferred = def || protractor.promise.defer();
      expect(gridId.waitReady()).toBeTruthy();
      expect(gridId.all(by.css('clr-dg-row')).first().waitReady()).toBeTruthy();
      gridId.all(by.css('clr-dg-row')).filter((row, index) => {
         return row.getText().then((rowText: string) => {
            return StringUtils.containStrings(rowText, byNames);
         });
      }).then((rows) => {
         if (rows.length >= 1) {
            if (rows.length > 1) {
               console.error('Found more than one rows on the page. First one is being used.');
            }
            expect(rows[0].waitReady()).toBeTruthy();
            rows[0].element(by.css('clr-checkbox')).click().then(() => {
               this.editButton.click().then(() => {
                  deferred.fulfill(true);

               });
            });
         } else {
            this.clickNextPage(gridId).then((hasMorePages: boolean) => {
               if (hasMorePages) {
                  this.editRow(gridId, byNames, deferred);
               } else {
                  deferred.reject("There are no row in the data grid with values - " + byNames);
               }
            });
         }
      });
      return deferred.promise;
   }

   async editRows(grid: any, byNames: Array<Array<string>>): promise.Promise<any> {
      return null;
   }

   /**
    * Expand row
    * @param {string} rowName
    * @returns {promise.Promise<any>}
    */
   async expandRow(rowName: string, selector?): promise.Promise<any> {
      selector = selector || '.datagrid-cell';
      let phaCellDataGridSeelctor = element(by.cssContainingText(selector, rowName));
      expect(await phaCellDataGridSeelctor.element(by.css('button')).waitReady()).toBeTruthy();
      await phaCellDataGridSeelctor.element(by.css('button')).click();
   }
}

export class ClarityDatagridHeaders {
   static readonly OPPORTUNITY_NAME = new TableHeader(By.css("clr-dg-column.opportunity-name-column"), false, false);
   static readonly CUSTOMER_NAME = new TableHeader(By.css("clr-dg-column.customer-name-column"), true, false);
   static readonly STATUS = new TableHeader(By.css("clr-dg-column.status-column"), false, true);
   static readonly ASSIGNED_TO = new TableHeader(By.css("clr-dg-column.assigned-to-column"), false, true);
   static readonly CREATED_DATE = new TableHeader(By.css("clr-dg-column.created-column"), true, false);
   static readonly CREATED_BY = new TableHeader(By.css("clr-dg-column.created-by-column"), false, true);
}

export class ClarityDatagridColumns {
   static readonly OPPORTUNITY_NAME = new TableColumn(By.css("clr-dg-cell.opportunity-name-column"));
   static readonly CUSTOMER_NAME = new TableColumn(By.css("clr-dg-cell.customer-name-column"));
   static readonly STATUS = new TableColumn(By.css("clr-dg-cell.status-column"));
   static readonly ASSIGNED_TO = new TableColumn(By.css("clr-dg-cell.assigned-to-column"));
   static readonly CREATED_DATE = new TableColumn(By.css("clr-dg-cell.created-column"));
   static readonly CREATED_BY = new TableColumn(By.css("clr-dg-cell.created-by-column"));
}