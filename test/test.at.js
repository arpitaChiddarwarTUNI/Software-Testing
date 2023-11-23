import chai from 'chai';
import at from '../src/at.js';

describe('Test at.js', function() {
  
  describe('Happy cases: Desired path is in object', function() {
    
    it('Basic happy case 1: should match example given in specs', function() {
      const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
      const result = at(object, ['a[0].b.c', 'a[1]']);
      const expectedResult = [3, 4];

      chai.expect(result).to.eql(expectedResult);
    });

    // Additional Test Case ID: TC-RU-29
    it('Happy case 2: should return values from nested object based on provided paths', () => {
      const items = {
        fruits: [{ name: 'Apple' }, { name: 'Banana' }],
        bakery: [{ name: 'Bread' }, { name: 'Cake' }],
      };
      const result = at(items, ['fruits[0].name', 'bakery[1].name']);
      const expectedResult = ['Apple', 'Cake'];

      chai.expect(result).to.deep.equal(expectedResult);
    });

    // Additional Test Case ID: TC-RU-30
    it('Happy case 3: should return a value from nested object based on a single path', () => {
      const items = {
        fruits: [{ name: 'Apple' }, { name: 'Banana' }],
        bakery: [{ name: 'Bread' }, { name: 'Cake' }],
      };
      const result = at(items, 'fruits[1].name');
      const expectedResult = ['Banana'];

      chai.expect(result).to.deep.equal(expectedResult);
    });

  });

  describe('Most common error cases', function() {
    
    it('Trying to get value outside of object', function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        const result = at(object, ['a[0].b.c', 'a[4]']);
        const expectedResult = [3, undefined];

        chai.expect(result).to.eql(expectedResult);
    });

    // Additional Test Case ID: TC-RU-31
    it('Error case: should handle a non-existent path as an argument', () => {
      const items = {
        fruits: [{ name: 'Apple' }, { name: 'Banana' }],
        bakery: [{ name: 'Bread' }, { name: 'Cake' }],
      };
      const result = at(items, 'fruits[2].name');
      const expectedResult = [undefined];

      chai.expect(result).to.deep.equal(expectedResult);
    });

  });
});
