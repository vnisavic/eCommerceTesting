const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Testing register page functionality', ()=>{

    test.beforeEach('Go to register page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()
        await registerPage.goToRegisterPage()

    })

    test('Register a new account and try to login with it', async({page})=>{

        const poManager = new PageObjectManager(page)
        const registerPage = poManager.getRegisterPage()

        await registerPage.registerNewAccount()
    })
})