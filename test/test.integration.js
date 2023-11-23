import { expect } from 'chai';
import isSymbol from '../src/isSymbol.js';
import toString from '../src/toString.js';

describe('Integration tests for isSymbol and toString', () => {
  // Test Case ID TC-INT-1
  it('Check if isSymbol Recognizes Symbol', () => {
    const result = isSymbol(Symbol.iterator);
    expect(result).to.be.true;
  });

  // Test Case ID TC-INT-2
  it('Check if toString Handles Symbols Correctly', () => {
    const symbol = Symbol('test');
    const otherData = [1, 'string', true];
    const result = toString([symbol, ...otherData]);
    const expected = `Symbol(${symbol.description}),${otherData.join(',')}`;
    expect(result).to.equal(expected);
  });

  // Test Case ID TC-INT-3
  it('Check if toString Handles Arrays with Symbols', () => {
    const array = [1, Symbol.iterator, 3];
    const result = toString(array);
    const expected = '1,Symbol(Symbol.iterator),3';
    expect(result).to.equal(expected);
  });

  // Test Case ID TC-INT-4
  it('Check if toString Handles Symbols in Nested Arrays', () => {
    const nestedArray = [[1, Symbol.iterator], [3, 4]];
    const result = toString(nestedArray);
    const expected = '1,Symbol(Symbol.iterator),3,4';
    expect(result).to.equal(expected);
  });
});
