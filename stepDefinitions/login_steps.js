const { Given, When, Then } = require('cucumber');

const LoginPage = require('../support/pages/login_page');


Given(/^User is on Login page$/, function(){
    browser.url("https://dev3-identity.sacret-life.com/identity/v1/login");
});

When(/^User fill both field with valid data$/, function(){
    LoginPage.fillEmailAndPasswordField()
});

When(/^User click on Login button$/, function(){
    browser.$("//button[@type= 'submit']").click();
});

Then(/^User is successifully logged in$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : "=strUrl);
});

