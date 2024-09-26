const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')
import credentials from '../jsonFiles/loginCredentials.json'
import urls from '../jsonFiles/urls.json'
import alerts  from '../jsonFiles/alerts.json'

test.describe('Testing log in functionality', ()=>{

    test.beforeEach('Go to page', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.goToLoginPage()

    })

    test('Login with valid email and password', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn(credentials.validEmail, credentials.validPassword)
        await page.waitForTimeout(1000)
        await expect(page.url()).toBe(urls.homePageUrl)

    })

    test('Login with valid email and invalid password', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn(credentials.validEmail, credentials.invalidPassword)
        await page.waitForSelector("div[aria-label='Incorrect email or password.']")
        await expect(loginPage.incorrectMailOrPassAlert).toBeVisible()
        await expect(loginPage.incorrectMailOrPassAlert).toHaveText(alerts.incorrectEmailOrPass)
        
    })

    test('Login with invalid email and valid password', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn(credentials.invalidEmail, credentials.validPassword)
        await page.waitForSelector("div[aria-label='Incorrect email or password.']")
        await expect(loginPage.incorrectMailOrPassAlert).toBeVisible()
        await expect(loginPage.incorrectMailOrPassAlert).toHaveText(alerts.incorrectEmailOrPass)

    })

    test('Login with invalid email and invalid password', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn(credentials.invalidEmail, credentials.invalidPassword)
        await page.waitForSelector("div[aria-label='Incorrect email or password.']")
        await expect(loginPage.incorrectMailOrPassAlert).toBeVisible()
        await expect(loginPage.incorrectMailOrPassAlert).toHaveText(alerts.incorrectEmailOrPass)
        
    })

    test('Login with invalid email format', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn(credentials.invalidEmailFormat, credentials.validPassword)
        await expect(loginPage.invalidMailAlert).toHaveText(alerts.enterValidMail)

    })

    test('Try to loging with empty email and password inputs', async({page})=>{

        const pageObjectManager = new PageObjectManager(page)
        const loginPage = await pageObjectManager.getLoginPage()

        await loginPage.logIn('', '')
        await expect(loginPage.emailRequiredAlert).toHaveText(alerts.emailRequired)
        await expect(loginPage.passwordRequiredAlert).toHaveText(alerts.passwordRequired)

    })
    
})