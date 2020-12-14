const BaseClass = require('./BaseClass');
const Page = require('./BaseClass');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobsPage extends BaseClass {
    /**
     * define selectors using getter methods
     */

    validateURL() {
        return super.validateURL("/jobs/");
    }
}

module.exports = new JobsPage();
