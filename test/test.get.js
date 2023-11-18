import { expect } from 'chai';
import get from '../src/get.js';

describe('get', () => {
  it('should get the value at a specified path in an object', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    // Using dot notation
    const result1 = get(object, 'a[0].b.c');
    expect(result1).to.equal(3);

    // Using an array as the path
    const result2 = get(object, ['a', '0', 'b', 'c']);
    expect(result2).to.equal(3);
  });

  it('should return the default value for undefined paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    // Path 'a.b.c' is undefined, so the default value 'default' should be returned
    const result = get(object, 'a.b.c', 'default');
    expect(result).to.equal('default');
  });

  it('should return undefined for undefined paths without a default value', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    // Path 'x.y.z' is undefined, and no default value is provided
    const result = get(object, 'x.y.z');
    expect(result).to.be.undefined;
  });

  it('should handle null or undefined objects', () => {
    // When the object is null
    const result1 = get(null, 'a.b.c', 'default');
    expect(result1).to.equal('default');

    // When the object is undefined
    const result2 = get(undefined, 'a.b.c', 'default');
    expect(result2).to.equal('default');
  });
});
