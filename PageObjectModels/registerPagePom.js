class RegisterPage {

    constructor(page){

        this.page = page
        this.firstNameInput = page.locator('#firstName')
        this.lastNameInput = page.locator('#lastName')
        this.emailInput = page.locator('#userEmail')
        this.phoneInput = page.locator('#userMobile')
        this.ocupationDropdown = page.locator('select')
        this.ocupationStudent = page.locator("option[value*='2']")
        this.genderMaleCheckBox = page.locator("input[value='Male']")
        this.genderFemaleCheckBox = page.locator("input[value='Female']")
        this.passwordInput = page.locator('#userPassword')
        this.confirmPassInput = page.locator('#confirmPassword')
        this.ageCheckbox = page.locator("input[type='checkbox']")
        this.registerBtn = page.locator('#login')
        this.loginHereLink = page.locator('.login-wrapper-footer-text')
        this.requiredInputMessages = page.locator('.ng-star-inserted')

    }

    async goToRegisterPage(){

        await this.page.goto('https://rahulshettyacademy.com/client/auth/register')

    }

    async registerNewAccount(firstName, lastName, email, pass, phone){

        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.passwordInput.fill(pass)
        await this.confirmPassInput.fill(pass)
        await this.ocupationDropdown.click()
        await this.ocupationStudent.click()
        await this.ageCheckbox.click()
        await this.registerBtn.click()
        
    }
}

module.exports = {RegisterPage}