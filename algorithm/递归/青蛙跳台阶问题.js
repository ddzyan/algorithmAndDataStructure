/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

/**
 * @description 使用递归解法，时间复杂度
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  if (n <= 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  const res = numWays(n - 1) + numWays(n - 2);
  return res % 1000000007;
};

console.log(numWays(7));
console.log(numWays(2));
console.log(numWays(44));
console.log(numWays(78));
