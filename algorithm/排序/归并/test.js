/**
 * 归并排序
 * 核心思想：采用分治思想，使用递归解决
 */

/**
 * @description 合并切分后的数组
 * @param {Array<number>} left
 * @param {Array<number>} right
 */
function merge(left, right) {
  const res = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  return res;
}

/**
 * @description 将数组一直切分成对等的2份，直到长度小于等于2
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  // 递归停止条件
  const len = arr.length;
  if (len < 2) return arr;

  const mind = Math.floor(len / 2);
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = function (arr) {
  return { arr: mergeSort(arr) };
};
