import browserstack from "browserstack-local"

exports.config = {
  seleniumAddress: "http://hub-cloud.browserstack.com/wd/hub",

  capabilities: {
    "browserstack.user": "kelseywinzeler_kFBhmK",
    "browserstack.key": "sW85gBn8tVqjLEPEUKma    ",
    "browserstack.local": true,
    browserName: "chrome",
    name: "Bstack-[Protractor] Local Test",
  },
  specs: ["configtest.js"],

  // Code to start browserstack local before start of test
  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ key: exports.config.capabilities["browserstack.key"] }, function (error) {
        if (error) return reject(error);
        console.log("Connected. Now testing...");

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve);
    });
  },
};
