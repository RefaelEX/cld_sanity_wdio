const CONFIG = require('../../resources/configs/testConfig.json');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const expect = require('chai').expect;
const pages = require('../../infra/pages/pageManager').init();

describe('Sanity', () => {
    
    before(() => {
        this.imagePublicId = uuidv4().substring(0, 12);
        this.imageLocalPath = path.resolve('') + `\\resources\\sampleImages\\${CONFIG.testImageName}`;

        pages.login().goTo();
        pages.login().service().makeLogIn(CONFIG.testUserEmail, CONFIG.testUserPassword);
    });

    it('should login and successfully upload image', () => {
        pages.mainBar().goToMediaLibraryTab();
        
        pages.mediaLibrary().service().uploadLocoalFile(this.imageLocalPath, this.imagePublicId);
        
        expect(pages.mediaLibrary().isImageAppearsInGridByName(this.imagePublicId)).to.be.true;
    });

    it('should display the correct image in the manage page', () => {
        pages.mediaLibrary().service().goToImageManagerByName(this.imagePublicId);
        
        expect(pages.mediaLibrary().imageManagePage().getDisplayedImageName().trim()).to.equal(this.imagePublicId); 
    });
});


