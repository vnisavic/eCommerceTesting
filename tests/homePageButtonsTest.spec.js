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

    
    test('Verify that add to cart buttons actually add items to cart', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.checkAddToCartBtns()

    })

    test("Verify that the orders button is redirecting to orders page", async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.checkOrdersAndCartBtn('Orders')

    })

    test("Verify that the cart button is redirecting to cart page", async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.checkOrdersAndCartBtn('Cart')
        
    })

    test('Verify that the sign out button sings the user out', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.signOut()
        
    })
})