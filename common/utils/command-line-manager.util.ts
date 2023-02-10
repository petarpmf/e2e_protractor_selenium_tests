export class CommandLineManagerUtils {

   /**
    * Get command line argument value such as --params.customer.username=sales_person
    * @param {string} param
    * @returns {string}
    */
   static getArgValue(param: string): string {
      let args = process.argv;
      let paramValue: string = "";
      args.forEach(function (element: string) {
         let paramString = '--' + param + '=';
         if (element.startsWith(paramString)) {
            paramValue = element.substr(paramString.length, element.length)
         }
      })
      return paramValue;
   }
}