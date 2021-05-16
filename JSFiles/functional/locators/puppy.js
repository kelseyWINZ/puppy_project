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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mdW5jdGlvbmFsL2xvY2F0b3JzL3B1cHB5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyRjtBQUUzRixvQ0FBb0M7QUFDdkIsUUFBQSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDNUUsUUFBQSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUMzRCxRQUFBLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO0FBRWhGLGFBQWE7QUFDQSxRQUFBLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7QUFDeEYsUUFBQSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztBQUNsRixRQUFBLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFBLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4QyxRQUFBLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNwQyxRQUFBLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUV6QyxpQkFBaUI7QUFDSixRQUFBLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUN6QyxRQUFBLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUMvQyxRQUFBLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUMzQyxRQUFBLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQ2xELFFBQUEsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7QUFTeEUsUUFBQSxjQUFjLEdBQUcsb0JBQU8sQ0FDbkMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLGlDQUFpQyxDQUFDLENBQ3BGLENBQUMifQ==