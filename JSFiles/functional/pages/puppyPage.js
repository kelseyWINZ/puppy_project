"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clickListboxOption = exports.fillPymtForm = exports.clickItOrPupIt = exports.viewNAddPup = void 0;
const protractor_1 = require("protractor");
const puppyLocator = __importStar(require("../locators/puppy"));
/**
 * Navigate to view one of the puppies and add to litter
 * @param viewPupDeets - add the locator button to one of the puppies to view more details from the puppy list view
 * @param pupName - just the puppy's name being tested for error handling purposes
 */
const viewNAddPup = (viewPupDeets, pupName) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(viewPupDeets), 5000, `${pupName}'s view details button on the puppy list view is taking too long to appear in DOM`);
    yield viewPupDeets.click();
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(puppyLocator.adoptMeBtn), 5000, "Adopt me button taking too long to appear in DOM");
    yield puppyLocator.adoptMeBtn.click();
});
exports.viewNAddPup = viewNAddPup;
/**
 * Click something
 * @param oneOfTheBtns - w/e locator btn you want to click
 * @param wordToYourLitter - a descriptor word for what is clicked for error handling purposes
 */
const clickItOrPupIt = (oneOfTheBtns, wordToYourLitter) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(oneOfTheBtns), 5000, `${wordToYourLitter} button on litter page is taking too long to appear in DOM`);
    yield oneOfTheBtns.click();
});
exports.clickItOrPupIt = clickItOrPupIt;
/**
 * Fill in payer data to form
 */
const fillPymtForm = (name, address, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(puppyLocator.nameField), 5000, "Payer Name form field taking too long to appear in the DOM");
    yield puppyLocator.nameField.sendKeys(name);
    yield puppyLocator.addressField.sendKeys(address);
    yield puppyLocator.emailField.sendKeys(email);
});
exports.fillPymtForm = fillPymtForm;
/**
 * Click an option from a listbox
 * @param getListBox - locator btn for the listbox you want to select from
 * @param optionWord - word for option being selected from listbox
 */
function clickListboxOption(getListBox, optionWord) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(getListBox), 5000, "List taking too long to appear in DOM");
        console.log("Search string to be selected from dropdown : " + optionWord);
        const option = protractor_1.element(protractor_1.by.cssContainingText('[role="option"]', optionWord));
        const el = yield option.getWebElement();
        protractor_1.browser.executeScript((el) => {
            el.scrollIntoView();
        }, el);
        yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.element(protractor_1.by.cssContainingText('[role="option"]', optionWord))), 5000, "Search filter on list page taking too long to load");
        yield protractor_1.element(protractor_1.by.cssContainingText('[role="option"]', optionWord)).click();
    });
}
exports.clickListboxOption = clickListboxOption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHlQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnVuY3Rpb25hbC9wYWdlcy9wdXBweVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtSDtBQUNuSCxnRUFBa0Q7QUFFbEQ7Ozs7R0FJRztBQUNLLE1BQU0sV0FBVyxHQUFHLENBQU8sWUFBMkIsRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUMvRSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNkLCtCQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUNoQyxJQUFLLEVBQ0wsR0FBRyxPQUFPLG1GQUFtRixDQUNoRyxDQUFDO0lBQ0YsTUFBTSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FDZCwrQkFBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQzNDLElBQUssRUFDTCxrREFBa0QsQ0FDckQsQ0FBQztJQUNGLE1BQU0sWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMxQyxDQUFDLENBQUEsQ0FBQztBQWJZLFFBQUEsV0FBVyxlQWF2QjtBQUVGOzs7O0dBSUc7QUFDSyxNQUFNLGNBQWMsR0FBRyxDQUFPLFlBQTJCLEVBQUUsZ0JBQXdCLEVBQUUsRUFBRTtJQUMzRixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNkLCtCQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUNoQyxJQUFLLEVBQ0wsR0FBRyxnQkFBZ0IsNERBQTRELENBQ2xGLENBQUM7SUFDRixNQUFNLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMvQixDQUFDLENBQUEsQ0FBQztBQVBZLFFBQUEsY0FBYyxrQkFPMUI7QUFFRjs7R0FFRztBQUNLLE1BQU0sWUFBWSxHQUFHLENBQU8sSUFBd0QsRUFBRSxPQUEyRCxFQUFFLEtBQXlELEVBQUUsRUFBRTtJQUNwTixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNoQiwrQkFBSyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQzFDLElBQUssRUFDTCw0REFBNEQsQ0FDN0QsQ0FBQztJQUNGLE1BQU0sWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsTUFBTSxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxNQUFNLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDO0FBVFUsUUFBQSxZQUFZLGdCQVN0QjtBQUVKOzs7O0dBSUc7QUFDSCxTQUFzQixrQkFBa0IsQ0FBQyxVQUF5QixFQUFFLFVBQTJCOztRQUMzRixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUNkLCtCQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUM5QixJQUFLLEVBQ0wsdUNBQXVDLENBQ3RDLENBQUM7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsb0JBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN0QyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FDZCwrQkFBSyxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2hGLElBQUssRUFDTCxvREFBb0QsQ0FDbkQsQ0FBQztRQUNOLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0NBQUE7QUFsQkgsZ0RBa0JHIn0=