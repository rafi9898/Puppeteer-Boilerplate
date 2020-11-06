export default class BooksPlus1Page {
    constructor(page) {
      this.page = page
    }
  
    async verifyBookResetDownload() {
        await this.page.goto('https://staffroom.pl/podreczniki/gateway-plus-1/');
        await this.page.hover("div.extra > ul > li:nth-child(13)");
        await this.page.waitFor(200)
      }

      async verifyExercisesResetB2Download() {
        await this.page.goto('https://staffroom.pl/podreczniki/gateway-plus-1/');
        await this.page.hover("div.extra > ul > li:nth-child(14)");
        await this.page.waitFor(200)
      }

      async downloadBtnBookIsVisible() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelectorAll("div.extra > ul > li:nth-child(13) > div> div.buttons > a").length;
      })
      }

      async downloadBtnExercisesIsVisible() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelectorAll("div.extra > ul > li:nth-child(14) > div> div.buttons > a").length;
      })
      }

      async viewBtnBookClick() {
        await this.page.waitAndClick("div.extra > ul > li:nth-child(13) > div> div.buttons > a")
        await this.page.waitFor(2000);
      }

      async viewBtnExercisesClick() {
        await this.page.waitAndClick("div.extra > ul > li:nth-child(14) > div> div.buttons > a")
        await this.page.waitFor(2000);
      }

      async viewIframeBookIsVisible() {
        await this.page.hover("div#popup");
      }

      async getValueOnAvailableBookBtn() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelector("div.extra > ul > li:nth-child(13) > div> div.buttons > a").innerHTML;
      })
      
      }

      async getValueOnAvailableExercisesBtn() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelector("div.extra > ul > li:nth-child(14) > div> div.buttons > a").innerHTML;
      })
      
      }
    
  }
  


