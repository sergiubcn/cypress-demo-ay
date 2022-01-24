# Cypress.io Demo - About You

## Installation

1. System NodeJS version 16.13;
2. Clone the repo and run ```npm install```;
3. Run ```npm run cy:run``` to execute the tests.

Scripts read for CI:
`npm run format:check` - check formatting (prettier)
`npm run type:check` - TS compilation

## Structure

**Page component object test design pattern**
(also commonly known as Page object model - confusing & old naming)
Page components are organised in a very similar way to React components in order to promote reusability and maintainability. Used in most large projects.
Location: ```/tests/pageComponentObjectDesign/```.

**Screenplay test design pattern**
An extension of the Page component object design pattern. Very useful when the system has multiple user roles, each with its own permissions. It makes it much more obvious what each user role can do in the application - described through actions and interrogations.
If we'd consider multiple user account types such as: premium user, influencer account, etc; this would be an extra level of abstraction.
Each user role would be mapped to possible actions and interrogations of the system, so that engineers would not get confused about what each role can do in the application.

## Issues encountered
Because the provided link redirects to a production application there were several issues encountered:

1. CORS errors because Cypress loads the application in an iFrame. In a test environment this should not be a problem.
2. I may have triggered a couple of alerts in the monitoring system: I noticed a request to Sentry.io which is a monitoring tool.
3. Because I have no access to the DB I can't ensure the availability of test data, as such the test might fail when you run it.
