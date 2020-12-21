/**
 给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 

示例：

输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
*/

/**
 * @description
 * 采用字典树存储单词，可以避免的重复的单词进行存储
 * 根据题目如果在字典树中满足后缀匹配则不再保存单词
 * 根据以上情况，则考虑将到此反转插入到字典树中，如果字符串重复也会被过滤
 * @param {Array<string>} words
 * @returns {Number}
 */

// 源码实现 Trie 树
class Trie {
  constructor() {
    this.root = Object.create(null); // 根节点为空
  }

  insert(word) {
    let p = this.root;
    for (const chart of word) {
      if (!p[chart]) {
        p[chart] = Object.create(null);
      }
      p = p[chart];
    }
  }

  calDepth() {
    const p = this.root;
    const depth = this._calDepth(p);
    return depth;
  }

  _calDepth(trieNode) {
    let noChild = true;
    let sum = 0;
    for (const word in trieNode) {
      if (trieNode[word]) {
        // 每次递归则深度计数+1
        sum += this._calDepth(trieNode[word]) + 1;
        noChild = false;
      }
    }
    if (noChild) {
      // 单词末尾添加#
      sum++;
    }
    return sum;
  }
}

const minimumLengthEncoding = function (words) {
  // 首先使用 hash 表 去除 重复的单词
  const wordSet = new Set(words);

  const trie = new Trie();
  for (const word of wordSet.values()) {
    trie.insert(word.split('').reverse().join(''));
  }

  return trie.calDepth();
};

module.exports = minimumLengthEncoding;
