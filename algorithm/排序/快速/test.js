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
  const point = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] < point) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  const temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;

  return i;
}

/**
 *
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
function sort(arr, start, end) {
  if (start >= end) return arr;

  // 寻找分割点
  const point = partition(arr, start, end);

  sort(arr, start, point - 1);
  sort(arr, point, end);
}

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return { arr };
};
