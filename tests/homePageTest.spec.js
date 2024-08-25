const {test, expect} = require ('@playwright/test')
const {PageObjectManager} = require ('../PageObjectModels/pageObjectManager')

test.describe('Testing home page functionalities', ()=>{

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
    
})
