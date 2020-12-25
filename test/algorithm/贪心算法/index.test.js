const assert = require('assert');

const { mainSort, mainHashMap } = require('../../../algorithm/贪心算法/q242有效的字母异位词');
const maxProfit = require('../../../algorithm/贪心算法/q122买卖股票的最佳时机II');
const maxProfitOne = require('../../../algorithm/贪心算法/q121买卖股票的最佳时机');
const findContentChildren = require('../../../algorithm/贪心算法/q455分发饼干');

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

  describe('q112买卖股票的最佳时机I', function () {
    it('test', function () {
      assert.strictEqual(maxProfitOne([7, 1, 5, 3, 6, 4]), 5, '结果返回错误');
      assert.strictEqual(maxProfitOne([7, 6, 4, 3, 1]), 0, '结果返回错误');
    });
  });

  describe('q455分发饼干', function () {
    it('test', function () {
      assert.strictEqual(findContentChildren([1, 2, 3], [1, 1]), 1, '结果返回错误');
      assert.strictEqual(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]), 2, '结果返回错误');
    });
  });
});
