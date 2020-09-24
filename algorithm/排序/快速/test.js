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
  const pivotValue = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivotValue) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
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

  const pivotPoint = partition(arr, start, end);
  sort(arr, start, pivotPoint - 1);
  sort(arr, pivotPoint, end);
}

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return { arr };
};
