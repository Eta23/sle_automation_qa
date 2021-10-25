
var assert = require('assert');

class LoginPage {
    

    get inputUsername () { return $("//input[@name = 'email']") }
    get inputPassword () { return $("//input[@name='password']") }
    get btnSubmit () { return $("//button[@type= 'submit']") }

    fillEmailAndPasswordField(){
        this.inputUsername.setValue('kovobe6961@drlatvia.com')
        this.inputPassword.setValue('Kovobe23!')
    }

    clickOnLoginButton(){
        this.btnSubmit.click()
    }

    navigateToLogin() {
        browser.url('https://dev3-identity.sacret-life.com/identity/v1/login')
    }

    confirmHomePage(){
    var strUrl = browser.getUrl();
    console.log("URL is : " + strUrl);
// expected, actual
    assert.equal(strUrl, "https://dev3.sacret-life.com/feed/");
    }

}

module.exports = new LoginPage();
