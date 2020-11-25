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
    let strA = '';
    for (let j = i; j < i + m; j++) {
      strA += this[j];
    }
    if (str === strA) {
      return i;
    }
  }

  return -1;
};

String.prototype.indexOfA = indexOfA;

const a = 'hello word';
console.log(a.indexOfA('aa'));
