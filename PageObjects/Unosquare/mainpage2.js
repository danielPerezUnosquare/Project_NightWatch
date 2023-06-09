var testUnosquare = {
    testInUnosquare: function(){
        this.api.pause(1000)
        const form = getData(); // this is the important part
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

function getData() {
    return require('../../dataExternal/unosquareForm'); // Using the correct path is important
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [testUnosquare],
    elements: {
        blogMenu: "li[id='menu-item-3416'] a[class='ekit-menu-nav-link']",
        headerBlog: "h1[class='elementor-heading-title elementor-size-default']",
        linkAssert: "https://www.unosquare.com/blog/",
        firstArticle: "article[class='elementor-post elementor-grid-item post-7799 post type-post status-publish format-standard has-post-thumbnail hentry category-project-management category-quality-assurance'] h3[class='elementor-post__title'] a",
        secondArticle: "article[class='elementor-post elementor-grid-item post-7764 post type-post status-publish format-standard has-post-thumbnail hentry category-software-development category-testing tag-software-development tag-testing tag-uat'] h3[class='elementor-post__title'] a",
        contactMenu: "div[class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button'] span[class='elementor-button-text']",
        nameInput: "#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc",
        emailInput: "#email-b0570355-5abf-47d4-b00c-fcf04db071cc",
        messageInput: "#message-b0570355-5abf-47d4-b00c-fcf04db071cc",
        logoPage: "img[alt='unosquare logo']",
        aboutUrl: "https://www.unosquare.com/about-us/",
        name1: "div[class='elementor-element elementor-element-dfc5cb5 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name2: "div[class='elementor-element elementor-element-4527ae6 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name3: "div[class='elementor-element elementor-element-264d1f8 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name4: "div[class='elementor-element elementor-element-f95b1d6 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']",
        name5: "div[class='elementor-element elementor-element-616fc80 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box'] h3[class='elementor-image-box-title']"
    }
}