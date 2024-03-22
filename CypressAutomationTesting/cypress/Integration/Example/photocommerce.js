import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"
import photocommerce from "./photocommercepage";
Given("Load the photocommerce url as {string}", function (urls) {
  cy.visit(urls)
    });

 When("user set the value in photocommerce registration page", function (valuetoenter) {
        photocommerce.setDataValues(valuetoenter)
        });
 When("Select the CheckBox for the required value", function (checkBoxValue) {
          photocommerce.selectCheckBox(checkBoxValue)
      });

 When("Select the required value from DropDown", function (dropDownValue) {
        photocommerce.selectDropDown(dropDownValue.rawTable[0][0])
    });
 
When("Select the required Employement fields", function (radioButtonValue) {
        photocommerce.selectRadioButton(radioButtonValue.rawTable[0][0])
        //photocommerce.selectBirthDate()
    });
 
When("Click on the submit button", function () {
        photocommerce.clickSubmitButton()
    });

//   Then("Verify the Message displayed with the required Message", function (messageValue) {
//       photocommerce.verifyMessageField(messageValue.rawTable[0][0])
//   });

Then("Verify the Message displayed with the required Message", function (expectedValue) {
   photocommerce.headerValues(expectedValue)
    });