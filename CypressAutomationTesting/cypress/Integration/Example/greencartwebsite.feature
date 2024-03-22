Feature:GreencartWensite
   regression or smoke
   Scenario Outline: Searching product in green cart website

   Given load the green cart website as "<url>"
   # |https://rahulshettyacademy.com/seleniumPractise/#/|
  # When Search for the product "<searchvalue>" in search Menu
  #  When Select a perticuler "<product>" and perform add to cart function 
   When search for the product "productname" as "<productvalue>" from the greencart webpage
  Then Validate the product length matches with given value
   When search for the product "productname" as "<productvalue1>" from the greencart webpage
   
   Examples:
      |url                                                 |searchvalue|product|productvalue|productvalue1|
      | https://rahulshettyacademy.com/seleniumPractise/#/ |ca         |Capsicum|CA|PO|
