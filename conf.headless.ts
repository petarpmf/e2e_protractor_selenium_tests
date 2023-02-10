let puppeteer = require('puppeteer');

import {config} from './conf';

config.capabilities.chromeOptions = {
   args: [
      '--start-maximized',
      'incognito',
      '--disable-extensions',
      '--headless', '--disable-dev-shm-usage', "--disable-gpu", '--window-size=1920x1200'
   ],
   binary: puppeteer.executablePath(),
};

exports.config = config;