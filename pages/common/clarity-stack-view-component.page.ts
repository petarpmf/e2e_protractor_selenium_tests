import {promise} from "selenium-webdriver";
import {By, by, ElementFinder, Locator, protractor} from "protractor";
import {BasePage} from "./base.page";

/**
 * Stack View Component page object.
 *
 */
export class ClarityStackViewComponentPage extends BasePage {

   private stackViewElement: ElementFinder;

   constructor(stackViewElement: ElementFinder) {
      super();
      this.stackViewElement = stackViewElement;
   }

   /**
    * Get all checkboxes' respective labels in a stackview component
    * @returns {promise.Promise<Array<string>>}
    */
   public async getAllCheckBoxLabels(): promise.Promise<Array<string>> {
      return this.getLabels(By.css('.checkbox label'));
   }

   /**
    * Get all selected checkboxes' respective labels in a stackview component
    * @returns {promise.Promise<any>}
    */
   public async getSelectedCheckBoxLabels(): promise.Promise<string> {
      return this.getLabels(By.css('.checkbox[ng-reflect-checked="true"] label'));
   }

   /**
    * Get all checked(pre-selected) checkboxes' respective labels in a stackview component
    * @returns {promise.Promise<any>}
    */
   public async getCheckedCheckBoxLabels(): promise.Promise<string> {
      return this.getLabels(By.css('.readonly-label'));
   }

   /**
    * Select checkboxes in a stackview component by their respective labels
    * @param {Array<string>} labels
    * @returns {promise.Promise<any>}
    */
   public async selectCheckBoxByLabels(labels: Array<string>): promise.Promise<any> {
      if (!labels || labels.length == 0) {
         // we need to return a fulfilled promise anyway, so this is a custom promise that is fulfilled immediately.
         let deferred = protractor.promise.defer();
         deferred.fulfill();
         console.warn("The elements are not selected");
         return deferred.promise;
      }
      expect(this.stackViewElement.waitReady()).toBeTruthy();
      for (let i = 0; i < labels.length; ++i) {
         await this.selectUnselectCheckBoxesByLabel(labels[i], true);
      }
   }

   /**
    * Unselect checkboxes in a stackview component by their respective labels
    * @param {Array<string>} labels
    * @returns {promise.Promise<any>}
    */
   public async unselectCheckBoxesByLabels(labels: Array<string>): promise.Promise<any> {
      if (!labels || labels.length == 0) {
         // we need to return a fulfilled promise anyway, so this is a custom promise that is fulfilled immediately.
         let deferred = protractor.promise.defer();
         deferred.fulfill();
         console.warn("Elements are not selected");
         return deferred.promise;
      }
      expect(this.stackViewElement.waitReady()).toBeTruthy();
      for (let i = 0; i < labels.length; ++i) {
         await this.selectUnselectCheckBoxesByLabel(labels[i], false);
      }
   }

   /**
    * Check whether checkboxes with labels are selected
    * @param {Array<string>} labels
    * @returns {promise.Promise<any>}
    */
   public async areCheckBoxesWithLabelSelected(labels: Array<string>): promise.Promise<boolean> {
      //Get solution sets by panelId.
      return await this.getSelectedCheckBoxLabels().then(async (selectedElements) => {
         if (selectedElements.length == 0) return false;
         for (let i = 0; i < labels.length; i++) {
            if (!selectedElements.includes(labels[i])) {
               return false;
            }
         }
         return true;
      });
   }

   /**
    * Check whether checkboxes with labels are preselected (checked)
    * @param {Array<string>} labels
    * @returns {promise.Promise<any>}
    */
   public async areCheckBoxesWithLabelChecked(labels: Array<string>): promise.Promise<boolean> {
      //Get solution sets by panelId.
      return await this.getCheckedCheckBoxLabels().then(async (checkedElements) => {
         if (checkedElements.length == 0) return false;
         for (let i = 0; i < labels.length; i++) {
            if (!checkedElements.includes(labels[i])) {
               return false;
            }
         }
         return true;
      });
   }

   /**
    * Get all labels in stackViewElement by locator
    * @param labelLocator
    * @returns {any}
    */
   private async getLabels(labelLocator: Locator): promise.Promise<any> {
      let arrayValues = [];
      expect(this.stackViewElement.waitReady()).toBeTruthy();
      return this.stackViewElement.all(labelLocator).filter((item, index) => {
         return item.isDisplayed();
      }).then((items) => {
         if (items.length >= 1) {
            let deferred = protractor.promise.defer();

            this.stackViewElement.all(labelLocator).map((elem) => {
               return elem.getText();
            }).then((columnText) => {
               //Remove all kinds of line breaks.
               columnText = columnText.filter(function (e) {
                  return e.toString().replace(/(\r\n|\n|\r)/gm, "")
               });
               arrayValues = columnText;
            }).then(() => {
               deferred.fulfill(arrayValues);
            });
            return deferred.promise;
         } else {
            return [];
         }
      })
   }

   /**
    * Select / Unselect a stackview checkbox by its respective label text
    * @param {string} labelText
    * @param {boolean} select
    * @returns {promise.Promise<any>}
    */
   private async selectUnselectCheckBoxesByLabel(labelText: string, select: boolean): promise.Promise<any> {
      await expect(this.stackViewElement.all(By.css('.stack-view')).last().waitReady()).toBeTruthy();
      let items = await this.stackViewElement.all(By.tagName('clr-stack-block')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return text === labelText;
         });
      });
      if (items.length >= 1) {
         await  expect(items[0].waitReady()).toBeTruthy();
         await this.scrollToElement(items[0]);
         await expect(items[0].element(by.css('clr-checkbox[ng-reflect-disabled="false"]')).waitReady()).toBeTruthy();
         await this.scrollToElement(items[0].element(by.css('clr-checkbox[ng-reflect-disabled="false"]')));
         let value = await items[0].element(by.css('clr-checkbox[ng-reflect-disabled="false"]')).getAttribute('ng-reflect-checked');
         let isTrue = (value == 'true');
         if (items.length > 1) {
            console.warn("Found more than one elements with label - '${labelText}'. The first match will be (un)selected.");
         }
         if (select !== isTrue) {
            await items[0].element(by.css('clr-checkbox[ng-reflect-disabled="false"]')).click();
            return true;
         } else {
            return false;
         }
      } else {
         console.warn("Found zero products on the page.");
         return false;
      }
   }
}