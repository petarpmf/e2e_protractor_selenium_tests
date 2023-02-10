import {browser} from "protractor";
import {promise} from "selenium-webdriver";
import {Workbook, Worksheet, Row, Cell} from 'exceljs';

let downloadDir = browser.params.downloadDefaultDirectory;
let wb: Workbook = new Workbook();

export class ExcelFileSystemUtils {

   /**
    * Checking whether column exist in excel file.
    * @param fileName
    * @param columnName
    * @param row
    * @param sheetName
    */
   static async isColumnExisting(fileName: string, columnName: string, row = 1, sheetName = "data"): promise.Promise<boolean> {
      let exists = false;
      return await wb.xlsx.readFile(fileName).then(function () {
         //sheet object
         let sheet: Worksheet = wb.getWorksheet(sheetName);
         let columnNum = sheet.columns.length;
         for (let i = 1; i <= columnNum; i++) {
            if (sheet.getRow(row).getCell(i).value == columnName) {
               exists = true;
               break;
            }
         }
         return exists;
      });
   }
}