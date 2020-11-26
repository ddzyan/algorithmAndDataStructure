/**
 * 源码实现 Trie 树两个核心功能
 * 1. 存储
 * 2. 查找
 */

class TrieNode {
  constructor(char) {
    this.data = char; // 保存节点数据
    this.children = [26]; // 保存多叉树节点
    this.isEndingChar = false; // 判断是否为末尾
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('/');
    this.size = 0;
  }

  /**
   * @description 往trie中插入字符串
   * @param {string} str 插入的字符串
   */
  insert(str) {
    let p = this.root;
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
      if (!p.children[index]) {
        const newNode = new TrieNode(str[i]);
        p.children[index] = newNode;
      }
      p = p.children[index];
    }

    p.isEndingChar = true; // 单词末尾添加标识
    this.size++;
  }

  /**
   * @description 在Trie中查找指定的字符串
   * @param {string} str 需要查找的字符串
   * @returns {boolean} true为完全匹配，false为不匹配或者只前缀匹配
   */
  find(str) {
    let p = this.root;
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 'a'.charCodeAt(0);
      if (!p.children[index]) {
        return false;
      }
      p = p.children[index];
    }

    return p.isEndingChar;
  }
}

module.exports = Trie;
