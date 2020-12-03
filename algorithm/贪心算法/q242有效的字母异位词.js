/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 */

/**
 * @description 此方式使用了 hash表来解决，根本的问题转化为 2个字符串的单词种类和数量完全相同
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const main = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  // 用26个占位符来标识英文字母
  const hashTable = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    hashTable[s.codePointAt(i) - 'a'.codePointAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    hashTable[t.codePointAt(i) - 'a'.codePointAt(0)]--;

    if (hashTable[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
      return false;
    }
  }

  return true;
};

console.log(main('good', 'ogod'));
