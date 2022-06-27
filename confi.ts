

exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'firefox'
    },

    onPrepare: async () => {
      await browser.waitForAngularEnabled(false);
      
     },
  
    // Framework to use. Jasmine 
    framework: 'jasmine',
    specs:['./spec.ts'],
  


}