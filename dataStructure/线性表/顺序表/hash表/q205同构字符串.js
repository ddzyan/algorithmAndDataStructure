/**
 给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 */

/**
 * @description
 * 使用 hash表保存 s中字符映射t中字符的关系
 * 时间复杂度O(s.length)
 * 空间复杂度O(s.length)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let s2t = {}; // s映射t中字符的关系
  let t2s = {}; // t映射s中字符的关系

  const len = s.length;
  for (let i = 0; i < len; i++) {
    const x = s[i];
    const y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      // 如果映射关系错误则报错
      return false;
    }
    s2t[x] = y;
    t2s[y] = x;
  }

  return true;
};

module.exports = isIsomorphic;
console.log(isIsomorphic('ab', 'aa'));
