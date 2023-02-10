import {promise} from "selenium-webdriver";
import {by} from "protractor";
import {DataGridActionBarPage} from "./data-grid-action-bar.page";

export class ActionButton {
   public static readonly KENDO_ADD = by.css('.k-grid-add');
   public static readonly KENDO_EDIT = by.css('.k-grid-edit');
   public static readonly KENDO_DELETE = by.css('.k-grid-delete');
   public static readonly KENDO_VIEW = by.css('.k-grid-View');
}

export class TableColumn {
   byLocator;

   constructor(byLocator) {
      this.byLocator = byLocator;
   }
}

export class TableHeader extends TableColumn {
   sortable: boolean;
   filterable: boolean;

   constructor(byLocator, sortable: boolean, filterable: boolean) {
      super(byLocator);
      this.sortable = sortable;
      this.filterable = filterable;
   }
}

/**
 *  Interface for kendo/clarity grid.
 */
export interface IDataGridOperations {
   /**
    * Select row function by grid and byNames (array of strings).
    *
    * @param grid
    * @param byNames
    */
   selectRow(grid: any, byNames: Array<string>, existingDeferred?): promise.Promise<any>;

   /**
    * Select rows function by grid and byNames (array of arrays).
    * @param grid
    * @param {Array<Array<string>>} byNames
    * @returns {promise.Promise<any>}
    */
   selectRows(grid: any, byNames: Array<Array<string>>): promise.Promise<any>;

   /**
    * Edit row function by grid and byNames (array of strings).
    *
    * @param grid
    * @param byNames
    */
   editRow(grid: any, byNames: Array<string>, existingDeferred?): promise.Promise<any>;

   /**
    * Edit rows function by grid and byNames (array of arrays).
    * @param grid
    * @param {Array<Array<string>>} byNames
    * @returns {promise.Promise<any>}
    */
   editRows(grid: any, byNames: Array<Array<string>>): promise.Promise<any>;

   /**
    * Click on next page button.
    *
    * @param grid
    */
   clickNextPage(grid: any): promise.Promise<any>;

   /**
    * Select item from dropdown.
    *
    * @param listboxButton
    * @param listboxName
    * @param itemInListName
    */
   selectItemFromListbox(listboxButton: any, listboxName?: string, itemInListName?: string): promise.Promise<any>;

   /**
    * Click on add element button.
    */
   clickAddElementBtn(): promise.Promise<any>;

   /**
    * Click update button.
    */
   clickUpdateBtn(): promise.Promise<any>;

   /**
    * Click on delete button.
    *
    * @param datagridContainerName
    * @param itemName
    */
   clickDeleteBtn(datagridContainerName: string, itemName: string): promise.Promise<any>;

   clickEditBtn(datagridContainerName: string, itemName: string): promise.Promise<any>;

   expandRow (rowName: string, selector?): promise.Promise<any>;

   /**
    * Get all values from grid and push into array.
    *
    * @param grid
    */
   getGridValues(grid: any): promise.Promise<any>;

   hasActionButton(grid: any, action: ActionButton);

   /**
    * Check if given grid has a row containing rowValues (array of cell values)
    *
    * @param grid
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<boolean>}
    */
   hasRowByValues(grid, rowValues: Array<any>): promise.Promise<boolean>;

   deselectElement(multiselectId, elementName: string);

   /**
    * Get number of grid rows.
    *
    * @param datagridContainer
    */
   getRowsCount(datagridContainer): promise.Promise<any>

   /**
    * Set input value.
    * @param inputFieldId
    * @param {string} value
    * @returns {promise.Promise<any>}
    */
   setInputValue(inputFieldId: any, value: string): promise.Promise<any>

   /**
    * Edit grid by name.
    * @param grid
    * @param inputFieldId
    * @param {Array<string>} uniqueRowValues
    * @param {string} newValue
    * @returns {promise.Promise<any>}
    */
   editRowInputField(grid: any, inputFieldId: any, uniqueRowValues: Array<string>, newValue: string): promise.Promise<any>

   /**
    * Get row index in the grid by rowValues (array of cell values)
    *
    * @param grid
    * @param {Array<any>} rowValues
    * @returns {promise.Promise<number>}
    */
   getRowIndexByValues(grid: any, rowValues: Array<any>): promise.Promise<number>;

   /**
    * Get number of selected grid rows.
    *
    * @param datagridContainer
    */
   getSelectedRowsCount(datagridContainer): promise.Promise<any>

   /**
    * Get number of non-selected grid rows.
    *
    * @param datagridContainer
    */
   getNonSelectedRowsCount(datagridContainer): promise.Promise<any>

   /**
    * Click the header of a given column in the grid (used for sorting)
    *
    * @param datagridContainer
    * @param header
    */
   clickHeader(datagridContainer, header): promise.Promise<any>

   /**
    * Get the data from a given Datagrid column. One element per row.
    * @param datagridContainer the container to use
    * @param column the column to get the data from
    * @returns {promise.Promise<any>} Array of strings, where each element is taken from a given row in the table
    */
   getDataFromColumn(datagridContainer, column): promise.Promise<any>;

}