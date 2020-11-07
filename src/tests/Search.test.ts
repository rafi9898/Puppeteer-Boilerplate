import { expect } from 'chai'
import { step } from 'mocha-steps'

import Page from '../builder'
import SearchPage from '../pages/SearchPage';
import { jenkinsUrl } from "../config";

describe('Bing Browser Automation Test', () => {
  let page:any;
  let searchPage:SearchPage

  before(async () => {
    page = await Page.build('Desktop')
    searchPage =  new SearchPage(page)
  })

  after(async () => {
    await page.close()
  })

  step('Should type jenkins on bing.com', async () => {
    await searchPage.navigateToGooglePage();
    await searchPage.searchGoogleValue();
    await searchPage.clickOnFirstResult();
    expect(await page.url()).to.be.equal(jenkinsUrl)
  })

})
