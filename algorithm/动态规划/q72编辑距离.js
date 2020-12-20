/**
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符

思路：
如果两个单词相等则，word1[i]===word2[j]
否则需要进行插入，删除，替换操作
插入:word1[i]===word2[j-1]
删除:word1[i-1]===word2[j]
替换:word1[i-1]===word2[j-1]

递归存在大量的重复计算，使用动态规划保存已经计算过的结果，来优化计算过程
 */
/**
 * @description
 * 步骤:
 * 1. 定义数组
 * 2. 找出数组元素之间的关系
 * 3. 赋值初始值
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  if (n * m === 0) {
    return Math.max(n, m);
  }

  // 定义二维数组，保存 word1 到 word2的操作结果
  const dp = new Array(m);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
  }

  // dp[0][0~n]的初始值
  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = i;
  }

  // dp[0~m][0]的初始值
  for (let i = 0; i < m + 1; i++) {
    dp[i][0] = i; // 只能进行插入和删除
  }

  // 找出元素之间的关系这个已经在分析中
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
};

module.exports = minDistance;

console.log(minDistance('a', 'b'));
