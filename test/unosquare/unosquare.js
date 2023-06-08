module.exports = {
    'Demo test unosquare home' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    }
};