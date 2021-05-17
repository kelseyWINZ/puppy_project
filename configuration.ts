import { Config, browser, by } from "protractor";

export const getCapabilities = () => {
  let browserToUse = "chrome-headful";
  const downloadDirectory = process.cwd() + "\\target\\"; // get absolute path at runtime
  return {
    browserName: process.env.TEST_BROWSER_NAME || "chrome",
    version: process.env.TEST_BROWSER_VERSION || "ANY",
    unexpectedAlertBehaviour: "accept", // To handle unexpected alerts on tests
    chromeOptions: {
      args: browserToUse,
      binary: process.env.CHROME_PATH,
      prefs: {
        download: {
          prompt_for_download: false,
          default_directory: downloadDirectory,
        },
      },
    },
  };
};

export const config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: getCapabilities(),
  specs: ['functional/spec/puppyTest.js'],
  onPrepare: function () {
    var width = 1325;
    var height = 744;
    browser.driver.manage().window().setSize(width, height);

    by.addLocator("testId", function (value: any, parentElement: Document) {
      parentElement = parentElement || document;
      var nodes = parentElement.querySelectorAll("[data-testid]");
      return Array.prototype.filter.call(nodes, function (node) {
        return node.getAttribute("data-testid") === value;
      });
    });
  },
};
