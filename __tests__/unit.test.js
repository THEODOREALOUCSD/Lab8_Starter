// unit.test.js
// TODO - Part 2
const functions = require('../code-to-unit-test/unit-test-me.js');
test('check (619)-443-7700 is valid', () => {
    // TODO
    expect(functions.isPhoneNumber('(619)-443-7700')).toBe(true);
  });
test('check (619)-443-5746 is valid', () => {
    // TODO
    expect(functions.isPhoneNumber('(619)-443-5746')).toBe(true);
  });
test('check 123456 is not valid', () => {
    // TODO
    expect(functions.isPhoneNumber('123456')).toBe(false);
  });
test('check (619)-4435746 is not valid', () => {
    // TODO
    expect(functions.isPhoneNumber('(619)-4435746')).toBe(false);
  });

test('check if tjalo@ucsd.edu is valid', () => {
    // TODO
    expect(functions.isEmail('tjalo@ucsd.edu')).toBe(true);
  });
test('check if awesomesauce@yahoo.com is valid', () => {
    // TODO
    expect(functions.isEmail('awesomesauce@yahoo.com')).toBe(true);
  });
test('check if youtube.com is not valid', () => {
    // TODO
    expect(functions.isEmail('youtube.com')).toBe(false);
  });
test('check if github.com is not valid', () => {
    // TODO
    expect(functions.isEmail('github.com')).toBe(false);
  });

test('check if super123_ is valid', () =>{
    expect(functions.isStrongPassword('super123')).toBe(true);
});

test('check if abc321_ is valid', () =>{
    expect(functions.isStrongPassword('abc321_')).toBe(true);
});

test('check if hi is not valid', () =>{
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('check if 123 is not valid', () =>{
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('check if 1/7/2022 is valid', () =>{
    expect(functions.isDate('1/7/2022')).toBe(true);
});

test('check if 01/07/2022 is valid', () =>{
    expect(functions.isDate('01/07/2022')).toBe(true);
});
test('check if 1/7/22 is not valid', () =>{
    expect(functions.isDate('1/7/22')).toBe(false);
});
test('check if 1/7/22556 is not valid', () =>{
    expect(functions.isDate('1/7/22556')).toBe(false);
});

test('check if 314 is valid', () =>{
    expect(functions.isHexColor('314')).toBe(true);
});

test('check if 996699 is valid', () =>{
    expect(functions.isHexColor('996699')).toBe(true);
});

test('check if 1 is not valid', () =>{
    expect(functions.isHexColor('1')).toBe(false);
});

test('check if 10101010 is not valid', () =>{
    expect(functions.isHexColor('10101010')).toBe(false);
});
