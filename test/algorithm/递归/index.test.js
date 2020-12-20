const assert = require('assert');

const minDistance = require('../../../algorithm/递归/q72编辑距离');

describe('递归', function () {
  it('q72编辑距离 test', function () {
    assert.strictEqual(minDistance('horse', 'ros'), 3, '结果返回错误');
    assert.strictEqual(minDistance('intention', 'execution'), 5, '结果返回错误');
    assert.strictEqual(minDistance('a', 'b'), 1, '结果返回错误');
  });
});
