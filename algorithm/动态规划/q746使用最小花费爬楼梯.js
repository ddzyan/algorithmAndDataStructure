/**
数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 */

/**
 * @description
 * 状态转移方程：dp[i] = Math.min(dp[i-1],dp[i-2])
 * 1. 定义数组保存状态
 * 2. 找出数组元素之间的关系 = 状态转移方程
 * 3. 设置初始值
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 *
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  const m = cost.length;

  // 定义一维数组保存状态
  const dp = new Array(m + 1);

  // 设置初始值
  dp[0] = dp[1] = 0;

  for (let i = 2; i < m + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[m];
};

module.exports = minCostClimbingStairs;
