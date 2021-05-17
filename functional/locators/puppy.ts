import { browser, protractor, element, by, ExpectedConditions as until } from "protractor";

//puppy list view + view puppy pages
export const adoptAPupBtn = element(by.cssContainingText("a", "Adopt a Puppy"));
export const viewBrookPupBtn = element(by.css('[action="/puppies/4"]'));
export const viewSparkyPupBtn = element(by.css('[action="/puppies/9"]'));
export const viewAnyPupBtn = element(by.css(`[type="submit"][value="View Details"]`));
export const nextPageBtn = element(by.cssContainingText("a", "Next →"));
export const page3 = element(by.cssContainingText("a", "3"));
export const adoptMeBtn = element(by.css(`[type="submit"][value="Adopt Me!"]`));

//litter page
export const completeAdoptionBtn = element(by.css(`[type="submit"][value="Complete the Adoption"]`));
export const adoptAnotherBtn = element(by.css(`[type="submit"][value="Adopt Another Puppy"]`));
export const chewToy = element(by.id("toy"));
export const collarNLeash = element(by.id("collar"));
export const carrier = element(by.id("carrier"));
export const vet = element(by.id("vet"));
export const collarNLeash2 = element(by.css("td:nth-child(6) > collar"));

//order form page
export const nameField = element(by.id("order_name"));
export const addressField = element(by.id("order_address"));
export const emailField = element(by.id("order_email"));
export const payTypeListBox = element(by.id("order_pay_type"));
export const placeOrderBtn = element(by.css(`[type="submit"][value="Place Order"]`));