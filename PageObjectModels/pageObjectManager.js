const {LoginPage} = require('./loginPagePom')

class PageObjectManager{

    constructor(page){

        this.loginPage = new LoginPage(page)

    }

    getLoginPage(){

        return this.loginPage
    }
}

module.exports = {PageObjectManager}