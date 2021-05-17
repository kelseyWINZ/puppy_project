"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrderBtn = exports.payTypeListBox = exports.emailField = exports.addressField = exports.nameField = exports.vet = exports.carrier = exports.collarNLeash = exports.chewToy = exports.adoptAnotherBtn = exports.completeAdoptionBtn = exports.adoptMeBtn = exports.nextPageBtn = exports.viewSparkyPupBtn = exports.viewBrookPupBtn = exports.adoptAPupBtn = void 0;
const protractor_1 = require("protractor");
//puppy list view + view puppy pages
exports.adoptAPupBtn = protractor_1.element(protractor_1.by.cssContainingText("a", "Adopt a Puppy"));
exports.viewBrookPupBtn = protractor_1.element(protractor_1.by.css('[action="/puppies/4"]'));
exports.viewSparkyPupBtn = protractor_1.element(protractor_1.by.css('[action="/puppies/9"]'));
exports.nextPageBtn = protractor_1.element(protractor_1.by.cssContainingText("a", "Next →"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVwcHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mdW5jdGlvbmFsL2xvY2F0b3JzL3B1cHB5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyRjtBQUUzRixvQ0FBb0M7QUFDdkIsUUFBQSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDbkUsUUFBQSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUMzRCxRQUFBLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7QUFDNUQsUUFBQSxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDM0QsUUFBQSxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztBQUVoRixhQUFhO0FBQ0EsUUFBQSxtQkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO0FBQ3hGLFFBQUEsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsUUFBQSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEMsUUFBQSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDeEMsUUFBQSxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsUUFBQSxHQUFHLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFekMsaUJBQWlCO0FBQ0osUUFBQSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDekMsUUFBQSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsUUFBQSxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDM0MsUUFBQSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUNsRCxRQUFBLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDIn0=