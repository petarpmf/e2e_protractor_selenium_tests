import {promise} from "selenium-webdriver";
import {browser, by, element, protractor} from "protractor";
import {BasePage} from "./base.page";

export class BaseNavigatorPage extends BasePage {

   async expandElement(elementId): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      let elementByClass = elementId.all(by.css('i')).last();
      expect(element(by.css('.k-notification-success')).waitToHide()).toBeTruthy();
      expect(element(by.css('.k-overlay')).waitToHide()).toBeTruthy();
      expect(elementByClass.waitReady()).toBeTruthy();

      await this.scrollToElement(elementId).then(() => {
         this.hasClass(elementByClass, 'rotate90').then(async (isEnabled) => {
            await browser.executeScript("$('.k-overlay').remove();");
            if (isEnabled) {
               await elementId.click().then(async () => {
                  browser.sleep(800);
                  deferred.fulfill(true);
               });
            } else {
               deferred.fulfill(false);
            }
         });
      });

      return deferred.promise;
   };

   async expandClarityElement(elementId): promise.Promise<any> {
      expect(elementId.waitReady()).toBeTruthy();
      await  this.scrollToElement(elementId);
      let isExpanded = await this.hasClass(elementId, 'is-expanded');

      if (!isExpanded) {
         await  elementId.click();
      }
   }

}
