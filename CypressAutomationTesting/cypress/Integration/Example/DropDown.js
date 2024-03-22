import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//import DropDown from "./DropDownPage";
import DropDown from "./DropDownPage";
 
Given("Load the website using {string}", function (urls) {
    DropDown.LoadPage(urls);
    });
When("Traverse the DropDown {string} using {string}", function (optionLocatorName, optionValue) {
    DropDown.selectDropDown(optionLocatorName,optionValue)   
    });  
Then("Validate the option has been selected", function () {
       
    });