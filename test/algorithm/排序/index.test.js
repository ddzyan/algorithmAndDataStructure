const assert = require('assert');

describe('排序测试', function () {
  const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
  const sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.slow(1);
  it('冒泡', () => {
    const sort = require('../../../algorithm/排序/冒泡/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('插入', () => {
    const sort = require('../../../algorithm/排序/插入/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('选择', () => {
    const sort = require('../../../algorithm/排序/选择/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('归并', () => {
    const mergeSort = require('../../../algorithm/排序/归并/test');
    const { arr: newArr } = mergeSort(arr);

    //assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('快速', () => {
    const mergeSort = require('../../../algorithm/排序/快速/test');
    const { arr: newArr } = mergeSort(arr);

    //assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });
});
