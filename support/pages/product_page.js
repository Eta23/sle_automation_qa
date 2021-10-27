
var assert = require('assert');

class ProductPage {

    get limitNumber_button() { return $("(//div/select[contains(@id, 'limiter')])[2]") }
    get sort_buttonMenu() { return $("(//div/select[contains(@id, 'sorter')])[1]") }
    get nextPage_button() { return $("(//a[@class = 'action  next'])[2]") }



    fillSerchProductField(){
        landing_page.searchProduct_field.setValue('event')
    }

    pressEnterButton(){
       browser.keys("\uE007")
    }

    navigateToProductPage() {
        browser.url('https://dev3.sacret-life.com/catalogsearch/result/?q=event')
    }

    confirmProductPage(){
        var strUrl = browser.getUrl();
        console.log("URL is : " + strUrl);
    // expected, actual
        assert.equal(strUrl, "https://dev3.sacret-life.com/catalogsearch/result/?q=event");
        }
}

module.exports = new ProductPage();