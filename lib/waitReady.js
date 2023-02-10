"use strict";

// Config
var specTimeoutMs = 20000; // 20 seconds

/**
 * Current workaround until https://github.com/angular/protractor/issues/1102
 *
 * @type {Function}
 */
var ElementFinder = $('').constructor;


ElementFinder.prototype.waitReady =
   function(config) {
      var opt_optStr = null;
      var timeout = specTimeoutMs;

      if (config && config.opt_optStr) {
         opt_optStr = config.opt_optStr
      }

      if (config && config.timeout) {
         timeout = config.timeout
      }

      var self = this;
      var driverWaitIterations = 0;
      var lastWebdriverError;

      function _throwError() {
         throw new Error("Expected '" + self.locator().toString() + "' to be present and visible. " + "After " +
            driverWaitIterations + " driverWaitIterations. " + "Last webdriver error: " + lastWebdriverError);
      }

      function _isPresentError(err) {
         var additionalError = (err != null)
            ? err.toString()
            : err;
         lastWebdriverError += " "  + additionalError + " ";
         return false;
      }

      return browser.driver.wait(
         function() {
            driverWaitIterations++;
            if (opt_optStr === 'withRefresh') {
               // Refresh page after more than some retries
               if (driverWaitIterations > 7) {
                  _refreshPage();
               }
            }
            return self.isPresent().then(
               function(present) {
                  if (present) {
                     return self.isDisplayed().then(
                        function(visible) {
                           lastWebdriverError = 'visible:' + visible;
                           if (visible) {
                              return browser.wait(protractor.ExpectedConditions.elementToBeClickable(self),
                                 timeout).then(function() {
                                 return true;
                              }, function(err) {
                                 return false;
                              });
                           } else {
                              return false;
                           }

                        }, _isPresentError);
                  } else {
                     lastWebdriverError = 'present:' + present;
                     return false;
                  }
               }, _isPresentError);
         }, timeout).then(function(waitResult) {
         if (!waitResult) {
            _throwError()
         }
         return waitResult;
      }, function(err) {
         _isPresentError(err);
         _throwError();
         return false;
      });
   };

// Helpers
function _refreshPage() {
   // Swallow useless refresh page webdriver errors
   browser.navigate().refresh().then(function() {
   }, function(e) {
   });
};

ElementFinder.prototype.waitToHide =
   function(config) {
      var timeout = specTimeoutMs;
      if (config && config.timeout) {
         timeout = config.timeout;
      }
      var self = this;
      return browser.wait(protractor.ExpectedConditions.not(protractor.ExpectedConditions.visibilityOf(self)),
         timeout).then(function() {
         return true;
      }, function(err) {
         return false;
      });
   };

ElementFinder.prototype.waitToBeInvisible = function() {
   var self = this;
   return browser.wait(protractor.ExpectedConditions.invisibilityOf(self), specTimeoutMs).then(function () {
      return true;
   }, function (err) {
      return false;
   });
};