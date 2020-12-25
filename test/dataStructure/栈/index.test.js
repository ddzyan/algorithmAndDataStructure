const assert = require('assert');

const longestValidParentheses = require('../../../dataStructure/线性表/顺序表/栈/q32最长有效括号');

describe('栈', function () {
  it('q32最长有效括号 test', function () {
    assert.strictEqual(longestValidParentheses('(()'), 2, '结果返回错误');
  });
});
