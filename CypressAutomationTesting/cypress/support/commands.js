// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import SearchTextField from "../Integration/Example/DataPage"
Cypress.Commands.add("loginUrl",()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})
Cypress.Commands.add("loginUrll",()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})
Cypress.Commands.add("SelectCheckboxorRadioButton",(checkboxlocator)=>{
    cy.get(checkboxlocator).check().should('be.checked')
})

Cypress.Commands.add("SelectDropDowm",(dropdowmlocator,value)=>{
   cy.get(dropdowmlocator).select(value).should('be.have','option2')
})

//wait 
Cypress.Commands.add('WaitElement',(locator,Timeout=3000)=>{
    cy.get(locator,{Timeout}).should('be.visible')
})

Cypress.Commands.add('DynamicDropdowm',(locator1,locator2,text)=>{
    cy.get(locator1).type(text)
    cy.get(locator2).each(($e1,index,$list)=>{
        if($e1.text()=='India'){
            $e1.click();
        }
    })
})

Cypress.Commands.add('typing_CA',(text)=>{
SearchTextField.searchbox.type(text)
})
Cypress.Commands.add('CompareText',(Locator1,Locator3,Locator4,text)=>{
    
    Locator1.each(($e1,index,$list)=>{
       const textveg=$e1.find(Locator3).text()
       if(textveg.includes(text))
       {
        cy.wrap($e1).find(Locator4).click();
       }
    })
})
