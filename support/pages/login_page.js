
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
        browser.url('/')
    }

}


module.exports = new LoginPage();
