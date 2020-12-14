----------------------
INSTALLATION
----------------------
Should have nodejs 12.xx or higher
Java JDK installation might be necessary
Should have chrome 87 or higher


Add the path to your system environment variable(Should be your path)
F:\Automation\sdet-app-rb\node_modules\.bin


-------------------------
Design Decisions & Issues
-------------------------
Latest WebdriverIO is creating issues in unwrapping the packages. https://github.com/webdriverio/webdriverio/issues/6226
Ensure LTS version of WebdriverIO is selected and has compatibility with Browser and Selenium server.
npm install @wdio/cli@6.8.0 --save-dev




-------------------------
Framework Layout
-------------------------
Test
	-pageobjects
		-BaseClass.js
		-jobs.page.js
		-landing.page.js
	-specs
		-e2e
			-SearchJourney.js
		-UnitTests
			-LandingPage.js
Test-Reports
.gitIgnore
debug.log
package.json
wdio.config.js
