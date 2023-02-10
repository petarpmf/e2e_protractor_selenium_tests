import {by, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {BasePage} from "./base.page";


/**
 * Class for clarity dropdowns.
 *
 */

export class ClarityDropdownElement extends BasePage {

   dropdownElement: ElementFinder;

   constructor(dropdownElement: ElementFinder) {
      super();
      this.dropdownElement = dropdownElement;
   }

   /**
    * Select an option in a dropdown by using its value
    * @param dropdownElement
    * @param optionValue
    * @returns {Promise<void>}
    */
   async selectOptionByValue(optionValue: string): promise.Promise<any> {
      expect(this.dropdownElement.waitReady()).toBeTruthy();
      let optionElements = await this.dropdownElement.all(by.tagName('option'));
      await this.dropdownElement.click();
      for (let i = 0; i < optionElements.length; i++) {
         if (await optionElements[i].getAttribute("value") == optionValue) {
            await optionElements[i].click();
            return;
         }
      }
      throw "No option in select element with locator: " + this.dropdownElement.locator() + " with value: " + optionValue;
   };

   /**
    * Select an option in a dropdown by using text
    * @param element
    * @param text
    * @returns {Promise<any>}
    */
   async selectOptionByText(text: string): promise.Promise<any> {
      expect(this.dropdownElement.waitReady()).toBeTruthy();
      var regexText = new RegExp('^\\s*' + text + '\\s*$');
      let optionElement = await this.dropdownElement.all(by.cssContainingText("option", regexText)).first();
      if (await optionElement.waitReady()) {
         await this.dropdownElement.click();
         return optionElement.click();
      }
      throw "No option in select element with locator: " + this.dropdownElement.locator() + " containing text: " + text;
   };

   /**
    * Get all options from dropdown in an array of strings
    * @returns {promise.Promise<Array<string>>}
    */
   async getAllOptionsText(): promise.Promise<Array<string>> {
      expect(this.dropdownElement.waitReady()).toBeTruthy();
      let options = [];
      let optionElements = await this.dropdownElement.all(by.css("option"));
      for (let i = 0; i < optionElements.length; i++) {
         options.push((await optionElements[i].getText()).trim());
      }
      return options;
   };

   /**
    * Get only the selected option text as a string
    * @returns {promise.Promise<string>}
    */
   async getSelectedOptionText(): promise.Promise<string> {
      let foundValue = "";
      expect(this.dropdownElement.waitReady()).toBeTruthy();
      let optionElements = await this.dropdownElement.all(by.css("option"));
      for (let i = 0; i < optionElements.length; i++) {
         if (await optionElements[i].getAttribute("selected") == "true" || await optionElements[i].getAttribute("selected") == "selected")
            foundValue = await optionElements[i].getText();
      }
      return foundValue.trim();
   };
}