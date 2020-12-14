const LandingPage = require('../../pageobjects/landing.page');
const JobsPage = require('../../pageobjects/jobs.page');

describe('Landing page unit tests', () => {
    
    it('User is able to Validate the title of the Landing Page', () => {
        LandingPage.open()
        expect(browser).toHaveTitle('SDET Application Inc. jobs | SDET Application Inc. openings | SDET Application Inc. careers')
        browser.closeWindow()
    })
})


