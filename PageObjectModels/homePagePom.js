const {expect, request} = require ('@playwright/test')
const userDataPayload = {userEmail:"nekimail@gmail.com", userPassword:"Karamela1234&"}
let loginToken

class HomePage{

    constructor(page){

        this.page = page
        
    }

    async getLoginToken(){

        const apiContext = await request.newContext()
        const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data:userDataPayload})
        const responseBody = await loginResponse.json()
        loginToken = responseBody.token

    }

    async loginWithApi(){

        await this.page.addInitScript(value => {

            window.localStorage.setItem('token', value)
        }, loginToken)

        await this.page.goto('https://rahulshettyacademy.com/client')
        await expect(this.page.url()).toBe('https://rahulshettyacademy.com/client/dashboard/dash')

    }
}
module.exports = {HomePage}