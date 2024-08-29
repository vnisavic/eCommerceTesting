const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Verifying that the buttons on the home page redirect correctly', ()=>{

    test.beforeEach('Login with API', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.loginWithApi()

    })

    test("Verify that the 'view' button opens the appropriate product page", async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkViewBtns()
        
    })

    
})