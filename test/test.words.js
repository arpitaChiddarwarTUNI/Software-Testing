import { expect } from 'chai';
import words from '../src/words.js';

describe('words', () => {
  // Test Case ID TC-RU-26
  it('Should convert a comma-separated string into an array of words', () => {
    const input = 'apple, banana, orange';
    const result = words(input);
    const expected = ['apple', 'banana', 'orange'];
    expect(result).to.deep.equal(expected);
  });

  // Test Case ID TC-RU-27
  it('Should handle a string with input custom delimiters', () => {
    const input = 'apple/banana&orange';
    const delimiters = /[\/&]/;
    const result = words(input, delimiters);
    const expected = ['apple', 'banana', 'orange'];
    expect(result).to.deep.equal(expected);
  });

  // Test Case ID TC-RU-28
  it('Should handle a string with Unicode characters', () => {
    const input = 'café crème';
    const result = words(input);
    const expected = ['café', 'crème'];
    expect(result).to.deep.equal(expected);
  });
});
