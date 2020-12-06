/**
 *给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 */

/**
 * @description 使用贪心算法计算，每次尽可能的获取收益
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 * @param {Array} arr
 * @returns {Number}
 */
const maxProfit = function (arr) {
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    // 如果第二天的收益比第一天的收益高则买入，并且在第二天抛出和计算收益
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }

  return profit;
};

module.exports = maxProfit;
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
