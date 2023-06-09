var validateGuidePage = {
    guidepage: function() {
      this.api.pause(1000);
      return this.click("div[class='nav-links-left'] div:nth-child(1) a:nth-child(1)")
      .setValue("#sidebar-filter","assert")
      .assert.title("What is Nightwatch? | Developer Guide | Nightwatch.js","//h2[normalize-space()='What is Nightwatch?']")
      .assert.urlEquals("https://nightwatchjs.org/guide/overview/what-is-nightwatch.html")
      .assert.enabled("#whatis-logo")
      .assert.visible("#whatis-logo")
      .end();
    }
  };

module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [validateGuidePage],
    elements: {
      guideMenu: "//div[@class='nav-links-left']//div[1]//a[1]",
      searchBar: "#sidebar-filter",
      pageTitle: "//h2[normalize-space()='What is Nightwatch?']",
      imageLogo: "#whatis-logo"
    },
};