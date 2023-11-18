import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', function() {

  it('should return true for null', function() {
    const result = isEmpty(null);
    expect(result).to.equal(true);
  });

  it('should return true for boolean values', function() {
    const result1 = isEmpty(true);
    const result2 = isEmpty(false);
    expect(result1).to.equal(true);
    expect(result2).to.equal(true);
  });

  it('should return true for number values', function() {
    const result = isEmpty(1);
    expect(result).to.equal(true);
  });

  it('should return false for non-empty array', function() {
    const result = isEmpty([1, 2, 3]);
    expect(result).to.equal(false);
  });

  it('should return false for non-empty string', function() {
    const result = isEmpty('abc');
    expect(result).to.equal(false);
  });

  it('should return false for non-empty object', function() {
    const result = isEmpty({ 'a': 1 });
    expect(result).to.equal(false);
  });

  it('should return false for array-like objects with length > 0', function() {
    const result = isEmpty({ length: 2, 0: 'a', 1: 'b' });
    expect(result).to.equal(false);
  });

  it('should return false for map with size > 0', function() {
    const result = isEmpty(new Map([['key', 'value']]));
    expect(result).to.equal(false);
  });

  it('should return false for set with size > 0', function() {
    const result = isEmpty(new Set([1, 2, 3]));
    expect(result).to.equal(false);
  });

  it('should return false for non-empty buffer', function() {
    const result = isEmpty(Buffer.from('abc'));
    expect(result).to.equal(false);
  });

  it('should return false for non-empty typed array', function() {
    const result = isEmpty(new Uint8Array([1, 2, 3]));
    expect(result).to.equal(false);
  });

  it('should return false for arguments object with length > 0', function() {
    function testFunction() {
      const result = isEmpty(arguments);
      expect(result).to.equal(false);
    }
    testFunction(1, 2, 3);
  });

  it('should return true for empty array', function() {
    const result = isEmpty([]);
    expect(result).to.equal(true);
  });

  it('should return true for empty string', function() {
    const result = isEmpty('');
    expect(result).to.equal(true);
  });

  it('should return true for empty object', function() {
    const result = isEmpty({});
    expect(result).to.equal(true);
  });

  it('should return true for empty map', function() {
    const result = isEmpty(new Map());
    expect(result).to.equal(true);
  });

  it('should return true for empty set', function() {
    const result = isEmpty(new Set());
    expect(result).to.equal(true);
  });

  it('should return true for empty buffer', function() {
    const result = isEmpty(Buffer.from(''));
    expect(result).to.equal(true);
  });

  it('should return true for empty typed array', function() {
    const result = isEmpty(new Uint8Array());
    expect(result).to.equal(true);
  });

  it('should return true for empty arguments object', function() {
    function testFunction() {
      const result = isEmpty(arguments);
      expect(result).to.equal(true);
    }
    testFunction();
  });

});
