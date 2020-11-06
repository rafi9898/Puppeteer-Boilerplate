import { B2BooksUrl } from '../config';

export default class BooksB2Page {
    constructor(page) {
      this.page = page
    }
  
    async verifyBookResetB2Download() {
        await this.page.goto(B2BooksUrl);
        await this.page.hover("div.extra > ul > li:nth-child(8)");
        await this.page.waitFor(200)
      }

      async verifyExercisesBookResetB2Download() {
        await this.page.goto(B2BooksUrl);
        await this.page.hover("div.extra > ul > li:nth-child(9)");
        await this.page.waitFor(200)
      }

      async downloadBtnB2IsVisible() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelectorAll("div.extra > ul > li:nth-child(8) > div> div.buttons > a").length;
      })
      }

      async downloadBtnB2ExercisesIsVisible() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelectorAll("div.extra > ul > li:nth-child(9) > div> div.buttons > a").length;
      })
      }

      async viewBtnB2Click() {
        await this.page.waitAndClick("div.extra > ul > li:nth-child(8) > div> div.buttons > a")
        await this.page.waitFor(2000);
      }

      async viewBtnB2ExercisesClick() {
        await this.page.waitAndClick("div.extra > ul > li:nth-child(9) > div> div.buttons > a")
        await this.page.waitFor(2000);
      }

      async viewIframeBookIsVisible() {
        await this.page.hover("div#popup");
      }

      async getValueOnAvailableBtn() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelector("div.extra > ul > li:nth-child(8) > div> div.buttons > a").innerHTML;
      })
      
      }

      async getValueOnAvailableExercisesBtn() {
        return await this.page.evaluate(() => {  
          //@ts-ignore
          return document.querySelector("div.extra > ul > li:nth-child(9) > div> div.buttons > a").innerHTML;
      })
      
      }
    
  }
  


