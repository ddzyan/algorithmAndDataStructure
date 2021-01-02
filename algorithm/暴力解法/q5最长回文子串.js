/**
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
 */

const check = function (checkSrt, left, right) {
  while (left < right) {
    if (checkSrt[left] !== checkSrt[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

/**
 * @description 直接采用暴力解法，获取所有可能结果，记录最长的
 * 时间复杂度O(n^3)
 * 空间复杂度O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;

  const charArray = s.split('');

  let begin = 0;
  let maxLen = 1;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && check(charArray, i, j)) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.slice(begin, maxLen + begin);
};

module.exports = longestPalindrome;
