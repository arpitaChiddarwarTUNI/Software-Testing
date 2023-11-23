import { expect } from 'chai';
import words from '../src//words.js';

// Test Case ID TC-RU-26
describe('words - Comma-Separated String', () => {
  it('Should convert a comma-separated string into an array of words', () => {
    const input = 'apple, banana, orange';
    const result = words(input);
    const expected = ['apple', 'banana', 'orange'];
    expect(result).to.deep.equal(expected);
  });
});

// Test Case ID TC-RU-27
describe('words - Custom Delimiters', () => {
  it('Should handle a string with input custom delimiters', () => {
    const input = 'apple/banana&orange';
    const delimiters = /[\/&]/;
    const result = words(input, delimiters);
    const expected = ['apple', 'banana', 'orange'];
    expect(result).to.deep.equal(expected);
  });
});

// Test Case ID TC-RU-28
describe('words - Unicode Characters', () => {
  it('Should handle a string with Unicode characters', () => {
    const input = 'café crème';
    const result = words(input);
    const expected = ['café', 'crème'];
    expect(result).to.deep.equal(expected);
  });
});
