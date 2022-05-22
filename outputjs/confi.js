"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    plugins: [
        {
            package: "protractor-react-selector"
        }
    ],
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        // await browser.waitForAngularEnabled(false);
        //you can do magic here. See the Pro-tip in later section
    }),
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    specs: ['./newspecs.ts'],
    seleniumAddress: 'http://localhost:4444',
    capabilities:{'browserName': 'chrome'},
    onPrepare(){ 
    browser.driver.manage().window().maximize();
    },
    onComplete(){
    },
    
};
//# sourceMappingURL=confi.js.map