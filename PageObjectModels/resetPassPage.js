class ResetPassPage{

    constructor(page){

        this.page = page
        this.emailInput = page.locator("input[placeholder='Enter your email address']")
        this.newPassInput = page.locator('#userPassword')
        this.confirmNewPassInput = page.locator('#confirmPassword')
        this.saveNewPassBtn = page.locator("button[type='submit']")
        this.loginLink = page.locator("body > app-root:nth-child(1) > app-password-new:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(5) > a:nth-child(1)")
        this.registerLink = page.locator("body > app-root:nth-child(1) > app-password-new:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(5) > a:nth-child(2)")

    }

    async resetPassword(email, passForReset){

        await this.emailInput.fill(email)
        await this.newPassInput.fill(passForReset)
        await this.confirmNewPassInput.fill(passForReset)
        await this.saveNewPassBtn.click()

    }


}

module.exports = {ResetPassPage}