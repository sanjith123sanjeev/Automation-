"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("login test ", () => {
    beforeEach(() => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('http://localhost:3000');
        protractor_1.browser.waitForReact();
    });
    it("lounch applicaion", () => {
    });
});
//# sourceMappingURL=spec.js.map