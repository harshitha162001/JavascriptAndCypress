///<reference types="Cypress"/>
describe('This is  my first TestSuite',function()
{
    //load url and serach ca and validate the product count
    it('Loading greencart website URL',()=>{
         cy.loginUrl();
        // cy.get("div[class='mouse-hover-content']").invoke('show')
         cy.contains('Top').click({force:true})
         cy.url().should('includes','top')
    })
})