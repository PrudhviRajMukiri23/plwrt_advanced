const { HomePage } = require("./HomePage")

class LoginPage {
    constructor(page){
        this.page = page
        this.username = "//div[@class='col-9']/p[contains(text(), 'Register')]/following-sibling::ul/li[1]"
        this.password = "//div[@class='col-9']/p[contains(text(), 'Register')]/following-sibling::ul/li[2]"
        this.userNameField = "//label[@for='username']/following-sibling::input"
        this.userPasswordField = "//label[@for='password']/following-sibling::input"
        this.loginButton = "//button[@type='submit']"
    }

    async navigateLoginPage() {
        console.log(process.env.NODE_ENV)
        await this.page.goto(process.env.url)
    }

    async fillUserName() {
        let val = await this.getValue(this.username)
        await this.page.locator(this.userNameField).fill(val)
    }

    async fullUserPassword() {
        let val = await this.getValue(this.password)
        await this.page.locator(this.userPasswordField).fill(val)
    }

    async clickLogin() {
        await this.page.locator(this.loginButton).click()
        let homePage = new HomePage(await this.page)
        return homePage
    }


    async getValue(arg) {
       let userName = await this.page.locator(arg).textContent()
       let value = userName.split(' ')
       return value[1]
    }
}

exports.LoginPage = LoginPage