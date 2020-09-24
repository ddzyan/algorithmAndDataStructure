/**
 * 快速排序
 * 核心思想：使用递归，直到长度小于2，对数组按照分割点进行切分，小的在左边，大的再右边
 */

/**
 *
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
function sort(arr, start, end) {
  // 递归停止条件
  if (start >= end) return;

  // 按照切割点进行大小分类，并且返回切割点坐标分类后的坐标
  const pivotPoint = partition(a, start, end);
  sort(arr, start, pivotPoint - 1);
  sort(arr, pivotPoint, end);
}

/**
 * @description 将数组按照分割点进行站位，并且返回分割点
 * @returns {Array<number>} arr
 * @returns {number} start
 * @returns {number} end
 */
function partition(arr, start, end) {
  const pivotValue = arr[end - 1];
  let i = start;

  for (let j = start; j < end - 1; j++) {
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

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return arr;
};
