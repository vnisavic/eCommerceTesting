const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')
import urls from '../jsonFiles/urls.json'

test.describe('Testing if login page links redirect to the correct page', ()=>{

    test.beforeEach('Go to login page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = await poManager.getLoginPage()

        await loginPage.goToLoginPage()

    })

    test('Check if register button redirects to register page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = await poManager.getLoginPage()

        await loginPage.registerBtn.click()
        await expect(page.url()).toBe(urls.registerPageUrl)

    })

    test('Check if forgot password link redirects to password reset page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = await poManager.getLoginPage()

        await loginPage.forgotPassLink.click()
        await expect(page.url()).toBe(urls.resetPassPageUrl)

    })

    test('Check if register here link redirects to register page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const loginPage = await poManager.getLoginPage()

        await loginPage.registerLink.click()
        await expect(page.url()).toBe(urls.registerPageUrl)
        
    })


})
