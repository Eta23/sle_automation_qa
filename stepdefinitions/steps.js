const { Given, When, Then } = require('cucumber');

const LoginPage = require('../pageobjects/login.page.js');

const pages = {
    login: LoginPage
}

Given(/^User is on Login page$/, function(){
    browser.url("https://dev3-identity.sacret-life.com/identity/v1/login");
});

When(/^User fill both field with valid data$/, function(){
    browser.$("//input[@name = 'email']").setValue();
    browser.$("//input[@name='password']").setValue();
});

When(/^User click on Login button$/, function(){
    browser.$("//button[@type= 'submit']").click();
});

Then(/^User is successifully logged in$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : "=strUrl);
});

