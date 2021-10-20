const Page = require('./support/pageobjects/index.page.js');


class IndexPage extends Page {
    
    get flashAlert () { return $('#flash') }
}

module.exports = new SecurePage();
