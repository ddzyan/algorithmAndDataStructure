const assert = require('assert');

const { numWays } = require('../../../algorithm/动态规划/青蛙跳台阶问题');
const minDistance = require('../../../algorithm/动态规划/q72编辑距离');
const coinChange = require('../../../algorithm/动态规划/q322零钱兑换');

describe('动态规划', function () {
  it('青蛙跳台阶问题 test', function () {
    assert.strictEqual(numWays(7), 21, '结果返回错误');
    assert.strictEqual(numWays(2), 2, '结果返回错误');
    assert.strictEqual(numWays(44), 134903163, '结果返回错误');
  });

  it('q72编辑距离 test', function () {
    assert.strictEqual(minDistance('horse', 'ros'), 3, '结果返回错误');
    assert.strictEqual(minDistance('intention', 'execution'), 5, '结果返回错误');
    assert.strictEqual(minDistance('a', 'b'), 1, '结果返回错误');
  });

  it('q322零钱兑换 test', function () {
    assert.strictEqual(coinChange([1, 2, 5], 11), 3, '结果返回错误');
    assert.strictEqual(coinChange([2], 3), -1, '结果返回错误');
    assert.strictEqual(coinChange([1], 0), 0, '结果返回错误');
  });
});
