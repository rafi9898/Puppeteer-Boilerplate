"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require("../config");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksPlus1Page = function () {
  function BooksPlus1Page(page) {
    _classCallCheck(this, BooksPlus1Page);

    this.page = page;
  }

  _createClass(BooksPlus1Page, [{
    key: "verifyBookResetDownload",
    value: async function verifyBookResetDownload() {
      await this.page.goto(_config.gatewayPlusUrl);
      await this.page.hover("div.extra > ul > li:nth-child(13)");
      await this.page.waitFor(200);
    }
  }, {
    key: "verifyExercisesResetB2Download",
    value: async function verifyExercisesResetB2Download() {
      await this.page.goto(_config.gatewayPlusUrl);
      await this.page.hover("div.extra > ul > li:nth-child(14)");
      await this.page.waitFor(200);
    }
  }, {
    key: "downloadBtnBookIsVisible",
    value: async function downloadBtnBookIsVisible() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelectorAll("div.extra > ul > li:nth-child(13) > div> div.buttons > a").length;
      });
    }
  }, {
    key: "downloadBtnExercisesIsVisible",
    value: async function downloadBtnExercisesIsVisible() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelectorAll("div.extra > ul > li:nth-child(14) > div> div.buttons > a").length;
      });
    }
  }, {
    key: "viewBtnBookClick",
    value: async function viewBtnBookClick() {
      await this.page.waitAndClick("div.extra > ul > li:nth-child(13) > div> div.buttons > a");
      await this.page.waitFor(2000);
    }
  }, {
    key: "viewBtnExercisesClick",
    value: async function viewBtnExercisesClick() {
      await this.page.waitAndClick("div.extra > ul > li:nth-child(14) > div> div.buttons > a");
      await this.page.waitFor(2000);
    }
  }, {
    key: "viewIframeBookIsVisible",
    value: async function viewIframeBookIsVisible() {
      await this.page.hover("div#popup");
    }
  }, {
    key: "getValueOnAvailableBookBtn",
    value: async function getValueOnAvailableBookBtn() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelector("div.extra > ul > li:nth-child(13) > div> div.buttons > a").innerHTML;
      });
    }
  }, {
    key: "getValueOnAvailableExercisesBtn",
    value: async function getValueOnAvailableExercisesBtn() {
      return await this.page.evaluate(function () {
        //@ts-ignore
        return document.querySelector("div.extra > ul > li:nth-child(14) > div> div.buttons > a").innerHTML;
      });
    }
  }]);

  return BooksPlus1Page;
}();

exports.default = BooksPlus1Page;