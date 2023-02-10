import {BasePage} from "./common/base.page";
import {browser, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {ProtractorUtils} from "../common/utils/protractor.utils";

/**
 * It contains all the function of the header.
 */
export class FirstPage extends BasePage {
   logo = element(by.id('logo'));
   userProfileIcon = element(by.id('user-settings-icon'));
   allOpportunitiesIcon = element(by.id('all-opportunities-icon'));
   homeLink = element(by.css('[shape="home"]'));
   rumblePlay = element(by.css(".videoPlayer-Rumble-cls .RumbleSVG-bplay"));

   utils = new ProtractorUtils();

   async getUrl(urlEnvironment: string): promise.Promise<any> {
    return browser.driver.get(urlEnvironment);
 }
 
 async clickOnMenu(item: string): promise.Promise<any> {
    expect(await element(by.id(item)).waitReady()).toBeTruthy();
    return await element(by.css('.mh-navigation')).element(by.id(item)).click();
 }

 async scrollDown(): promise.Promise<any> {
    return browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
 }

 async scrollUp(): promise.Promise<any> {
    return browser.executeScript('window.scrollTo(0,document.body.scrollWeight)');
 }

 async clickOnTheNews(): promise.Promise<any> {
     let mainContent = element(by.id('main-content'));
    expect(await mainContent.waitReady()).toBeTruthy();
    return await mainContent.all(by.css('a img')).filter(async (item, index) => {
        return await item.isDisplayed();
     }).then(async (items) => {
        return await this.randomNumber(0, items.length).then(async (randomNum)=>{
            browser.sleep(2000);
            return browser.executeScript("arguments[0].scrollIntoView();", items[randomNum].getWebElement()).then(async ()=>{
                expect(await items[randomNum].waitReady()).toBeTruthy();
                return await items[randomNum].click();
            });
        })
     });
 }

 async randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

 async openAndClickRumble(): promise.Promise<any> {
   return browser.driver.wait(function() {
      return browser.driver.findElement(by.css(".videoPlayer-Rumble-cls .RumbleSVG-bplay"))
               .then(function(elem) {
                 elem.click();
                 return true;
               });
   }, 5000);
 }
}