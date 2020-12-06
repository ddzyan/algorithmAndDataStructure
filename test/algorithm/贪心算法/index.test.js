const assert = require('assert');

const { mainSort, mainHashMap } = require('../../../algorithm/贪心算法/q242有效的字母异位词');
const maxProfit = require('../../../algorithm/贪心算法/q122买卖股票的最佳时机II');

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

  describe('q122买卖股票的最佳时机II', function () {
    it('test', function () {
      assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 7, '结果返回错误');
      assert.strictEqual(maxProfit([1, 2, 3, 4, 5]), 4, '结果返回错误');
      assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0, '结果返回错误');
    });
  });
});
