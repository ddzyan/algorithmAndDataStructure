const assert = require('assert');
const longestPalindrome = require('../../../algorithm/暴力解法/q5最长回文子串');

describe('暴力解法', function () {
  it('q5最长回文子串', function () {
    assert.strictEqual(longestPalindrome('babad'), 'bab', '结果错误');
    assert.strictEqual(longestPalindrome('cbbd'), 'bb', '结果错误');
  });
});
