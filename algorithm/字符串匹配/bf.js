/**
 * @description 使用 BF 算法实现字符串匹配，时间复杂度为O(m*n)
 * @param {string} string
 */
const indexOfA = function (str) {
  const m = str.length;
  const n = this.length;
  if (m === 0) return -1;

  const count = n - m + 1;
  for (let i = 0; i <= count; i++) {
    let startIndex = i;
    let match = true;
    for (let j = 0; j < m; j++) {
      // 逐个比较子串的每个字符和模式串中的每个字符是否相等
      if (this[startIndex + j] !== str[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      return startIndex;
    }
  }

  return -1;
};

String.prototype.indexOfA = indexOfA;
