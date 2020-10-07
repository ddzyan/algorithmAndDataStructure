const assert = require('assert');
const search = require('../../../algorithm/二分查找/binarySearch_01');

describe('二分查找', () => {
  describe('在有序不重复的数组中，查找指定的元素', () => {
    it('test1', () => {
      console.time('test1');
      const arr = [-1, 0, 3, 5, 9, 12];
      const res = search(arr, 9);
      assert(res.count > 0, 'count 错误');
      assert.strictEqual(res.index, 4, 'index 错误');
      console.timeEnd('test1');
    });
  });
});
