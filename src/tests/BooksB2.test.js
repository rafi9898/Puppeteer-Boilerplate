import { expect } from 'chai'
import { step } from 'mocha-steps'

import Page from '../builder'
import LoginPage from '../pages/LoginPage'
import BooksB2Page from '../pages/BooksB2Page'

describe('StaffRoom B2 Books test', () => {
  let page
  let loginPage
  let booksPage;

  before(async () => {
    page = await Page.build('Desktop')
    loginPage = await new LoginPage(page)
    booksPage = await new BooksB2Page(page);
  })

  after(async () => {
    await page.close()
  })

  step('Should login to staffroom account', async () => {
    await page.goto('https://staffroom.pl/')
    await loginPage.login("tesmac@wp.pl", "tm12345678!")
    expect(await page.url()).to.be.equal("https://staffroom.pl/start/")
  })

  step("Should verify download book B2", async () => {
    await booksPage.verifyBookResetB2Download();
    const numberOfBtns = await booksPage.downloadBtnB2IsVisible();
    const valueOnAvailableBtn = await booksPage.getValueOnAvailableBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal("Podgląd")
  })

  step("Should verify view btn book B2", async () => {
    await booksPage.viewBtnB2Click();
    await booksPage.viewIframeBookIsVisible();
  })


  step("Should verify download exercises B2", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await booksPage.verifyExercisesBookResetB2Download();
    const numberOfBtns = await booksPage.downloadBtnB2ExercisesIsVisible();
    const valueOnAvailableBtn = await booksPage.getValueOnAvailableExercisesBtn();
    expect(numberOfBtns).to.be.equal(1);
    expect(valueOnAvailableBtn).to.be.equal("Podgląd")
  })

  step("Should verify view btn exercises book B2", async () => {
    await booksPage.viewBtnB2ExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  })

})
