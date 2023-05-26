const { clickElement } = require("./lib/commands.js");


let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await clickElement (page, "body > nav > a:nth-child(6)");
  await clickElement (page, "body > main > section > div.movie-seances__hall > ul > li > a");
});

afterEach(() => {
  page.close();
});

describe("GoToMoveTests", () => {
    test("ChosenOneSeat", async ()=>{
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = null;
        expect(actual).toEqual(expected);

    });
    test("ChosenTwoSeats", async ()=>{
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)");
        await clickElement (page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(6)");
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = null;
        expect(actual).toEqual(expected);

    });
    test("NotChosenSeat", async ()=>{
        const actual = await page.$eval("body > main > section > button", (link) => link.getAttribute("disabled"));
        const expected = "true";
        expect(actual).toEqual(expected);

    });

});   