const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')
import credentials from '../jsonFiles/loginCredentials.json'
import urls from '../jsonFiles/urls.json'

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
})