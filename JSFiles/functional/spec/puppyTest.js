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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const faker_1 = __importDefault(require("faker"));
const puppyPage = __importStar(require("../pages/puppyPage"));
const puppyLocator = __importStar(require("../locators/puppy"));
const puppy1 = "Brook";
const puppy2 = "Sparky";
const nextPage = "Next page";
const completeAdoption = "Complete Adoption";
const addedItem = "Checked accessory";
const addedAnotherItem = "Checked another accessory";
const placeOrder = "Place order";
const name = faker_1.default.name.firstName() + " " + faker_1.default.name.lastName();
const address = faker_1.default.address.streetAddress();
const email = faker_1.default.lorem.word() + faker_1.default.datatype.number() + "@example.com";
const checkType = "Check";
const cardType = "Credit Card";
/**
 * Adopt Brook, add a Chewy Toy and a Travel Carrier, pay with Check
 * Adopt Sparky, add a Collar & Leash, pay with Credit Card
 * Adopt 2 Random Dogs add a Collar & Leash to each, pay with Credit Card
 * Adopt 2 Random Dogs add a 3 Random Accessories to 1, pay with Credit Card
 */
describe("Verify functionality for the adopting puppies, buying accessories and checkout flow", () => {
    protractor_1.browser.manage().window().maximize();
    const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    beforeAll(function () {
        protractor_1.browser
            .get('http://puppies.herokuapp.com/')
            .then(() => protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.visibilityOf(puppyLocator.adoptAPupBtn), 60000, "Puppy adoption page taking too long to appear in the DOM"))
            .catch((e) => console.error(e));
    });
    /**
     * Adopt Brook, add a Chewy Toy and a Travel Carrier, pay with Check
     */
    it("TC#1 : Validate 1 puppy, 2 accessories and check payment form flow", (done) => __awaiter(void 0, void 0, void 0, function* () {
        setTimeout(function () {
            done();
        }, 15000);
        try {
            yield puppyPage.viewNAddPup(puppyLocator.viewBrookPupBtn, puppy1);
            yield puppyPage.clickItOrPupIt(puppyLocator.chewToy, addedItem);
            yield puppyPage.clickItOrPupIt(puppyLocator.carrier, addedAnotherItem);
            yield puppyPage.clickItOrPupIt(puppyLocator.completeAdoptionBtn, completeAdoption);
            yield puppyPage.fillPymtForm(name, address, email);
            yield puppyPage.clickListboxOption(puppyLocator.payTypeListBox, checkType);
            yield puppyPage.clickItOrPupIt(puppyLocator.placeOrderBtn, placeOrder);
        }
        catch (error) {
            console.error(error);
            expect(error).toBeFalsy();
        }
    }));
    /**
     * Adopt Sparky, add a Collar & Leash, pay with Credit Card
     */
    it("TC#2 : Validate 1 puppy, 1 accessories and CC payment form flow", (done) => __awaiter(void 0, void 0, void 0, function* () {
        setTimeout(function () {
            done();
        }, 15000);
        try {
            yield puppyPage.clickItOrPupIt(puppyLocator.nextPageBtn, nextPage);
            yield puppyPage.viewNAddPup(puppyLocator.viewSparkyPupBtn, puppy2);
            yield puppyPage.clickItOrPupIt(puppyLocator.collarNLeash, addedItem);
            yield puppyPage.clickItOrPupIt(puppyLocator.completeAdoptionBtn, completeAdoption);
            yield puppyPage.fillPymtForm(name, address, email);
            yield puppyPage.clickListboxOption(puppyLocator.payTypeListBox, cardType);
            yield puppyPage.clickItOrPupIt(puppyLocator.placeOrderBtn, placeOrder);
        }
        catch (error) {
            console.error(error);
            expect(error).toBeFalsy();
        }
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnVuY3Rpb25hbC9zcGVjL3B1cHB5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkY7QUFDM0Ysa0RBQTBCO0FBQzFCLDhEQUErQztBQUMvQyxnRUFBa0Q7QUFDbEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUV4QixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDN0IsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztBQUM3QyxNQUFNLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztBQUN0QyxNQUFNLGdCQUFnQixHQUFHLDJCQUEyQixDQUFDO0FBQ3JELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQztBQUNqQyxNQUFNLElBQUksR0FBRyxlQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFFLEdBQUcsR0FBRSxlQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2hFLE1BQU0sT0FBTyxHQUFHLGVBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDOUMsTUFBTSxLQUFLLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxlQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLGNBQWMsQ0FBQztBQUM1RSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDMUIsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDO0FBRS9COzs7OztHQUtHO0FBRUgsUUFBUSxDQUFDLHFGQUFxRixFQUFFLEdBQUcsRUFBRTtJQUNuRyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FB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