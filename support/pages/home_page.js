
class HomePage {
    
    get main_dropDown() { return $("//span[@class = 'action nav-toggle']") }
    get logoImg_slePage() { return $(".//a [@class = 'logo']/img[@src = 'https://dev3.sacret-life.com/static/version1634823332/frontend/Sl-v3/default/en_US/images/sl3-logo.svg']") }
    get searchProduct_field() { return $("//input[ @id = 'search']") }
    get cart_icon() { return $("//a[ @class = 'action showcart']") }
    get createEvent_button() { return $("//img[@class= 'header-icon']") }
    get profileImage_button() { return $("//img[@alt= 'profile']") }

    

    openShoppingCart(){
        this.cart_icon.click()
    }

    CreateEventButton(){
        this.createEvent_button.click()
    }

    openProfileImageButton(){
        this.profileImage_button.click()
    }

    fillSearchProductField(){
        this.searchProduct_field.setValue('')
    }
}

module.exports = new HomePage();