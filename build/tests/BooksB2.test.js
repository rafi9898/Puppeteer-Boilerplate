'use strict';

var _chai = require('chai');

var _mochaSteps = require('mocha-steps');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

var _LoginPage = require('../pages/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _BooksB2Page = require('../pages/BooksB2Page');

var _BooksB2Page2 = _interopRequireDefault(_BooksB2Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StaffRoom B2 Books test', function () {
  var page = void 0;
  var loginPage = void 0;
  var booksPage = void 0;

  before(async function () {
    page = await _builder2.default.build('Desktop');
    loginPage = await new _LoginPage2.default(page);
    booksPage = await new _BooksB2Page2.default(page);
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)('Should login to staffroom account', async function () {
    await page.goto('https://staffroom.pl/');
    await loginPage.login("tesmac@wp.pl", "tm12345678!");
    (0, _chai.expect)((await page.url())).to.be.equal("https://staffroom.pl/start/");
  });

  (0, _mochaSteps.step)("Should verify download book B2", async function () {
    await booksPage.verifyBookResetB2Download();
    var numberOfBtns = await booksPage.downloadBtnB2IsVisible();
    var valueOnAvailableBtn = await booksPage.getValueOnAvailableBtn();
    (0, _chai.expect)(numberOfBtns).to.be.equal(1);
    (0, _chai.expect)(valueOnAvailableBtn).to.be.equal("Podgląd");
  });

  (0, _mochaSteps.step)("Should verify view btn book B2", async function () {
    await booksPage.viewBtnB2Click();
    await booksPage.viewIframeBookIsVisible();
  });

  (0, _mochaSteps.step)("Should verify download exercises B2", async function () {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await booksPage.verifyExercisesBookResetB2Download();
    var numberOfBtns = await booksPage.downloadBtnB2ExercisesIsVisible();
    var valueOnAvailableBtn = await booksPage.getValueOnAvailableExercisesBtn();
    (0, _chai.expect)(numberOfBtns).to.be.equal(1);
    (0, _chai.expect)(valueOnAvailableBtn).to.be.equal("Podgląd");
  });

  (0, _mochaSteps.step)("Should verify view btn exercises book B2", async function () {
    await booksPage.viewBtnB2ExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  });
});