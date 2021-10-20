Feature: Login to SLE account

    Background: 
        Given User is on Login page

        
    Scenario: Successifully login into SLE
        When User fill both field with valid data 
        When User click on Login button 
        Then User is successifully logged in 