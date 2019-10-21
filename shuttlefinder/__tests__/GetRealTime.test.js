
//  This test checks if our realTime function is producing the
//  correct realtime value in military time format

// Military time format : example 6pm == 1800
// Military time doesn't have colon separating the hour and minutes fields

const { realTime } = require('../Components/Welcome');



test('should get the actual time', () => {
    const value = realTime();
    var d = new Date();
    expect(value).toBe(((d.getHours()) * 100) + d.getMinutes());
})

