/*
This test will check if our app is diplaying the correct output number for weekend weekday results

*/

const { fooDay } = require('../Components/Welcome');

test('should get the correct day for weekend/weekday', () => {
    const value = fooDay();
    var testDay = new Date().getDay();
    expect(value).toBe(testDay);
})