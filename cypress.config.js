const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries:{"runMode": 2, "openMode":0},
  video:false,
  chromeWebSecurity:false,
  screenshotOnRunFailure:true,
  viewportWidth:1200,
  defaultCommandTimeout:5000,
  pageLoadTimeout:1000000,
  e2e: {},
});
