const {expect, request} = require ('@playwright/test')
const url = require('../jsonFiles/urls.json')
const productNames = require('../jsonFiles/itemNames.json')
const apiProductNames = require('../jsonFiles/itemNamesForApiTest.json')
const userDataPayload = {userEmail:"nekimail@gmail.com", userPassword:"Karamela1234&"}
let loginToken


class HomePage{

    constructor(page){

        this.page = page
        this.fashionFilterCheckbox = page.locator("//section[@id='sidebar']//div[3]//div[2]//input[1]")
        this.electronicsFilterCheckbox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(3) > div:nth-child(4) > input:nth-child(1)")
        this.householdFilterCheckbox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(3) > div:nth-child(5) > input:nth-child(1)")
        this.zaraCoatNameTag = page.locator("//b[normalize-space()='ZARA COAT 3']")
        this.iPhoneNameTag = page.locator("//b[normalize-space()='IPHONE 13 PRO']")
        this.adidasShoes = page.locator("//b[normalize-space()='ADIDAS ORIGINAL']")
        this.shirtsFilterCheckbox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(4) > div:nth-child(4) > input:nth-child(1)")
        this.shoesFilterCheckBox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(4) > div:nth-child(5) > input:nth-child(1)")
        this.mobilesFilterCheckbox = page.locator("section[id='sidebar'] div:nth-child(4) div:nth-child(3) input:nth-child(1)")
        this.menFilterCheckbox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(5) > div:nth-child(3) > input:nth-child(1)")
        this.womenFilterCheckbox = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(4) > form:nth-child(3) > div:nth-child(5) > div:nth-child(4) > input:nth-child(1)")
        this.filterSearchInput = page.locator("div[class='py-2 border-bottom ml-3'] input[placeholder='search']")
        this.minPriceInput = page.locator("div[class='col-md-6'] input[placeholder='Min Price']")
        this.signOutBtn = page.locator("//button[normalize-space()='Sign Out']")
        this.maxPriceInput = page.locator("div[class='py-2 border-bottom ml-3'] input[placeholder='Max Price']")
        this.zaraCoatViewBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)")
        this.adidasShoesViewBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)")
        this.iPhoneViewBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)")
        this.coatAddToCartBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)")
        this.shoesAddToCartBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)")
        this.phoneAddToCartBtn = page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)")
        this.ordersBtn = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']")
        this.myCartBtn = page.locator(".btn.btn-custom[routerlink='/dashboard/cart']")
        this.cartNumber = page.locator("button[class='btn btn-custom'] label")
    }

    async loginWithApi(){

        const apiContext = await request.newContext()
        const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data:userDataPayload})
        const responseBody = await loginResponse.json()
        loginToken = responseBody.token //getting login token

        await this.page.addInitScript(value => {  //injecting login token into localstorage

            window.localStorage.setItem('token', value)
        }, loginToken)

        await this.page.goto('https://rahulshettyacademy.com/client')
        await expect(this.page.url()).toBe('https://rahulshettyacademy.com/client/dashboard/dash')

    }

    async checkFilters(filterName){

        if(filterName == 'fashion'){

            await this.fashionFilterCheckbox.click()
            await expect(this.zaraCoatNameTag).toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()

        }
        else if(filterName == 'electronics'){

            await this.electronicsFilterCheckbox.click()
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()

        }
        else if(filterName == 'household'){

            await this.householdFilterCheckbox.click()
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'shirts'){

            await this.shirtsFilterCheckbox.click()
            await expect(this.zaraCoatNameTag).toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()

        }
        else if(filterName == 'shoes'){

            await this.shoesFilterCheckBox.click()
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'mobiles'){

            await this.electronicsFilterCheckbox.click()
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()

        }
        else if(filterName == 'men'){

            await this.menFilterCheckbox.click()
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'women'){

            await this.womenFilterCheckbox.click()
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.zaraCoatNameTag).toBeVisible()

        }

    }

    async signOut(){

        await this.signOutBtn.click()
        await this.page.waitForTimeout(1000)
        await expect(this.page.url()).toBe(url.loginPageUrl)

    }

    async checkSearchbar(){

        let itemNameSearch = ["ZARA", "ADIDAS", "IPHONE"]
        let itemCardNames = [this.zaraCoatNameTag, this.adidasShoes, this.iPhoneNameTag]

        for(let i=0; i<=2; i++){

            await this.filterSearchInput.fill(itemNameSearch[i])
            await this.filterSearchInput.press('Enter')
            await expect(itemCardNames[i]).toBeVisible()
            await this.filterSearchInput.fill('')

        }
    }
   
    async checkPriceRangeFilter(){

         await this.minPriceInput.fill("12")
         await this.maxPriceInput.fill("31600")
         await this.maxPriceInput.press('Enter')
         await expect(this.zaraCoatNameTag).toBeVisible()
         await expect(this.adidasShoes).toBeVisible()

         await this.minPriceInput.fill("")
         await this.maxPriceInput.fill("")
         await this.minPriceInput.fill("231500")
         await this.maxPriceInput.fill("231500")
         await this.maxPriceInput.press('Enter')
         await expect(this.iPhoneNameTag).toBeVisible()

         await this.minPriceInput.fill("")
         await this.maxPriceInput.fill("")
         await this.minPriceInput.fill("12")
         await this.maxPriceInput.fill("231500")
         await this.maxPriceInput.press('Enter')
         await expect(this.zaraCoatNameTag).toBeVisible()
         await expect(this.adidasShoes).toBeVisible()
         await expect(this.iPhoneNameTag).toBeVisible()
         
    }

    async checkViewBtns(){

        let zaraCoatItemName = await this.page.locator("//h2[normalize-space()='ZARA COAT 3']")
        let adidasShoesItemName = await this.page.locator("//h2[normalize-space()='ADIDAS ORIGINAL']")
        let iphoneItemName = await this.page.locator("//h2[normalize-space()='IPHONE 13 PRO']")
        let itemViewBtns = [this.zaraCoatViewBtn, this.adidasShoesViewBtn, this.iPhoneViewBtn]
        let itemNames = [zaraCoatItemName, adidasShoesItemName, iphoneItemName]
        let itemUrls = [url.zaraCoatPageUrl, url.adidasShoesPageUrl, url.iphonePageUrl]
        let itemNamesText = [productNames.zaraCoat,productNames.adidasShoes,productNames.iphone]
        let contShoppingBtn = this.page.locator('.continue')

        for(let i=0;i<=2;i++){

           await itemViewBtns[i].click()
           let itemText = await itemNames[i].textContent()
           if(await this.page.url() == itemUrls[i] && itemText == itemNamesText[i]){
            console.log('url and item name are matching')
           }
           await expect(itemText).toBe(itemNamesText[i])
           await expect(this.page.url()).toBe(itemUrls[i])
           await contShoppingBtn.click()

        }


    }

    async checkAddToCartBtns(){
       
        let cartBtns = [this.coatAddToCartBtn, this.shoesAddToCartBtn, this.phoneAddToCartBtn]

        for(let i=0; i<await cartBtns.length; i++){

            await cartBtns[i].click()
            await this.page.waitForTimeout(500)

        }
        
        let cartNumberCount = await this.cartNumber.textContent()
        await expect(cartNumberCount).toBe('3')

    }

    async checkOrdersAndCartBtn(btn){

        switch(btn){

            case 'Orders':
                await this.ordersBtn.click()
                await expect(this.page.url()).toBe(url.ordersPageUrl)
                break

            case 'Cart':
                await this.myCartBtn.click()
                await expect(this.page.url()).toBe(url.cartPageUrl)    
                break

            default:
                console.log('Unknown button')  

        }
        
    }

    async checkItemsWithApi(){

        const apiContext = await request.newContext()
        const getAllItemsResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/product/get-all-products',

            {headers:{

                'Authorization': loginToken,
                'Content-type' : 'application/json'

            }}
        )

        const responseJson = await getAllItemsResponse.json()

        for(let i=0; i<3;i++){

            await expect(responseJson.data[i].productName).toBe(apiProductNames[i].itemName)

        }
        //same thing can be done for each key-value pair in an API response in order to verify any property of shop items
    }



}
module.exports = {HomePage}