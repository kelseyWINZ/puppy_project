"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disExceedError = exports.placeOrderBtn = exports.payTypeListBox = exports.emailField = exports.addressField = exports.nameField = exports.vet = exports.carrier = exports.collarNLeash = exports.chewToy = exports.adoptAnotherBtn = exports.completeAdoptionBtn = exports.adoptMeBtn = exports.viewBrookPupBtn = exports.adoptAPupBtn = void 0;
const protractor_1 = require("protractor");
//puppy list view + view puppy pages
exports.adoptAPupBtn = protractor_1.element(protractor_1.by.cssContainingText('div a href', "Adopt a Puppy"));
exports.viewBrookPupBtn = protractor_1.element(protractor_1.by.css('[action="/puppies/4"]'));
exports.adoptMeBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Adopt Me!"]`));
//litter page
exports.completeAdoptionBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Complete the Adoption"]`));
exports.adoptAnotherBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Adopt Another Puppy"]`));
exports.chewToy = protractor_1.element(protractor_1.by.id("toy"));
exports.collarNLeash = protractor_1.element(protractor_1.by.id("collar"));
exports.carrier = protractor_1.element(protractor_1.by.id("carrier"));
exports.vet = protractor_1.element(protractor_1.by.id("vet"));
//order form page
exports.nameField = protractor_1.element(protractor_1.by.id("order_name"));
exports.addressField = protractor_1.element(protractor_1.by.id("order_address"));
exports.emailField = protractor_1.element(protractor_1.by.id("order_email"));
exports.payTypeListBox = protractor_1.element(protractor_1.by.id("order_pay_type"));
exports.placeOrderBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Place Order"]`));
exports.disExceedError = protractor_1.element(protractor_1.by.cssContainingText("p.MuiFormHelperText-root", "Discount cannot exceed subtotal"));
