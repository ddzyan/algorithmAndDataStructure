const assert = require('assert');

describe('排序测试', function () {
  const arr = require('./data')(10000, 100);
  this.slow(1);
  it('冒泡测试', () => {
    const sort = require('../../../algorithm/排序/冒泡/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), arr.toString(), '排序结果错误');
  });

  it('插入测试', () => {
    const sort = require('../../../algorithm/排序/插入/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), arr.toString(), '排序结果错误');
  });

  it('选择测试', () => {
    const sort = require('../../../algorithm/排序/选择/test');
    const { arr: newArr, count } = sort(arr);

    assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), arr.toString(), '排序结果错误');
  });

  it('归并测试', () => {
    const mergeSort = require('../../../algorithm/排序/归并/text');
    const { arr: newArr } = mergeSort(arr);

    //assert.ok(count > 0, '运算次数错误');
    assert.strictEqual(newArr.toString(), arr.toString(), '排序结果错误');
  });
});
