const assert = require('assert');

const { mainSort, mainHashMap } = require('../../../algorithm/贪心算法/q242有效的字母异位词');

describe('贪心算法', function () {
  describe('q242有效的字母异位词', function () {
    it('hashMap解法 test', function () {
      assert.ok(mainHashMap('good', 'ogod'), '结果返回错误');
      assert.ok(!mainHashMap('good', 'osod'), '结果返回错误');
    });

    it('数组排序解法 test', function () {
      assert.ok(mainSort('good', 'ogod'), '结果返回错误');
      assert.ok(!mainSort('good', 'osod'), '结果返回错误');
    });
  });
});
