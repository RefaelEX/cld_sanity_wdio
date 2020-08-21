const Page = require('../basePage');

const pageSelectors = {
    mainBarWrapper: '.cld-main-bar',

    mediaLibraryTab: '.media'
}

class MainBarPage extends Page {

    constructor() {
        super();
    }

    goToMediaLibraryTab() {
        let elem = super.getChildElement(pageSelectors.mainBarWrapper, pageSelectors.mediaLibraryTab);
        super.clickWebElement(elem);
    }
}

module.exports = MainBarPage;
