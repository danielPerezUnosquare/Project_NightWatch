var testUnosquare = {
    testInUnosquare: function(){
        this.api.pause(1000)
        const form = getData();
        return this
            .click('@blogMenu')
            .assert.elementPresent('@headerBlog')
            .assert.urlEquals('https://www.unosquare.com/blog/')
            .assert.visible('@firstArticle')
            .assert.visible('@secondArticle')
            .click('@contactMenu')
            .setValue('@nameInput',form.company)
            .setValue('@emailInput',form.phone)
            .setValue('@messageInput',form.message)
            .moveToElement('@logoPage', 10, 10)
            .navigate('https://www.unosquare.com/about-us/')
            .assert.elementPresent('@name1')
            .assert.elementPresent('@name2')
            .assert.elementPresent('@name3')
            .assert.elementPresent('@name4')
            .assert.elementPresent('@name5')
    }
}

var testAmazon = {
    testInAmazone: function(){
        this.api.pause(1000)
        const form = getData();
        return this
        .setValue('@searchBar',form.product)
        .click('@menuOptions')
        .assert.visible('@resultsVisible')
        .moveToElement('@firstPrice', 10, 10)
        .getText('@firstPrice')
        .click('@productTitle')
        .assert.textContains('@secondPrice',form.price)
        .click('@addToCartButton')
        .click('@noThanksButton')
        .click('@goToCartButton')
        .assert.textContains('@thirdPrice',form.price)
        .click('@removeButton')
    }
}

function getData() {
    return require('../../dataExternal/unosquareForm');
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [testUnosquare,testAmazon],
    elements: {
        blogMenu: "li[id='menu-item-3416'] a[class='ekit-menu-nav-link']",
        headerBlog: "h1[class='elementor-heading-title elementor-size-default']",
        firstArticle: "article[class='elementor-post elementor-grid-item post-7799 post type-post status-publish format-standard has-post-thumbnail hentry category-project-management category-quality-assurance'] h3[class='elementor-post__title'] a",
        secondArticle: "article[class='elementor-post elementor-grid-item post-7764 post type-post status-publish format-standard has-post-thumbnail hentry category-software-development category-testing tag-software-development tag-testing tag-uat'] h3[class='elementor-post__title'] a",
        contactMenu: "div[class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button'] span[class='elementor-button-text']",
        nameInput: "#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc",
        emailInput: "#email-b0570355-5abf-47d4-b00c-fcf04db071cc",
        messageInput: "#message-b0570355-5abf-47d4-b00c-fcf04db071cc",
        logoPage: "img[alt='unosquare logo']",
        name1: "div[class='elementor-element elementor-element-dfc5cb5 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name2: "div[class='elementor-element elementor-element-4527ae6 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name3: "div[class='elementor-element elementor-element-264d1f8 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name4: "div[class='elementor-element elementor-element-f95b1d6 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name5: "div[class='elementor-element elementor-element-616fc80 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        searchBar: '#twotabsearchtextbox',
        menuOptions: "div[aria-label='samsung galaxy note 20']",
        resultsVisible: "div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-size-base-plus a-color-base a-text-normal']",
        firstPrice: "div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-price-whole']",
        productTitle: "div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] span[class='a-size-base-plus a-color-base a-text-normal']",
        secondPrice: "body > div:nth-child(5) > div:nth-child(78) > div:nth-child(8) > div:nth-child(8) > div:nth-child(4) > div:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1) > span:nth-child(2)",
        addToCartButton: "#add-to-cart-button",
        noThanksButton: '#attachSiNoCoverage > span > input',
        goToCartButton: ".a-button-text[href='/cart?ref_=sw_gtc']",
        thirdPrice: ".a-size-medium.a-color-base.sc-price.sc-white-space-nowrap.sc-product-price.a-text-bold",
        removeButton: "input[value='Eliminar']"
    }
}