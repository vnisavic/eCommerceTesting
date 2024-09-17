const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Testing cart page', ()=>{

    test.beforeEach('Log in', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.loginWithApi()

    })

    test('add zara coat to cart with api', async({page})=>{

        const poManager = new PageObjectManager(page)
        const cartPage = await poManager.getCartPage()
        await cartPage.addItemToCartApi()
        await page.waitForTimeout(5000)

    })
})