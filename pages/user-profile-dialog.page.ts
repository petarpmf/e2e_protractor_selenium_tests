import {BasePage} from "./common/base.page";
import {by, element, ElementFinder} from 'protractor';
import {promise} from "selenium-webdriver";
import {ClarityDropdownElement} from "./common/clarity-dropdown.element";
import {HeaderPage} from "./header.page";
import {Localization} from "../common/localization";

/**
 * User Profile Page.
 */

let localization = new Localization();
let translate = localization.getLocalization();

export class UserProfileDialogPage extends BasePage {
   userProfileModal = element(by.cssContainingText('.modal-dialog', UserProfileDialogPage.MODAL_TITLE));
   firstNameField = element(by.id('firstName'));
   lastNameField = element(by.id('lastName'));
   emailField = element(by.id('email'));
   regionSelect = element(by.css('[name="regionDropDown"]'));
   languageSelect = element(by.css('[name="localeDropdown"]'));
   addressField = element(by.id('address'));
   userPhoneField = element(by.id('userPhone'));
   saveBtn = element(by.cssContainingText('.btn', translate.common.save));
   okBtn = element(by.cssContainingText('.modal-dialog .btn-default', "OK"));
   cancelBtn = this.userProfileModal.element(by.cssContainingText('.btn', translate.common.cancel));
   addressRequiredAlert = element(by.cssContainingText('.alert-danger', UserProfileDialogPage.ADDRESS_REQUIRED_ALERT));
   regionSelectElement = new ClarityDropdownElement(this.regionSelect);
   fillYourProfileDetailsModalTitleText = translate.applicationHeader.userMenu.fillInProfileDialog.title;
   updateRegionOnOpportunitiesDialogTitle = translate.applicationHeader.userMenu.updateRegionOnOpportunitiesDialog;
   fillYourProfileDetailsModalTitle = element(by.cssContainingText('.modal-dialog .modal-title', this.fillYourProfileDetailsModalTitleText));
   linkToProfile = element(by.id('link-profile'));

   public static readonly MODAL_TITLE = translate.applicationHeader.userMenu.userProfileDialog.title;
   public static readonly ADDRESS_REQUIRED_ALERT = translate.applicationHeader.userMenu.userProfileDialog.addressRequired;

   /**
    * Click Save
    * @returns {promise.Promise<any>}
    */
   async clickSave(): promise.Promise<any> {
      expect(this.saveBtn.waitReady()).toBeTruthy();
      await this.saveBtn.click();
      return;
   }

   async clickOkInUpdatingGEOModal(): promise.Promise<any> {
      expect(this.okBtn.waitReady()).toBeTruthy();
      return await this.okBtn.click();


   }

   /**
    * Click Cancel
    * @returns {promise.Promise<any>}
    */
   async clickCancel(): promise.Promise<any> {
      expect(this.cancelBtn.waitReady()).toBeTruthy();
      await this.cancelBtn.click();
      return this.waitForModalToDisappear();
   }

   /**
    * Type Address
    * @param {string} address
    * @returns {promise.Promise<any>}
    */
   async typeAddress(address: string): promise.Promise<any> {
      expect(this.addressField.waitReady()).toBeTruthy();
      await this.addressField.clear();
      return this.addressField.sendKeys(address)
   }

   /**
    * Type phone number
    * @param {string} phone
    * @returns {promise.Promise<any>}
    */
   async typePhoneNumber(phone: string): promise.Promise<any> {
      expect(this.userPhoneField.waitReady()).toBeTruthy();
      await this.userPhoneField.clear();
      return this.userPhoneField.sendKeys(phone)
   }

   /**
    * Select region
    * @param {string} region
    * @returns {promise.Promise<any>}
    */
   async selectRegion(region: string): promise.Promise<any> {
      expect(this.regionSelect.waitReady()).toBeTruthy();
      return this.regionSelectElement.selectOptionByText(region);
   }

   /**
    * Select language
    * @param {string} language
    * @returns {promise.Promise<any>}
    */
   async selectLanguage(language: string): promise.Promise<any> {
      expect(this.languageSelect.waitReady()).toBeTruthy();
      return this.languageSelect.selectOptionByText(language);
   }

   async getFirstName(): promise.Promise<any> {
      return this.firstNameField.getAttribute("ng-reflect-model");
   }

   async getLastName(): promise.Promise<any> {
      return this.lastNameField.getAttribute("ng-reflect-model");
   }

   async getEmail(): promise.Promise<any> {
      return this.emailField.getAttribute("ng-reflect-model");
   }

   async getRegion(): promise.Promise<any> {
      return this.regionSelectElement.getSelectedOptionText();
   }

   async getAddress(): promise.Promise<any> {
      return this.addressField.getAttribute("ng-reflect-model");
   }

   async getPhoneNumber(): promise.Promise<any> {
      return this.userPhoneField.getAttribute("ng-reflect-model");
   }

   /**
    * Open User Profile settings
    * @returns {promise.Promise<any>}
    */
   async openUserProfile(): promise.Promise<any> {
      let headerPage = new HeaderPage();
      await headerPage.clickUserProfileIcon();
      expect(await this.userProfileModal.waitReady()).toBeTruthy();
   }

   /**
    * Update user profile settings and save
    * @param {string} region
    * @returns {promise.Promise<any>}
    */
   async updateUserDetails(region: string, address: string, phoneNumber?: string): promise.Promise<any> {
      await this.selectRegion(region);
      await this.typeAddress(address);
      if (phoneNumber) {
         await this.typePhoneNumber(phoneNumber);
      }
      await this.clickSave();
      return this.waitForModalToDisappear();
   }

   /**
    * Update region and save
    * @param {string} region
    * @returns {promise.Promise<any>}
    */
   async updateRegion(region: string): promise.Promise<any> {
      await this.selectRegion(region);
      await this.clickSave()
      return this.waitForModalToDisappear();
   }

   /**
    * Update address and save
    * @param {string} region
    * @returns {promise.Promise<any>}
    */
   async updateAddress(address: string): promise.Promise<any> {
      await this.typeAddress(address);
      await this.clickSave()
      return this.waitForModalToDisappear();
   }

   /**
    * Update phone and save
    * @param {string} region
    * @returns {promise.Promise<any>}
    */
   async updatePhoneNumber(phoneNumber: string): promise.Promise<any> {
      await this.typePhoneNumber(phoneNumber);
      await this.clickSave()
      return this.waitForModalToDisappear();
   }

   async isFillYourProfileDetailsModalOpen(): promise.Promise<any> {
      return this.fillYourProfileDetailsModalTitle.isDisplayed();

   }

   /**
    * Is the language dropdown visible in the User Profile dialog
    * @returns {promise.Promise<any>}
    */
   async isLanguageDropdownVisible(): promise.Promise<any> {
      if (await this.languageSelect.isPresent()) {
         return this.languageSelect.isDisplayed();
      }
      else return false;

   }

   async clickProfileDetailsLinkInModal(): promise.Promise<any> {
      await this.linkToProfile.click();
      expect(this.userProfileModal.waitReady()).toBeTruthy();

   }

}

export let userProfilePage = new UserProfileDialogPage();
