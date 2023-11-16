// Import the add function
import add from '../src/add.js';  // Adjust the path based on your project structure

// Import any assertion library you prefer (e.g., Chai)
import { expect } from 'chai';

// Describe block for the add function
describe('add', () => {
  // Test case 1: Adding positive numbers
  it('should add two positive numbers', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  // Test case 2: Adding a positive number and zero
  it('should add a positive number and zero', () => {
    const result = add(6, 0);
    expect(result).to.equal(6);
  });

  // Test case 3: Adding a negative number and a positive number
  it('should add a negative number and a positive number', () => {
    const result = add(-6, 4);
    expect(result).to.equal(-2);
  });

  // Test case 4: Adding negative numbers
  it('should add two negative numbers', () => {
    const result = add(-6, -4);
    expect(result).to.equal(-10);
  });

  // Test case 5: Adding zero and a positive number
  it('should add zero and a positive number', () => {
    const result = add(0, 4);
    expect(result).to.equal(4);
  });

  // Test case 6: Adding zero and a negative number
  it('should add zero and a negative number', () => {
    const result = add(0, -4);
    expect(result).to.equal(-4);
  });

  // Test case 7: Adding zero and zero
  it('should add zero and zero', () => {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  // Add more test cases as needed for various scenarios

  // End of describe block for the add function
});
