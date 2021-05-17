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
    specs: ['functional/spec/puppyTest.js'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlEO0FBRTFDLE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRTtJQUNsQyxJQUFJLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztJQUNwQyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQywrQkFBK0I7SUFDdkYsT0FBTztRQUNMLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLFFBQVE7UUFDdEQsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLElBQUksS0FBSztRQUNsRCx3QkFBd0IsRUFBRSxRQUFRO1FBQ2xDLGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxZQUFZO1lBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7WUFDL0IsS0FBSyxFQUFFO2dCQUNMLFFBQVEsRUFBRTtvQkFDUixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixpQkFBaUIsRUFBRSxpQkFBaUI7aUJBQ3JDO2FBQ0Y7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQlcsUUFBQSxlQUFlLG1CQWtCMUI7QUFFVyxRQUFBLE1BQU0sR0FBVztJQUM1QixlQUFlLEVBQUUsOEJBQThCO0lBQy9DLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFlBQVksRUFBRSx1QkFBZSxFQUFFO0lBQy9CLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO0lBQ3ZDLFNBQVMsRUFBRTtRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDakIsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RCxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLEtBQVUsRUFBRSxhQUF1QjtZQUNuRSxhQUFhLEdBQUcsYUFBYSxJQUFJLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEtBQUssR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDNUQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMifQ==