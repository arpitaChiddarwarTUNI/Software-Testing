import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger', () => {
  it('should convert a float to integer', () => {
    expect(toInteger(3.2)).to.equal(3);
  });

  it('should convert Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });

  it('should convert Infinity to a large positive integer', () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
  });

  it('should convert a string representation of a float to integer', () => {
    expect(toInteger('3.2')).to.equal(3);
  });

  // Add more test cases as needed
});
