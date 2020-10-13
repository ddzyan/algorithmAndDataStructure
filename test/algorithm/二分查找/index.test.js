const assert = require('assert');
const search1 = require('../../../algorithm/二分查找/binarySearch_01_test');
const search2 = require('../../../algorithm/二分查找/binarySearch_02_test');
const search3 = require('../../../algorithm/二分查找/binarySearch_03');

describe('二分查找', () => {
  it('在有序不重复的数组中,查找指定值的元素', () => {
    console.time('在有序不重复的数组中,查找指定的元素');
    const arr = [-1, 0, 3, 5, 9, 12];
    const res = search1(arr, 9);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 4, 'index 错误');
    console.timeEnd('在有序不重复的数组中,查找指定的元素');
  });

  it('在有序的数组中,查找第一个值等于给定值的元素', () => {
    console.time('在有序的数组中,查找第一个值等于给定值的元素');
    const arr = [1, 0, 3, 3, 3, 5, 9, 12];
    const res = search2(arr, 3);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 2, 'index 错误');
    console.timeEnd('在有序的数组中,查找第一个值等于给定值的元素');
  });

  it('在有序的数组中,查找最后一个值等于给定值的元素', () => {
    console.time('在有序的数组中,查找最后一个值等于给定值的元素');
    const arr = [1, 0, 3, 3, 3, 3, 5, 9, 12];
    const res = search3(arr, 3);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 5, 'index 错误');
    console.timeEnd('在有序的数组中,查找最后一个值等于给定值的元素');
  });
});
