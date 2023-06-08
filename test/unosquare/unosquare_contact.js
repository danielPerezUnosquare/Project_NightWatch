module.exports = {
    'Demo test unosquare contact us' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .assert.elementPresent("h1[class='elementor-heading-title elementor-size-default']")
      .end()
    }
};