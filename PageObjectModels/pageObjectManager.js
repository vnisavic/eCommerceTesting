const {LoginPage} = require('./loginPagePom')
const {ResetPassPage} = require('./resetPassPage')

class PageObjectManager{

    constructor(page){

        this.loginPage = new LoginPage(page)
        this.resetPassPage = new ResetPassPage(page)

    }

    getLoginPage(){

        return this.loginPage
    }

    getResetPassPage(){

        return this.resetPassPage
        
    }
}

module.exports = {PageObjectManager}