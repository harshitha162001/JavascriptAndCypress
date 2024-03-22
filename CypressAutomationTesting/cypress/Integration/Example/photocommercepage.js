class photocommerce{
   static get name()
   {
   return  ':nth-child(1) > .form-control'
   }
   static get Email(){
    return ':nth-child(2) > .form-control'
   }
   static get Password(){
    return '#exampleInputPassword1'
   }
   static get checkBox()
    {
        return '#exampleCheck1'
    }
 
    static get labelCheckBox()
    {
        return 'form.ng-dirty > :nth-child(4) > .form-check-label'
    }
 
    static get dropDownLocator()
    {
        return '#exampleFormControlSelect1'
    }
 
    static get radioButtonLabelLocator()
    {
        return '.form-check-label'
    }
 
    static get radioButtonLocator()
    {
        return "[name='inlineRadioOptions']"
    }
 
    static get dateButtonLocator()
    {
        return ':nth-child(8) > .form-control'
    }
 
    static get submitButtonLocator()
    {
        return '.btn'
    }
 
    static get messageLocator()
    {
        return '.alert > strong'
    }
    static get date(){
        return "input[name='bday']"
    }
 
   
 
   static setDataValues(valuetoenter){
    valuetoenter.rawTable.forEach(row => {
        const key=row[0];
        const value=row[1];

        switch(key){
            case 'Name':
                cy.enterText(this.name,value)
                break;
            case 'Email':
                cy.enterText(this.Email,value)
                break;
            case 'password':
                cy.enterText(this.Password,value)
                break;
            case 'Date':
                cy.enterText(this.date,value)
            default:
        }
        
    });
   }
   //validation
    static headerValues(headerValues) {
        headerValues.rawTable.forEach(row => {
            const key = row[0];
            const value = row[1];
            switch (key) {
                case 'Successmsg':
                    cy.isElementPresent(this.messageLocator,value)

            }
        })
    }


   static selectCheckBox(value)
   {
       if(cy.get(this.labelCheckBox).contains(value.rawTable[0][0]))
       {
           cy.SelectCheckBox(this.checkBox)
       }
   }

   static selectDropDown(value)
   {
       cy.SelectDropdown(this.dropDownLocator,value)      
   }
  
   static selectRadioButton(value)
   {
       cy.SelectRadioButton(this.radioButtonLabelLocator,this.radioButtonLocator,value)
   }

   static selectBirthDate()
   {
       cy.get(this.dateButtonLocator).click()
   }

   static clickSubmitButton()
   {
       cy.ClickButton(this.submitButtonLocator)
   }

   static verifyMessageField(value)
   {
       cy.get(this.messageLocator).should('have.text',value)
   }
}
export default photocommerce