const {expect}=require('@playwright/test')
const {logger} = require('../utils/LoggingUtil')

class HomePage {
    constructor(page) {
        this.page = page
        this.successfullLoginMessage = "//*[contains(text(), 'You logged into a secure ;area!')]"
    }

    async verifyLoginMessage() {
        logger.debug("started the verifying operation...")
        await expect(await this.page.locator(this.successfullLoginMessage)).toBeVisible({timeout: 15000})
        .catch((e)=>{
            logger.error(`Error while verifying the login message ${e}`)
            throw e
        })
        logger.info('verifyed the login successfully...')
    }
}

exports.HomePage = HomePage