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
const mainHashMap = function (s, t) {
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

const merge = function (left, right) {
  const res = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0].charCodeAt(0) <= right[0].charCodeAt(0)) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length > 0) {
    res.push(left.shift());
  }

  while (right.length > 0) {
    res.push(right.shift());
  }

  return res;
};

/**
 * @param {Array} arr
 */
const mergeSort = function (arr) {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const mind = len >> 1;
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  return merge(mergeSort(left), mergeSort(right));
};

/**
 * @description 首选对两个字符串按照每个字符的编码进行排序，然后依次比对，如果存在一个不一样，则判断失败
 * 时间复杂度 O(nlogn) 时间快排或者归并排序
 * 空间复杂度 O(n) 需要额外创建2个数组保存排序后的字符串
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const mainSort = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sArr = s.split('');
  const tArr = t.split('');

  const sortSArr = mergeSort(sArr);
  const sortTArr = mergeSort(tArr);

  for (let i = 0; i < sortSArr.length; i++) {
    if (sortSArr[i] !== sortTArr[i]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  mainSort,
  mainHashMap,
};

console.log(mainHashMap('good', 'ogod'));
console.log(mainSort('good', 'ogsd'));
