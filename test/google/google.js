module.exports = {
    'Demo test google' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.google.com/')
      .assert.elementPresent("div[class='FPdoLc lJ9FBc'] input[name='btnK']")
      .end()
    }
};