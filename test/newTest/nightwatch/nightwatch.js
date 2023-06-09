module.exports = {
  'Nightwatch test 1' (browser) {
    const nightwatch = browser.page.landingpage();
    nightwatch.navigate().guidepage();
  }

    /* 'Nightwatch test' (browser) {
      browser
        .url('https://nightwatchjs.org/')
        .click("div[class='nav-links-left'] div:nth-child(1) a:nth-child(1)")
        .setValue("#sidebar-filter","assert")
        .assert.title("What is Nightwatch? | Developer Guide | Nightwatch.js","//h2[normalize-space()='What is Nightwatch?']")
        .assert.urlEquals("https://nightwatchjs.org/guide/overview/what-is-nightwatch.html")
        .assert.enabled("#whatis-logo")
        .assert.visible("#whatis-logo")
        .end();
    } */
}