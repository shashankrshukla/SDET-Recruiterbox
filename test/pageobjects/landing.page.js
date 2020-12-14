const BaseClass = require('./BaseClass');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends BaseClass {
    /**
     * define selectors using getter methods
     */
    get searchBar() { return $('[name="q"]') }
    get firstResult() { return $$('<h3>')[0] }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    SearchString(searchitem) {
        this.searchBar.setValue(searchitem);
        this.searchBar.keys("\uE007")
    }

    SearchResultCountValidation() {

        var results = $$('h3[class="rb-h3 js-job-list-opening-name cut-text rb-text-color-primary rb-space-on-bottom-2rbpx"]').length
        var resultNumber = $('span[class="rb-text rb-text-4 rb-text--color-dark rb-text--weight-bold"]')
        // console.log(resultNumber) //Prints the value of Span tag besides the search bar(It actually returns the promise which is resolved by toHaveTextContatining)
        // console.log(results) //Prints the total number of results
        expect(resultNumber).toHaveTextContaining(results)
    }

    clickFirstResult() {
        this.firstResult.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }

}

module.exports = new LandingPage();
