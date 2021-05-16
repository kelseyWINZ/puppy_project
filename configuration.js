"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getCapabilities = void 0;
const protractor_jasmine2_html_reporter_1 = __importDefault(require("protractor-jasmine2-html-reporter"));
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const getCapabilities = () => {
    let browserToUse = "chrome-headful";
    const downloadDirectory = process.cwd() + "\\target\\"; // get absolute path at runtime
    return {
        browserName: process.env.TEST_BROWSER_NAME || "chrome",
        version: process.env.TEST_BROWSER_VERSION || "ANY",
        unexpectedAlertBehaviour: "accept",
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
exports.getCapabilities = getCapabilities;
const adoptAGoGo = {
    puppyRun: "functional/specs/puppyTest.js",
};
const getSuites = () => (Object.assign(Object.assign({}, adoptAGoGo), { adoptPuppiesTests: Object.values(adoptAGoGo) }));
exports.config = {
    seleniumAddress: 'http://puppies.herokuapp.com/',
    directConnect: true,
    capabilities: exports.getCapabilities(),
    suites: getSuites(),
    jasmineNodeOpts: {
        showColors: true,
    },
    onPrepare: function () {
        // Protractor will not wait for Angular
        protractor_1.browser.waitForAngularEnabled(false);
        var width = 1325;
        var height = 744;
        protractor_1.browser.driver.manage().window().setSize(width, height);
        jasmine.getEnv().addReporter(new protractor_jasmine2_html_reporter_1.default({
            savePath: "./target/",
            screenshotsFolder: "images",
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: false,
            fileName: "index.html",
            fileNameDateSuffix: false,
            showPassed: false,
        }));
        //To identify data test id locator
        protractor_2.by.addLocator("testId", function (value, parentElement) {
            parentElement = parentElement || document;
            var nodes = parentElement.querySelectorAll("[data-testid]");
            return Array.prototype.filter.call(nodes, function (node) {
                return node.getAttribute("data-testid") === value;
            });
        });
    },
};
