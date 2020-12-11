const assert = require('assert');

const { numWays } = require('../../../algorithm/动态规划/青蛙跳台阶问题');

describe('动态规划', function () {
  it('青蛙跳台阶问题 test', function () {
    assert.strictEqual(numWays(7), 21, '结果返回错误');
    assert.strictEqual(numWays(2), 2, '结果返回错误');
    assert.strictEqual(numWays(44), 134903163, '结果返回错误');
  });
});
