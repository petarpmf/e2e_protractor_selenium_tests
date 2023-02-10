import {promise} from "selenium-webdriver";
import {browser, By, by, element, ElementFinder, ExpectedConditions, protractor} from "protractor";

export class BasePage {
   sideMenu = element(by.id('sidenav-menu'));
   loadingElement = element(By.id('spinnerMask'));
   expectedConditions = protractor.ExpectedConditions;
   modalContentWrapper = element(by.css('.modal-content-wrapper .modal-footer'));
   modalBackDropFadeIn = element(by.css('.modal-backdrop.fade.in'));
   loadingSpinnerID = element(by.id('spinner'));
   navigationButtons = element(by.css('div.navigationButtons'));

   async setDropdown(dropdownId, option, exactMatch = false): promise.Promise<any> {
      expect(dropdownId.waitReady()).toBeTruthy();
      expect(dropdownId.all(by.css('li')).last().waitReady()).toBeTruthy();
      return dropdownId.all(by.css('li')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return exactMatch ? text == option : text.startsWith(option);
         });
      }).then((items) => {
         if (items.length == 1) {
            expect(items[0].waitReady()).toBeTruthy();
            return browser.executeScript('arguments[0].scrollIntoView()', items[0].getWebElement()).then(() => {
               return items[0].click().then(() => {
                  expect(dropdownId.waitToHide()).toBeTruthy();
               });
            })
         } else if (items.length == 0) {
            throw new Error('Found zero elements on the dropdown with option ' + option);
         } else {
            throw new Error('Found more than one element on the dropdown with option ' + option);
         }
         expect(element(By.id(dropdownId)).waitToBeInvisible()).toBeTruthy();
      });
   };

   async setDropdownSku(dropdownId, option, exactMatch = false): promise.Promise<any> {
      expect(dropdownId.waitReady()).toBeTruthy();
      expect(dropdownId.all(by.css('div')).last().waitReady()).toBeTruthy();
      return dropdownId.all(by.css('div')).filter((item, index) => {
         return item.getText().then((text: string) => {
            return exactMatch ? text == option : text.startsWith(option);
         });
      }).then((items) => {
         if (items.length == 1) {
            expect(items[0].waitReady()).toBeTruthy();
            return browser.executeScript('arguments[0].scrollIntoView()', items[0].getWebElement()).then(() => {
               return items[0].click().then(() => {
               });
            })
         } else if (items.length == 0) {
            throw new Error('Found zero elements on the dropdown with option ' + option);
         } else {
            throw new Error('Found more than one element on the dropdown with option ' + option);
         }
      });
   };


   capitalize(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   }

   isTabOpened(tabName) {
      return tabName.getAttribute('aria-expanded').then((attribute) => {
         return attribute == "true";
      });
   }

   /**
    * @param elementId
    * @param waitLocator - locator of element that will be waited until is visible in order to proceed with saying that
    *    the tab is opened. Example: by.css('.k-pager-wrap'). This parameter is used for technology attachment for
    *    example.
    * @returns {promise.Promise<any>}
    */
   openTab(elementId, waitLocator?): promise.Promise<any> {
      let deferred = protractor.promise.defer();
      expect(elementId.waitReady()).toBeTruthy();
      this.isTabOpened(elementId).then((isTabOpened: boolean) => {
         if (!isTabOpened) {
            elementId.click().then(() => {
               //wait until whole tab is fully loaded
               if (waitLocator) {
                  expect(elementId.element(waitLocator).waitReady()).toBeTruthy();
               }
               deferred.fulfill();
            });
         } else {
            deferred.fulfill();
         }
      });
      return deferred.promise;
   }

   setInputField(field, inputValue: string): promise.Promise<any> {
      return field.all(by.css('input')).filter((item, index) => {
         return item.isDisplayed();
      }).then((items) => {
         if (items.length == 1) {
            return items[0].clear().sendKeys(inputValue);
         } else {
            throw new Error('Found more than one element on the page.');
         }
      });
   };

   async hasClass(element, cls: string): promise.Promise<any> {
      await expect(element.waitReady()).toBeTruthy();
      return element.getAttribute('class').then((classes) => {
         if (classes.split(' ').indexOf(cls) > -1) {
            return true;
         } else {
            return false;
         }
      });

   };

   scrollDown(): promise.Promise<any> {
      let deferred = protractor.promise.defer();

      expect(this.sideMenu.waitReady()).toBeTruthy();
      browser.actions().mouseMove(this.sideMenu, {
         x: 25,
         y: 25
      }).perform().then(() => {
         browser.executeScript('window.scrollTo(25,1200);').then(() => {
            deferred.fulfill(true);
         })
      });
      return deferred.promise;
   };

   scrollUp(): promise.Promise<any> {
      let deferred = protractor.promise.defer();

      expect(this.sideMenu.waitReady()).toBeTruthy();
      browser.actions().mouseMove(this.sideMenu, {
         x: 25,
         y: 25
      }).perform().then(() => {
         browser.executeScript('window.scrollTo(25,0);').then(() => {
            deferred.fulfill(true);
         })
      });
      return deferred.promise;
   };

   async scrollToElement(element): promise.Promise<any> {
      await browser.wait(ExpectedConditions.presenceOf(element), 5000);
      return await browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
   }

   /**
    * Checks if given locator matches element(s) on the page or not.
    *
    * @param ByLocator The by.locator; E.g. By.css('#confirmation h2')
    * @returns {promise.Promise<boolean>} <b>true</b> if the provided locator matches at least 1 element on the page,
    *    <b>false</b> otherwise;
    */
   public async isElementWithLocatorPresentOnPage(ByLocator): promise.Promise<boolean> {
      let results = await element.all(ByLocator);
      return results.length != 0;
   }

   /**
    * Checks if given element matches element(s) on the page or not.
    *
    * @param elementToCheck the element
    * @returns {promise.Promise<boolean>} <b>true</b> if the provided element matches at least 1 element on the page,
    *    <b>false</b> otherwise;
    */
   public async isElementPresentOnPage(elementToCheck: ElementFinder): promise.Promise<boolean> {
      let results = await element.all(elementToCheck.locator());
      return results.length != 0;
   }

   public async isElementWithLocatorVisibleOnPage(ByLocator): promise.Promise<boolean> {
      return browser.wait(this.expectedConditions.visibilityOf(element(ByLocator)), 200).then(() => {
         return true;
      }, () => {
         return false;
      });
   }

   public async isElementVisibleOnPage(elementToCheck: ElementFinder): promise.Promise<boolean> {
      if (await this.isElementPresentOnPage(elementToCheck)) {
         return browser.wait(this.expectedConditions.visibilityOf(elementToCheck), 200).then(() => {
            return true;
         }, () => {
            return false;
         });
      }
      return false;
   }

   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInTextField(webElement, text: string, prepend?: boolean, tabOut?: boolean): promise.Promise<void> {

      if (prepend) {// move the cursor to the beginning of the existing text and then type (prefix)
         await webElement.click();
         await webElement.sendKeys(protractor.Key.HOME);
      } else {// move the cursor to the end of the existing text and then type (suffix)
         await webElement.sendKeys(protractor.Key.END);
      }

      if (tabOut) {
         return webElement.sendKeys(text, protractor.Key.TAB);
      } else {
         return webElement.sendKeys(text);
      }

   }

   /**
    * Gets and returns the current URL as string once page is loaded (logo displayed)
    * @returns {promise.Promise<string>} The URL of the page. e.g.
    * 
    */
   public async getPageURL(): promise.Promise<string> {
      await browser.waitForAngular("Wait for application to load.");
      browser.wait(this.expectedConditions.presenceOf(await element(by.id('logo'))), 10000,
         'Waiting for logo');
      return browser.getCurrentUrl();
   }

   /**
    * Click Modal Button
    * @param modalButton
    * @returns {any}
    */
   clickModalButton(modalButton) {
      return this.modalContentWrapper.element(by.cssContainingText('.btn', modalButton)).click();
   }

   /**
    * Returns an array of the given elements enabled states
    * @param {Array<ElementFinder>} elements
    * @returns {promise.Promise<Array<boolean>>}
    */
   async getElementsEnabledState(elements: Array<ElementFinder>): promise.Promise<Array<boolean>> {
      let states = [];
      for (let element of elements) {
         let state = await element.isEnabled();
         if (await element.getAttribute("readOnly") == "true" || await element.getAttribute(
            "aria-disabled") == "true") {
            state = false;
         }
         states.push(state);
      }
      return states;
   }

   /**
    * Clicks an element with scrolling
    * @param element
    * @returns {Promise<any>}
    */
   async clickElementWithScroll(element): promise.Promise<any> {
      expect(element.waitReady()).toBeTruthy();
      await this.scrollToElement(element);
      return element.click();
   }

   /**
    * Clicks an element with javascript
    * @param element
    * @returns {Promise<any>}
    */
   async clickWithJS(element: ElementFinder): promise.Promise<any> {
      expect(element.waitReady()).toBeTruthy();
      await browser.executeScript("arguments[0].click();", element);
   }

   /**
    * Check elements' enabled state against expected
    * @param {Array<ElementFinder>} elements
    * @param {Array<boolean>} expectedStates
    * @returns an array of 2 elements - first element - boolean indicating if states are correct, second - error
    *    message string (is an empty string if states are correct)
    */
   async checkElementsEnabledState(elements: Array<ElementFinder>, expectedStates: Array<any>): promise.Promise<any> {
      let isStateCorrect = true;
      let errorMessage = "";
      let actualStates = await this.getElementsEnabledState(elements);
      for (let i = 0; i < elements.length; i++) {
         let elementExpectedState = expectedStates[i];
         let elementActualState = actualStates[i];
         if (elementExpectedState !== elementActualState) {
            isStateCorrect = false;
            errorMessage +=
               "Element " + await elements[i].locator() + " is not in expected enabled state. Expected: " + elementExpectedState + ". Actual: " + elementActualState + "\n";
         }
      }
      return [isStateCorrect, errorMessage];

   }

   async checkElementEnabledState(element: ElementFinder, expectedState: boolean) {
      let state = await this.checkElementsEnabledState([element], [expectedState]);
      expect(state[0]).toBeTruthy(state[1]);
   }

   getElementWithIDFromStrings(strings: Array<String>): ElementFinder {
      return null;
   }

   async waitForModalToDisappear(): promise.Promise<any> {
      return expect(this.modalBackDropFadeIn.waitToBeInvisible()).toBeTruthy();
   }

   /**
    * Clear filter by Backspace
    * @param {Array<any>} filterText
    * @returns {promise.Promise<boolean>}
    */
   async clearWithBackspace(filterText: string): promise.Promise<any> {
      let backspaceSeries = '';
      for (let i = 0; i <= filterText.length; i++) {
         backspaceSeries += protractor.Key.BACK_SPACE;
      }
      return backspaceSeries;
   }

   /**
    * Returns only the visible child elements with the given locator of a parent element
    * @param element - the parent element
    * @param childLocator
    * @returns {promise.Promise<Array<ElementFinder>>}
    */
   async getVisibleChildElementsOfElement(element, childLocator): promise.Promise<Array<ElementFinder>> {
      let childElements = await element.all(childLocator);
      let displayedChildElements: Array<ElementFinder> = [];

      for (let i = 0; i < childElements.length; i++) {
         if (await childElements[i].isDisplayed()) {
            await displayedChildElements.push(childElements[i]);
         }
      }
      return displayedChildElements;
   }


}
