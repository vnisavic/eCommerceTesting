const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')
import registerInfo from "../jsonFiles/registerCredentials.json"
import url from "../jsonFiles/urls.json"

test.describe('Testing register page functionality', ()=>{

    test.beforeEach('Go to register page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()
        await registerPage.goToRegisterPage()

    })

    test.skip('Register a new account and try to login with it', async({page})=>{//before running this test again change the register credentials to avoid error

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()
        const loginPage = poManager.getLoginPage()

        await registerPage.registerNewAccount(registerInfo.registerFirstName, registerInfo.registerLastName,registerInfo.registerEmail,registerInfo.registerPassword,registerInfo.registerPhone)
        await loginPage.logIn(registerInfo.registerEmail, registerInfo.registerPassword)
        await page.waitForTimeout(1000)
        await expect(page.url()).toBe(url.homePageUrl)

    })

    test("Check if required input boxes show a warning if no data is entered", async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()

        let areWarningsVisible = await registerPage.checkEmptyInputWarnigns()
        await expect(areWarningsVisible).toBeTruthy()

    })

    test('Check if there is an error message if the email format is invalid', async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()

        await registerPage.checkIfEmailIsValid()

    })

    test('Check if there is an error message if the phone number format and length are invalid', async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()

        await registerPage.checkNumberFormatAndLength()

    })

    
})