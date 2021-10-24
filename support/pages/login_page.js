
class LoginPage {
    
    get inputUsername () { return $("//input[@name = 'email']") }
    get inputPassword () { return $("//input[@name='password']") }
    get btnSubmit () { return $("//button[@type= 'submit']") }

    fillEmailAndPasswordField(){
        this.inputUsername.setValue('kinova9893@ncdainfo.com')
        this.inputPassword.setValue('Kinova23!')
    }

    clickOnLoginButton(){
        this.btnSubmit.click()
    }

    navigateToLogin() {
        browser.url('https://dev3-identity.sacret-life.com/identity/v1/login')
    }

}

module.exports = new LoginPage();
