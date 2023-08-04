Feature: E2E Tests Suite To Cover SAUCEDEMO.COM Functionality

    @FINAL_TASK
    Scenario: User orders a product from the SwagLabs store
        Given User has opened Swag Labs website
        And User inputs username - "<username>"
        And User inputs password - "<password>"
        When User press the “Login” button
        Then User is on Swag Labs inventory page
        When User adds - "Sauce Labs Fleece Jacket" to the shopping cart
        And User opens shopping cart
        Then User sees product - "<productName>" with price - "<productPrice>"
        When User press “Checkout” button
        And User fills the checkout information form with "<firstName>", "<lastName>", "<postalCode>"
        And User press the “Continue” button to continue with the order
        And User sees correct product details in checkout overview
        And User press the “Finish” button
        Then User sees that order has been completed
        And User clicks on “Back Home” button
        And User is on Swag Labs products page
        
        Examples:
             |username       |password     |productName                |productPrice |firstName |lastName       |postalCode |
             |standard_user  |secret_sauce |Sauce Labs Fleece Jacket   |$49.99       |Egle      |Danileviciute  |LT-09124   |
