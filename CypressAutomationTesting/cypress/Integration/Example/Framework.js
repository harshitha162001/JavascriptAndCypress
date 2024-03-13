///<reference types="Cypress"/>
describe('This is  my first framework testsuite',function()
{
    let testdata
    before(function()//this will run first then the 2 it,it is usually used for fixtures i.e to load the data
    {
      cy.fixture('example').then(function(data)//here then is used to wait untill the datas are loaded
      {
        testdata=data
      })

    })
    beforeEach(function()//it will run for every it,
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('This is framework testcase',function()
    {
        cy.get("input[type='search']").type(testdata.name1)
    })
    it('This is framework testcase',function()
    {
        cy.get("input[type='search']").type(testdata.name1) 
    })
})
