const assert = require('assert');
const letterCombinations = require('../../../../dataStructure/线性表/顺序表/队列/q17电话号码的字母组合');

describe('队列', function () {
  it('q17电话号码的字母组合 test', function () {
    const resOne = letterCombinations('23');
    const resTwo = letterCombinations('');
    assert.strictEqual(resOne.toString(), 'ad,ae,af,bd,be,bf,cd,ce,cf', '结果返回错误');
    assert.strictEqual(resTwo.toString(''), '', '结果返回错误');
  });
});
