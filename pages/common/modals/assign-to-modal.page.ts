import {BasePage} from "../base.page";
import {browser, by, By, element, ElementFinder, protractor} from "protractor";
import {promise} from "selenium-webdriver";
import {Localization} from "../../../common/localization";

let basePage = new BasePage();
let localization = new Localization();
let translate = localization.getLocalization();

export class AssignToModalPage extends BasePage {

   public modalWindow: ElementFinder = element(AssignToModalPage.MODAL_WINDOW_LOCATOR);
   private modalTitle: ElementFinder = element(By.css("#assignToModal .modal-title"));
   private modalBody: ElementFinder = element(By.css("#assignToModal .modal-body"));
   private projectManagerField: ElementFinder = element(By.id("selectProjectManagerAutoComplete"));
   private consultantField: ElementFinder = element(By.id("selectConsultantAutoComplete"));

   private readWriteOwnerLabel: ElementFinder = element(By.css("#owner-auto-complete > label"));
   public readWriteOwnerField: ElementFinder = element(AssignToModalPage.ENTER_READ_WRITE_OWNER_FIELD_LOCATOR);
   public readWriteOwnerSuggestionList: ElementFinder = element(AssignToModalPage.READ_WRITE_OWNER_SUGGESTION_LIST_LOCATOR);
   public projectManagerSuggestionList: ElementFinder = element(By.id('selectProjectManagerAutoComplete_listbox'));
   public consultantSuggestionList: ElementFinder = element(By.id('selectConsultantAutoComplete-list'));



   private readOnlyReviewersLabel: ElementFinder = element(By.css("label[for='readOnlyReviewers']"));
   public readOnlyReviewersField: ElementFinder = element(AssignToModalPage.ENTER_READ_ONLY_REVIEWERS_FIELD_LOCATOR);

   private noteLabel: ElementFinder = element(By.css("label[for='note']"));
   private noteField: ElementFinder = element(By.id("note"));

   private notesHistoryLabel: ElementFinder = element(By.css("label[for='notesHistory']"));
   private notesHistoryField: ElementFinder = element(By.id("notesHistory")); // read only text area

   private saveButton: ElementFinder = element(By.id("saveButton"));
   private cancelButton: ElementFinder = element(By.id("cancelButton"));

   private closeButton: ElementFinder = this.modalWindow.element(By.css("button.close"));

   // Expected values (constants):
   public static readonly MODAL_TITLE = translate.home.administration.shareProject.opportunity.title;
   public static readonly READ_WRITE_OWNER_LABEL = translate.home.administration.shareProject.readWriteOwner + ':';
   public static readonly READ_ONLY_REVIEWERS_LABEL = translate.home.administration.shareProject.readOnlyReviewers + ':';
   public static readonly NOTE_LABEL = translate.home.administration.shareProject.note + ':';
   public static readonly NOTES_HISTORY_LABEL = translate.home.administration.shareProject.notesHistory + ':';

   // public static readonly MODAL_TITLE = translate.home.administration.shareProject.opportunity.title;
   // public static readonly MODAL_TITLE = translate.home.administration.shareProject.opportunity.title;
   // public static readonly MODAL_TITLE = translate.home.administration.shareProject.opportunity.title;

   // Locators:
   public static readonly ENTER_READ_WRITE_OWNER_FIELD_LOCATOR = By.id('selectProjectOwnerAutoComplete');
   public static readonly ENTER_READ_ONLY_REVIEWERS_FIELD_LOCATOR = By.css('#readOnlyReviewers_taglist + input');
   public static readonly MODAL_WINDOW_LOCATOR = By.id("assignToModal");
   public static readonly READ_WRITE_OWNER_SUGGESTION_LIST_LOCATOR = By.css('div > div > div > ul#selectProjectOwnerAutoComplete_listbox[aria-hidden="false"]');


   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInReadWriteOwner(text: string, prepend?: boolean, tabOut: boolean = true): promise.Promise<void> {
      return basePage.typeInTextField(this.readWriteOwnerField, text, prepend, tabOut);
   }

   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInProjectManager(text: string, prepend?: boolean, tabOut: boolean = true): promise.Promise<void> {
      return basePage.typeInTextField(this.projectManagerField, text, prepend, tabOut);
   }



   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInConsultant(text: string, prepend?: boolean, tabOut: boolean = true): promise.Promise<void> {
      return basePage.typeInTextField(this.consultantField, text, prepend, tabOut);
   }

   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInReadOnlyReviewers(text: string, prepend?: boolean, tabOut: boolean = true): promise.Promise<void> {
      return basePage.typeInTextField(this.readOnlyReviewersField, text, prepend, tabOut);
   }

   public async clickSaveButton(): promise.Promise<void> {
      expect(this.saveButton.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.elementToBeClickable(this.saveButton), 8000, "'Save' button is not clickable!");
      return this.saveButton.click();
   }

   public async clickCancelButton(): promise.Promise<void> {
      expect(this.cancelButton.waitReady()).toBeTruthy();
      return this.cancelButton.click();
   }

   public async clickCloseButton(): promise.Promise<void> {
      expect(this.closeButton.waitReady()).toBeTruthy();
      return this.closeButton.click();
   }

   public async getModalTitleText(): promise.Promise<string> {
      expect(this.modalTitle.waitReady()).toBeTruthy();
      return await this.modalTitle.getText();
   }

   public async getReadWriteOwnerLabel(): promise.Promise<string> {
      expect(this.readWriteOwnerLabel.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.readWriteOwnerLabel), 8000, "'Read & Write Owner' label not visible!");
      return await this.readWriteOwnerLabel.getText();
   }

   public async getReadOnlyReviewersLabel(): promise.Promise<string> {
      expect(this.readOnlyReviewersLabel.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.readOnlyReviewersLabel), 8000, "'Read Only Reviewers' label not visible!");
      return await this.readOnlyReviewersLabel.getText();
   }

   public async getNoteLabel(): promise.Promise<string> {
      expect(this.noteLabel.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.noteLabel), 8000, "'Note' label not visible!");
      return await this.noteLabel.getText();
   }

   public async getNotesHistoryLabel(): promise.Promise<string> {
      expect(this.notesHistoryLabel.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.notesHistoryLabel), 8000, "'Notes History' label not visible!");
      return await this.notesHistoryLabel.getText();
   }

   public async getNotesHistoryText(): promise.Promise<string> {
      expect(this.notesHistoryField.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.notesHistoryField), 8000, "'Notes History' not visible!");
      return await this.notesHistoryField.getText();
   }

   public async getReadWriteOwnerSuggestedEntries(): promise.Promise<any[]> {
      expect(this.readWriteOwnerSuggestionList.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.readWriteOwnerSuggestionList), 8000, "'Read & Write Owner' suggestions are not visible!");
      return await this.readWriteOwnerSuggestionList.all(By.tagName("li"))
         .map(async (elem) => {
            return await elem.getText();
         });
   }

   public async pickSuggestedReadWriteOwner(index: number): promise.Promise<void> {
      expect(this.readWriteOwnerSuggestionList.waitReady()).toBeTruthy();
      await (this.expectedConditions.visibilityOf(this.readWriteOwnerSuggestionList), 5000, "'Read & Write Owner' suggestions are not visible!");

      while (index > 0) {
         await this.readWriteOwnerField.sendKeys(protractor.Key.ARROW_DOWN);
         index--;
      }
      await this.readWriteOwnerField.sendKeys(protractor.Key.ENTER);
   }

   /**
    * Select suggested Project Manager e-mail
    * @param {index} the order of an element in the list
    */
   public async pickSuggestedProjectManager(index: number): promise.Promise<void> {
      expect(this.projectManagerSuggestionList.waitReady()).toBeTruthy();
      await (this.expectedConditions.visibilityOf(this.projectManagerSuggestionList), 5000, "'Project Manager' suggestions are not visible!");

      while (index > 0) {
         await this.projectManagerField.sendKeys(protractor.Key.ARROW_DOWN);
         index--;
      }
      await this.projectManagerField.sendKeys(protractor.Key.ENTER);
   }

   /**
    * Select suggested Consultant e-mail
    * @param {index} the order of an element in the list
    */
   public async pickSuggestedConsultant(index: number): promise.Promise<void> {
      expect(this.consultantSuggestionList.waitReady()).toBeTruthy();
      await (this.expectedConditions.visibilityOf(this.consultantSuggestionList), 5000, "'Consultant' suggestions are not visible!");

      while (index > 0) {
         await this.consultantField.sendKeys(protractor.Key.ARROW_DOWN);
         index--;
      }
      await this.consultantField.sendKeys(protractor.Key.ENTER);
   }


   /**
    * Prepend OR append text to the one already existing inside the field.
    * @param {string} text The string to be added.
    * @param {boolean} prepend Optional flag whether we want to append OR prepend the text.
    * If omitted text will be appended as suffix (at the end).
    * @param tabOut Whether to TAB out of the field or not after sending the text.
    * @returns {promise.Promise<void>}
    */
   public async typeInNote(text: string, prepend?: boolean, tabOut: boolean = true): promise.Promise<void> {
      expect(this.noteField.waitReady()).toBeTruthy();
      return basePage.typeInTextField(this.noteField, text, prepend, tabOut);
   }

   public async clearReadWriteOwner(): promise.Promise<void> {
      expect(this.readWriteOwnerField.waitReady()).toBeTruthy();
      await browser.wait(this.expectedConditions.visibilityOf(this.readWriteOwnerField), 3000, "'Read & Write Owner' field is not visible!");
      return await this.readWriteOwnerField.clear();
   }

   /**
    * Assign an opportunity to a readWriteOwner
    * @param {string} readWriteOwner
    * @param {string} note
    * @returns {Promise<void>}
    */
   public async assignOpportunity(readWriteOwner?: string, note?: string) {
      if (readWriteOwner) {
         await this.typeInReadWriteOwner(readWriteOwner, false, false);
         await this.pickSuggestedReadWriteOwner(1);
      }
      if (note) {
         await this.typeInNote(note);
      }
      await this.clickSaveButton();
   }

   /**
    * Assign an opportunity to a projectManager
    * @param {string} projectManager
    * @param {string} note
    * @returns {Promise<void>}
    */
   public async assignOpportunityToProjectManager(projectManager?: string, note?: string) {
      if (projectManager) {
         await this.typeInProjectManager(projectManager, false, false);
         await this.pickSuggestedProjectManager(1);
      }
      if (note) {
         await this.typeInNote(note);
      }
      await this.clickSaveButton();
   }

   /**
    * Assign an opportunity to a consultant
    * @param {string} consultant
    * @param {string} note
    * @returns {Promise<void>}
    */
   public async assignOpportunityToConsultant(consultant?: string, note?: string) {
      if (consultant) {
         await this.typeInConsultant(consultant, false, false);
         await this.pickSuggestedConsultant(1);
      }
      if (note) {
         await this.typeInNote(note);
      }
      await this.clickSaveButton();
   }

}