module.exports = {
    'Unosquare test' : function(browser){
        const unosquare = browser.page.mainpage2();
        unosquare.navigate().testInUnosquare();
        browser.end();
    }
    
}