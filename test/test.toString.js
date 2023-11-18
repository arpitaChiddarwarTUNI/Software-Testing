import { expect } from 'chai';
import toString from '../src/toString.js';

describe('Test toString', () => {
  it('should return an empty string for null', () => {
    const result = toString(null);
    expect(result).to.equal('');
  });

  it('should return an string for a string input', () => {
    const result = toString('String');
    expect(result).to.equal('String');
  });

  it('should preserve the sign of -0', () => {
    const result = toString(-0);
    expect(result).to.equal('-0');
  });

  it('should convert an array to a string', () => {
    const result = toString([1, 2, 3]);
    expect(result).to.equal('1,2,3');
  });

  it('should recursively convert nested arrays to strings', () => {
    const result = toString([1, [2, [3, 4], 5]]);
    expect(result).to.equal('1,2,3,4,5');
  });

  it('should convert symbols to strings', () => {
    const symbol = Symbol('test');
    const result = toString(symbol);
    expect(result).to.equal(symbol.toString());
  });

  it('should handle -0 edge case', () => {
    const result = toString(-0);
    expect(result).to.equal('-0');
  });

  it('should handle other values', () => {
    const result = toString(42);
    expect(result).to.equal('42');
  });

  it('should convert array to string', () => {
    const result = toString(['apple','banana','orange']);
    expect(result).to.equal('apple,banana,orange');
  });
});
