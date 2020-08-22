const Page = require('../basePage');
const UploadImagePopupPage = require('./uploadImagePopupPage');
const MeidiaLibraryPageService = require('./meidiaLibraryPageService');
const ImageManagePage = require('./imageManagePage');

const pageSelectors = {
    uploadButton: '.btn-upload',
    imageManageButton: 'button[data-test="action-manage-btn"]',

    imageArticle: 'article[data-test="asset-card"]',
    
    imageNameText: 'div[data-test="asset-info-text"]',
}

class MediaLibraryPage extends Page {

    constructor() {
        super();
        this.pageSevice = new MeidiaLibraryPageService(this);
        this.uploadImagePopup;
        this.imageManage;
    }

    clickUploadButton() {
        super.click(pageSelectors.uploadButton);
    }

    uploadImagePopupPage() {
        if(!this.uploadImagePopup) {
            this.uploadImagePopup = new UploadImagePopupPage();
        }
        return this.uploadImagePopup;
    }

    imageManagePage() {
        if(!this.imageManage) {
            this.imageManage = new ImageManagePage();
        }
        return this.imageManage;
    }

    service() {
        return this.pageSevice;
    }

    switchToMainFrame() {
        super.switchToDefaultContent();
    }

    getImagesCount() {
        return super.getElements(pageSelectors.imageArticle).length;
    }

    waitForExpectedNumberOfImagesOnGrid(count) {
        super.waitForCondition(() => {
            return this.getNumberOfImagesOnGrid() === count;
        }, 12000);
    }

    getNumberOfImagesOnGrid() {
        return super.getElements(pageSelectors.imageArticle).length;
    }

    isImageAppearsInGridByName(name) {
        return this.getImageFromGridByName(name).isDisplayed();
    }

    getImageFromGridByName(name) {
        super.waitForDisplayed(pageSelectors.imageArticle);
        let imageList = super.getElements(pageSelectors.imageArticle);

        for(let i = 0; i < imageList.length; i++) {
            let textElement = super.getChildFromWebElement(imageList[i], pageSelectors.imageNameText);
            let imageText = super.getTextWebElement(textElement, true);

            if(imageText === name.trim()) {
                return imageList[i];
            }
        }
        return null;
    }

    hoverImageByName(name) {
        super.hoverWebElement(this.getImageFromGridByName(name));
    }

    clickImageManageButton() {
        super.click(pageSelectors.imageManageButton);
    }

}

module.exports = MediaLibraryPage;
