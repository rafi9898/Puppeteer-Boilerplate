"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginPage = function () {
  function LoginPage(page) {
    _classCallCheck(this, LoginPage);

    this.page = page;
  }

  _createClass(LoginPage, [{
    key: "login",
    value: async function login(user_id, user_password) {
      await this.page.goto('https://staffroom.pl/');
      await this.page.waitAndType("#form-login > div > input[name='login_email']", user_id);
      await this.page.waitAndType("#form-login > div > input[name='login_password']", user_password);
      await this.page.waitAndClick('#form-login > div.button > input');
      await this.page.waitFor(4000);
    }
  }]);

  return LoginPage;
}();

exports.default = LoginPage;