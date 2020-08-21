const Login = require('../../infra/pages/login/loginPage');
const MainBar = require('../../infra/pages/mainBar/mainBarPage');
const MediaLibrary = require('../../infra/pages/mediaLibrary/mediaLibraryPage');

class PageManager {

    constructor() {
        this.pageMap = new Map();
    }

    static init() {
        return new PageManager();
    }

    getPage(page) {
        if(!this.pageMap[page.name]) {
            this.pageMap[page.name] = new page();
        }
        return this.pageMap[page.name];
    }

    login() {
        return this.getPage(Login);
    }

    mainBar() {
        return this.getPage(MainBar);
    }

    mediaLibrary() {
        return this.getPage(MediaLibrary);
    }

}

module.exports = PageManager;
