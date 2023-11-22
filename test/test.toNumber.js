import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  it('should convert a float to a number', () => {
    expect(toNumber(3.2)).to.equal(3.2);
  });

  it('should convert Number.MIN_VALUE to a small positive number', () => {
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
  });

  it('should convert Infinity to Infinity', () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it('should convert a string representation of a float to a number', () => {
    expect(toNumber('3.2')).to.equal(3.2);
  });

  it('should return NaN for symbols', () => {
    expect(isNaN(toNumber(Symbol()))).to.be.true;
  });

  it('should handle object values by calling valueOf', () => {
    const obj = {
      valueOf: () => 42
    };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should handle object values with toString', () => {
    const obj = {
      toString: () => '42'
    };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should handle binary string values', () => {
    expect(toNumber('0b1101')).to.equal(13);
  });

  it('should handle octal string values', () => {
    expect(toNumber('0o17')).to.equal(15);
  });

  it('should return NaN for bad hexadecimal string values', () => {
    expect(isNaN(toNumber('-0x1G'))).to.be.true;
  });

  // Add more test cases as needed
});
