import { expect } from "chai";
import { Given, Then } from "cucumber";
import Api from "../common";

Given(/^(.+) \/ (.+) 계정으로 로그인하면$/, function(
  username: string,
  password: string,
  callback: any,
) {
  const api = new Api();
  api
    .login({ username, password })
    .then((res: any) => {
      this.token = res.access_token;
      callback();
    })
    .catch(() => {
      this.token = null;
      callback();
    });
});

Then("로그인이 성공한다", function(callback: any) {
  expect(this.token).to.be.not.null;
  callback();
});

Then("로그인이 실패한다", function(callback: any) {
  expect(this.token).to.be.null;
  callback();
});
