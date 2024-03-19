const reverseString = require('./reverseString');

describe('get reversed string', () => {
  it('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });
  it('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });
  it('should return reversed string', () => {
    expect(reverseString('Hello World')).toEqual('dlroW olleH');
    expect(reverseString('Hello')).toEqual('olleH');
    expect(reverseString('Bye')).toEqual('eyB');
    expect(reverseString('greet')).toEqual('teerg');
  });
});
