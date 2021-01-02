/**
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
 */

/**
 * @description 使用动态规划
 * 状态转移方程：dp[i][j]=(s[i]===s[j]) and dp[i+1][j-1]
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  const chartArr = s.split('');

  // 使用二维数组保存关系，和赋值初始值
  const dp = new Array(len);

  let begin = 0;
  let maxLen = 1;

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len);
    dp[i][i] = true;
  }

  // 右边界
  for (let j = 1; j < len; j++) {
    // 左边界
    for (let i = 0; i < j; i++) {
      if (chartArr[i] !== chartArr[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          // 长度为
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        begin = i;
        maxLen = j - i + 1;
      }
    }
  }

  // 返回不包括end处的字符串
  return s.substring(begin, begin + maxLen);
};

//console.log(longestPalindrome('cbbd'));

module.exports = longestPalindrome;
