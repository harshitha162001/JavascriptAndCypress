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

Cypress.Commands.add('enterText',(locator,value)=>
{
  cy.get(locator).type(value)
})

Cypress.Commands.add('SelectDropdown',(dropdownlocator,value)=>{
    cy.get(dropdownlocator).select(value)
})

//Command to slect a particular checkBox
Cypress.Commands.add('SelectCheckBox',(locator)=>{
    cy.get(locator).check({force:true})
})
// Cypress.Commands.add('SelectCheckbox2',(locator,locator2)=>{
//     cy.get(locator2).each(($el) => {
        
//           // Find the checkbox associated with the element and select it
//           cy.wrap($el).parent().find(locator).check();
        
//       });
// })
 
//Command to click on element
Cypress.Commands.add('ClickButton',(locator)=>{
    cy.get(locator).click()
})
 
//Command to traverse through multiple radio button
Cypress.Commands.add('SelectRadioButton',(labelLocator,radioButtonLocator,value)=>{
    cy.get(labelLocator).each(($ele,index,$list)=>{
        if($ele.text().includes(value))
        {
            cy.wrap($ele).parent().find(radioButtonLocator).click();
        }
    })
})

Cypress.Commands.add('isElementPresent',(locator,expectedValue)=>
{
    cy.get(locator).then(function(textvalue)
    {
       expect(textvalue.text().trim()).to.equal(expectedValue)
    })
})

Cypress.Commands.add('addfunction',(products,expectedValue,addlocator)=>{
    products.each(($e1,index,$list)=>{
         
        if($e1.text().includes(expectedValue))
        {
            cy.wrap($e1).parent().parent().next().find(addlocator).click();
        }
     })
})

Cypress.Commands.add('compare',(products,expectedValue)=>{
    products.each(($e1,index,$list)=>{
         
       $e1.expect(textvalue.text().trim()).to.equal(expectedValue)
            
        
     })
    })

     //Command to check whether the product is present in the cart
 Cypress.Commands.add('Validation',(selectedproduct,value)=>{
         cy.get(selectedproduct).each(($ele,index,$list)=>{
             let text=$ele.text()
                 expect(text).to.equal(value)
         })
     })

 
