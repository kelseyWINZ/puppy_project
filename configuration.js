"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getCapabilities = void 0;
const protractor_1 = require("protractor");
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
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: exports.getCapabilities(),
    specs: ['./functional/specs/puppyTest.js'],
    onPrepare: function () {
        var width = 1325;
        var height = 744;
        protractor_1.browser.driver.manage().window().setSize(width, height);
        protractor_1.by.addLocator("testId", function (value, parentElement) {
            parentElement = parentElement || document;
            var nodes = parentElement.querySelectorAll("[data-testid]");
            return Array.prototype.filter.call(nodes, function (node) {
                return node.getAttribute("data-testid") === value;
            });
        });
    },
};
