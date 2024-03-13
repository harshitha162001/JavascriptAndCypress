///<reference types="Cypress"/>

describe("this is the dynamic dropdowm",() =>
{
    it('this is the dropdown testcase',() =>
    {
        cy.loginUrl()
        // cy.get('#autocomplete').type("ind")
        // cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
         //    if($e1.text()=='India'){
         //         $e1.click();
           // }
         //})
       
         cy.get('#checkbox-example fieldset label').each(($el) => {
          const text = $el.text().trim(); // Get the text of the element and trim any whitespace
       
          if (text === 'Option1') {
            // Find the checkbox associated with the element and select it
            cy.wrap($el).find('input[type="checkbox"]').click();
          }
        });

        // cy.DynamicDropdowm("#autocomplete",".ui-menu-item div","ind")

        // //hide and show
         cy.SelectCheckboxorRadioButton("input[value='radio1']")
         cy.get("#displayed-text").should('be.visible')
         cy.get("input[value='Hide']").click();
         cy.get("#displayed-text").should('not.be.visible')
         cy.get("input[value='Show").click();
         cy.get("#displayed-text").should('be.visible')
        

    })
})