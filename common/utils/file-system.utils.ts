import {browser} from "protractor";
import {BasePage} from "../../pages/common/base.page";
import {promise} from "selenium-webdriver";
import {EnvironmentAnalyser} from "./environment-analyser.utils";

let fs = require('fs'); // File System
let fs_extra = require('fs-extra');
let glob = require("glob");

export class FileSystemUtils {

   static basePage = new BasePage();

   /**
    * Checks if file (can be regex pattern) exists at specified location and returns the result.
    * @param {string} fileName - the file name
    * @param {string} dir - path to the dir
    * @param {number} timeout in seconds
    * @returns {boolean} true if file exists, false otherwise.
    */
   static async isFileExisting(fileName: string, dir: string, timeout = 60): promise.Promise<boolean> {
      // wait max <timeout> seconds for file to be downloaded
      let exists = false;
      await browser.driver.wait(async () => {
         await fs_extra.ensureDir(dir);
         let regex = new RegExp(fileName);
         let files = fs_extra.readdirSync(dir);

         for (let file of files) {
            if (regex.test(file)) {
               exists = true;
            }
         }
         return exists;
      }, timeout * 1000, "Waiting for element timed out after " + timeout + " seconds!")
         .then(() => {
            return exists;
         }, (error) => {
            console.error(error);
            return exists;
         })
      return exists;
   }

   /**
    * Deletes a file from the disc pointed by the provided path.
    * If file exists, it is deleted, otherwise nothing happens.
    *
    * @param {string} filePath - full path (including file name)
    */
   static deleteFile(filePath: string): void {
      // console.log('[DEBUG] File to be deleted:\n  ' + filePath);
      try {
         fs_extra.removeSync(filePath);
      }
      catch (err) {
         console.log(err)
      }
   }

   /**
    * Gets OS specific file path separator.
    *
    * @returns {promise.Promise<string>}
    */
   static async getFilePathSeparator(): promise.Promise<string> {
      let isWindows: boolean = await EnvironmentAnalyser.isWindows();
      if (isWindows) {
         return '\\';
      }

      return '/';
   }

   /**
    * Copy file from source to dest directory
    * @param srcFolderPath
    * @param destFolderPath
    * @param fileName
    * @returns {promise.Promise<string>}
    */
   static async copyFile(srcFolderPath, destFolderPath, fileName): promise.Promise<void> {
      let separator = await this.getFilePathSeparator();
      fs_extra.ensureDirSync(destFolderPath);
      let filePath = srcFolderPath + separator + fileName;
      let newFilePath = destFolderPath + separator + fileName;
      fs_extra.copySync(filePath, newFilePath);
   }
}