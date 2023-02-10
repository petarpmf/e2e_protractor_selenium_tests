var cron = require('node-cron');
var shell = require('shelljs');
cron.schedule("*/1 * * * *", function(){
  //shell.exec('npm run pretest');
shell.exec('protractor conf.js')
});