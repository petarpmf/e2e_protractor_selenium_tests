import {browser, by, element, protractor} from 'protractor';

var en = require('../../assets/i18n/en-us/localization.json');

export class Localization {
    getLocalization() {
        switch (browser.params.localization) {
            case 'en':
                return en
        }
    }
}

export let translate = new Localization().getLocalization();