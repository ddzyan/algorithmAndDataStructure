/**
 * 归并排序
 * 核心思想：采用分治思想，使用递归解决
 */

/**
 *
 * @param {Array<number>} left
 * @param {Array<number>} right
 */
function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result.concat(left);
  result.concat(right);

  return result;
}

/**
 * @description 将数组一直切分成对等的2份，直到长度小于等于2
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  const len = arr.length;
  // 递归终止条件
  if (len < 2) {
    return arr;
  }

  // 寻找中间点
  const mind = Math.floor(len / 2);
  // 切分数组
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = function (arr) {
  mergeSort(arr);
  return { arr };
};
