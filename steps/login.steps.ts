import {defineSupportCode} from 'cucumber'
import {browser} from 'protractor'
import {expect} from 'chai'
import {SolutionBuilderLoginPage} from "../pages/login/solution-builder-login.page";
import {Urls} from "../common/urls";

defineSupportCode(({Given, When, Then}) => {

    let solutionBuilderLoginPage = new SolutionBuilderLoginPage();
    let urls = new Urls();

    When(/^login in app$/, (callback: any) => {
        //solutionBuilderLoginPage.login(username, password).then(callback);
        browser.get('http://localhost:8080').then(callback);
    });

    Then(/^should test home-dashboard page$/, () => {
        expect(browser.getCurrentUrl()).to.be.not.null;
    });
});