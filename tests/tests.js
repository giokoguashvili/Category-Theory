var assert = require('assert');

require('../concatAll.js');
require('../map.js');
require('../filter.js');
require('../reduce.js');


describe('Array', function() {
  describe('#map()', function() {
    it('should return [2,4,6] when the array is [1,2,3]', function() {
      assert.deepEqual([2,4,6], [1,2,3].map((item) => item * 2));
    });
  });

  describe('#filter', function() {
    it('should return [2] when array is [1,2,3]', function() {
      assert.deepEqual([2], [1,2,3].filter((item) => item === 2));
    });

    it('should return [2,2] when array is [1,2,3,2]', function() {
      assert.deepEqual([2, 2], [1,2,3,2].filter((item) => item === 2));
    });

    it('should return array with numbers grather then 2', function() {
      assert.deepEqual([3,4], [1,2,3,4].filter((item) => item > 2));
    });
  });

  describe('#reduce', function() {
    it('should return sum of array [1,2,3,4]', function() {
      assert.equal(10, [1,2,3,4].reduce((acc, item) => {
        acc += item;
        return acc;
      }, 0));
    });
  });

  describe('#concatAll', function() {
    it('should return [1,2,3,4,5,6,7,8,9] when array is [[1,2,3],[4,5,6],[7,8,9]]', function(){ 
      assert.deepEqual([1,2,3,4,5,6,7,8,9], [[1,2,3],[4,5,6],[7,8,9]].concatAll());
    });
  })
});