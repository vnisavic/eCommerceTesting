const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Testing if all shop items are loaded on page  using api', ()=>{

    test('Check if all the items are loaded and displayed on the home page', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.loginWithApi()
        await homePage.checkItemsWithApi()

    })
})