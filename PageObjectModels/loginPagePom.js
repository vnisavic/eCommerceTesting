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
        this.incorrectMailOrPassAlert = page.locator("div[aria-label='Incorrect email or password.']")
        this.invalidMailAlert = page.locator("div[class='invalid-feedback'] div")
        this.emailRequiredAlert = page.locator("div[class='form-group'] div[class='invalid-feedback'] div")
        this.passwordRequiredAlert = page.locator("div[class='form-group mb-4'] div[class='invalid-feedback'] div")

    }

    async goToLoginPage(){

        await this.page.goto('https://rahulshettyacademy.com/client/')

    }

    async logIn(email, password){

        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()

    }

    async goToResetPassPage(){

        await this.page.goto('https://rahulshettyacademy.com/client/')
        await this.forgotPassLink.click()
        
    }
}

module.exports = {LoginPage}