// 采用 rk hash计算方式进行字符串匹配

/**
 * @description:
 * @param {string} str
 * @return {number}
 */
const hasCode = function (str) {
  let hash = 0;
  if (str.length === 0) return hasCode;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // 转换为32为整数
  }
  return hash;
};

/**
 * @description:
 * 对主串中 n-m+1 个子串分别求哈希值
 * 然后逐个与模式串的哈希值进行对比
 *
 * 特点是模式串和子串比较的效率变高了
 *
 * @param {string} str 进行匹配的模板字符串
 * @return {number} 返回匹配字符串的起始位置
 */
const indexOfB = function (str) {
  const n = str.length;
  const m = this.length;
  const strMap = new Map(); // 保存计算出来的hash结果

  if (n === 0 || m < n) return -1;
  const len = m - n + 1;
  for (let i = 0; i < len; i++) {}
};

String.prototype.indexOfB = indexOfB;
