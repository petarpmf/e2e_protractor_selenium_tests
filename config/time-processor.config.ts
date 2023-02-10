let DisplayProcessor = require('jasmine-spec-reporter').DisplayProcessor;

export function TimeProcessor(configuration) {
}


function getTime() {
   var now = new Date();
   return '[' + now.toLocaleTimeString() + ']';
}

let getTimeAndLog = (suite, log): string => {
   return getTime() + ' - ' + log;
};

TimeProcessor.prototype = new DisplayProcessor();
TimeProcessor.prototype.displayPendingSpec = getTimeAndLog;
TimeProcessor.prototype.displayFailedSpec = getTimeAndLog;
TimeProcessor.prototype.displaySuccessfulSpec = getTimeAndLog;
TimeProcessor.prototype.displaySuite = getTimeAndLog;
