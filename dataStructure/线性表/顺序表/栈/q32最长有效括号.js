/**
 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 */

/**
 * @description 使用栈解决问题
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const valid = new Array(s.length).fill(0);
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')' && stack.length > 0) {
      valid[i] = 1;
      valid[stack.pop()] = 1;
    }
  }

  let max = 0,
    count = 0;

  for (const v of valid) {
    v && count++;
    v || (count = 0);
    count > max && (max = count);
  }
  return max;
};
module.exports = longestValidParentheses;
console.log(longestValidParentheses('(()'));
