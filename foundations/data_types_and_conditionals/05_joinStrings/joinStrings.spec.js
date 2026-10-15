const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Ally', () => {
    expect(values.firstName).toEqual('Ally');
  });
  test('lastName is Chow', () => {
    expect(values.lastName).toEqual('Chow');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2011', () => {
    expect(values.birthYear).toEqual(2011);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('How is life so far? My name is Ally Chow and I am 15 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Ally Chow', () => {
    expect(values.fullName).toEqual('Ally Chow');
  });
  test('age is 15', () => {
    expect(values.age).toEqual(15);
  });
});
