module.exports = {
  'test command example' : function(browser) {
    const unosquare = browser.page.mainpage();
    unosquare.navigate().contactUnosquare();
    browser.end();
  }

  /* 'Unosquare test 1' (browser) {
    var url = 'https://www.unosquare.com/'
    var waitElement = ".attachment-large.size-large.wp-image-5848.jetpack-lazy-image.jetpack-lazy-image--handled"
    var clickButton = "div[class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button'] span[class='elementor-button-text']"
    var inputElemnt = "#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc"
    var textInput = "test"
    var textLoc = "div[class='elementor-element elementor-element-bf18c27 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']"
    var color = "rgba(0, 0, 0, 1)"
    var checkAttribute = "elementor-heading-title elementor-size-default"
    var checkTitle = "h1[class='elementor-heading-title elementor-size-default']"
    
    browser
      .url(url)
      .waitForElementPresent(waitElement)
      .click(clickButton)
      .setValue(inputElemnt,textInput)
      .assert.cssProperty(textLoc,"color",color)
      .assert.textContains(textLoc,"together")
      .assert.attributeContains(textLoc,"class",checkAttribute)
      .assert.not.cssProperty(textLoc,"color","#345")
      .assert.title("Contact Us - Unosquare",checkTitle)
      .assert.urlEquals(url + "contact-us/")
      .end();
  },

  'Unosquare test 2' (browser) {
    var url = 'https://www.unosquare.com/'
    var waitElement = ".attachment-large.size-large.wp-image-5848.jetpack-lazy-image.jetpack-lazy-image--handled"
    var clickButton = "li a[href = 'https://www.unosquare.com/blog/']"
    var inputElemnt = "#email-2c3e58be-1751-4944-bf54-0f6f00dc287b"
    var textInput = "test"
    var textLoc = "h1[class='elementor-heading-title elementor-size-default']"
    var color = "rgba(17, 24, 39, 1)"
    var checkAttribute = "elementor-heading-title elementor-size-default"
    
    browser
      .url(url)
      .waitForElementPresent(waitElement)
      .click(clickButton)
      .setValue(inputElemnt,textInput)
      .assert.cssProperty(textLoc,"color",color)
      .assert.textContains(textLoc,"Transformation")
      .assert.attributeContains(textLoc,"class",checkAttribute)
      .assert.not.cssProperty(textLoc,"color","#345")
      .assert.title("Digital Transformation Blog - Unosquare",textLoc)
      .assert.urlEquals(url + "blog/")
      .end();
  },

  'Unosquare test 3' (browser) {
    var url = 'https://www.unosquare.com/'
    var waitElement = ".attachment-large.size-large.wp-image-5848.jetpack-lazy-image.jetpack-lazy-image--handled"
    var clickButton = "li a[href = 'https://www.unosquare.com/delivery-model/']"
    var inputElemnt = "#email-2c3e58be-1751-4944-bf54-0f6f00dc287b"
    var textInput = "test"
    var textLoc = "h1[class='elementor-heading-title elementor-size-default']"
    var color = "#000"
    var checkAttribute = "elementor-heading-title elementor-size-default"
    
    browser
      .url(url)
      .waitForElementPresent(waitElement)
      .click(clickButton)
      .setValue(inputElemnt,textInput)
      .assert.cssProperty(textLoc,"color",color)
      .assert.textContains(textLoc,"Transformation")
      .assert.attributeContains(textLoc,"class",checkAttribute)
      .assert.not.cssProperty(textLoc,"color","#345")
      .assert.title("Digital Transformation Blog - Unosquare",textLoc)
      .assert.urlEquals(url + "blog/")
      .end();
  } */
}