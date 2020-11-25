const assert = require('assert');
require('../../../algorithm/字符串匹配/bf');

describe('字符串匹配', function () {
  it('BF 匹配算法 test', function () {
    const a = 'hello word';
    assert.strictEqual(a.indexOfA('lo'), 3, '返回值错误');
  });
});
