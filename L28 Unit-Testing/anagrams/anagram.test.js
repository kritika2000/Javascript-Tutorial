const anagram = require('./anagram');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });
  it('should return true if anagram', () => {
    expect(anagram('ram', 'arm')).toBeTruthy();
    expect(anagram('cat', 'act')).toBeTruthy();
    expect(anagram('tahe', 'hate')).toBeTruthy();
  });
  it('should return false if not anagram', () => {
    expect(anagram('ram', 'xrm')).toBeFalsy();
    expect(anagram('cat', 'att')).toBeFalsy();
    expect(anagram('tahe', 'pqrs')).toBeFalsy();
  });
});
