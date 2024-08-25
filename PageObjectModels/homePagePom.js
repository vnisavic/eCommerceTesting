const {expect, request} = require ('@playwright/test')
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
        this.signOutBtn = page.locator("//button[normalize-space()='Sign Out']")
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
            await this.page.waitForTimeout(1000)
            await expect(this.zaraCoatNameTag).toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()

        }
        else if(filterName == 'electronics'){

            await this.electronicsFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()

        }
        else if(filterName == 'household'){

            await this.householdFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'shirts'){

            await this.shirtsFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.zaraCoatNameTag).toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()

        }
        else if(filterName == 'shoes'){

            await this.shoesFilterCheckBox.click()
            await this.page.waitForTimeout(2000)
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'mobiles'){

            await this.electronicsFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()

        }
        else if(filterName == 'men'){

            await this.menFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.iPhoneNameTag).toBeVisible()
            await expect(this.adidasShoes).toBeVisible()
            await expect(this.zaraCoatNameTag).not.toBeVisible()

        }
        else if(filterName == 'women'){

            await this.womenFilterCheckbox.click()
            await this.page.waitForTimeout(1000)
            await expect(this.iPhoneNameTag).not.toBeVisible()
            await expect(this.adidasShoes).not.toBeVisible()
            await expect(this.zaraCoatNameTag).toBeVisible()

        }

    }

    async signOut(){

        await this.signOutBtn.click()
        
    }
   
}
module.exports = {HomePage}