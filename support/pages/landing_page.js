
class LandingPage {
    
    get main_dropDown() { return $("//span[@class = 'action nav-toggle']") }
    get logoImg_slePage() { return $(".//a [@class = 'logo']/img[@src = 'https://dev3.sacret-life.com/static/version1634823332/frontend/Sl-v3/default/en_US/images/sl3-logo.svg']") }
    get searchProduct_field() { return $("//input[ @id = 'search']") }
    get cart_icon() { return $("//a[ @class = 'action showcart']") }
    get logIn_button() { return $("//li[@class ='link authorization-link']/a[@href='https://dev3.sacret-life.com/customer/account/login/']") }
    get signUp_button() { return $("//a[@class ='creator']") }
    get getStarted_button() { return $("//input[@class ='get-started']") }
    get entrepreneurs_linkedText() {return $("//a[@href='https://dev3.sacret-life.com/explainer-entrepreneurs/']")}
    get consultants_linkedText() {return $("//a[@href='https://dev3.sacret-life.com/explainer-consultants/']")}
    get educators_linkedText() { return $("//a [@href='https://dev3.sacret-life.com/explainer-educators/']") }
    get healthExperts_linkedText() { return $("//a [@href='https://dev3.sacret-life.com/explainer-health-experts/']") }
    get coaches_linkedText() { return $("//a [@href='https://dev3.sacret-life.com/explainer-coaches/']") }
   
    

    openMainDropDown(){
        this.main_dropDown.click()
    }
    
    LogInButton(){
        this.logIn_button.click()
    }

    SignUpButton(){
        this.signUp_button.click()
    }

    GetStartedButton(){
        this.getStarted_button.click()
    }

    fillSearchProductField(){
        this.searchProduct_field.setValue('')
    }


}

module.exports = new LandingPage();