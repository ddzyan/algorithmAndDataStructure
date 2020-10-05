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
  const tempArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      tempArr.push(left.shift());
    } else {
      tempArr.push(right.shift());
    }
  }

  while (left.length) {
    tempArr.push(left.shift());
  }

  while (right.length) {
    tempArr.push(right.shift());
  }

  return tempArr;
}

/**
 * @description 将数组一直切分成对等的2份，直到长度小于等于2
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  const len = arr.length;
  // 递归终止条件,非原地排序
  if (len < 2) {
    return arr;
  }

  const mind = Math.floor(len / 2);
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  // 非原地排序需要返回结果
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = function (arr) {
  return { arr: mergeSort(arr) };
};
