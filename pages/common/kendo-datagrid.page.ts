
import {browser, By, by, element, protractor} from 'protractor';
import {BasePage} from "./base.page";
import {promise} from "selenium-webdriver";
import {Localization} from "../../common/localization";
import {ActionButton, IDataGridOperations} from "./data-grid-operations.page";
import {StringUtils} from '../../common/utils/string.utils';
import {DataGridActionBarPage} from "./data-grid-action-bar.page";

let localization = new Localization();
let translate = localization.getLocalization();

/**
 * Class for kendo grids.
 *
 */
export class KendoDatagridPage extends BasePage implements IDataGridOperations {
   addButton = element(By.css('.k-grid-add'));
   editButtonsGrid = element(by.css('.k-edit-buttons'));
   cancelButton = element(By.css('.k-grid-cancel'));
   updateElementBtn = this.editButtonsGrid.element(by.css('.k-grid-update'));
   editElementBtn = this.editButtonsGrid.element(By.css('.k-grid-edit'));
   solutionSetDatagrid = element(By.id('solutionSetDatagrid'));
   tableRow = element(by.css('.k-grid-content table tbody tr'));

   hasActionButton(gridId: any, action: ActionButton) {
      let deferred = protractor.promise.defer();
      expect(gridId.waitReady()).toBeTruthy();
      expect(gridId.all(by.css('table tbody tr')).first().waitReady()).toBeTruthy();
      gridId.all(by.css('table tbody tr')).then((items) => {
         if (items.length >= 1) {
            expect(items[0].waitReady()).toBeTruthy();
            items[0].element(action).isDisplayed().then((isVisible) => {
               deferred.fulfill(isVisible);
            });
         } else {
            console.warn("There are no rows in the data grid, that's why there are no visible actions.");
            deferred.fulfill(false);
         }
      });
      return deferred.promise;
   }

   /**
    * Check whether element exist in array.
    * Check whether array of elements appears in whole row (wholeString).
    * If some of array elements doesn't appears in row (wholeString) return false, otherwise return true.
    *
    * @param wholeString
    * @param array
    * @returns {boolean}
    */
   inArray(wholeString, array) {
      let length = array.length;
      let hasElement = true;
      for (let i = 0; i < length; i++) {
         if (wholeString.indexOf(array[i]) < 0)
            hasElement = false;
      }
      return hasElement;
   }

   selectRow(gridId: any, byNames: Array<string>, def?): promise.Promise<any> {
      return null;
   }

   selectRows(grid: any, byNames: Array<Array<string>>): promise.Promise<any> {
      return null;
   }

   /**
    * Edit row function by gridId and byNames (array of strings).
    *
    * @param gridId
    * @param byNames
    * @param def
    */
   editRow(gridId: any, byNames: Array<string>, def?): promise.Promise<any> {
      let deferred = def || protractor.promise.defer();
      expect(gridId.waitReady()).toBeTruthy();
      expect(gridId.all(by.css('table tbody tr')).first().waitReady()).toBeTruthy();
      gridId.all(by.css('table tbody tr')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return StringUtils.containStrings(text, byNames);
         });
      }).then((items) => {
         if (items.length == 1) {
            expect(items[0].waitReady()).toBeTruthy();
            items[0].element(by.css('.k-grid-edit')).click().then(() => {
               deferred.fulfill(true);
            });
         } else {
            if (items.length == 0) {
               this.clickNextPage(gridId).then((hasMorePages) => {
                  if (hasMorePages) {
                     this.editRow(gridId, byNames, deferred);
                  } else {
                     deferred.reject("There are no element in the grid.");
                  }
               });
            } else {
               throw new Error('Found more than one element on the page.');
            }
         }
      });
      return deferred.promise;
   }

   /**
    * Edit rows function by gridId and byNames (array of arrays).
    * @param gridId
    * @param {Array<Array<string>>} rows
    * @returns {promise.Promise<any>}
    */
   async editRows(gridId: any, rows: Array<Array<string>>): promise.Promise<any> {
      if (rows.length == 0) {
         // we need to return a fulfilled promise anyway, so this is a custom promise that is fulfilled immediately.
         let deferred = protractor.promise.defer();
         deferred.fulfill();
         return deferred.promise;
      }
      for (let i = 0; i < rows.length; ++i) {
         await this.editRow(gridId, rows[i]);
      }
   }

   /**
    * Click on add element button.
    *
    * @returns {any}
    */
   clickAddElementBtn(): promise.Promise<any> {
      expect(this.addButton.waitReady()).toBeTruthy();
      return this.addButton.click();
   };

   /**
    * Click update button.
    *
    * @returns {any}
    */
   async clickUpdateBtn(): promise.Promise<any> {
      expect(this.editButtonsGrid.waitReady()).toBeTruthy();
      expect(this.updateElementBtn.waitReady()).toBeTruthy();
      await this.updateElementBtn.click();
   };

   /**
    * Click edit button.
    *
    * @returns {any}
    */
   clickEditBtn(): promise.Promise<any> {
      expect(this.editButtonsGrid.waitReady()).toBeTruthy();
      expect(this.editElementBtn.waitReady()).toBeTruthy();
      return this.editElementBtn.click();
   };

   /**
    * Click on delete button.
    *
    * @param datagridContainerName
    * @param itemName
    */
   async clickDeleteBtn(datagridContainerName: string, itemName: string): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      let datagridContainer = element(By.id(datagridContainerName));
      expect(datagridContainer.waitReady()).toBeTruthy();
      await this.deleteItemFromDatagrid(datagridContainer, itemName, deferred);
      if (datagridContainerName != 'solutionElementDatagrid') {
         browser.switchTo().alert().accept().then(() => {
            this.getRowsCount(datagridContainer).then((gridRows) => {
               deferred.fulfill(gridRows);
            });
         });
      }
      else {
         deferred.fulfill(true);
      }

      return deferred.promise;
   };


   /**
    * Select item from dropdown.
    *
    * @param listboxButton
    * @param listboxName
    * @param itemInListName
    */
   selectItemFromListbox(listboxButton: any, listboxName: string, itemInListName: string): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      expect(listboxButton.waitReady()).toBeTruthy();
      listboxButton.click().then(() => {
         expect(element(By.id(listboxName)).all(by.css('li')).last().waitReady()).toBeTruthy();
         return element(By.id(listboxName)).all(by.css('li')).filter((item, index) => {
            return item.getText().then((text) => {
               return text == itemInListName;
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
   };

   /**
    * Get number of grid rows.
    *
    * @param datagridContainer
    */
   getRowsCount(datagridContainer): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      expect(datagridContainer.all(by.css('tr')).last().waitReady()).toBeTruthy();
      datagridContainer.element(by.css('.k-pager-info')).getText().then((text) => {
         let match = text.match(/\d+/);
         deferred.fulfill(match == null
            ? 0
            : parseInt(match[0]));
      });

      return deferred.promise;
   };

   /**
    * Delete item from datagrid.
    *
    * @param datagridContainer
    * @param itemName
    * @param deferred
    */
   deleteItemFromDatagrid(datagridContainer, itemName: string, deferred) {
      expect(datagridContainer.all(by.css('.k-grid-content table tbody tr')).last().waitReady()).toBeTruthy();
      datagridContainer.all(by.css('.k-grid-content table tbody tr')).filter((item) => {
         return item.getText().then((text: string) => {
            return text.indexOf(itemName) != -1;
         });
      }).then((filteredItems) => {
         if (filteredItems.length == 0) {
            this.clickNextPage(datagridContainer).then((hasMorePages) => {
               if (hasMorePages) {
                  this.deleteItemFromDatagrid(datagridContainer, itemName, deferred);
               } else {
                  deferred.fulfill(0);
               }
            });
         } else {
            filteredItems[0].element(by.css('.k-grid-delete')).click();
         }
      });
   };

   /**
    * Click on next page button.
    *
    * @param grid
    */
   clickNextPage(grid): promise.Promise<any> {
      let deferred = protractor.promise.defer();

      expect(grid.element(by.css('.k-grid-pager')).all(by.css('.k-pager-nav')).last().waitReady()).toBeTruthy();

      let nextPageClick = grid.element(by.css('a[aria-label="Go to the next page"]'));

      this.hasClass(nextPageClick, 'k-state-disabled').then((isEnabled) => {
         if (!isEnabled) {
            expect(nextPageClick.waitReady()).toBeTruthy();
            nextPageClick.click().then(() => {
               deferred.fulfill(true);
            });
         } else {
            deferred.fulfill(false);
         }
      });

      return deferred.promise;
   }

   /**
    * Get all values from grid and push into array.
    *
    * @param grid
    */
   getGridValues(grid: any): promise.Promise<Array<string>> {
      let arrayValues = [];
      expect(grid.element(by.css(".k-grid-content")).all(by.css('tbody tr td'))
         .last().waitReady()).toBeTruthy();
      return grid.element(by.css('.k-grid-content table tbody')).all(by.css('tr[role="row"]'))
         .then((rows: any[]) => {
            let deferred = protractor.promise.defer();
            //forEach row find column
            rows.forEach((row) => {
               row.all(by.css('td')).map((elem) => {
                  return elem.getText();
               }).then((columnText) => {
                  arrayValues.push(columnText);
               }).then(() => {
                  deferred.fulfill(arrayValues);
               });
            });
            return deferred.promise;
         });
   }

   /**
    *
    * Clicks on action with name @actionButton for the row which is found by the values in @byRowValues.
    * @param gridId
    * @param {string} actionButton
    * @param {Array<string>} byRowValues - found specific row
    * @param def
    */
   executeAction(gridId: any, actionButton: ActionButton, byRowValues: Array<string>, def?) {
      let deferred = def || protractor.promise.defer();
      expect(gridId.waitReady()).toBeTruthy();
      expect(gridId.all(by.css('table tbody tr')).first().waitReady()).toBeTruthy();
      gridId.all(by.css('table tbody tr')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return StringUtils.containStrings(text, byRowValues);
         });
      }).then((items) => {
         if (items.length == 1) {
            if (items.length > 1) {
               console.warn("More than one rows match with the given filter values. First one will be used.");
            }
            expect(items[0].waitReady()).toBeTruthy();
            items[0].element(actionButton).click().then(() => {
               deferred.fulfill(true);
            });
         } else {
            if (items.length == 0) {
               this.clickNextPage(gridId).then((hasMorePages) => {
                  if (hasMorePages) {
                     this.editRow(gridId, byRowValues, deferred);
                  } else {
                     deferred.reject("There are no element in the grid.");
                  }
               });
            }
         }
      });
      return deferred.promise;

   }

   /**
    * Checks if there is a row in the data grid by values that should be in that row.
    *
    * @param grid
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<any>}
    */
   async hasRowByValues(grid, rowValues: Array<any>): promise.Promise<boolean> {
      expect(grid.waitReady()).toBeTruthy();
      return this.tableRow.isPresent().then((status) => {
         if (status) {
            return grid.all(by.css('table tbody tr')).filter((item, index) => {
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

   getRow(grid: any, byValues: Array<string>) {
      expect(grid.waitReady()).toBeTruthy();
      expect(grid.all(by.css('table tbody tr')).last().waitReady()).toBeTruthy();
      return grid.all(by.css('.k-grid-content table tbody tr')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return StringUtils.containStrings(text, byValues);
         });
      })

   }

   /**
    * Deselect element
    * @param multiselectId
    * @param {string} elementName
    * @param {boolean} clearAll
    */
   async deselectElement(multiselectId, elementName: string) {
      expect(multiselectId.waitReady()).toBeTruthy();
      expect(multiselectId.all(by.css("li span")).last().waitReady()).toBeTruthy();
      await multiselectId.all(by.css("li span")).filter((item, index) => {
         return item.getText().then((text: string) => {
            return text.indexOf(elementName) != -1;
         });
      }).then((items) => {
         if (items.length == 1) {
            let parent = items[0].element(By.xpath('ancestor::li'));
            expect(parent.element(by.css('.k-i-close')).waitReady()).toBeTruthy();
            return parent.element(by.css('.k-i-close')).click();
         } else {
            throw new Error('No elements found');
         }
      })
   }

   /**
    * Set input value.
    * @param inputFieldId
    * @param {string} value
    * @returns {promise.Promise<any>}
    */
   async setInputValue(inputFieldId: any, value: string): promise.Promise<any> {
      expect(await inputFieldId.waitReady()).toBeTruthy();
      await inputFieldId.clear();
      await inputFieldId.sendKeys(value);
   }

   /**
    * Edit grid by name.
    * @param grid
    * @param inputFieldId
    * @param {Array<string>} uniqueRowValues
    * @param {string} newValue
    * @returns {promise.Promise<any>}
    */
   async editRowInputField(grid: any, inputFieldId: any, uniqueRowValues: Array<string>, newValue: string): promise.Promise<any> {
      await this.editRow(grid, uniqueRowValues);
      await this.setInputValue(inputFieldId, newValue);
      await this.clickUpdateBtn();
   }

   getRowIndexByValues(grid: any, rowValues: Array<any>): promise.Promise<number> {
      return null;
   }

   getSelectedRowsCount(datagridContainer): promise.Promise<any> {
      console.warn("Function getSelectedRowsCount() is not implemented in kendo-datagrid.page.ts");
      return undefined;
   }

   getNonSelectedRowsCount(datagridContainer): promise.Promise<any> {
      console.warn("Function getNonSelectedRowsCount() is not implemented in kendo-datagrid.page.ts");
      return undefined;
   }


   clickHeader(datagridContainer, header): promise.Promise<any> {
      console.warn("Function clickHeader() is not implemented in kendo-datagrid.page.ts");
      return null;
   }


   getDataFromColumn(datagridContainer, column): promise.Promise<any> {
      return null;
   }
   async expandRow(rowName:string): promise.Promise<any> {
      throw new Error('Should be implement');
   }
}