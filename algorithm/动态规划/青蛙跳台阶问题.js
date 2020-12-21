/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

/**
 * @description 采用动态规划解法
 * 1. 定义数组元素的含义
2. 找出数组元素之间的关系式
3. 找出初始值
  时间复杂度：O(n)
  空间复杂度:O(n)
 
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  if (n <= 1) {
    return 1;
  }

  const dp = [];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    //题目要求对结果取模
    dp[i] %= 1000000007;
  }

  return dp[n];
};

module.exports = {
  numWays,
};
