const assert = require('assert');
const search1 = require('../../../algorithm/二分查找/binarySearch_01_test');
const search2 = require('../../../algorithm/二分查找/binarySearch_02_test');
const search3 = require('../../../algorithm/二分查找/binarySearch_03');
const search4 = require('../../../algorithm/二分查找/binarySearch_04');
const search5 = require('../../../algorithm/二分查找/q33-搜索旋转排序数组');

describe('二分查找', () => {
  it('在有序不重复的数组中,查找指定值的元素', () => {
    console.time('在有序不重复的数组中,查找指定的元素');
    const arr = [-1, 0, 3, 5, 9, 12];
    const res = search1(arr, 9);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 4, 'index 错误');
    console.timeEnd('在有序不重复的数组中,查找指定的元素');
  });

  it('查找第一个值等于给定值的元素', () => {
    console.time('查找第一个值等于给定值的元素');
    const arr = [0, 1, 3, 3, 3, 5, 9, 12];
    const res = search2(arr, 3);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 2, 'index 错误');
    console.timeEnd('查找第一个值等于给定值的元素');
  });

  it('查找最后一个值等于给定值的元素', () => {
    console.time('查找最后一个值等于给定值的元素');
    const arr = [0, 1, 3, 3, 3, 3, 5, 9, 12];
    const res = search3(arr, 3);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 5, 'index 错误');
    console.timeEnd('查找最后一个值等于给定值的元素');
  });

  it('查找第一个大于等于给定值的元素', () => {
    console.time('查找第一个大于等于给定值的元素');
    const arr = [0, 1, 2, 3, 4, 5, 9, 12];
    const res = search4(arr, 1);
    assert(res.count > 0, 'count 错误');
    assert.strictEqual(res.index, 1, 'index 错误');
    console.timeEnd('查找第一个大于等于给定值的元素');
  });

  it('搜索旋转排序数组', () => {
    console.time('搜索旋转排序数组');
    const arr = [4, 5, 6, 7, 0, 1, 2];
    const index = search5(arr, 0);
    assert.strictEqual(index, 4, 'index 错误');
    console.timeEnd('搜索旋转排序数组');
  });
});
