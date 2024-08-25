const {LoginPage} = require('./loginPagePom')
const {ResetPassPage} = require('./resetPassPage')
const {RegisterPage} = require('./registerPagePom')
const {HomePage} = require('./homePagePom')

class PageObjectManager{

    constructor(page){

        this.loginPage = new LoginPage(page)
        this.resetPassPage = new ResetPassPage(page)
        this.registerPage = new RegisterPage(page)
        this.homePage = new HomePage(page)

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
}

module.exports = {PageObjectManager}