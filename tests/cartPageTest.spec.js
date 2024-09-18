const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Verifying that all cart page functionalities are working', ()=>{

    test.beforeEach('Log in', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.loginWithApi()

    })

    test('Verify that the delete button is deleting an item from cart', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        const cartPage = await poManager.getCartPage()

        await homePage.checkAddToCartBtns()
        await homePage.myCartBtn.click()
        await cartPage.deleteItemsFromCart()

    })
})