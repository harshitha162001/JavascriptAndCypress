describe('This is  my first TestSuite',function()
{
    //load url and serach ca and validate the product count
    it('Loading greencart website URL',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
   // cy.get("input[type='search']").type('CA').should('have.length',1)
   cy.get("input[type='search']").type('CA')
   cy.get('.products .product').should('be.visible').should('have.length',4)
  // cy.get('.products').find('.product').should('have.length',4)
   //find ==ineed to traverce to carrot product and thenclick on add to cart
   cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()//eq is the index
   cy.get('.products:visible').find('.product').eq(2).contains('ADD TO CART').click()

   cy.get('.product').eq(3).then((ele)=>{
   ele.find("button[type='button']").click()
   })
   

    //search product withnca and i need to traverse with each product  when the text carrot then i should click
   cy.get('.products').find('.product').each(($e1,index,$list)=>{
    const textveg=$e1.find('h4.product-name').text()
        if(textveg.includes('Carrot'))
        {
         $e1.find("button[type='button']").click();
        }
    
   })
   cy.get('h4.product-name').then(function(logoelement)
{
    cy.log(logoelement.text()+"")
 
})


})
})