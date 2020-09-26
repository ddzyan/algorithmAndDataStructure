const assert = require('assert');

describe('排序测试', function () {
  const sortArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  it('冒泡', () => {
    console.time('冒泡');
    const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
    const sort = require('../../../algorithm/排序/冒泡/test');
    console.timeEnd('冒泡');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('插入', () => {
    console.time('插入');
    const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
    const sort = require('../../../algorithm/排序/插入/test');
    console.timeEnd('插入');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('选择', () => {
    console.time('选择');
    const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
    const sort = require('../../../algorithm/排序/选择/test');
    console.timeEnd('选择');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('归并', () => {
    console.time('归并');
    const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
    const mergeSort = require('../../../algorithm/排序/归并/test');
    console.timeEnd('归并');
    const { arr: newArr } = mergeSort(arr);

    //assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });

  it('快速', () => {
    console.time('快速');
    const arr = [4, 9, 3, 2, 1, 7, 8, 5, 6];
    const mergeSort = require('../../../algorithm/排序/快速/test');
    console.timeEnd('快速');
    const { arr: newArr } = mergeSort(arr);

    //assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), sortArr.toString(), '排序结果错误');
  });
});
