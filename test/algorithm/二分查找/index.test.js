const assert = require('assert');
const search = require('../../../algorithm/二分查找/binarySearch_01_test');

describe('二分查找', () => {
  it('在有序不重复的数组中,查找指定的元素', () => {
    console.time('在有序不重复的数组中,查找指定的元素');
    const arr = [-1, 0, 3, 5, 9, 12];
    const res = search(arr, 9);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 4, 'index 错误');
    console.timeEnd('在有序不重复的数组中,查找指定的元素');
  });
});
