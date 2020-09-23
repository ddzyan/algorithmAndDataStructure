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

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

/**
 *
 * @param {Array<number>} arr 数组
 */
function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const mind = Math.floor(len / 2);
  const left = arr.slice(0, mind);
  const right = arr.slice(mind, len);
  return merge(mergeSort(left), mergeSort(right));
}
