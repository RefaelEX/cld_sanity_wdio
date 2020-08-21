const URL = 'https://cloudinary.com/users/login';
const Page = require('../basePage');
const LoginPageService = require('./loginPageService');

const pageSelectors = {
    userEmailInput: '#user_session_email',
    userPasswordInput: '#user_session_password',
    
    signInButton: '#sign-in'
}

class LoginPage extends Page {

    constructor() {
        super();
        this.pageSevice = new LoginPageService(this);
    }

    goTo() {
        super.navigateTo(URL);
    }

    setEmail(email) {
        super.setValue(pageSelectors.userEmailInput, email);
    }
    
    setPassword(password) {
        super.setValue(pageSelectors.userPasswordInput, password);
    }

    clickSignIn() {
        super.click(pageSelectors.signInButton);
    }

    service() {
        return this.pageSevice;
    }
}

module.exports = LoginPage;
