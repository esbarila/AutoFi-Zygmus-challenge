const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://www.tutorialspoint.com/html/html_iframes.htm",
    setupNodeEvents(on, config) {
      on('task', {        
        setUserData: (userData) => {
          global.userData = userData;
          return null;
        },
        getUserData: () => {
          return global.userData;
        },
      })
    },
  },
})