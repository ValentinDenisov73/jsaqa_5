const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement } = require("../../lib/commands.js");


Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50,  defaultViewport: null, args: ['--start-maximized'] });
  page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(`${string}`, {
    setTimeout: 10000,
  });
});

When("user choose seat", async function () {
  await clickElement (page, "body > nav > a:nth-child(6)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
});
When("user choose two seats", async function () {
  await clickElement (page, "body > nav > a:nth-child(6)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(6)");
});
When("user not choose seat", async function () {
  await clickElement (page, "body > nav > a:nth-child(6)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
  await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
});

Then("user sees button become enable", async function () {
  const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
  const expected = null;
  expect(actual).equal(expected);
});
Then("user sees button become disable", async function () {
  const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
  const expected = "true";
  expect(actual).equal(expected);
});