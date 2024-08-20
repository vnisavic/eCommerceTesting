const {test, expect, request} = require ('@playwright/test')
const userDataPayload = {userEmail:"nekimail@gmail.com", userPassword:"Karamela1234&"}
let loginToken

    test.beforeAll('Login using API since login fucntionality has been already tested', async()=>{

        const apiContext = await request.newContext()
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:userDataPayload})
        await expect(loginResponse.ok()).toBeTruthy()
        const loginResponseBody = await loginResponse.json()
        loginToken = loginResponseBody.token

    })

    test('Login', async({page})=>{

       await page.addInitScript(value => {

            window.localStorage.setItem('token',value)

        }, loginToken)

    
        await page.goto('https://rahulshettyacademy.com/client')
        await expect(page.url()).toBe('https://rahulshettyacademy.com/client/dashboard/dash')
        

    })
