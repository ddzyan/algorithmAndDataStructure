const assert = require('assert');

const { numWays } = require('../../../algorithm/动态规划/青蛙跳台阶问题');
const minDistance = require('../../../algorithm/动态规划/q72编辑距离');
const coinChange = require('../../../algorithm/动态规划/q322零钱兑换');
const minCostClimbingStairs = require('../../../algorithm/动态规划/q746使用最小花费爬楼梯');
const maxSubArray = require('../../../algorithm/动态规划/q53最大子序和');
const mostValue = require('../../../algorithm/动态规划/背包问题');
const longestPalindrome = require('../../../algorithm/动态规划/q5最长回文子串');

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
  it('q53最大子序和 test', function () {
    assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6, '结果返回错误');
  });

  it('q746 使用最小花费爬楼梯 test', function () {
    assert.strictEqual(minCostClimbingStairs([10, 15, 20]), 15, '结果返回错误');
    assert.strictEqual(
      minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]),
      6,
      '结果返回错误'
    );
    assert.strictEqual(minCostClimbingStairs([0, 0, 0]), 0, '结果返回错误');
  });

  it('背包问题 test', function () {
    assert.strictEqual(
      mostValue(4, [
        { value: 1500, weight: 1 },
        { value: 3000, weight: 4 },
        { value: 2000, weight: 3 },
      ]),
      3500,
      '结果返回错误'
    );
  });

  it('q5最长回文子串 test', function () {
    assert.strictEqual(longestPalindrome('abcba'), 'abcba', '结果返回错误');
    assert.strictEqual(longestPalindrome('cbbd'), 'bb', '结果返回错误');
  });
});
