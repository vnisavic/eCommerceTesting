const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe("Verify that item details are correct using API", ()=>{

    test.beforeEach('Log in', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.loginWithApi()

    })

    test('Verify that the details of all items are correct', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.checkItemDetailsApi()
        
    })
})