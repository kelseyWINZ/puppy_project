import { browser, protractor, element, by, ExpectedConditions as until, ElementFinder, promise } from "protractor";
import * as puppyLocator from "../locators/puppy"; 

/**
 * Navigate to view one of the puppies and add to litter
 * @param viewPupDeets - add the locator button to one of the puppies to view more details from the puppy list view
 * @param pupName - just the puppy's name being tested for error handling purposes
 */
 export const viewNAddPup = async (viewPupDeets: ElementFinder, pupName: string) => {
    await browser.wait(
        until.visibilityOf(viewPupDeets),
        5_000,
        `${pupName}'s view details button on the puppy list view is taking too long to appear in DOM`
    );
    await viewPupDeets.click();
    await browser.wait(
        until.visibilityOf(puppyLocator.adoptMeBtn),
        5_000,
        "Adopt me button taking too long to appear in DOM"
    );
    await puppyLocator.adoptMeBtn.click();
};

/**
 * Click something
 * @param oneOfTheBtns - w/e locator btn you want to click
 * @param wordToYourLitter - a descriptor word for what is clicked for error handling purposes
 */
 export const clickItOrPupIt = async (oneOfTheBtns: ElementFinder, wordToYourLitter: string) => {
    await browser.wait(
        until.visibilityOf(oneOfTheBtns),
        5_000,
        `${wordToYourLitter} button on litter page is taking too long to appear in DOM`
    );
    await oneOfTheBtns.click();
};

/**
 * Fill in payer data to form 
 */
 export const fillPymtForm = async (name: string | number | promise.Promise<string | number>, address: string | number | promise.Promise<string | number>, email: string | number | promise.Promise<string | number>) => {
    await browser.wait(
      until.visibilityOf(puppyLocator.nameField),
      5_000,
      "Payer Name form field taking too long to appear in the DOM"
    );
    await puppyLocator.nameField.sendKeys(name);
    await puppyLocator.addressField.sendKeys(address);
    await puppyLocator.emailField.sendKeys(email);
  };

/**
 * Click an option from a listbox
 * @param getListBox - locator btn for the listbox you want to select from
 * @param optionWord - word for option being selected from listbox
 */
export async function clickListboxOption(getListBox: ElementFinder, optionWord: string | RegExp) {
    await browser.wait(
        until.visibilityOf(getListBox), 
        5_000, 
        "List taking too long to appear in DOM"
        );
    console.log("Search string to be selected from dropdown : " + optionWord);
    const option = element(by.cssContainingText('[role="option"]', optionWord));
    const el = await option.getWebElement();
    browser.executeScript((el: HTMLElement) => {
        el.scrollIntoView();
    }, el);
    await browser.wait(
        until.visibilityOf(element(by.cssContainingText('[role="option"]', optionWord))),
        5_000,
        "Search filter on list page taking too long to load"
        );
    await element(by.cssContainingText('[role="option"]', optionWord)).click();
  }