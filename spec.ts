// import { browser,element,by } from "protractor"


//const { browser, element ,by} = require("protractor")
describe("login test ",()=>{
     

    beforeEach(()=>{
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3001/login');
        browser.manage().window().maximize();
        // browser.waitForReact(true)

    })
    it("launch applicaion",()=>{
        // const userToken = 'eyJraWQiOiJnV2RyczdJMWpKdDZYRGVRNWhtTFN5ZmRIZ3kxa3ZFRFFBcmdjaTU5Y1JzPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiYjc4ZjlkZDktMzAzNS00ODg2LWJiZjAtZmYwOTYzZmQ4ODZiIiwic3ViIjoiNThiYjE4MDMtZjEyZS00MWYwLThlZTAtMjk0YmU2ZjMzMDk3IiwiZXZlbnRfaWQiOiI2NWIyNDA1ZS02ZWQ1LTQ1MDMtYTRlMy1jYjY4MjlmNDAyMDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ2MTE4MjYzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9GRUs5eXgyTzgiLCJleHAiOjE2NDYxMjE4NjMsImlhdCI6MTY0NjExODI2MywianRpIjoiMmZkMzlhNTctNWU4MS00NWEyLWFlY2MtNzNmMzkzYzNjYjgxIiwiY2xpZW50X2lkIjoiNGpuZjZrMHBwOGo0cGNxOTZ1bWYzcXZlajUiLCJ1c2VybmFtZSI6IjU4YmIxODAzLWYxMmUtNDFmMC04ZWUwLTI5NGJlNmYzMzA5NyJ9.OBRolu5LOYDf5R-YFttpa-LNVgSTI0fxFiKr4JkoCGxg6uNc12gUS7w1cFEcHdhnL5p0CM9_gxCdR2jDZVZWW6Z1ou0OiEQHbkOBtuYGK2rm3jhkI1WmOoU-NpsOpaVAg1t8zHg2mzTCSD_rGUoIIImhAYygzgP5s4XiiZeatgadwFto2RCXETgG-TXaAjrLem5KFHD6rFlApFir9i1Xyk3PzQ6Xu-GSf5qI9RkJmaCPvq9zegi11LDbXN2WJzgT-5C3sTRt1rb1kfNko3oseuZdKVNh7wxzc5zp6eAIQqpxrxXm2K3CE2dMVmKNc8Wg8Ppg99cr2azK_MEjB7DXmg';
        element(by.id('outlined-adornment-email-login')).sendKeys('sanjith+9@zeefasys.com');
         element(by.id('outlined-adornment-password-login')).sendKeys('#aA123456');
      element(by.buttonText('Sign In')).click();
    //     // login_form.click();
    //     // const localStorageToken = browser.executeScript('return localStorage.getItem("serviceToken");');
    //     // expect(localStorageToken).toEqual(userToken)
       
        browser.sleep(10000)
    })
// it("set password",()=>{
//      element(by.id('outlined-adornment-email-login')).sendKeys('sanjith+18@zeefasys.com');
//      element(by.id('outlined-adornment-password-login')).sendKeys('Sanjith18*');
//       element(by.buttonText('Sign In')).click();

//       browser.sleep(10000)
//       element(by.id('outlined-adornment-password-login')).sendKeys('#aA123456');
//       element(by.name('confirmPassword')).sendKeys('#aA123456');
//       element(by.buttonText('Change Password')).click();
//       browser.sleep(10000)
// })
    // it("login sucessful",()=>{
    //     // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
    //     // element(by.css('.MuiTypography-root.MuiTypography-h5.css-1159lsg-MuiTypography-root',)).click();
    //     browser.sleep(10000)


    // })
    // it("add users",()=>{
    //     // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
    //     element(by.cssContainingText('.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root','Users')).click();
       

    //     browser.sleep(10000)
    //     element(by.buttonText('Add User')).click();
    //     element(by.id('mui-1')).sendKeys('Tinu');
    //     element(by.id('mui-2')).sendKeys('tinu@gmail.com');
    //     element(by.id('mui-3')).sendKeys('8344546465');
    //     element(by.buttonText('Save changes')).click();
    //     browser.sleep(10000)
    // })
    

    //  it("add pharmacy success",()=>{

    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A13Pharmacy');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     browser.sleep(10000)
    // })


    // it("add pharmacy error message 1 'Pharmacy name already exist'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 Pharmacy');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //      //     expect(element(by.tagName('p')).getText()).toBe('Pharmacy name already exist')
    // //         element.all(by.cssContainingText('table tr td svg','')).get(0).click();
    // //    expect(element.all(by.cssContainingText('MuiTypography-root.MuiTypography-body1.css-11081i3-MuiTypography-root p','Pharmacy name already exist')).isPresent()).toBe(false);
       
    //     expect(element(by.cssContainingText('p','Pharmacy name already exist')).isPresent()).toBe(false,'Pharmacy name already exist')
    //     browser.sleep(1000)
    // })


    // it("Add pharmacy error message 2 'pharmacy_name must be at most 50 characters'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA178 PharmacyA178 PharmacyA178 PharmacyA178 PharmacyA178 PharmacyA178 PharmacyA178 Pharmacy');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','pharmacy_name must be at most 50 characters')).isPresent()).toBe(false,'pharmacy_name must be at most 50 characters')
    //     browser.sleep(1000)
    // })

   
    // it("Add pharmacy error message 3 'Pharmacy Name length must be at least 3 characters long",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A1');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','"Pharmacy Name" length must be at least 3 characters long')).isPresent()).toBe(false,'"Pharmacy Name" length must be at least 3 characters long')
    //     browser.sleep(1000)
    // })
    
    // it("Add pharmacy error message 4 'pharmacy_name is a required field'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','pharmacy_name is a required field')).isPresent()).toBe(false,'pharmacy_name is a required field')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 5 'Please select country code.'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','Please select country code.')).isPresent()).toBe(false,'Please select country code.')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 6 'Phone number is not valid'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyAA');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('34agg89087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','Phone number is not valid')).isPresent()).toBe(false,'Phone number is not valid')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 7 'Phone Number length must be 10 characters long'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA17');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3486767677677677');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','"Phone Number" length must be 10 characters long')).isPresent()).toBe(false,'"Phone Number" length must be 10 characters long')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 8 'phone_number is a required field'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','phone_number is a required field')).isPresent()).toBe(false,'phone_number is a required field')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 9 'physical_address must be at least 6 characters'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinT');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','physical_address must be at least 6 characters')).isPresent()).toBe(false,'physical_address must be at least 6 characters')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 10 'physical_address must be at most 50 characters'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA17');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnuaTinTinTinnuaTinTinTinnuaTinTinTinnuaTinTinTinnuaTinTinTinnuaTinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','physical_address must be at most 50 characters')).isPresent()).toBe(false,'physical_address must be at most 50 characters')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 11 'physical_address is a required field'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacPharmacy');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('');
    //     element(by.name('description_value')).sendKeys('Tgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','physical_address is a required field')).isPresent()).toBe(false,'physical_address is a required field')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 12 'description_value must be at least 5 characters'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('Tgd');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','description_value must be at least 5 characters')).isPresent()).toBe(false,'description_value must be at least 5 characters')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 13 'description_value must be at most 150 characters'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA178');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('TgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxgin');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','description_value must be at most 150 characters')).isPresent()).toBe(false,'description_value must be at most 150 characters')
    //     browser.sleep(1000)
    // })

    // it("Add pharmacy error message 14 'description_value is a required field'",()=>{
    //     element(by.buttonText('Pharmacy')).click();
    //     element(by.name('pharmacy_name')).sendKeys('A178 PharmacyA1A');
    //     element(by.id('outlined-select-currency')).click();
    //     element(by.cssContainingText('ul li','UAE')).click()
    //     element(by.name('phone_number')).sendKeys('3456789087');
    //     element(by.name('physical_address')).sendKeys('TinTinTinnua');
    //     element(by.name('description_value')).sendKeys('');
    //     element(by.buttonText('Save changes')).click();
    //     expect(element(by.cssContainingText('p','description_value is a required field')).isPresent()).toBe(false,'description_value is a required field')
    //     browser.sleep(1000)
    // })
   
        
       
     


    //  it("Edit pharmacy success",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('Tidddgdfy');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click()
    //         element(by.name('phone_number')).clear().sendKeys('8344578765');
    //         element(by.name('physical_address')).clear().sendKeys('Tinuasmailcom');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         browser.sleep(10000)

    //         // expect(element(by.cssContainingText('p','"Pharmacy Name" length must be less than or equal to 30 characters long')).isPresent()).toBe('"Pharmacy Name" length must be less than or equal to 30 characters long')
    //         // expect(element(by.cssContainingText('p','"Pharmacy Name" length must be at least 3 characters long')).isPresent()).toBe('"Pharmacy Name" length must be at least 3 characters long')
    //         // expect(element(by.cssContainingText('p','pharmacy_name is a required field')).isPresent()).toBe('pharmacy_name is a required field')
  
    //     })


    //     it("Edit pharmacy error message 1 pharmacy_name is a required field",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click()
    //         element(by.name('phone_number')).clear().sendKeys('8344578765');
    //         element(by.name('physical_address')).clear().sendKeys('Tinuasmailcom');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','pharmacy_name is a required field')).isPresent()).toBe('pharmacy_name is a required field')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 2 Phone number is not valid",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('83445787yt');
    //         element(by.name('physical_address')).clear().sendKeys('Tinuasmailcom');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','Phone number is not valid')).isPresent()).toBe(false,'Phone number is not valid')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 3 Phone Number length must be 10 characters long",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('83445787655465');
    //         element(by.name('physical_address')).clear().sendKeys('Tinuasmailcom');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','"Phone Number" length must be 10 characters long')).isPresent()).toBe(false,'"Phone Number" length must be 10 characters long')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 4 phone_number is a required field",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('');
    //         element(by.name('physical_address')).clear().sendKeys('Tinuasmailcom');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','phone_number is a required field')).isPresent()).toBe(false,'phone_number is a required field')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 5 physical_address must be at least 6 characters",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('5687679840');
    //         element(by.name('physical_address')).clear().sendKeys('Tinm');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','physical_address must be at least 6 characters')).isPresent()).toBe(false,'physical_address must be at least 6 characters')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 6 physical_address must be at most 50 characters",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('8987679807');
    //         element(by.name('physical_address')).clear().sendKeys('TabctoewrTabctoewrTabctoewrTabctoewrTabctoewrTabctoewrTabctoewrTabctoewrTabctoewrTabctoewrm');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','physical_address must be at most 50 characters')).isPresent()).toBe(false,'physical_address must be at most 50 characters')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 7 physical_address is a required field",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('5687678987');
    //         element(by.name('physical_address')).clear().sendKeys('');
    //         element(by.name('description_value')).clear().sendKeys('Tgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','physical_address is a required field')).isPresent()).toBe(false,'physical_address is a required field')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 8 description_value must be at least 5 characters",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('7876768798');
    //         element(by.name('physical_address')).clear().sendKeys('sfsfsfffsf');
    //         element(by.name('description_value')).clear().sendKeys('Tgn');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','description_value must be at least 5 characters')).isPresent()).toBe(false,'description_value must be at least 5 characters')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 9 description_value must be at most 150 characters",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('8978798768');
    //         element(by.name('physical_address')).clear().sendKeys('sfdsfdsffssf');
    //         element(by.name('description_value')).clear().sendKeys('TgdgfxginTgdgfxginTgdgfxginTgdgfxgTgdgfxginTgdgfxginTgdgfxTgdgfxginTgdgfxginTgdgfxinTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxginTgdgfxgin');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','description_value must be at most 150 characters')).isPresent()).toBe(false,'description_value must be at most 150 characters')
    //         browser.sleep(1000)
    //     })

    //     it("Edit pharmacy error message 10 description_value is a required field",()=>{
        
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Edit')).last().click();
    //         element(by.name('pharmacy_name')).clear().sendKeys('pharmacy edit');
    //         element(by.id('outlined-select-currency')).click();
    //         element(by.cssContainingText('ul li','UAE')).click();
    //         element(by.name('phone_number')).clear().sendKeys('9877897687');
    //         element(by.name('physical_address')).clear().sendKeys('fdsdgsd');
    //         element(by.name('description_value')).clear().sendKeys('');
    //         element(by.buttonText('Update changes')).click();
    //         expect(element(by.cssContainingText('p','description_value is a required field')).isPresent()).toBe(false,'description_value is a required field')
    //         browser.sleep(1000)
    //     })s





    // jygisihdsad



    // it("Delete pharmacy success",()=>{
           
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Delete')).last().click();
    //         element(by.buttonText('Delete')).click();
    //         browser.sleep(1000)
    //     })
    
    // it("Delete pharmacy cancel",()=>{
           
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Delete')).last().click();
    //         element(by.buttonText('Cancel')).click();
    //         browser.sleep(1000)
    //     })  

    //  it("search pharmacy",()=>{
           
    //         element(by.id('input-search-list-style1')).click().sendKeys('AToday');
    //         browser.sleep(10000)
    //     })

    //  it("search pharmacy textbox clear",()=>{
           
    //         element(by.id('input-search-list-style1')).click().sendKeys('AToday').clear();
    //         browser.sleep(10000)
    //     })



it("Add user success",()=>{
 
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Tinua');
    element(by.name('email')).sendKeys('Tinua@gmail.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    browser.sleep(10000)

})

it("Add user Error message 1:first name is required",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('');
    element(by.name('email')).sendKeys('Tinua@gmail.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','first name is required')).isPresent()).toBe(false,'first name is required')
    browser.sleep(1000)

})
it("Add user Error message 2:Name length must be at least 3 characters long",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('fd');
    element(by.name('email')).sendKeys('Tinua@gmail.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','"Name" length must be at least 3 characters long')).isPresent()).toBe(false,'"Name" length must be at least 3 characters long')
    browser.sleep(1000)

})
it("Add user Error message 3:Name length must be less than or equal to 20 characters long",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju storeSanju storeSanju storeSanju storeSanju store');
    element(by.name('email')).sendKeys('Tinua@gmail.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','"Name" length must be less than or equal to 20 characters long')).isPresent()).toBe(false,'"Name" length must be less than or equal to 20 characters long')
    browser.sleep(1000)

})
it("Add user Error message 4:Email is required",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','Email is required')).isPresent()).toBe(false,'Email is required')
    browser.sleep(1000)

})
it("Add user Error message 5:Enter a valid email",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('sfafasf');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','Enter a valid email')).isPresent()).toBe(false,'Enter a valid email')
    browser.sleep(1000)

})
it("Add user Error message 6:Please select country code.",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('sfafasf');
    // element(by.id('outlined-select-currency')).click();
    // element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8344546465');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','Please select country code.')).isPresent()).toBe(false,'Please select country code.')
    browser.sleep(1000)

})
it("Add user Error message 7:Mobile is required",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('Sanju@zeefasys.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','Mobile is required')).isPresent()).toBe(false,'Mobile is required')
    browser.sleep(1000)

})
it("Add user Error message 8:numbers are allowed",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('Sanju@zeefasys.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('fgf');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','numbers are allowed')).isPresent()).toBe(false,'numbers are allowed')
    browser.sleep(1000)

})
it("Add user Error message 9:10 digits required",()=>{
    element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    element(by.cssContainingText('a', 'Users')).click();
    element(by.buttonText('User')).click();
    element(by.name('name')).sendKeys('Sanju store');
    element(by.name('email')).sendKeys('Sanju@zeefasys.com');
    element(by.id('outlined-select-currency')).click();
    element(by.cssContainingText('ul li','UAE')).click()
    element(by.name('mobileNumber')).sendKeys('8987898');
    element(by.buttonText('Save changes')).click();  
    expect(element(by.cssContainingText('p','10 digits required')).isPresent()).toBe(false,'10 digits required')
    browser.sleep(1000)

})

// it("Edit user",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('SANJUSSTORE');
//     element(by.name('email')).clear().sendKeys('Sanju@gmail.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('9988998899');
//         element(by.buttonText('Update changes')).click();
//     browser.sleep(1000)
// })
// it("Edit user Error message 1:Name length must be at least 3 characters long: ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('SA');
//     element(by.name('email')).clear().sendKeys('Sanju@gmail.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('9988998899');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','"Name" length must be at least 3 characters long')).isPresent()).toBe(false,'"Name" length must be at least 3 characters long')
//     browser.sleep(1000)
// })
// it("Edit user Error message 2:Name length must be less than or equal to 20 characters long: ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('SANJUSTORESANJUSTORESANJUSTORESANJUSTORESANJUSTORESANJUSTORE');
//     element(by.name('email')).clear().sendKeys('Sanju@gmail.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('9988998899');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','"Name" length must be less than or equal to 20 characters long:')).isPresent()).toBe(false,'"Name" length must be less than or equal to 20 characters long:')
//     browser.sleep(1000)
// })
// it("Edit user Error message 3:first name is required ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('');
//     element(by.name('email')).clear().sendKeys('Sanju@gmail.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('9988998899');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','first name is required')).isPresent()).toBe(false,'first name is required')
//     browser.sleep(1000)
// })
// it("Edit user Error message 4:Email is required ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('Sanju Store');
//     element(by.name('email')).clear().sendKeys('');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('9988998899');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','Email is required')).isPresent()).toBe(false,'Email is required')
//     browser.sleep(1000)
// })
// it("Edit user Error message 5:Mobile is required ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('Sanju Store');
//     element(by.name('email')).clear().sendKeys('sanjju@zeefasy.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','Mobile is required')).isPresent()).toBe(false,'Mobile is required')
//     browser.sleep(1000)
// })
// it("Edit user Error message 6:numbers are allowed ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('Sanju Store');
//     element(by.name('email')).clear().sendKeys('sanjju@zeefasy.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('ytrty');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','numbers are allowed')).isPresent()).toBe(false,'numbers are allowed')
//     browser.sleep(1000)
// })
// it("Edit user Error message 7:10 digits required ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(1).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('name')).clear().sendKeys('Sanju Store');
//     element(by.name('email')).clear().sendKeys('sanjju@zeefasy.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).clear().sendKeys('45786');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','10 digits required')).isPresent()).toBe(false,'10 digits required')
//     browser.sleep(1000)
// })


    // it("Delete User success",()=>{
    //         element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
    //         element(by.cssContainingText('a', 'Users')).click();
    //         element.all(by.cssContainingText('table tr td svg','')).get(1).click();
    //         element.all(by.cssContainingText('ul li p','Delete')).last().click();
    //         element(by.buttonText('Delete')).click();
    //         browser.sleep(1000)
    //     })
    
    it("Delete User cancel",()=>{
            element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
            element(by.cssContainingText('a', 'Users')).click();
            element.all(by.cssContainingText('table tr td svg','')).get(1).click();
            element.all(by.cssContainingText('ul li p','Delete')).last().click();
            element(by.buttonText('Cancel')).click();
            browser.sleep(10000)
        })  

     it("search User",()=>{
        element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
        element(by.cssContainingText('a', 'Users')).click();
            element(by.id('input-search-list-style1')).click().sendKeys('saniya');
            browser.sleep(10000)
        })

     it("search user textbox clear",()=>{
        element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
        element(by.cssContainingText('a', 'Users')).click();
            element(by.id('input-search-list-style1')).click().sendKeys('AToday').clear();
            browser.sleep(10000)
        })

// it("add store success ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('Tinua1sdf23');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546465');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();

// })

// it("add store error message 1 storeName is a required field ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546465');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','storeName is a required field')).isPresent()).toBe('storeName is a required field')
// })
// it("add store error message 2 Store Name length must be at least 3 characters long ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('sd');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546465');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','"Store Name" length must be at least 3 characters long')).isPresent()).toBe('"Store Name" length must be at least 3 characters long')
// })

// it("add store error message 3 storeName must be at most 50 characters ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('sddfsgdsgfgddfsgdsgfgddfsgdsgfgddfsgdsgfgddfsgdsgfg');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546465');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','storeName must be at most 50 characters')).isPresent()).toBe('storeName must be at most 50 characters')
// })

// it("add store error message 4 Phone Number length must be 10 characters long ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','"Phone Number" length must be 10 characters long')).isPresent()).toBe('"Phone Number" length must be 10 characters long')
// })

// it("add store error message 5 Phone number is not valid ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546sdffaf');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','Phone number is not valid')).isPresent()).toBe('Phone number is not valid')
// })

// it("add store error message 6 address is a required field ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','address is a required field')).isPresent()).toBe('address is a required field')
// })

// it("add store error message 7 address must be at least 6 characters ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('asf');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','address must be at least 6 characters')).isPresent()).toBe('address must be at least 6 characters')
// })

// it("add store error message 8 address must be at most 50 characters ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('sdadgdsagafgdadgdsagafgdadgdsagafgdadgdsagafgdadgdsagafgdadgdsagafg');
//     element(by.name('description_value')).sendKeys('Tinuaailfdfdfom');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','address must be at most 50 characters')).isPresent()).toBe('address must be at most 50 characters')
// })

// it("add store error message 9 description_value is a required field ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('SB Junction');
//     element(by.name('description_value')).sendKeys('');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','description_value is a required field')).isPresent()).toBe('description_value is a required field')
// })

// it("add store error message 10 description_value must be at least 5 characters ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('SB Junction');
//     element(by.name('description_value')).sendKeys('sdf');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','description_value must be at least 5 characters')).isPresent()).toBe('description_value must be at least 5 characters')
// })

// it("add store error message 11 description_value must be at most 150 characters ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('SB Junction');
//     element(by.name('description_value')).sendKeys('sdsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfsdasdasdsadfasdasdsadf');
//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','description_value must be at most 150 characters')).isPresent()).toBe('description_value must be at most 150 characters')
// })

// it("add store error message 12 drugs is a required field ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('SB Junction');
//     element(by.name('description_value')).sendKeys('This is the new store');
//     element(by.name('drugs')).sendKeys('');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','drugs is a required field')).isPresent()).toBe('drugs is a required field')
// })

// it("add store error message 13 Data too long for column 'drugs' at row 1 ",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
//     element(by.name('storeName')).sendKeys('AB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546787');
//     element(by.name('address')).sendKeys('SB Junction');
//     element(by.name('description_value')).sendKeys('This is the new store');
//     element(by.name('drugs')).sendKeys('fgffhgfgfhgfhfghfhfhghgffgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhfgffhgfgfhgfhfghfhfhghgfhh');
//     element(by.buttonText('Save changes')).click();
//     expect(element(by.cssContainingText('p','Data too long for column drugs at row 1')).isPresent()).toBe('Data too long for column drugs at row 1')
// })

// it("add store error message 14 Store Name Already Exist ",()=>{
 
//         element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//         element(by.cssContainingText('a', 'Stores')).click();
//         element(by.buttonText('Store')).click();
//         element(by.name('storeName')).sendKeys('AAAnew store');
//         element(by.id('outlined-select-currency')).click();
//         element(by.cssContainingText('ul li','UAE')).click()
//         element(by.name('phoneNumber')).sendKeys('8344546787');
//         element(by.name('address')).sendKeys('SB Junction');
//         element(by.name('description_value')).sendKeys('This is the new store');
//         element(by.name('drugs')).sendKeys('calpol');
//         element(by.buttonText('Save changes')).click();
//         expect(element(by.cssContainingText('p','Store Name Already Exist')).isPresent()).toBe('Store Name Already Exist')
//     })
// it("add store error message 15 Please select country code. ",()=>{
 
//         element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//         element(by.cssContainingText('a', 'Stores')).click();
//         element(by.buttonText('Store')).click();
//         element(by.name('storeName')).sendKeys('AAAnew store');
//         element(by.name('phoneNumber')).sendKeys('8344546787');
//         element(by.name('address')).sendKeys('SB Junction');
//         element(by.name('description_value')).sendKeys('This is the new store');
//         element(by.name('drugs')).sendKeys('calpol');
//         element(by.buttonText('Save changes')).click();
//         expect(element(by.cssContainingText('p','Please select country code.')).isPresent()).toBe('Please select country code.')
//     })

// it("Edit store success",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('Tinu123a');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633807976');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
// })

// it("Edit store error message1 storeName is a required field ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633807976');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','storeName is a required field')).isPresent()).toBe('storeName is a required field')
// })

// it("Edit store error message 2 Store Name length must be at least 3 characters long ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('sa');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633807976');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','"Store Name" length must be at least 3 characters long')).isPresent()).toBe('"Store Name" length must be at least 3 characters long')
// })

// it("Edit store error message 3 storeName must be at most 50 characters ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('sfdsdhytsfdsdhytrasfdsdhytrasfdsdhytrasfdsdhytrara');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633807976');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','storeName must be at most 50 characters')).isPresent()).toBe('storeName must be at most 50 characters')
// })

// it("Edit store error message 4 Phone Number length must be 10 characters long ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('963380');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','"Phone Number" length must be 10 characters long')).isPresent()).toBe('"Phone Number" length must be 10 characters long')
// })

// it("Edit store error message 5 Phone number is not valid ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('963380sfd');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','Phone number is not valid')).isPresent()).toBe('Phone number is not valid')
// })

// it("Edit store error message 6 address is a required field ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','address is a required field')).isPresent()).toBe('address is a required field')
// })

// it("Edit store error message 7 address must be at least 6 characters ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','address must be at least 6 characters')).isPresent()).toBe('address must be at least 6 characters')
// })

// it("Edit store error message 8 address must be at most 50 characters ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd  sd addresssd addresssd addresssd addresssd addressaddress');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','address must be at most 50 characters')).isPresent()).toBe('address must be at most 50 characters')
// })

// it("Edit store error message 9 description_value is a required field ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd addresss');
//     element(by.name('description_value')).clear().sendKeys('');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','description_value is a required field')).isPresent()).toBe('description_value is a required field')
// })

// it("Edit store error message 10 description_value must be at least 5 characters ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd addresss');
//     element(by.name('description_value')).clear().sendKeys('des');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','description_value must be at least 5 characters')).isPresent()).toBe('description_value must be at least 5 characters')
// })

// it("Edit store error message 11 description_value must be at most 150 characters ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd addresss');
//     element(by.name('description_value')).clear().sendKeys('descriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvaluedescriptionvalue');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','description_value must be at most 150 characters')).isPresent()).toBe('description_value must be at most 150 characters')
// })

// it("Edit store error message 12 drugs is a required field ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd addresss');
//     element(by.name('description_value')).clear().sendKeys('descriptionvalue');
//     element(by.name('drugs')).clear().sendKeys('');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','drugs is a required field')).isPresent()).toBe('drugs is a required field')
// })

// it("Edit store error message 13 Data too long for column 'drugs' at row 1 ",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('AAB store');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633806787');
//     element(by.name('address')).clear().sendKeys('sd addresss');
//     element(by.name('description_value')).clear().sendKeys('descriptionvalue');
//     element(by.name('drugs')).clear().sendKeys('fdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkjfdsdfsfddfsfdfdfgfghjhkj');
//     element(by.buttonText('Update changes')).click();
//     expect(element(by.cssContainingText('p','Data too long for column drugs at row 1')).isPresent()).toBe('Data too long for column drugs at row 1')
// })

// it("Delete store",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Delete')).last().click();
//     element(by.buttonText('Delete')).click();
// })
// it("Delete store cancel",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Delete')).last().click();
//     element(by.buttonText('Cancel')).click();
// })

// it("search store",()=>{
//             element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//             element(by.cssContainingText('a', 'Stores')).click();
//             element(by.id('input-search-list-style1')).click().sendKeys('AAAnew');
//             browser.sleep(10000)
//         })

// it("search store textbox clear",()=>{
//             element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//             element(by.cssContainingText('a', 'Stores')).click();
//             element(by.id('input-search-list-style1')).click().sendKeys('AAAnew').clear();
//             browser.sleep(10000)
//         })

})
   
