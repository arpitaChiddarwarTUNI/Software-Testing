import { expect } from 'chai';
import filter from '../src/filter.js';

describe('filter', function() {

  it('should filter bakery ingredients based on the "category" property', function() {
    const ingredients = [
      { 'name': 'Flour', 'category': 'Bakery' },
      { 'name': 'Eggs', 'category': 'Dairy' },
      { 'name': 'Sugar', 'category': 'Bakery' },
      { 'name': 'Milk', 'category': 'Dairy' },
    ];

    const bakeryIngredients = filter(ingredients, ({ category }) => category === 'Bakery');

    expect(bakeryIngredients).to.deep.equal([
      { 'name': 'Flour', 'category': 'Bakery' },
      { 'name': 'Sugar', 'category': 'Bakery' },
    ]);
  });

  it('should filter vegetarian dairy products based on the "vegetarian" property', function() {
    const dairyProducts = [
      { 'name': 'Cheese', 'vegetarian': true },
      { 'name': 'Milk', 'vegetarian': true },
      { 'name': 'Yogurt', 'vegetarian': false },
    ];

    const vegetarianDairyProducts = filter(dairyProducts, ({ vegetarian }) => vegetarian);

    expect(vegetarianDairyProducts).to.deep.equal([
      { 'name': 'Cheese', 'vegetarian': true },
      { 'name': 'Milk', 'vegetarian': true },
    ]);
  });

  it('should filter gluten-free products based on the "glutenFree" property', function() {
    const products = [
      { 'name': 'Bread', 'glutenFree': false },
      { 'name': 'Rice', 'glutenFree': true },
      { 'name': 'Pasta', 'glutenFree': false },
    ];

    const glutenFreeProducts = filter(products, ({ glutenFree }) => glutenFree);

    expect(glutenFreeProducts).to.deep.equal([
      { 'name': 'Rice', 'glutenFree': true },
    ]);
  });

  it('should handle an empty array and return an empty array', function() {
    const emptyArray = [];

    const result = filter(emptyArray, () => true);

    expect(result).to.deep.equal([]);
  });

  it('should handle an array of mixed types and filter based on a custom condition', function() {
    const mixedArray = [
      { 'name': 'Flour', 'category': 'Bakery' },
      42,
      'Not an ingredient',
      { 'name': 'Milk', 'category': 'Dairy' },
      { 'name': 'Eggs', 'category': 'Dairy' },
    ];

    const dairyIngredients = filter(mixedArray, (item) => item && item.category === 'Dairy');

    expect(dairyIngredients).to.deep.equal([
      { 'name': 'Milk', 'category': 'Dairy' },
      { 'name': 'Eggs', 'category': 'Dairy' },
    ]);
  });

});
