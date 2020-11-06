'use strict';

var _chai = require('chai');

var _mochaSteps = require('mocha-steps');

var _config = require('../config');

var _builder = require('../builder');

var _builder2 = _interopRequireDefault(_builder);

var _LoginPage = require('../pages/LoginPage');

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _BooksPlus1Page = require('../pages/BooksPlus1Page');

var _BooksPlus1Page2 = _interopRequireDefault(_BooksPlus1Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StaffRoom Plus 1 Books test', function () {
  var page = void 0;
  var loginPage = void 0;
  var booksPage = void 0;

  before(async function () {
    page = await _builder2.default.build('Desktop');
    loginPage = await new _LoginPage2.default(page);
    booksPage = await new _BooksPlus1Page2.default(page);
  });

  after(async function () {
    await page.close();
  });

  (0, _mochaSteps.step)('Should login to staffroom account', async function () {
    await loginPage.login(_config.userLogin, _config.userPassword);
  });

  (0, _mochaSteps.step)("Should verify download book", async function () {
    await booksPage.verifyBookResetDownload();
    var numberOfBtns = await booksPage.downloadBtnBookIsVisible();
    var valueOnAvailableBtn = await booksPage.getValueOnAvailableBookBtn();
    (0, _chai.expect)(numberOfBtns).to.be.equal(1);
    (0, _chai.expect)(valueOnAvailableBtn).to.be.equal(_config.viewPhrase);
  });

  (0, _mochaSteps.step)("Should verify view btn book", async function () {
    await booksPage.viewBtnBookClick();
    await booksPage.viewIframeBookIsVisible();
  });

  (0, _mochaSteps.step)("Should verify download exercises", async function () {
    await page.reloadPage();
    await booksPage.verifyExercisesResetB2Download();
    var numberOfBtns = await booksPage.downloadBtnExercisesIsVisible();
    var valueOnAvailableBtn = await booksPage.getValueOnAvailableExercisesBtn();
    (0, _chai.expect)(numberOfBtns).to.be.equal(1);
    (0, _chai.expect)(valueOnAvailableBtn).to.be.equal(_config.viewPhrase);
  });

  (0, _mochaSteps.step)("Should verify view btn exercises book", async function () {
    await booksPage.viewBtnExercisesClick();
    await booksPage.viewIframeBookIsVisible();
  });
});