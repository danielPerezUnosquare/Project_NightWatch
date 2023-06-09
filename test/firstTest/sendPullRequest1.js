module.exports = {
  'Demo first exercise' : function(browser) {
    var locator = "div[class='FPdoLc lJ9FBc'] input[name='btnK']"
    browser
    .windowMaximize()
    .url('https://www.google.com/')
    .assert.not.attributeContains(locator,"class","none")
    .assert.not.attributeEquals(locator,"class","none")
    .assert.not.containsText(".uU7dJb","EUA")
    .assert.not.cssProperty(locator,"font-size","18px")
    .assert.not.value(locator,"prueba")
    .assert.visible("img[alt='Google']")
    .assert.not.title("Unosquare")
    .assert.not.urlContains("unosquare")
    .assert.not.urlEquals("https://www.unosquare.com/")
    browser.end()
  }
}