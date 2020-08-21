const Page = require('../basePage');

const pageSelectors = {
    mainIframe: 'iframe[data-test="uw-iframe"]',

    myFilesTab: '#local',
    
    browseLocalFileInput: '.cloudinary_fileupload',
    publicIdInput: 'input[data-test="public-id"]',
    
    advancedButton: 'button[data-test="btn-advanced"]',
}

class UploadImagePopupPage extends Page {

    constructor() {
        super();
    }

    goToMyFilesTab() {
        super.click(pageSelectors.myFilesTab);

    }

    uploadLocoalFile(path) {
        super.setValueInFileUploadInput(pageSelectors.browseLocalFileInput, path);
    }

    switchToPopupFrame() {
        super.switchToFrame(browser.$(pageSelectors.mainIframe));
    }

    openAdvanceOptions() {
        if(!super.getElement(pageSelectors.publicIdInput, true).isDisplayed()) {
            this.toggleAdvanceOptions();
        }
    }

    toggleAdvanceOptions() {
        super.click(pageSelectors.advancedButton);
    }

    setPublicId(id) {
        super.setValue(pageSelectors.publicIdInput, id);
    }
}

module.exports = UploadImagePopupPage;
