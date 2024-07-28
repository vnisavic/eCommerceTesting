const {LoginPage} = require('./loginPagePom')
const {ResetPassPage} = require('./resetPassPage')
const {RegisterPage} = require('./registerPagePom')

class PageObjectManager{

    constructor(page){

        this.loginPage = new LoginPage(page)
        this.resetPassPage = new ResetPassPage(page)
        this.registerPage = new RegisterPage(page)

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
}

module.exports = {PageObjectManager}