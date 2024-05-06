const { defineConfig } = require("cypress");
const cucumber = require ('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  e2e: {
    env:{ 
      apiBaseUrl: ' Base URL: rarocrud-80bf38b38f1f.herokuapp.com/api/v1'     
    },
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
