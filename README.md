# ProtractorTestsforReactApp

Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed. Check the version of node you have by running node --version. It should be greater than v0.10.0.

Node.js comes with the Protractor npm package, which you can use to install Protractor.

npm install -g protractor

Check that Protractor is working by running protractor --version

The Protractor install includes the following:
- protractor command line tool
- webdriver-manager command line tool
- Protractor API (library)

Standalone Selenium Server
- To run the Selenium Server on your local machine, use the standalone Selenium Server.

JDK
- To run a local Selenium Server, you will need to have the Java Development Kit (JDK) installed. Check this by running java -version from the command line.

Installing and Starting the Server
- To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.
- Run the update command: webdriver-manager update This will install the server and ChromeDriver.
- Run the start command: webdriver-manager start This will start the server. 
- Leave the server running while you conduct your test sessions.
- In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.
 (The config file conf.js in the repo already has the address of the selenium server)
 

 
 Note: I already had JDK and selenium server setup. I used selenium-server -p 4444 to start the selenium server
