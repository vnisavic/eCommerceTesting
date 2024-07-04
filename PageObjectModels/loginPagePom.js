class LoginPage {

    constructor(page){

        this.page = page
        this.emailInput = page.locator('#userEmail')
        this.passwordInput = page.locator('#userPassword')
        this.loginBtn = page.locator('#login')
        this.forgotPassLink = page.locator('.forgot-password-link')
        this.registerLink = page.locator('.login-wrapper-footer-text')
        this.registerBtn = page.locator('.btn1')
        this.registerLabel = page.locator('.blink_me')
        this.shoppingTitle = page.locator('h3')
        this.practiceTitle = page.locator("div[class='banner'] h1[class='title']")
        this.loginTitle = page.locator('.login-title')

    }

    async goToLoginPage(){

        await this.page.goto('https://rahulshettyacademy.com/client/')

    }

    async logIn(email, password){

        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
        
    }
}

module.exports = {LoginPage}