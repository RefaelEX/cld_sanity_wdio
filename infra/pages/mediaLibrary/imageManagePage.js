const Page = require('../basePage');

const pageSelectors = {
    imageNameInput: 'input[data-test="item-title"]'
}

class ImageManagePage extends Page {

    constructor() {
        super();
    }

    getDisplayedImageName() {
        return super.getValue(pageSelectors.imageNameInput);
    }

}

module.exports = ImageManagePage;
