const fizzbuzz = require('./fizzbuzz');

// Grouping multiple Tests
describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toEqual('function');
  });
  it('should return the number if not divisible by 3 or 5', () => {
    expect(fizzbuzz(11)).toEqual(11);
    expect(fizzbuzz(13)).toEqual(13);
    expect(fizzbuzz(19)).toEqual(19);
  });
  it('should return the fizz if divisible by 3', () => {
    expect(fizzbuzz(6)).toEqual('fizz');
    expect(fizzbuzz(12)).toEqual('fizz');
    expect(fizzbuzz(18)).toEqual('fizz');
  });
  it('should return the buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
    expect(fizzbuzz(10)).toEqual('buzz');
    expect(fizzbuzz(20)).toEqual('buzz');
  });
  it('should return the buzz if divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
    expect(fizzbuzz(10)).toEqual('buzz');
    expect(fizzbuzz(20)).toEqual('buzz');
  });
  it('should return the buzz if divisible by 5 and 3', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
    expect(fizzbuzz(30)).toEqual('fizzbuzz');
    expect(fizzbuzz(60)).toEqual('fizzbuzz');
  });
});
