import chai from 'chai';
import reduce from '../src/reduce.js';

describe('test reduce.js', function() {

  const similarObjects = [{"name": "apple"}, {"name": "banana"}, {"name": "orange"}];

  describe('Testing normal behaviour', function() {

    it('Should count objects in an Array', function() {
      const expectedResult = similarObjects.length;

      const result = reduce(similarObjects, (sum, fruit) => sum + 1, 0);

      chai.expect(result).to.equal(expectedResult);
    });

    it('Should collect values by key', function() {
      const expectedResult = { 'dairy': ['milk', 'cheese', 'butter'], 'vegetable': ['tomato'], 'bakery': ['crossiant'] };

      const result = reduce({ 'milk': 'dairy', 'tomato': 'vegetable', 'crossiant': 'bakery', 'cheese': 'dairy', 'butter': 'dairy' }, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key)
        return result
      }, {})

      chai.expect(result).to.deep.equal(expectedResult);
    });

  });
});
describe('reduce.js - Unit Tests', () => {
  // Test Case ID: TC-RU-22
  it('should reduce an array of numbers', () => {
    const numbers = [1, 2, 3, 4];
    const result = reduce(numbers, (accumulator, value) => accumulator + value, 0);
    expect(result).to.deep.equal([10]);
  });

  // Test Case ID: TC-RU-23
  it('should reduce an array of food products to create a dictionary by category', () => {
    const products = [
      { name: 'Apple', category: 'Fruits' },
      { name: 'Banana', category: 'Fruits' },
      { name: 'Carrot', category: 'Vegetables' },
      { name: 'Bread', category: 'Bakery' },
    ];

    const result = reduce(products, (result, product) => {
      if (!result[product.category]) {
        result[product.category] = [];
      }
      result[product.category].push(product.name);
      return result;
    }, {});

    const expected = {
      Fruits: ['Apple', 'Banana'],
      Vegetables: ['Carrot'],
      Bakery: ['Bread'],
    };

    expect(result).to.deep.equal(expected);
  });

  // Test Case ID: TC-RU-24
  it('should handle non-array input by returning an empty array', () => {
    const array = [];
    const result = reduce(array, () => true);
    expect(result).to.deep.equal([]);
  });
});