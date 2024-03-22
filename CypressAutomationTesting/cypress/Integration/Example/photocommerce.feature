Feature:PhotoCommerce
    @scenario1 @reg
    Scenario Outline: User registration for photocommerce
        Given Load the photocommerce url as "<urls>"
        When user set the value in photocommerce registration page
            | Name     | Harshitha                   |
            | Email    | harshithaaithal16@gmail.com |
            | password | Harshitha                   |
            |Date      | 1997-04-29                  |

        When Select the CheckBox for the required value
            | Check me out if you Love IceCreams! |

        When Select the required value from DropDown
            | Female |

        When Select the required Employement fields
            | Employed |

        When Click on the submit button

        Then Verify the Message displayed with the required Message
           |Successmsg | Success! |
        Examples:
            | urls                                            |
            | https://rahulshettyacademy.com/angularpractice/ |
    
    @scenario2 @smoke
     Scenario Outline: User registration for photocommerce
        Given Load the photocommerce url as "<urls>"
        Examples:
        |urls|
        |https://rahulshettyacademy.com/AutomationPractice/|

     @scenario3 @reg
    Scenario Outline: User registration for photocommerce
        Given Load the photocommerce url as "<urls>"
        When user set the value in photocommerce registration page
            | Name     | aithal                  |
            | Email    | aithal@gmail.com |
            | password | Harshitha                   |

        When Select the CheckBox for the required value
            | Check me out if you Love IceCreams! |

        When Select the required value from DropDown
            | Male |

        When Select the required Employement fields
            | Student |

        When Click on the submit button

        Then Verify the Message displayed with the required Message
            | Success! |
        Examples:
            | urls                                            |
            | https://rahulshettyacademy.com/angularpractice/ |