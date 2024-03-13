///<reference types="Cypress"/>
//import SearchTextField from "./SerachTextField"
import SearchTextField from "./DataPage"
describe('this is mocha framework',function()
{
    let testdata
    before(function()//this will run first then the 2 it,it is usually used for fixtures i.e to load the data
    {
      cy.fixture('example').then(function(data)//here then is used to wait untill the datas are loaded
      {
        testdata=data
      })
    })
    //load url and serach ca and validate the product count
    it('this is mocha framework tc',()=>
    {
    // cy.loginUrll()
       cy.visit(Cypress.env('url'))
      SearchTextField.searchbox.type(testdata.name1)
      
      cy.CompareText(SearchTextField.SearchProducts,SearchTextField.SearchSpecificproductname,SearchTextField.addToCartButton,"Carrot")
    //  SearchTextField.products.should('be.visible').should('have.length',4)
    // cy.typing_CA(testdata.name)
    // cy.SeachAndClickCarrot(testdata.productName)
    })
})
