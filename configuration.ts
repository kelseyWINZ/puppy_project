//import Jasmine2HtmlReporter from "protractor-jasmine2-html-reporter";
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

type SuiteMap = { [key: string]: string };
type Suites = { [key: string]: string | string[] };


const adoptAGoGo: SuiteMap = {
  puppyRun: "functional/specs/puppyTest.js",
};

const getSuites = (): Suites => ({
    ...adoptAGoGo,
    adoptPuppiesTests: Object.values(adoptAGoGo),
  });

export const config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: getCapabilities(),
  suites: getSuites(),
  jasmineNodeOpts: {
    showColors: true,
  },

  onPrepare: function () {
    // Protractor will not wait for Angular
    browser.waitForAngularEnabled(false);
    var width = 1325;
    var height = 744;
    browser.driver.manage().window().setSize(width, height);
    // jasmine.getEnv().addReporter(
    //   new Jasmine2HtmlReporter({
    //     savePath: "./target/",
    //     screenshotsFolder: "images",
    //     takeScreenshots: true,
    //     takeScreenshotsOnlyOnFailures: false,
    //     fileName: "index.html",
    //     fileNameDateSuffix: false,
    //     showPassed: false,
    //   })
    // );
    //To identify data test id locator
    by.addLocator("testId", function (value: any, parentElement: Document) {
      parentElement = parentElement || document;
      var nodes = parentElement.querySelectorAll("[data-testid]");
      return Array.prototype.filter.call(nodes, function (node) {
        return node.getAttribute("data-testid") === value;
      });
    });
  },
};
