const {LoginPage} = require('./loginPagePom')
const {ResetPassPage} = require('./resetPassPage')
const {RegisterPage} = require('./registerPagePom')
const {HomePage} = require('./homePagePom')
const {CartPage} = require('./cartPagePom')

class PageObjectManager{

    constructor(page){

        this.loginPage = new LoginPage(page)
        this.resetPassPage = new ResetPassPage(page)
        this.registerPage = new RegisterPage(page)
        this.homePage = new HomePage(page)
        this.cartPage = new CartPage(page)
        
    }

    getLoginPage(){

        return this.loginPage
    }

    getResetPassPage(){

        return this.resetPassPage
        
    }

    getRegisterPage(){

        return this.registerPage
    }

    getHomePage(){

        return this.homePage
    }

    getCartPage(){

        return this.cartPage
    }
}

module.exports = {PageObjectManager}