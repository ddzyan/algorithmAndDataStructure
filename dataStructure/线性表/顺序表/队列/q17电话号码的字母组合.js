/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

const phoneMap = {
  1: '*',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @description 使用队列解决
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const len = digits.length;

  if (len === 0 || digits === '') {
    return [];
  }

  const letterCombinations = [''];
  for (const x of digits) {
    const size = letterCombinations.length;
    for (let i = 0; i < size; i++) {
      const old = letterCombinations.shift();
      for (const y of phoneMap[x]) {
        letterCombinations.push(old + y);
      }
    }
  }

  return letterCombinations;
};

module.exports = letterCombinations;
