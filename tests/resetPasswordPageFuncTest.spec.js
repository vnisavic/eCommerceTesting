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
        const resetPassPage = poManager.getResetPassPage()

        
    })
})