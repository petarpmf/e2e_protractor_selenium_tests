import {BasePage} from "./common/base.page";
import {
   CustomerProblemPage,
   SolutionSetPage,
   ItCapabilityPage, OutcomePage,
   SolutionElementPage, StoryboardCapabilityPage
} from "./administration/itOutcomes/storefront-configuration-admin-panel.barrel";
import {KendoDatagridPage} from "./common/kendo-datagrid.page";

export class ItvmStorefrontConfiguratorPage extends BasePage {
   solutionElementPage = new SolutionElementPage(new KendoDatagridPage());
   storyboardCapabilityPage = new StoryboardCapabilityPage(new KendoDatagridPage());
   solutionSetPage = new SolutionSetPage(new KendoDatagridPage());
   itCapabilityPage = new ItCapabilityPage(new KendoDatagridPage());
   customerProblemPage = new CustomerProblemPage(new KendoDatagridPage());
   outcomePage = new OutcomePage(new KendoDatagridPage());
}