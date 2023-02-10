import {BasePage} from "../base.page";
import {By, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";

export class NotificationPopupPage extends BasePage {

   private notificationPopupContainer: ElementFinder = element(By.css("div.wrong-pass"));
   private title: ElementFinder = element(By.css("div.wrong-pass > [name='title']"));
   private notiticationsWebElem: ElementFinder = element(By.css("div.wrong-pass > [name='notifications']"));

   public async getTitle(): promise.Promise<string> {
      expect(this.title.waitReady()).toBeTruthy();
      return this.title.getText();
   }

   public async getNotificationsList(): promise.Promise<ElementFinder[]> {
      expect(this.notificationPopupContainer.waitReady()).toBeTruthy();
      return await this.notiticationsWebElem.all(By.tagName("li"));
   }

   /**
    * Get the notification messages as array of strings.
    * @returns {promise.Promise<any>} Returns Array of strings, containing the individual messages inside the notification popup window.
    */
   public async getNotificationsListAsStrings(): promise.Promise<string[]> {
      let notificationsList = await this.getNotificationsList();

      let messages: string[] = [];
      for (let i = 0; i < notificationsList.length; i++) {
         let message: string = await notificationsList[i].getText();
         messages.push(message);
      }
      return messages;
   }

   public async assertNotificationMessageExists(expectedMessage: string): promise.Promise<void> {
      let messages: string[] = await this.getNotificationsListAsStrings();
      let result = messages.some((entry) => {
         return entry === expectedMessage;
      });
      expect(result).toBeTruthy("Expected message [" + expectedMessage + "] not found within notifications array: ["
         + messages + "]")
   }

   public async getNumberOfMessages(): promise.Promise<number> {
      expect(this.notificationPopupContainer.waitReady()).toBeTruthy();
      expect(this.notiticationsWebElem.waitReady()).toBeTruthy();
      return this.notiticationsWebElem.all(By.tagName("li")).count();
   }
}