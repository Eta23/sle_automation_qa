const { Given, When, Then } = require('@cucumber/cucumber');
const ProductPage = require('../support/pages/product_page');
const LandingPage = require('../support/pages/landing_page');


Given(/^User is on SLE Landing page$/, function(){
    LandingPage.onLandingPage()
});

When(/^User type word to search products in “Search product” bar at the top of the SLE Landing page$/, function(){
    this.fillSerchProductField()
});

When(/^User press Enter button on keyboard$/, function(){
    this.pressEnterButton()
});

Then(/^User should be redirected to Product page with results for term that had entered$/, function(){
    this.confirmProductPage()
});