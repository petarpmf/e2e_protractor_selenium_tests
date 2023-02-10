export class StringUtils {

   /**
    Check whether array of strings @array appears in the string @wholeString.
    *
    * @param {string} wholeString
    * @param {Array<string>} array
    * @return {boolean} If any of the strings in @array doesn't appear, then we return false, otherwise return true.
    */
   static containStrings(wholeString: string, array: Array<string>) {
      let length = array.length;
      for (let i = 0; i < length; i++) {
         if (wholeString.indexOf(array[i]) < 0) {
            return false;
         }
      }
      return true;
   }

   /**
    * Returns a string representation of the passed @Date object in a pre-defined format:
    *
    * <b>YYYY-MM-DD_hh-mi</b>
    * !Notes:
    * the hour part is in 12h format (e.g. 17:25 will become 05:25)
    * 1 digit values are left-padded with '0'.
    *
    * @param {Date} date
    * @returns {string}
    */
   static getDateInFormatYMDHM(date: Date): string {

      let year, month, day, hours, minutes;
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      hours = date.getHours();
      minutes = date.getMinutes();

      // make hours in 12h format and lpad months, day,  hours and minutes with zeros
      if (hours > 12) hours -= 12;
      if (hours < 10) hours = '0' + hours;
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;
      if (minutes < 10) minutes = '0' + minutes;

      // YYYY-MM-DD_HH-mi
      return year + "-" + month + "-" + day + "_" + hours + "-" + minutes;
   }

   /**
    * Returns a string representation of the passed @Date object in a pre-defined format:
    *
    * <b>YYYY.MM.DD</b>
    * !Notes:
    * 1 digit values are left-padded with '0'.
    *
    * @param {Date} date
    * @returns {string}
    */
   static getDateInFormatYMD(date: Date): string {

      let year, month, day;
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();

      // make hours in 12h format and lpad months, day,  hours and minutes with zeros
      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;

      // YYYY.MM.DD
      return year + "." + month + "." + day;
   }

   /**
    * Finds each empty space(s) sequence inside @originalString and replaces it with the given @replacingSymbol
    *
    * @param {string} originalString
    * @param {string} replacingSymbol
    * @returns {string} The modified string.
    */
   static replaceSpacesWith(originalString: string, replacingSymbol: string) {
      return originalString.replace(/\s/g, replacingSymbol); // replace all empty spaces
   }

   /**
    * Removes blank spaces from a string and returns the modified string.
    * @param {string} input The original string
    * @returns {string} The modified string.
    */
   static removeWhiteSpaces(input: string): string {
      return this.replaceSpacesWith(input, '');
   }

   /**
    * Method to generate random sequence of letters [a-zA-z] with the given length
    * @param {number} length the desired length of the string
    * @returns {string} the generated string
    */
   static getRandomAlpha(length: number): string {
      let numbers: Array<number> = [0];
      for (let i = 0; i < length; i++) {
         let randAsciiCodeOfLetter = 65;
         let numZeroOne = Math.round(Math.random());
         if (numZeroOne == 0) {
            // capital letter
            // generates a random number between 65 (inclusive) and 91 (exclusive), ascii codes of capital letters
            randAsciiCodeOfLetter = Math.random() * (91 - 65) + 65;
         } else {
            // small letter
            // generates a random number between 97 (inclusive) and 123 (exclusive), ascii codes of small letters
            randAsciiCodeOfLetter = Math.random() * (123 - 97) + 97;
         }
         numbers[i] = randAsciiCodeOfLetter
      }

      return String.fromCharCode(...numbers);
   }

   /**
    * Finds UUID inside the provided string (if any) and returns it.

    * @param {string} inputString String we search for UUID.
    * @returns {string} The UUID if found, null otherwise.
    */
   static extractUuidFromString(inputString: string): string {
      let result = null;
      try {
         result = inputString.match("[\\w]{8}(-[\\w]{4}){3}-[\\w]{12}")[0];
      }
      catch (error) {
         console.warn("UUID not found within the provided string [" + inputString + "]");
      }
      return result;
   }

   /* Return random number from current data. Default length of string is 10 symbols */
   static getRandomNumberAsString(length?: number): string {

      length = length || 10;
      return new Date().getTime().toString().substr(6, length);

   }

   /**
    * Compares strings to sort them in ASCENDING order. To use as parameter of Array.sort()
    * For example: initialCustomerNames.sort(StringUtils.stringComparingFn);
    * @param {string} a
    * @param {string} b
    * @returns {number}
    */
   static stringComparingFnAscending(a, b): number {
      let stringA = a.toUpperCase(); // ignore upper and lowercase
      let stringB = b.toUpperCase(); // ignore upper and lowercase
      if (stringA < stringB) {
         return -1;
      }
      if (stringA > stringB) {
         return 1;
      }

      return 0;
   }

   /**
    * Compares strings to sort them in DESCENDING order. To use as parameter of Array.sort()
    * For example: initialCustomerNames.sort(StringUtils.stringComparingFn);
    * @param {string} a
    * @param {string} b
    * @returns {number}
    */
   static stringComparingFnDescending(a, b): number {
      let stringA = a.toUpperCase(); // ignore upper and lowercase
      let stringB = b.toUpperCase(); // ignore upper and lowercase
      if (stringA > stringB) {
         return -1;
      }
      if (stringA < stringB) {
         return 1;
      }

      return 0;
   }

   /**
    * Compares dates to sort them in ASCENDING order. To use as parameter of Array.sort()
    * E.g. this.initialData.sort(StringUtils.dateComparingFn);
    * @param {Date()} a
    * @param {Date()} b
    * @returns {number}
    */
   static dateComparingFnAscending(a, b): number {
      let timestampA = (new Date(a)).getTime();
      let timestampB = (new Date(b)).getTime();

      return timestampA - timestampB;
   }

   /**
    * Compares dates to sort them in DESCENDING order. To use as parameter of Array.sort()
    * E.g. this.initialData.sort(StringUtils.dateComparingFn);
    * @param {datestring} a String representing a date
    * @param {datestring} b String representing a date
    * @returns {number}
    */
   static dateComparingFnDescending(a, b): number {
      let timestampA = (new Date(a)).getTime();
      let timestampB = (new Date(b)).getTime();

      return timestampB - timestampA;
   }

   static convertToLowercaseWithoutSpaces(str: string): string {
      return str.toLocaleLowerCase().replace(/ /g, '-');
   }
}