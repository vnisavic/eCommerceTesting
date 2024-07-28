const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')
import credentials from '../jsonFiles/loginCredentials.json'
import urls from '../jsonFiles/urls.json'
import alerts  from '../jsonFiles/alerts.json'

test.describe('Testing reset password functionality', ()=>{

    test.beforeEach('Go to reset password page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = poManager.getLoginPage()

        await loginPage.goToLoginPage()
        await loginPage.goToResetPassPage()

    })

    test('Check if password reset actually resets the password', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = poManager.getLoginPage()
        const resetPassPage = poManager.getResetPassPage()

        await resetPassPage.resetPassword(credentials.validEmail, credentials.passwordForReset) //set a new password, change reset pass value in credentials.json to test again

        //try to log in with new password
        await loginPage.logIn(credentials.validEmail, credentials.passwordForReset)
        await page.waitForTimeout(1000)
        await expect(page.url()).toBe(urls.homePageUrl)

    })

    test('Check if login page link on reset password page redirects to the correct page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const resetPassPage = poManager.getResetPassPage()

        await resetPassPage.loginLink.click()
        await expect(page.url()).toBe(urls.loginPageUrl)
    
    })

    test('Check if register page link on reset password page redirects to the correct page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const resetPassPage = poManager.getResetPassPage()

        await resetPassPage.registerLink.click()
        await expect(page.url()).toBe(urls.registerPageUrl)
    
    })

})