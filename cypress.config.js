const {defineConfig }=require("cypress");
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/Integration/Example/*.js'
    
  },
};
