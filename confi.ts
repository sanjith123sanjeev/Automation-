

exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'firefox'
    },

    // plugins : [
    //   {
    //     package : "protractor-react-selector"

    //   }
    // ],
    onPrepare: async () => {
      await browser.waitForAngularEnabled(false);
      //you can do magic here. See the Pro-tip in later section
     },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    specs:['./spec.ts'],
  


}