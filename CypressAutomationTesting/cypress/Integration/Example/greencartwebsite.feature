Feature:GreencartWensite
   regression or smoke
   Scenario Outline: Searching product in green cart website

   Given load the green cart website as "<url>"
   # |https://rahulshettyacademy.com/seleniumPractise/#/|
   When Search for the product "<searchvalue>" in search Menu
   When Select a perticuler "<product>" and perform add to cart function 
   Then Validate the product length matches with given value
   Examples:
      |url                                                 |searchvalue|product|
      | https://rahulshettyacademy.com/seleniumPractise/#/ |ca         |Capsicum|
