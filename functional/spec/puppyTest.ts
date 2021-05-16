import { browser, protractor, element, by, ExpectedConditions as until } from "protractor";
import faker from "faker";
import * as puppyPage from "../pages/puppyPage"
import * as puppyLocator from "../locators/puppy"; 
const puppy1 = "Brook";
const puppy2 = "Sparky";

const completeAdoption = "Complete Adoption";
const addedItem = "Checked accessory";
const addedAnotherItem = "Checked another accessory";
const placeOrder = "Place order";
const name = faker.name.firstName() +" "+ faker.name.firstName();
const address = faker.address.streetAddress();
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
    browser.manage().window().maximize();
    const originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100_000;
    beforeAll(function () {
        browser
        .get('http://puppies.herokuapp.com/')
        .then(() =>
        browser.wait(
            protractor.ExpectedConditions.visibilityOf(puppyLocator.adoptAPupBtn),
            60_000,
            "Puppy adoption page taking too long to appear in the DOM"
            )
        )
        .catch((e) => console.error(e));
    });

    /**
     * Adopt Brook, add a Chewy Toy and a Travel Carrier, pay with Check
     */
    it("TC#1 : Validate 1 puppy, 2 accessories and check payment form flow", async (done) => {
        setTimeout(function () {
            done();
        }, 15_000);
        try {
          await puppyPage.viewNAddPup(puppyLocator.viewBrookPupBtn, puppy1);
          await puppyPage.clickItOrPupIt(puppyLocator.chewToy, addedItem);
          await puppyPage.clickItOrPupIt(puppyLocator.carrier, addedAnotherItem);
          await puppyPage.clickItOrPupIt(puppyLocator.completeAdoptionBtn, completeAdoption);
          await puppyPage.fillPymtForm(name, address, email);
          await puppyPage.clickListboxOption(puppyLocator.payTypeListBox, checkType);
          await puppyPage.clickItOrPupIt(puppyLocator.placeOrderBtn, placeOrder);
        } catch (error) {
          console.error(error);
          expect(error).toBeFalsy();
        }
      });


    afterAll(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});
});