import { expect } from 'chai'
import { step } from 'mocha-steps'
import { userLogin, userPassword, viewPhrase } from '../config';

import Page from '../builder'
import LoginPage from '../pages/LoginPage'
import BooksPlus1Page from '../pages/BooksPlus1Page'

describe('StaffRoom Plus 1 Books test', () => {
  let page:any
  let loginPage:LoginPage
  let booksPage:BooksPlus1Page

  before(async () => {
    page = await Page.build('Desktop')
    loginPage = new LoginPage(page)
    booksPage = new BooksPlus1Page(page);
  })

  after(async () => {
    await page.close()
  })

  step('Should login to staffroom account', async () => {
    await loginPage.login(userLogin, userPassword)
  })

  step("Should verify download book", async () => {
    await booksPage.verifyBookResetDownload();
    const numberOfBtns:number = await booksPage.downloadBtnBookIsVisible();
    const valueOnAvailableBtn:string = await booksPage.getValueOnAvailableBookBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal(viewPhrase)
  })

  step("Should verify view btn book", async () => {
    await booksPage.viewBtnBookClick();
    await booksPage.viewIframeBookIsVisible();
  })


  step("Should verify download exercises", async () => {
    await page.reloadPage();
    await booksPage.verifyExercisesResetB2Download();
    const numberOfBtns:number = await booksPage.downloadBtnExercisesIsVisible();
    const valueOnAvailableBtn:string = await booksPage.getValueOnAvailableExercisesBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal(viewPhrase)
  })

  step("Should verify view btn exercises book", async () => {
    await booksPage.viewBtnExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  })

})
