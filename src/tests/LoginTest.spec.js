const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test("login test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.navigateLoginPage()
    await loginPage.fillUserName()
    await loginPage.fullUserPassword()
    let homePage = await loginPage.clickLogin()
    await homePage.verifyLoginMessage()
})