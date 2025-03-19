class LoginPage {
    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#log-in'); }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();
