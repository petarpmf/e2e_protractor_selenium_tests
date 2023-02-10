import {browser, by, element} from 'protractor';
import {promise} from "selenium-webdriver";
import {
   selectProductsPage,
   selectSolutionElementsPage,
   selectSolutionSetsPage
} from "./guidedMode/guided-mode-workflow-steps.barrel";
import {IGuidedMode} from './model/opportunity/guidedMode/guided-mode.model';
import {dashboardPage} from "./dashboard.page";
import {FileSystemUtils, StringUtils} from "../common/utils/utils.barrel";
import {CommonOpportunityWorkflowPage} from "./common-opportunity-workflow.page";
import {EdmDownloadConfigDialogPage} from "./common/modals/edm/edm-download-config-dialog.page";
import {EdmDownloadProgressDialogPage} from "./common/modals/edm/edm-download-progress-dialog.page";

/**
 * Navigation for opportunity workflow.
 */

export class ContentAccessWorkflowPage extends CommonOpportunityWorkflowPage {

   edmDownloadButton = element(by.css('#download-edm > button'));

   async clickEngagementDeliveryMaterialsButton(): promise.Promise<void> {
      expect(this.edmDownloadButton.waitReady()).toBeTruthy();
      await this.edmDownloadButton.click();
   }

   async configureOpportunityFromContentAccessMode(guidedMode: IGuidedMode): promise.Promise<void> {

      // Click Content Access Mode button from the dashboard
      await dashboardPage.clickContentAccessModeButton();

      //Select Solution Sets
      await selectSolutionSetsPage.selectSolutionSetContainers(guidedMode.storyboardCapabilities);

      await this.clickNextBtn();

      //Select Solution Elements
      await selectSolutionElementsPage.selectSolutionItems(guidedMode.solutionItems);
      await this.clickNextBtn();

      //Select products
      await selectProductsPage.selectProducts(guidedMode.selectedProducts);
   }

   async downloadEdmBundle(setIncludeProductDocuments: boolean = true): promise.Promise<any> {
      let edmDownloadDialogPage = new EdmDownloadConfigDialogPage();
      let edmDownloadProgressDialogPage = new EdmDownloadProgressDialogPage();

      await this.clickEngagementDeliveryMaterialsButton();
      if (await this.isElementWithLocatorVisibleOnPage(by.css('solution-elements-dialog .modal-title'))) {
         await selectProductsPage.clickContinueRemoveSoluitonElements();
      }

      await edmDownloadDialogPage.setIncludeProductDocuments(setIncludeProductDocuments);
      await edmDownloadDialogPage.clickOk();
   }

   async isEdmFileDownloaded(fileName: string, timeout: number): promise.Promise<boolean> {
      let downloadDir = browser.params.downloadDefaultDirectory;
      return FileSystemUtils.isFileExisting(fileName, downloadDir, timeout);
   }

   async deleteEdmFile(fileName: string): promise.Promise<any> {
      let downloadDir = browser.params.downloadDefaultDirectory;
      let filePath = downloadDir + fileName;
      return FileSystemUtils.deleteFile(filePath);
   }
}