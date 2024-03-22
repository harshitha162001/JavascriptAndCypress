class SearchTextField{
    static get searchbox(){
        return cy.get("input[type='search']")
    }

    static get SearchProducts(){
        return  cy.get('.products .product')
    }
    
    static get SearchSpecificproductname(){
        return 'h4.product-name'
    }
    static get addToCartButton(){
       return "button[type='button']"
    }

    static get searchEditbox(){
        return "input[type='search']"
    }

    static entertextfield(locatorname,value){
        switch(locatorname)
        {
            case'productname':
                cy.enterText(this.searchEditbox,value)
                 break;

        }
    }

   
}
export default SearchTextField