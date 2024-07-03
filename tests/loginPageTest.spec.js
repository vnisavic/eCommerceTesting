const {test, expect} = require ('@playwright/test')

test('Initial git commit stuff', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/')
    await expect(page.url()).toBe('https://rahulshettyacademy.com/client/auth/login')
    await page.waitForTimeout(3000)
    
})