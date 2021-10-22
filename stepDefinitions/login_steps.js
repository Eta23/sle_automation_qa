const { Given, When, Then } = require('cucumber');

const LoginPage = require('../support/pages/login_page');



Given(/^User is on Landing page and navigate to Login page$/, function(){
    LoginPage.navigateToLogin()
});

When(/^User fill both field with valid data on Login page$/, function(){
    LoginPage.fillEmailAndPasswordField()
});

When(/^User click on Login button$/, function(){
    LoginPage.clickOnLoginButton()
});

Then(/^User is successifully logged into Login page$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : "=strUrl);
});

