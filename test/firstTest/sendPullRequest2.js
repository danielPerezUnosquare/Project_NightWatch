module.exports = {
    'Demo second exercise' : function(browser) {
        browser
        .windowMaximize()
        .url('https://nightwatchjs.org/')
        .assert.titleContains("Nightwatch.js")
        .assert.elementPresent("span[class='regular16px neutral-white-color'] a")
        .click("span[class='regular16px neutral-white-color'] a")
        .assert.elementPresent("#sidebar-filter")
        .sendKeys("#sidebar-filter",'Assert')
        .click("div[class='filter-container'] li:nth-child(1) a:nth-child(1)")
        .assert.elementPresent("div[class='nav-links-left'] span:nth-child(1)")
        .click('body > header:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)')
        .getLocationInView(".address")
        .assert.textContains(".address",'Nightwatch.js')
        browser.end()
    }
}