/**
 * 快速排序
 * 核心思想：使用递归，直到长度小于2，对数组按照分割点进行切分，小的在左边，大的再右边
 */

/**
 * @description 将数组按照分割点进行站位，并且返回分割点
 * @returns {Array<number>} arr
 * @returns {number} start
 * @returns {number} end
 */
function partition(arr, start, end) {
  const value = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < value) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  const temp = arr[end];
  arr[end] = arr[i];
  arr[i] = temp;

  return i;
}

/**
 *
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
function sort(arr, start, end) {
  /**
   * 1. 递归终止条件
   * 2. 按照切分点进行切分，在进行递归
   */

  if (start >= end) return arr;

  const point = partition(arr, start, end);
  sort(arr, start, point - 1);
  sort(arr, point, end);
}

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return { arr };
};
