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
const completeAdoption = "Complete Adoption";
const addedItem = "Checked accessory";
const addedAnotherItem = "Checked another accessory";
const placeOrder = "Place order";
const name = faker_1.default.name.firstName() + " " + faker_1.default.name.firstName();
const address = faker_1.default.address.streetAddress();
const email = name + "@example.com";
const checkType = "Check";
const creditType = "Credit";
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
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnVuY3Rpb25hbC9zcGVjL3B1cHB5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkY7QUFDM0Ysa0RBQTBCO0FBQzFCLDhEQUErQztBQUMvQyxnRUFBa0Q7QUFDbEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUV4QixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO0FBQzdDLE1BQU0sU0FBUyxHQUFHLG1CQUFtQixDQUFDO0FBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsMkJBQTJCLENBQUM7QUFDckQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUUsR0FBRyxHQUFFLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDakUsTUFBTSxPQUFPLEdBQUcsZUFBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsY0FBYyxDQUFDO0FBQ3BDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFHNUI7Ozs7O0dBS0c7QUFFSCxRQUFRLENBQUMscUZBQXFGLEVBQUUsR0FBRyxFQUFFO0lBQ2pHLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQ3pELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxNQUFPLENBQUM7SUFDM0MsU0FBUyxDQUFDO1FBQ04sb0JBQU87YUFDTixHQUFHLENBQUMsK0JBQStCLENBQUM7YUFDcEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUNYLG9CQUFPLENBQUMsSUFBSSxDQUNSLHVCQUFVLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFDckUsS0FBTSxFQUNOLDBEQUEwRCxDQUN6RCxDQUNKO2FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFSDs7T0FFRztJQUNILEVBQUUsQ0FBQyxvRUFBb0UsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO1FBQ3BGLFVBQVUsQ0FBQztZQUNQLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxFQUFFLEtBQU0sQ0FBQyxDQUFDO1FBQ1gsSUFBSTtZQUNGLE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDdkUsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ25GLE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELE1BQU0sU0FBUyxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0UsTUFBTSxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDeEU7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUdMLFFBQVEsQ0FBQyxHQUFTLEVBQUU7UUFDcEIsT0FBTyxDQUFDLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztJQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==