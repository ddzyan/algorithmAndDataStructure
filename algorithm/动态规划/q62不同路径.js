/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 */
/**
 * @description 分析步骤
 * 1. 定义数组元素含义
 * 2. 找出数组元素间的关系式
 * 3. 找出初始值
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) {
    return 0;
  }

  // 创建二维数组
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }

  // 设定初始值
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 3));
console.log(uniquePaths(3, 2));
