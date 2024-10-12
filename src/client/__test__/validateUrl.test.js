const { isValid } = require("../js/validateUrl")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(isValid("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(isValid("mailto:ahmed@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(isValid("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(isValid("")).toBeFalsy();
    })
})

