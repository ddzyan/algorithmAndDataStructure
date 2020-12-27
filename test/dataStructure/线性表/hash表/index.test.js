const assert = require('assert');
const MyMap = require('../../../dataStructure/线性表/顺序表/hash表/MyMap');
const isIsomorphic = require('../../../dataStructure/线性表/顺序表/hash表/q205同构字符串');

describe('源码实现 js Map 对象测试', () => {
  const myMap = new MyMap();

  it('set test', () => {
    myMap.set('apple', { name: 'james1' });
    myMap.set('apple', { name: 'james2' }); // 由于 key 一致，所以 value 会被覆盖
    myMap.set('banana', { name: 'james' });

    assert.strictEqual(myMap.size, 2, '添加失败，元素数量不正确');
  });

  it('has test', () => {
    assert(myMap.has('apple'), '返回结果错误，元素不存在');
    assert(myMap.has('banana'), '返回结果错误，元素不存在');
  });

  it('get test', () => {
    const value = myMap.get('apple');
    assert.strictEqual(JSON.stringify(value), '{"name":"james2"}', '值错误');
  });
});

describe('leetCode test', () => {
  it('q205同构字符串 test', () => {
    assert.strictEqual(isIsomorphic('ab', 'aa'), false, '结果错误');
    assert.strictEqual(isIsomorphic('egg', 'add'), true, '结果错误');
  });
});
