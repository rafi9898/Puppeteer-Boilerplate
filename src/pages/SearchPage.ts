import { googleUrl, searchPhrase } from "../config";

export default class SearchPage {
  private page;
    constructor(page) {
      this.page = page
    }
  
    async navigateToGooglePage() {
        await this.page.goto(googleUrl);
        await this.page.waitFor(3000)
      }

    async searchGoogleValue() {
      await this.page.waitAndType("form#sb_form > input:nth-child(1)", searchPhrase)
      await this.page.waitFor(3000)
      await this.page.waitAndClick("form#sb_form > label");
      await this.page.waitFor(3000)
    }

    async clickOnFirstResult() {
      await this.page.waitAndClick("li.b_algo:nth-child(1) > div.b_title > h2 > a");
    }
    
  }



