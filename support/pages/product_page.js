const landing_page = require("./landing_page");

class ProductPage {
    get limitNumber_button() { return $() }
    get sort_buttonMenu() { return $() }


    fillSerchProductField(){
        landing_page.searchProduct_field.setValue('book')
    }

    pressEnterButton(){
        this.keybordEnter.click()
    }

    navigateToProductPage() {
        browser.url('https://dev3.sacret-life.com/catalogsearch/result/?q=book')
    }

}

module.exports = new ProductPage();