//stepdefinition
import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"
import SearchTextField from "./DataPage"

// Given('load the green cart website',function()
// {
// cy.visit(Cypress.env('url'))
// })
Given("load the green cart website", function (dataTable) {
   cy.visit(dataTable.rawTable[0][0])
 });


 Given("load the green cart website as {string}", function (url) {
      cy.visit(url)
        });

When('Search for the product Ca in search Menu',function()
{
    SearchTextField.searchbox.type('ca')
})

When("Search for the product {string} in search Menu", function (searchvalue) {
    SearchTextField.searchbox.type(searchvalue)
    });

 When("Select a perticuler {string} and perform add to cart function", function (product) {
        cy.CompareText(SearchTextField.SearchProducts,SearchTextField.SearchSpecificproductname,SearchTextField.addToCartButton,product)
        });    
Then('Validate the product length matches with given value',function()
{
    cy.get('.products .product').should('be.visible').should('have.length',4)
})
