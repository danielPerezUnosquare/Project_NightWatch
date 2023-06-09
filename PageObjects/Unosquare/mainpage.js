var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    return this.waitForElementVisible('@contactusMenu', 1000)
      /* .click('@contactusMenu')
      .setValue('@companyTextField', 'QA CoE course')
      //.setValue('@phoneTextField', '3300000000')
      .setValue('@messageTextArea', 'This is a Random Text used in a Course')
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg') */
      .click('@contactusMenu')
      .setValue('@companyTextField', form.company)
      //.setValue('@phoneTextField', form.phone)
      .setValue('@messageTextArea', form.message)
      .click('@submitBtn')
      .waitForElementVisible('@nameWarningMsg')
  }
};

function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
};

module.exports = {
  url: 'https://www.unosquare.com',
  commands: [validateContactUs],
  elements: {
    contactusMenu: {
      //selector: "li a[href = '/ContactUs']"
      selector: "div[class='elementor-element elementor-element-fdff709 elementor-hidden-mobile elementor-widget__width-auto elementor-widget elementor-widget-button'] a[role='button']"
    },
    industriesMenu: {
      selector: "li a[href = '/Industries']"
    },
    aboutMenu: {
      selector: "li a[href = '/About']"
    },
    servicesMenu: {
      selector: "li a[href = '/Services']"
    },
    companyTextField: {
      selector: "#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc"
    },
    phoneTextField: {
      selector: "input.hs-input[name = 'phone']"
    },
    messageTextArea: {
      selector: "#message-b0570355-5abf-47d4-b00c-fcf04db071cc"
    },
    submitBtn: {
      selector: "input[value='Submit']"
    },
    nameWarningMsg: {
      selector: "label[class='hs-main-font-element']"
    }
  }
}