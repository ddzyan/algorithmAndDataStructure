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
  // 记录分割点值，用于遍历比对
  const value = arr[end];
  // 分割点初始替换位置
  let i = start;
  // j 表示遍历的元素，如果遍历元素大于分割点，则将遍历元素和替换位置元素位置替换
  for (let j = start; j < end; j++) {
    // 如果值比分割点值小，则需要进行替换
    if (arr[j] < value) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
    }
  }

  // 将替换位置和分割点进行调换
  const tmp = arr[i];
  arr[i] = value;
  arr[end] = tmp;
  return i;
}

/**
 *
 * @param {Array<number>} arr
 * @param {number} start
 * @param {number} end
 */
function sort(arr, start, end) {
  // 当只剩下一个元素当时候不再进行递归
  if (start >= end) {
    return arr;
  }

  const cutPoint = partition(arr, start, end);
  // 使用递归持续对分割点左右两部分进行切分
  sort(arr, 0, cutPoint - 1);
  sort(arr, cutPoint, end);
}

module.exports = function (arr) {
  sort(arr, 0, arr.length - 1);
  return { arr };
};
