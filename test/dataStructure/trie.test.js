const assert = require('assert');

const Trie = require('../../dataStructure/非线性表/树/Trie');

describe('Trie 树', function () {
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

  it.skip('startsWith test', function () {
    assert(trie.find('he'), '未查找到指定字符串');
    assert(!trie.find('good'), '查找到不存在的字符串');
  });
});
