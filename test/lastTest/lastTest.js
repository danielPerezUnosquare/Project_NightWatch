module.exports = {
    'Unosquare test' : function(browser){
        const unosquare = browser.page.mainpage2();
        unosquare.navigate().testInUnosquare();
        browser.end();
    },

    'Amazon test' : function(browser){
        const amazon = browser.page.mainpage2();
        amazon.navigate('https://www.amazon.com.mx/').testInAmazone();
        browser.end();
    }
}