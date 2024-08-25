const {test, expect, request} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

    test.beforeAll('Login using API since login fucntionality has been already tested', async({browser})=>{

        const context = await browser.newContext()
        const page = await context.newPage()
        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.getLoginToken()

    })

    test('Login', async({page})=>{

           const poManager = new PageObjectManager(page)
           const homePage = await poManager.getHomePage()
           await homePage.loginWithApi()
        
    })
