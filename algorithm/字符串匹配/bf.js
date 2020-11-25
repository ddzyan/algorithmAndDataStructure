/**
 * @description 使用 BF 算法实现字符串匹配
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
