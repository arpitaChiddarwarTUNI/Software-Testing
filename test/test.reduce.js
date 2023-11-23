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
