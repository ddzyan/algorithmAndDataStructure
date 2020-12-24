/**
 在n个物品中挑选若干物品装入背包，最多能装多满？假设背包的大小为m，每个物品的大小为A[i]
 */

/**
 * @description 使用动态规划解决经典背包问题
 * 1. 定义二维数组保存每个步骤的最优结果
 * 2. 找出状态转移方程，也就是数组每个元素之间的关系
 * 3. 定义初始值
 * item表示物品 : value 价值, weight 重量
 * C 表示背包重量
 * 状态转移方程 p[i][j] = Math.max( dp[i][j - 1], dp[i - weight][j - 1] + value);
 * @param {number} size
 * @param {Array<{value:number,weight:number}>} coins
 */
const mostValue = function (size, coins) {
  const coinNumber = coins.length;
  // 定义二维数组包含每个可能的结果i
  const dp = new Array(size + 1);
  for (let i = 0; i <= size; i++) {
    dp[i] = new Array(coinNumber);
  }

  // 当背包为0的时候，所有物品的组合价值全部为0
  for (let i = 0; i < coinNumber + 1; i++) {
    dp[0][i] = 0;
  }
  // 当物品不存在的时候，所有组合价值也都为0
  for (let i = 0; i <= size; i++) {
    dp[i][-1] = 0;
  }

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < coinNumber; j++) {
      const { value, weight } = coins[j];
      // 判断当前物品的重量是否小于背包重量
      if (i < weight) {
        // 小于则无法填充当前物品，直接选择相同背包大小下上一个最优解
        dp[i][j] = dp[i][j - 1];
        console.log(dp[i][j]);
      } else {
        // 大于则可以填充当前物品
        // Math.max(（相同背包大小下，上一个最优解），（当前背包空间减去当前物品重量的空间能放下物体的上一个最优解+当前物品价值）)
        const preValue = dp[i][j - 1]; // 上一个物品的价值
        const currentValue = dp[i - weight][j - 1] + value; //相同重量下，上一个最优解
        dp[i][j] = Math.max(preValue, currentValue);
        console.log(dp[i][j]);
      }
    }
    console.log('\n');
  }
  /*
    [
      [ 0, 0, 0, 0, '-1': 0 ],
      [ 1500, 1500, 1500, '-1': 0 ],
      [ 1500, 1500, 1500, '-1': 0 ],
      [ 1500, 1500, 2000, '-1': 0 ],
      [ 1500, 3000, 3500, '-1': 0 ]
    ]
  */
  console.log(dp);

  return dp[size][coinNumber - 1];
};

module.exports = mostValue;
