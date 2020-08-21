const DEAFAULT_TIMEOUT = 15000;
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    
    navigateTo (url) {
        return browser.url(url);
    }

    /**
    * Wait Section
    */
    waitForDisplayed(selector, timeOut) {
         this.waitForDisplayedWebElement(browser.$(selector), timeOut);
    }

    waitForDisplayedWebElement(element, timeOut) {
        element.waitForDisplayed({ timeout : !timeOut ? DEAFAULT_TIMEOUT : timeOut,});
    }

    waitForExist(selector) {
        this.waitForExistWebElement(browser.$(selector));
   }

   waitForExistWebElement(element) {
       element.waitForExist({ timeout : DEAFAULT_TIMEOUT});
   }

   waitForCondition(condition, timeOut) {
        browser.waitUntil(
            () => condition(),
            {
                timeout: timeOut,
            }
        );
   }

   /**
   * Get Web Elements Section
   */
    getElement(selector, skipWaitForExistence) {
        if(!skipWaitForExistence) {
            this.waitForExist(selector);
        }
        return browser.$(selector);
    }

    getElements(selector, skipWaitForExistence) {
        if(!skipWaitForExistence) {
            this.waitForExist(selector);
        }
        return browser.$$(selector);
    }

    getChildElement(parentSelector, childsSelector) {
        return this.getChildFromWebElement(browser.$(parentSelector), childsSelector);
    }

    getChildFromWebElement(parentElement, childsSelector) {
        this.waitForExistWebElement(parentElement);
        return parentElement.$(childsSelector);
    }

    /**
    * Click Section
    */
    click(selector) {
        this.clickWebElement(browser.$(selector))
    }

    clickWebElement(element) {
        element.waitForClickable({ timeout: DEAFAULT_TIMEOUT });
        element.click();
    }

    /**
    * Hover Section
    */

    hover(selector) {
        this.hoverWebElement(browser.$(selector));
    }

    hoverWebElement(element) {
        this.waitForExistWebElement(element);
        element.moveTo();
    }

    /**
    * Set Value Section
    */
   setValue(selector, value) {
        this.setValueWebElement(browser.$(selector), value);
    }

    setValueWebElement(element, value) {
        this.waitForDisplayedWebElement(element);
        element.setValue(value);
    }

    setValueInFileUploadInput(selector, value) {
        this.setValueInFileUploadInputWebElement(browser.$(selector), value);
    }

    setValueInFileUploadInputWebElement(element, value) {
        this.waitForExistWebElement(element);
        element.setValue(value);
    }

    /**
    * Get Text Section
    */
    getText(selector, removeWhiteSpaces) {
        return this.getTextWebElement(browser.$(selector), removeWhiteSpaces);
    }

    getTextWebElement(element, removeWhiteSpaces) {
        this.waitForDisplayedWebElement(element);
        
        if(removeWhiteSpaces) {
            return element.getText().trim()
        }
        return element.getText();
    }

    getValue(selector, removeWhiteSpaces) {
        return this.getValueWebElement(browser.$(selector), removeWhiteSpaces);
    }

    getValueWebElement(element, removeWhiteSpaces) {
        this.waitForDisplayedWebElement(element);
        
        if(removeWhiteSpaces) {
            return element.getValue().trim()
        }
        return element.getValue();
    }

    /**
    * Browsing Context Section
    */
   switchToFrame(iframeElement) {
        this.waitForExistWebElement(iframeElement);
        browser.switchToFrame(iframeElement);
   }

   switchToDefaultContent() {
        browser.switchToFrame(null);
   }
}
