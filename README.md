
# EA App

## Getting Started

These instructions will help in setting the project and running it up on your local machine for test automation purpose.

### Pre-requisite softwares

Below software should be installed before project setup,

* Node.js

### Project setup

* Open command prompt/powershell/bash/terminal and run the following commands in this folder,

```
npm install
npm install - g @angular/cli
ng serve
```

* Once, the project is built then open the url http://localhost:4200/festivals in browser


**Note** - These instructions will assist you with setup but you are free to explore tools, processes and techniques for setting up the project.


### Cypress setp

* Open prompt/powershell/bash/terminal and open the web folder of ea-coding-test-sameples project.

and run the below commands to run the cypress on headless mode

npx cypress open 

-------- then launch the E2E test cases 
--------- Run any of the test suit

Headed mode 

npx cypress run

------ Automatically scripts will be run in command line

---- As we have added the html reports, when we run the npx cypress run automatically Report will be generated as index.html.

About the framework and test cases:

** For the festival, added two different test cases to validate the navigation and festival on the screen.
** Created  Page object model framework to seperate the elements and test scenarios.
** In 'src' folder and under the EA/ea-coding-testing-samples/web/src/loginPage.ts file for page objects.
   Page objects are flexible and we can reuse the code any anywere as it is required.
** And written the main test cases under EA/ea-coding-testing-samples/web/e2e/ folder/festival.cy.ts
** Have covered test cases with different validations.

 ----They can visit and validate the url navigation
 ----Listing how many are there in page and print those
 ----List the length and  validation to know how many are thre in page


 About the Reports:

 -We have added Mocha awesome reports to get the html reports, to know how many are passed and how many are failed in framework.
 -They will be available under Reports foler of cypress.
 -If we run the command called npx cypress run in command line, automatically all the scripts can be run in terminal one by one, and report can be generated under reports section.
 -We can open that report from our local system cypress folder.

 Eexample report.
 HTML report successfully created
ea-coding-test-samples/web/cypress/reports/html/index.html

If we copy and paste this in chrome browser, we see the existing report.

