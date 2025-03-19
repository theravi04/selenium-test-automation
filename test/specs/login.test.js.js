const LoginPage = require('../pageobjects/login.page');

describe('Login Page Test', () => {
    it('should log in successfully', async () => {
        console.log('Navigating to login page...');
        await browser.url('https://sakshingp.github.io/assignment/login.html');
        await browser.pause(3000);

        console.log('Entering username...');
        await LoginPage.usernameInput.setValue('testuser');

        console.log('Entering password...');
        await LoginPage.passwordInput.setValue('testpassword');

        console.log('Clicking login button...');
        await LoginPage.loginButton.click();

        console.log('Verifying login success...');
        await expect(browser).toHaveUrlContaining('dashboard'); // Modify if needed

        console.log('Login successful!');
    });
});
