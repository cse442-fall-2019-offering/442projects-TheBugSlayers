const { getTime } = require('../Components/Welcome');

/*
Time picker tool 
*/

test('should get the actual time', () => {
    const value = getTime(1300, '');
    expect(value).toBe('');

})