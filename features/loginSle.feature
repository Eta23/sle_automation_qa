Feature: Login  to  SLE account

    Background: 
        Given User is on Landing page and navigate to Login page

        
    Scenario: Successifully login into SLE
        When User fill both field with valid data on Login page
        When User click on Login button 
        Then User is successifully logged into Home page 
