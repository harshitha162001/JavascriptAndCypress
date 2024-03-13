describe('this is the checkboxtestsuite',function()
{
    it('This is  checkbox testcase',function()
    {
        //checkbox
    //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.loginUrl()
    cy.get("#opentab").invoke('removeAttr','target').click();

    // cy.origin("https://www.qaclickacademy.com/",()=>{
    //    cy.get("#navbarSupportedContent a[href *='about']").click();
    // })
    cy.get('#alertbtn').click();
    })
})
