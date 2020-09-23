/**
 * 冒泡排序
 * 核心思想：每次遍历比较相邻元素，将最大元素移动到数组末尾。
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    count++;
    let isSort = false;
    for (let j = 0; j < len - i - 1; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSort = true;
      }
    }
    if (!isSort) {
      break;
    }
  }
  return arr;
}
