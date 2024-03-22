Feature:Testing the ecomerce website
    Scenario Outline: clicking the perticular product and validating the product
        Given Load the photocommerce url as "<urls>"

        When the product is iphoneX click the add button
            | productname  | iphone X   |
            | productname1 | Blackberry |

        When click on the checkoutbutton
         

        Then Verify the product is same as the expected one
          |product | iphone X |
          |product1 | Blackberry |

        When Click on the SeondCheckoutButton

        When user set the value in photocommerce  page
            | place | Bangalore |

        When Select the CheckBox for the required value
          
         When Click on the purchase button

         Then Verify the Message displayed with the required Message
          | Successmsg | Success! |

      

        # Then Verify the product is same as the expected one
        #  |product | iphone X |
        #  |product1 | Blackberry |


        Examples:
            | urls                                                |
            | https://rahulshettyacademy.com/angularpractice/shop |
