const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");

describe("Transaction Table Sorting", () => {
  it('should log in, click "Amount" header, and verify sorting', async () => {
    console.log("Navigating to login page...");
    await browser.url("https://sakshingp.github.io/assignment/login.html");

    console.log("Logging in...");
    await browser.pause(2000);
    await LoginPage.login("testuser", "testpassword");
    await browser.pause(2000);

    console.log('Clicking the "Amount" header to sort values...');
    await HomePage.clickAmountHeader();
    await browser.pause(2000);

    console.log("Fetching all values in the sorted Amount column...");
    const amountValues = await HomePage.getAllAmountValues();
    console.log("All Amount Values:", amountValues);

    const numericValues = amountValues.map(value => 
      parseFloat(value.replace(/[^0-9.-]+/g, ""))
    );

    console.log("Numeric Values:", numericValues);

    const isSorted = numericValues.every((val, i, arr) => i === 0 || arr[i - 1] <= val);

    if (isSorted) {
      console.log("The Amount column is sorted in ascending order.");
    } else {
      console.log("The Amount column is NOT sorted correctly.");
    }

    expect(isSorted).toBe(true);
  });
});
