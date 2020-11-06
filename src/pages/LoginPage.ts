import { staffRoomUrl, staffRoomStartUrl } from '../config';
import { expect } from "chai";

export default class LoginPage {
  private page;
  constructor(page) {
    this.page = page
  }

  async login(user_id: string, user_password: string) {
    await this.page.goto(staffRoomUrl)
    await this.page.waitAndType("#form-login > div > input[name='login_email']", user_id)
    await this.page.waitAndType("#form-login > div > input[name='login_password']", user_password)
    await this.page.waitAndClick('#form-login > div.button > input')
    await this.page.waitFor(4000)
    expect(await this.page.url()).to.be.equal(staffRoomStartUrl);
  }
}
