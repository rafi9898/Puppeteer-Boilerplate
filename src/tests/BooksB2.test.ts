import { expect } from 'chai'
import { step } from 'mocha-steps'
import { userLogin, userPassword, viewPhrase } from '../config';

import Page from '../builder'
import LoginPage from '../pages/LoginPage'
import BooksB2Page from '../pages/BooksB2Page'

describe('StaffRoom B2 Books test', () => {
  let page:any;
  let loginPage:LoginPage
  let booksPage:BooksB2Page

  before(async () => {
    page = await Page.build('Desktop')
    loginPage =  new LoginPage(page)
    booksPage =  new BooksB2Page(page);
  })

  after(async () => {
    await page.close()
  })

  step('Should login to staffroom account', async () => {
    await loginPage.login(userLogin, userPassword);
  })

  step("Should verify download book B2", async () => {
    await booksPage.verifyBookResetB2Download();
    const numberOfBtns:number = await booksPage.downloadBtnB2IsVisible();
    const valueOnAvailableBtn:string = await booksPage.getValueOnAvailableBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal(viewPhrase)
  })

  step("Should verify view btn book B2", async () => {
    await booksPage.viewBtnB2Click();
    await booksPage.viewIframeBookIsVisible();
  })


  step("Should verify download exercises B2", async () => {
    await page.reloadPage();
    await booksPage.verifyExercisesBookResetB2Download();
    const numberOfBtns:number = await booksPage.downloadBtnB2ExercisesIsVisible();
    const valueOnAvailableBtn:string = await booksPage.getValueOnAvailableExercisesBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal(viewPhrase)
  })

  step("Should verify view btn exercises book B2", async () => {
    await booksPage.viewBtnB2ExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  })

})