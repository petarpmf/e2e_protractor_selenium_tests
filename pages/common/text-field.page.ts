import {BasePage} from "./base.page";
import {ElementFinder, protractor} from "protractor";
import {EnvironmentAnalyser} from "../../common/utils/environment-analyser.utils";
import {promise} from "selenium-webdriver";

export class TextFieldPage extends BasePage {

   textField: ElementFinder;

   constructor(textField: ElementFinder) {
      super();
      this.textField = textField;
   }

   /**
    * Clears the content inside the text field.
    *
    * @returns {promise.Promise<void>}
    */
   async clear(): promise.Promise<void> {

      let isWindows: boolean = await EnvironmentAnalyser.isWindows();

      expect(this.textField.waitReady()).toBeTruthy();
      if (isWindows) {
         await this.textField.sendKeys(protractor.Key.CONTROL, "a", protractor.Key.BACK_SPACE);
      } else {
         // For any other OS, just click on backspace equal to the number of characters in the field
         let text = await this.textField.getAttribute('value');
         let textLength: number = text.length || 0;

         for (let i = 0; i < textLength; ++i) {
            await this.textField.sendKeys(protractor.Key.BACK_SPACE);
         }
      }
   }
}