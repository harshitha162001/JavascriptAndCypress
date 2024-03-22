Feature: Testing AutomationPractice website
Scenario: Testing Dropdown feature
Given Load the website using "<urls>"
When Traverse the DropDown "optionLocator" using "<optionValue>"
#Then Validate the option has been selected
Examples:
|urls|optionValue|
|https://rahulshettyacademy.com/AutomationPractice/|option1|