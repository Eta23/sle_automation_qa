Feature: Search products
 

    Background: 
        Given User is on SLE Landing page
        //User doesn't have to be logged into SLE account

    Scenario: User can search products via “Search product” bar at the top of the page
        When User type word to search products in “Search product” bar at the top of the SLE Home page
        When User press Enter button on keyboard
        Then User should be redirected to Product page with results for term that had entered
