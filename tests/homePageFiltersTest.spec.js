const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Testing home page filtering functionalities', ()=>{

    test.beforeEach('Login using API since login fucntionality has been already tested', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.loginWithApi()

    })

    test('Check if "fashion" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('fashion')
        
    })

    test('Check if "electronics" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('electronics')
        
    })

    test('Check if "household" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('household')
        
    })

    test('Check if "shirts" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('shirts')
        
    })

    test('Check if "shoes" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('shoes')
        
    })

    test('Check if "mobiles" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('mobiles')
        
    })

    test('Check if "men" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('men')
        
    })

    test('Check if "women" sidebar filtering functionality is working', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkFilters('women')
        
    })

    test('Check if filter search bar is displaying searched items', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()
        await homePage.checkSearchbar()

    })

    test.only('Check if price range filter is working - ', async({page})=>{

        const poManager = new PageObjectManager(page)
        const homePage = await poManager.getHomePage()

        await homePage.checkPriceRangeFilter()

    })

})
