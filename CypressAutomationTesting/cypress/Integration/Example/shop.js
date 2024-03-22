import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import shop from "./shoppage";
Given("Load the photocommerce url as {string}", function (urls) {
    cy.visit(urls);
});

When("the product is iphoneX click the add button", function (expectedvalue) {
    shop.headerValues(expectedvalue)

});

When("click on the checkoutbutton", function () {
   shop.clicksButton()
});

When("Click on the SeondCheckoutButton", function () {
    shop.checkoutbutton()
    });

 When("user set the value in photocommerce  page", function (valuetoenter) {
        shop.setDataValues(valuetoenter)
        });

 When("Select the CheckBox for the required value", function () {
           shop.checkboxfunc()
            });

 When("Click on the purchase button", function () {
           shop.purchasefunc()
                });

 Then("Verify the Message displayed with the required Message", function (expectedvalue) {
                    shop.Successfunc(expectedvalue)
                    });

 Then("Verify the product is same as the expected one", function (expectedValue) {
     shop.checkoutmsg(expectedValue)
        });
