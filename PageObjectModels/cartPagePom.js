const {expect, request} = require ('@playwright/test')
const userDataPayload = {userEmail:"nekimail@gmail.com", userPassword:"Karamela1234&"}
const zaraCoatPayload = {id:"6581ca399fd99c85e8ee7f45"}
let loginToken 

class CartPage{

    constructor(page){

        this.page = page

    }

    async getLoginToken(){

        const apiContext = await request.newContext()
        const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data:userDataPayload})
        const responseBody = await loginResponse.json()
        loginToken = responseBody.token //getting login token
     
    }

    async addItemToCartApi(){

        console.log(loginToken)
        
        const apiContext = await request.newContext()

        const addToCartRequest = await apiContext.post('https://rahulshettyacademy.com/api/ecom/user/add-to-cart',
            {data:zaraCoatPayload},

            {headers:{

                'Authorization' : loginToken,
                'Content-type' : 'application/json'

            }}
        )

        const response = await addToCartRequest.json()
        console.log(response)
        
    }
}
module.exports = {CartPage}