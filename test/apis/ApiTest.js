module.exports = {
    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://reqres.in/api/users?page=2'
        browser.apiGet(apiUrl, function (response) {
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.page, '2')
            browser.assert.equal(response.body.total, '12')
            browser.assert.equal(response.body.per_page, '6')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://reqres.in/api/users?page=2'
        browser.apiGet(apiUrl, function (response) {
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.page, '2')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    }
};