export default class LoginPage {
  constructor(page) {
    this.page = page
  }

  async login(user_id, user_password) {
    await this.page.goto('https://staffroom.pl/')
    await this.page.waitAndType("#form-login > div > input[name='login_email']", user_id)
    await this.page.waitAndType("#form-login > div > input[name='login_password']", user_password)
    await this.page.waitAndClick('#form-login > div.button > input')
    await this.page.waitFor(4000)
  }
}
