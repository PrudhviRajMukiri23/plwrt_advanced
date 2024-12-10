const {expect}=require('@playwright/test')

class HomePage {
    constructor(page) {
        this.page = page
        this.successfullLoginMessage = "//*[contains(text(), 'You logged into a secure area!')]"
    }

    async verifyLoginMessage() {
        await expect(await this.page.locator(this.successfullLoginMessage)).toBeVisible()
    }
}

exports.HomePage = HomePage