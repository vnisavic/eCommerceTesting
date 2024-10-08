const {expect, request} = require ('@playwright/test')

class CartPage{

    constructor(page){

        this.page = page
        this.coatDeleteBtn = this.page.locator("ul:nth-child(1) li:nth-child(1) div:nth-child(1) div:nth-child(3) button:nth-child(2)")
        this.shoesDeleteBtn = this.page.locator("li[class='items odd ng-star-inserted'] button[class='btn btn-danger']")
        this.phoneDeleteBtn = this.page.locator("body > app-root:nth-child(1) > app-profile:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(3) > li:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2) > i:nth-child(1)")
        this.noItemsText = this.page.locator("div[class='ng-star-inserted'] h1")
    }

    async deleteItemsFromCart(){

        let allDeleteBtns = [this.coatDeleteBtn, this.phoneDeleteBtn, this.shoesDeleteBtn]
        for(let deleteBtn of allDeleteBtns){

            await deleteBtn.click()

        }

        await this.page.waitForTimeout(1000)
        let noItemsInCart = await this.noItemsText.textContent()
        console.log(noItemsInCart)
        await expect(noItemsInCart).toContain("No Products")

    }

}
module.exports = {CartPage}