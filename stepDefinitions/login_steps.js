const { Given, When, Then } = require('cucumber');

const HomePage = require('../support/pages/home_page');
import assert from 'assert';
//var assert = require('assert');

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

Then(/^User is successifully logged into Home page$/, function(){
    var strUrl = browser.getUrl();
    console.log("URL is : " + strUrl);
// expected, actual
    assert.equal(strUrl, "https");
});

