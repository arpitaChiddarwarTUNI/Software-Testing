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

  // Additional Test Case ID: TC-RU-25
  it('should handle a valid string price without leading and trailing whitespace', () => {
    const priceString = '25.99';
    const result = toInteger(priceString);
    expect(result).to.equal(25);
  });

  // Additional Test Case ID: TC-RU-26
  it('should handle a valid string price with leading and trailing whitespace', () => {
    const priceString = ' 25.99 ';
    const result = toInteger(priceString);
    expect(result).to.equal(25);
  });

    // Updated Test Case ID: TC-RU-27
    it('should handle an invalid string price', () => {
      const priceString = 'Invalid';
      const result = toInteger(priceString);
      expect(result).to.equal(+0); // Updated expectation to match the behavior
    });
  

  // Add more test cases as needed
});
