#  Testcafe interaction with Tutorialspoint for Autofi (https://www.tutorialspoint.com/html/html_iframes.htm)

## How to run tests

### Prerequisite
Having node and npm previously installed:

1. Clone this repository
    `git clone https://github.com/esbarila/AutoFi-Zygmus-challenge`
2. Install dependencies
3. `npm i`
4. Run the interaction
    1. `npm run demo`

### Notes
I first attempted to make this interaction with Cypress, which is a very robust testing framework.\
But I had issues with the runner that seem native to cypress: [Issue](https://github.com/cypress-io/cypress/issues/27185)\
I was able to get it done with another Testing framework, Testcafe.\
But its fairly limited and I wasn't able to Sign Up and login.\
I would normally use a request() function provided by the framework, but Testcafe can't handle headers yet.\
(I could do it with cypress). See more context in the code [comments](/testcafe/tests/tutorialspoint.js).\
[An issue arised with Testafe that may break the test](https://github.com/DevExpress/testcafe/issues/7865)

### Output file
output.log will be generated at the root directory after running the interaction.

### Video demo:
https://github.com/esbarila/AutoFi-Zygmus-challenge/assets/47305731/5888333b-32cf-403b-a754-94ef05a26e2e
