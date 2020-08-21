class MeidiaLibraryPageService {
    
    constructor(meidiaLibraryPage) {
        this.meidiaLibraryPage = meidiaLibraryPage;
    }

    uploadLocoalFile(imagePath, publicId) {
        let currentImagesCount = this.meidiaLibraryPage.getNumberOfImagesOnGrid();

        this.meidiaLibraryPage.clickUploadButton();
        
        this.meidiaLibraryPage.uploadImagePopupPage().switchToPopupFrame();
        this.meidiaLibraryPage.uploadImagePopupPage().goToMyFilesTab();
        this.meidiaLibraryPage.uploadImagePopupPage().openAdvanceOptions();
        this.meidiaLibraryPage.uploadImagePopupPage().setPublicId(publicId);
        this.meidiaLibraryPage.uploadImagePopupPage().uploadLocoalFile(imagePath);
        
        this.meidiaLibraryPage.switchToMainFrame();

        this.meidiaLibraryPage.waitForExpectedNumberOfImagesOnGrid(currentImagesCount + 1);
    }

    goToImageManagerByName(name) {
        this.meidiaLibraryPage.hoverImageByName(name);
        this.meidiaLibraryPage.clickImageManageButton(name);
    }
}

module.exports = MeidiaLibraryPageService;
