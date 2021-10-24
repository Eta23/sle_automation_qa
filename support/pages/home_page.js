
class HomePage {
    
    get createEvent_button() { return $("//img[@class= 'header-icon']") }
    get profileImage_button() { return $("//img[@alt= 'profile']") }



    CreateEventButton(){
        this.createEvent_button.click()
    }

    openProfileImageButton(){
        this.profileImage_button.click()
    }

}

module.exports = new HomePage();