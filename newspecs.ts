
const { browser, element ,by} = require("protractor")

describe("login test ",()=>{
     

    beforeEach(()=>{
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3001/login');
        browser.manage().window().maximize();
        // browser.waitForReact(true)

    })
    it("lounch applicaion",()=>{
        const userToken = 'eyJraWQiOiJnV2RyczdJMWpKdDZYRGVRNWhtTFN5ZmRIZ3kxa3ZFRFFBcmdjaTU5Y1JzPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiYjc4ZjlkZDktMzAzNS00ODg2LWJiZjAtZmYwOTYzZmQ4ODZiIiwic3ViIjoiNThiYjE4MDMtZjEyZS00MWYwLThlZTAtMjk0YmU2ZjMzMDk3IiwiZXZlbnRfaWQiOiI2NWIyNDA1ZS02ZWQ1LTQ1MDMtYTRlMy1jYjY4MjlmNDAyMDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ2MTE4MjYzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9GRUs5eXgyTzgiLCJleHAiOjE2NDYxMjE4NjMsImlhdCI6MTY0NjExODI2MywianRpIjoiMmZkMzlhNTctNWU4MS00NWEyLWFlY2MtNzNmMzkzYzNjYjgxIiwiY2xpZW50X2lkIjoiNGpuZjZrMHBwOGo0cGNxOTZ1bWYzcXZlajUiLCJ1c2VybmFtZSI6IjU4YmIxODAzLWYxMmUtNDFmMC04ZWUwLTI5NGJlNmYzMzA5NyJ9.OBRolu5LOYDf5R-YFttpa-LNVgSTI0fxFiKr4JkoCGxg6uNc12gUS7w1cFEcHdhnL5p0CM9_gxCdR2jDZVZWW6Z1ou0OiEQHbkOBtuYGK2rm3jhkI1WmOoU-NpsOpaVAg1t8zHg2mzTCSD_rGUoIIImhAYygzgP5s4XiiZeatgadwFto2RCXETgG-TXaAjrLem5KFHD6rFlApFir9i1Xyk3PzQ6Xu-GSf5qI9RkJmaCPvq9zegi11LDbXN2WJzgT-5C3sTRt1rb1kfNko3oseuZdKVNh7wxzc5zp6eAIQqpxrxXm2K3CE2dMVmKNc8Wg8Ppg99cr2azK_MEjB7DXmg';
        // element(by.id('outlined-adornment-email-login')).sendKeys('info@codedthemescom');
        //  element(by.id('outlined-adornment-password-login')).sendKeys('123456');
      element(by.buttonText('Sign in')).click();
        // login_form.click();
        // const localStorageToken = browser.executeScript('return localStorage.getItem("serviceToken");');
        // expect(localStorageToken).toEqual(userToken)
       
        browser.sleep(10000)
    })

    // it("login sucessful",()=>{
    //     // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
    //     // element(by.css('.MuiTypography-root.MuiTypography-h5.css-1159lsg-MuiTypography-root',)).click();
    //     browser.sleep(10000)


    // })
    it("add users",()=>{
        // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
        element(by.cssContainingText('.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root','Users')).click();
       

        browser.sleep(10000)
        element(by.buttonText('Add User')).click();
        element(by.id('mui-1')).sendKeys('Tinu');
        element(by.id('mui-2')).sendKeys('tinu@gmail.com');
        element(by.id('mui-3')).sendKeys('8344546465');
        element(by.buttonText('Save changes')).click();
        browser.sleep(10000)
    })
    

    

    // it('navigate to users',()=>{
    //   var test =   
    //   expect(test.getText()).toBe('Users');
    //   test.click();
    //     browser.sleep(10000)
    // })
    
})
   
