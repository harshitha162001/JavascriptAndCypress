describe('this is the checkboxtestsuite',function()
{
    it('This is  checkbox testcase',function()
    {
        //checkbox
    //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.loginUrl()

    //   cy.get('#checkBoxOption1').check().should('be.checked')
    //   cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')
      //dropdown
      cy.get("select[name='dropdown-class-example']").select('Option1').should('have.value','option1')
     // cy.wait(500)
      cy.SelectCheckboxorRadioButton("#checkBoxOption1")
      cy.SelectDropDowm("select[name='dropdown-class-example']","Option2")
      cy.WaitElement("input[type='checkbox").check('option2').should('be.checked')
    })
} )