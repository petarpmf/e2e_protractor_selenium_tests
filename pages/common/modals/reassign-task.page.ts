import {BasePage} from "../base.page";
import {by, element, ElementFinder} from "protractor";
import {Localization} from "../../../common/localization";
import {promise} from "selenium-webdriver";
import {ClarityDropdownElement} from "../clarity-dropdown.element";


let localization = new Localization();
let translate = localization.getLocalization();

export class ReassignTaskPage extends BasePage {

   private modalTitle: ElementFinder = element(by.cssContainingText('.modal-title', ReassignTaskPage.MODAL_TITLE));
   private reassignBtn: ElementFinder = element(by.id('reassignBtn'));
   private cancelBtn: ElementFinder = element(by.id('cancelBtn'));
   private selectRoleDropdown: ElementFinder = element(by.id('selectRole'));

   public static readonly MODAL_TITLE = translate.home.opportunities.create.scopingMode.steps.customizeWbs.dialogs.reassignTask.title;

   /**
    * Click Reassign
    * @returns {Promise<void>}
    */
   async clickReassign(): promise.Promise<any>{
      expect(this.modalTitle.waitReady()).toBeTruthy("Reassign Task dialog not opened");
      return this.reassignBtn.click();
   }

   /**
    * Click Cancel
    * @returns {Promise<void>}
    */
   async clickCancel(): promise.Promise<any>{
      expect(this.modalTitle.waitReady()).toBeTruthy("Reassign Task dialog not opened");
      return this.cancelBtn.click();
   }

   /**
    * Select a role from the roles dropdown
    * @param {string} fullRoleName
    * @returns {Promise<any>}
    */
   async selectRole(fullRoleName: string): promise.Promise<any>{
      let clarityDropdown =  new ClarityDropdownElement(this.selectRoleDropdown);
      expect(this.selectRoleDropdown.waitReady()).toBeTruthy("Reassign Task dialog not opened");
      return clarityDropdown.selectOptionByText(fullRoleName);
   }

   /**
    * Set a role and click re-assign
    * @param {string} fullRoleName
    * @returns {Promise<void>}
    */
   async setRole(fullRoleName: string): promise.Promise<any>{
      await this.selectRole(fullRoleName);
      await this.clickReassign();
   }
}