const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should return string', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });
  it('should return true if palindrome else return false', () => {
    expect(palindrome('hello')).toBeFalsy();
    expect(palindrome('wow')).toBeTruthy();
    expect(palindrome('saas')).toBeTruthy();
    expect(palindrome('world')).toBeFalsy();
  });
});
