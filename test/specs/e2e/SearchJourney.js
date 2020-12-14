const LandingPage = require('../../pageobjects/landing.page');
const JobsPage = require('../../pageobjects/jobs.page');

describe('Search Journey', () => {
    it('User is able to search a job and results displayed should match with the number displayed beside the search bar', () => {
        LandingPage.open()
        LandingPage.SearchString("Web developer")
        LandingPage.SearchResultCountValidation()
    })

    it('User is able to click on the first job result and should be navigated to the "/jobs" url with the appropriate heading', () => {
        LandingPage.open()
        LandingPage.SearchString("Engineer")
        LandingPage.clickFirstResult()  
        JobsPage.validateURL()
    })
})


