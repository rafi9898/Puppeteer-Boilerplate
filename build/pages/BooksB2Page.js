'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksB2Page = function () {
  function BooksB2Page(page) {
    _classCallCheck(this, BooksB2Page);

    this.page = page;
  }

  _createClass(BooksB2Page, [{
    key: 'verifyBookResetB2Download',
    value: async function verifyBookResetB2Download() {
      await this.page.goto('https://staffroom.pl/podreczniki/password-reset-b2-2/');
      await this.page.hover("div.extra > ul > li:nth-child(8)");
      await this.page.waitFor(200);
    }
  }, {
    key: 'verifyExercisesBookResetB2Download',
    value: async function verifyExercisesBookResetB2Download() {
      await this.page.goto('https://staffroom.pl/podreczniki/password-reset-b2-2/');
      await this.page.hover("div.extra > ul > li:nth-child(9)");
      await this.page.waitFor(200);
    }
  }, {
    key: 'downloadBtnB2IsVisible',
    value: async function downloadBtnB2IsVisible() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelectorAll("div.extra > ul > li:nth-child(8) > div> div.buttons > a").length;
      });
    }
  }, {
    key: 'downloadBtnB2ExercisesIsVisible',
    value: async function downloadBtnB2ExercisesIsVisible() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelectorAll("div.extra > ul > li:nth-child(9) > div> div.buttons > a").length;
      });
    }
  }, {
    key: 'viewBtnB2Click',
    value: async function viewBtnB2Click() {
      await this.page.waitAndClick("div.extra > ul > li:nth-child(8) > div> div.buttons > a");
      await this.page.waitFor(2000);
    }
  }, {
    key: 'viewBtnB2ExercisesClick',
    value: async function viewBtnB2ExercisesClick() {
      await this.page.waitAndClick("div.extra > ul > li:nth-child(9) > div> div.buttons > a");
      await this.page.waitFor(2000);
    }
  }, {
    key: 'viewIframeBookIsVisible',
    value: async function viewIframeBookIsVisible() {
      await this.page.hover("div#popup");
    }
  }, {
    key: 'getValueOnAvailableBtn',
    value: async function getValueOnAvailableBtn() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelector("div.extra > ul > li:nth-child(8) > div> div.buttons > a").innerHTML;
      });
    }
  }, {
    key: 'getValueOnAvailableExercisesBtn',
    value: async function getValueOnAvailableExercisesBtn() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelector("div.extra > ul > li:nth-child(9) > div> div.buttons > a").innerHTML;
      });
    }
  }]);

  return BooksB2Page;
}();

exports.default = BooksB2Page;