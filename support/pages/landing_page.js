


class LandingPage {
    
    get main_dropDown() { return $("//span[@class = 'action nav-toggle']") }
    get logoImg_slePage() { return $("//div/a/img[contains(@src, 'sl3-logo')]") }
    get searchProduct_field() { return $("//input[ @id = 'search']") }
    get cart_icon() { return $("//a[ @class = 'action showcart']") }
    get logIn_button() { return $("(//li/a[contains(@href, 'login')])[2]") }
    get signUp_button() { return $("//a[@class ='creator']") }
    get getStarted_button() { return $("//input[@class ='get-started']") }
    get entrepreneurs_linkedText() {return $(".//a[contains(@href, 'explainer-entrepreneurs')]")}
    get consultants_linkedText() {return $(".//a[contains(@href, 'explainer-consultants')]")}
    get educators_linkedText() { return $(".//a[contains(@href, 'explainer-educators')]") }
    get healthExperts_linkedText() { return $(".//a[contains(@href, 'explainer-health-experts')]") }
    get coaches_linkedText() { return $(".//a[contains(@href, 'explainer-coaches')]") }
   
    
    onLandingPage(){
        browser.url('https://dev3.sacret-life.com/')
    }

    openShoppingCart(){
        this.cart_icon.click()
    }

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