/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

const numMap = {
  1: '*',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pgrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;
  if (len === 1) {
    return numMap[digits];
  }
};

module.exports = letterCombinations;

console.log(letterCombinations('3'));
