class LoginPageService {
    
    constructor(loginPage) {
        this.loginPage = loginPage;
    }

    makeLogIn(email, password) {
        this.loginPage.setEmail(email);
        this.loginPage.setPassword(password);
        this.loginPage.clickSignIn();
    }
}

module.exports = LoginPageService;
