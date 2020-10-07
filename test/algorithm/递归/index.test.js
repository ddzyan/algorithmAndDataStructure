const assert = require('assert');
const search = require('../../../algorithm/递归/binarySearch');

describe('递归测试', () => {
  it('在有序不重复的数组中，查找指定的元素 test', () => {
    const arr = [1, 2, 3, 4, 5, 6, 10, 12, 13, 18, 20];
    const res = search(arr, 10);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 6, 'index 错误');
  });
});
