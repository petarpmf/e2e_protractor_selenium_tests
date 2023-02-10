import {browser} from "protractor";

export class Urls {
   baseAppUrl = 'http://localhost:' +
      // Set the base URL port based on the protractor command line parameters or use the default '8080' port
      (browser.params.webApplicationPort != undefined
         ? browser.params.webApplicationPort
         : '8080') +
      // Add the path to the index.html file
      '/index.html';

   vidmUrl = '';
   dashboard = '#/home/dashboard';
   login = '/login';
   static readonly BASIC_INFORMATION: string = '/basic-information';
   static readonly ALL_OPPORTUNITIES: string = '#/home/opportunities/all-opportunities';
   solution_elements = '/select-solution-elements';
   products = '/products';
   complete = '/complete';
   vidmLogoutLink = '';
   stagingEnvUrl = '';
   workSpaceOneUrl = '';
}