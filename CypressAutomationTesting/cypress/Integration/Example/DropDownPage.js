class DropDown{
    static LoadPage(url)
    {
       cy.visit(url)
    }
    static get DropDownLocator()
   {
       return cy.get("#dropdown-class-example")
   }
    static selectDropDown(optionLocatorName,value)
    {
       switch(optionLocatorName)
       {
           case "optionLocator":cy.SelectDropdown(this.DropDownLocator,value)
           break;
       }
    
    }
   }
   export default DropDown;