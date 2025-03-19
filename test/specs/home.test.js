const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Transaction Table Sorting', () => {
    it('should log in, click "Amount" header, and verify sorting', async () => {
        console.log('Navigating to login page...');
        await browser.url('https://sakshingp.github.io/assignment/login.html');

        console.log('Logging in...');
        await LoginPage.login('testuser', 'testpassword');
        await browser.pause(1000);

        console.log('Clicking the "Amount" header to sort values...');
        await HomePage.clickAmountHeader();
        await browser.pause(1000); // Allow sorting to take effect

        console.log('Fetching sorted amounts from the table...');
        const sortedAmounts = await HomePage.getSortedAmounts();

        console.log('Retrieved amounts:', sortedAmounts);

        const expectedSorted = [...sortedAmounts].sort((a, b) => a - b);

        console.log('Expected sorted amounts:', expectedSorted);

        console.log('Validating sorting order...');
        expect(sortedAmounts).toEqual(expectedSorted);

        console.log('Sorting verification successful!');
    });
});
