/**
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitOne = function (prices) {
  let maxProfit = 0;
  let minPrices = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    // 如果当前的价格小于记录的最小价格，则替换
    if (prices[i] < minPrices) {
      minPrices = prices[i];
    } else if (prices[i] - minPrices > maxProfit) {
      maxProfit = prices[i] - minPrices;
    }
  }

  return maxProfit;
};

module.exports = maxProfitOne;
console.log(maxProfitOne([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOne([7, 6, 4, 3, 1]));
