class RegisterPage {

    constructor(page){

        this.page = page
        this.firstNameInput = page.locator('#firstName')
        this.lastNameInput = page.locator('#lastName')
        this.emailInput = page.locator('#userEmail')
        this.phoneInput = page.locator('#userMobile')
        this.ocupationDropdown = page.locator('select')
        this.ocupationStudent = this.ocupationDropdown.locator("option[value*='2']")
        this.genderMaleCheckBox = page.locator("input[value='Male']")
        this.genderFemaleCheckBox = page.locator("input[value='Female']")
        this.passwordInput = page.locator('#userPassword')
        this.confirmPassInput = page.locator('#confirmPassword')
        this.ageCheckbox = page.locator("input[type='checkbox']")
        this.registerBtn = page.locator('#login')
        this.loginHereLink = page.locator('.login-wrapper-footer-text')
        this.requiredInputMessages = page.locator('.ng-star-inserted')
        this.regPageLoginBtn = page.locator('.btn.btn-primary')

    }

    async goToRegisterPage(){

        await this.page.goto('https://rahulshettyacademy.com/client')
        await this.page.locator('.login-wrapper-footer-text').click()

    }

    async registerNewAccount(firstName, lastName, email, pass, phone){

        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.passwordInput.fill(pass)
        await this.confirmPassInput.fill(pass)
        await this.ocupationDropdown.click()

        //clicking a hidden option
        let dropdownOptions = await this.page.$$(".ng-star-inserted")
        for(let option of dropdownOptions){

            let optionText = await option.textContent()
            option.style.display = 'block'

            if(optionText.includes("Student")){

                await option.click()

            }
        }

        await this.ageCheckbox.click()
        await this.registerBtn.click()

        await this.regPageLoginBtn.click()

    }

    async checkEmptyInputWarnigns(){

        let areWarningsVisible = false

        await this.registerBtn.click()

        let warnignMessages = await this.page.$$("//div[contains(text(),'required')]")
        let checkThisCheckbox = this.page.locator("//div[contains(text(),'*Please check above checkbox')]")
        let checkBoxWarnignText = await checkThisCheckbox.textContent()

        for(let warning of warnignMessages){

            let warningText = await warning.textContent()
            if(await warningText.includes('required') && await checkBoxWarnignText.includes('Please check')){

                areWarningsVisible = true
            }

        }

        return areWarningsVisible
    }

    
}

module.exports = {RegisterPage}