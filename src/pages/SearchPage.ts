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
    }

    async clickOnFirstResult() {
      await this.page.waitAndClick("ol#b_results >li:nth-child(1) > div.b_title >h2");
    }
    
  }



