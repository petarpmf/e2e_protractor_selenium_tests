import {browser} from "protractor";
import {TestSessionResponse} from "./response/testsession-response";
import {ProtractorUtils} from "../protractor.utils";

export class SeleniumGridApiController {

   static async logTestSession(additionalInfo?: string) {
      let utils = new ProtractorUtils();
      let responseSession;
      let processedConf = await browser.getProcessedConfig();
      let seleniumIpAddress = processedConf.seleniumAddress;
      seleniumIpAddress = seleniumIpAddress.split(":")[1];

      let needle = require('needle');
      if (await utils.isExecutionParallel() == true) {
         let sessionId = (await browser.driver.getSession()).getId();

         var options = {
            compressed: true,
            accept: 'application/json',
            content_type: 'application/json'
         };

         await needle.get('http:' + seleniumIpAddress + ':4444/grid/api/testsession?session=' + sessionId + '', options, async function (error, response) {
            responseSession = new TestSessionResponse(response.body);
            if (!error && response.statusCode == 200) {
               let executorIP = responseSession.proxyId.split(":")[1].replace('//', '');
               process.stdout.write("====================================================" + '\n')
               if (additionalInfo) {
                  process.stdout.write(additionalInfo + '\n');
               }
               process.stdout.write("Test executor machine IP: " + executorIP + '\n');
               process.stdout.write("Browser session ID: " + responseSession.session + '\n');
               process.stdout.write("====================================================" + '\n')
            }
         })

      }
   }
}

