import { expect } from 'chai'
import { step } from 'mocha-steps'
import { userLogin, userPassword, viewPhrase } from '../config';

import Page from '../builder'
import LoginPage from '../pages/LoginPage'
import BooksPlus1Page from '../pages/BooksPlus1Page'

describe('StaffRoom Plus 1 Books test', () => {
  let page
  let loginPage
  let booksPage;

  before(async () => {
    page = await Page.build('Desktop')
    loginPage = await new LoginPage(page)
    booksPage = await new BooksPlus1Page(page);
  })

  after(async () => {
    await page.close()
  })

  step('Should login to staffroom account', async () => {
    await loginPage.login(userLogin, userPassword)
  })

  step("Should verify download book", async () => {
    await booksPage.verifyBookResetDownload();
    const numberOfBtns = await booksPage.downloadBtnBookIsVisible();
    const valueOnAvailableBtn = await booksPage.getValueOnAvailableBookBtn();
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
    const numberOfBtns = await booksPage.downloadBtnExercisesIsVisible();
    const valueOnAvailableBtn = await booksPage.getValueOnAvailableExercisesBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal(viewPhrase)
  })

  step("Should verify view btn exercises book", async () => {
    await booksPage.viewBtnExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  })

})
