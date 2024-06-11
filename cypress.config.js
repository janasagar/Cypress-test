const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

// "experimentalSessionAndOrigin": true,
// "experimentalModifyObstructiveThirdPartyCode": true,
// "watchForFileChanges": false,
async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber())
  return config;
}
module.exports = defineConfig({
  projectId: 'kgescm',
  e2e: {
    setupNodeEvents,
    // specPattern: "**/*.feature",
    specPattern: 'cypress/integration/assignment/*.js',
    // specPattern: 'cypress/integration/evaluation/*.js',
    // specPattern: 'cypress/integration/test/*.js',
    // specPattern: 'cypress/integration/method/*.js'
    // specPattern: 'cypress/UAT/features/*.(js,feature)',
    //supportFile: false
    
  },
  "experimentalSessionAndOrigin": true,
"experimentalModifyObstructiveThirdPartyCode": true,
"watchForFileChanges": false,

  // e2e: {
  //   setupNodeEvents(on,config){

  //   },
  // },
});
