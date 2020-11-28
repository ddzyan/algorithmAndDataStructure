const assert = require('assert');

const Trie = require('../../dataStructure/非线性表/树/Trie');
const TrieSolution = require('../../dataStructure/非线性表/树/Trie/solution-2');

describe('Trie 树', function () {
  describe('使用数组源码实现 test', function () {
    const trie = new Trie();

    it('insert test', function () {
      trie.insert('hello');
      trie.insert('her');
      trie.insert('see');
      trie.insert('so');
      trie.insert('how');

      assert.strictEqual(trie.size, 5, '添加的字符串数量错误');
    });

    it('find test', function () {
      assert(trie.find('how'), '未查找到指定字符串');
      assert(!trie.find('good'), '查找到不存在的字符串');
    });

    it('startsWith test', function () {
      assert(trie.startsWith('he'), '未查找到指定字符串');
      assert(!trie.startsWith('good'), '查找到不存在的字符串');
    });
  });

  describe('使用对象源码实现 test', function () {
    const trie = new TrieSolution();

    it('insert test', function () {
      trie.insert('hello');
      trie.insert('her');
      trie.insert('see');
      trie.insert('so');
      trie.insert('how');

      assert.strictEqual(trie.size, 5, '添加的字符串数量错误');
    });

    it('find test', function () {
      assert(trie.search('how'), '未查找到指定字符串');
      assert(!trie.search('good'), '查找到不存在的字符串');
    });

    it('startsWith test', function () {
      assert(trie.startsWith('he'), '未查找到指定字符串');
      assert(!trie.startsWith('good'), '查找到不存在的字符串');
    });
  });
});
