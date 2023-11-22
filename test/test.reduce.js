import { expect } from 'chai';
import reduce from '../src/reduce.js';

// Test Case ID TC-RU-22
test('reduce should correctly reduce an array of numbers', () => {
  // Test Setup
  const numbers = [1, 2, 3, 4];

  // Test Execution
  const result = reduce(numbers, (accumulator, value) => accumulator + value, 0);

  // Expected Result
  expect(result).to.equal(10);
});

// Test Case ID TC-RU-23
test('reduce should create a dictionary by category for an array of food products', () => {
  // Test Setup
  const products = [
    { name: 'Apple', category: 'Fruits' },
    { name: 'Banana', category: 'Fruits' },
    { name: 'Carrot', category: 'Vegetables' },
    { name: 'Bread', category: 'Bakery' },
  ];

  // Test Execution
  const result = reduce(
    products,
    (result, product) => {
      if (!result[product.category]) {
        result[product.category] = [];
      }
      result[product.category].push(product.name);
      return result;
    },
    {}
  );

  // Expected Result
  expect(result).to.deep.equal({
    Fruits: ['Apple', 'Banana'],
    Vegetables: ['Carrot'],
    Bakery: ['Bread'],
  });
});

// Test Case ID TC-RU-23
test('reduce should handle non-array input by returning an empty array', () => {
  // Test Setup
  const array = [];

  // Test Execution
  const result = reduce(array, () => true);

  // Expected Result
  expect(result).to.deep.equal([]);
});
