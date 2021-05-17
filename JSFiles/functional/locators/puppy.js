"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrderBtn = exports.payTypeListBox = exports.emailField = exports.addressField = exports.nameField = exports.collarNLeash2 = exports.vet = exports.carrier = exports.collarNLeash = exports.chewToy = exports.adoptAnotherBtn = exports.completeAdoptionBtn = exports.adoptMeBtn = exports.page3 = exports.nextPageBtn = exports.viewAnyPupBtn = exports.viewSparkyPupBtn = exports.viewBrookPupBtn = exports.adoptAPupBtn = void 0;
const protractor_1 = require("protractor");
//puppy list view + view puppy pages
exports.adoptAPupBtn = protractor_1.element(protractor_1.by.cssContainingText("a", "Adopt a Puppy"));
exports.viewBrookPupBtn = protractor_1.element(protractor_1.by.css('[action="/puppies/4"]'));
exports.viewSparkyPupBtn = protractor_1.element(protractor_1.by.css('[action="/puppies/9"]'));
exports.viewAnyPupBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="View Details"]`));
exports.nextPageBtn = protractor_1.element(protractor_1.by.cssContainingText("a", "Next →"));
exports.page3 = protractor_1.element(protractor_1.by.cssContainingText("a", "3"));
exports.adoptMeBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Adopt Me!"]`));
//litter page
exports.completeAdoptionBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Complete the Adoption"]`));
exports.adoptAnotherBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Adopt Another Puppy"]`));
exports.chewToy = protractor_1.element(protractor_1.by.id("toy"));
exports.collarNLeash = protractor_1.element(protractor_1.by.id("collar"));
exports.carrier = protractor_1.element(protractor_1.by.id("carrier"));
exports.vet = protractor_1.element(protractor_1.by.id("vet"));
exports.collarNLeash2 = protractor_1.element(protractor_1.by.css("td:nth-child(6) > collar"));
//order form page
exports.nameField = protractor_1.element(protractor_1.by.id("order_name"));
exports.addressField = protractor_1.element(protractor_1.by.id("order_address"));
exports.emailField = protractor_1.element(protractor_1.by.id("order_email"));
exports.payTypeListBox = protractor_1.element(protractor_1.by.id("order_pay_type"));
exports.placeOrderBtn = protractor_1.element(protractor_1.by.css(`[type="submit"][value="Place Order"]`));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mdW5jdGlvbmFsL2xvY2F0b3JzL3B1cHB5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyRjtBQUUzRixvQ0FBb0M7QUFDdkIsUUFBQSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkUsUUFBQSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUMzRCxRQUFBLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDNUQsUUFBQSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztBQUN6RSxRQUFBLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMzRCxRQUFBLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxRQUFBLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO0FBRWhGLGFBQWE7QUFDQSxRQUFBLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7QUFDeEYsUUFBQSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztBQUNsRixRQUFBLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoQyxRQUFBLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN4QyxRQUFBLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNwQyxRQUFBLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM1QixRQUFBLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0FBRXpFLGlCQUFpQjtBQUNKLFFBQUEsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLFFBQUEsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFFBQUEsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFFBQUEsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7QUFDbEQsUUFBQSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQyJ9