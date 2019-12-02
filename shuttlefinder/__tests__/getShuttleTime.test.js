/*
This test will check if our app is diplaying the correct shuttle timing
for a given location in blue line shuttle

Location for this test is set to 'Parker Lot'
*/
const { getTime } = require('../Components/Welcome');

test('should get the actual time', () => {
    const value = getTime(1900, 'Parker Lot');
    expect(value).toBe(1937);
})


