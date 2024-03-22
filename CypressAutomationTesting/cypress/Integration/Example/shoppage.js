class shop {
    static get add() {
        return "button[class='btn btn-info']"
    }
    
    static get products(){
      return   cy.get('app-card-list h4 a')
    }
    static get submitbuttonlocator(){
       return '#navbarResponsive > .navbar-nav > .nav-item > .nav-link'
    }
    static get selectedproduct(){
        return 'h4.media-heading > a'
    }
    static get select1product(){
        return ':nth-child(1) > .col-sm-8 > .media > .media-body > h4.media-heading > a'
    }
    static get select2product(){
        return ':nth-child(2) > .col-sm-8 > .media > .media-body > h4.media-heading > a'
    }
    static get checkoutbtn(){
       return '.btn.btn-success'
      
    }
    static get country(){
        return '#country'
    }
    static get labelCheckBox(){
        return "label[for='checkbox2']"
    }
    
    static get checkBoxlo(){
        return "input[id='checkbox2']"
      //return '[data-layer="Content"]'
    }
    static get purchasebtnloc(){
       return  "input[value='Purchase']"
    }
    
    static get succeslocator(){
        return 'strong'
    }
    static headerValues(headerValues) {
        headerValues.rawTable.forEach(row => {
            const key = row[0];
            const value = row[1];
            switch (key) {
                case 'productname':
                    cy.addfunction(this.products, value, this.add)
                    break;
                case 'productname1':
                    cy.addfunction(this.products,value,this.add)
                    break;
              
                
            }
        })
    }
    static clicksButton(headerValues)
    {
      
                    cy.ClickButton(this.submitbuttonlocator)
    }
    //cling checkoutbutton
    static checkoutbutton(){

       cy.ClickButton(this.checkoutbtn)
       
    }
   //validating checkout page 
    static checkoutmsg(checkoutmsg){
        checkoutmsg.rawTable.forEach(row => {
            const key=row[0]
            const value=row[1]
 
            switch(key){
                case 'product':
                   cy.Validation(this.select1product,value)
                   break;
                 case 'product1':
                    cy.Validation(this.select2product,value) 
                    break;
            }
        });
    }
//writing bangalore
    static setDataValues(valuetoenter){
        valuetoenter.rawTable.forEach(row => {
            const key=row[0];
            const value=row[1];
    
            switch(key){
                case 'place':
                    cy.enterText(this.country,value)
                    break;         
            }
            
        });
       }

    static checkboxfunc() {
          cy.SelectCheckBox(this.checkBoxlo)
        }
    
    static purchasefunc(){
        cy.get(this.purchasebtnloc).click();
    }

    //varify the success mesg
    static Successfunc(headerValues) {
        headerValues.rawTable.forEach(row => {
            const key = row[0];
            const value = row[1];
            switch (key) {
                case 'Successmsg':
                    cy.isElementPresent(this.succeslocator,value)

            }
        })
    }
    
 
}
export default shop