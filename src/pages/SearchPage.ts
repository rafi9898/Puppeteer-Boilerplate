import { googleUrl, searchPhrase, jenkinsUrl } from "../config";

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
      await this.page.goto(jenkinsUrl);
    }
    
  }



