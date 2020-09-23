/**
 * 插入排序
 * 核心思想：在未排序的区间找出最小元素，插入已排序区间
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 这个循环表示已排序区间大小和位置
  for (let i = 0; i < len; i++) {
    count++;
    let index = i;
    // 找出未排序区间最小值下标
    for (let j = i + 1; j < len; j++) {
      count++;
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    // 将最小值插入到已排序区间，也就是位置调换
    const tmp = arr[i];
    arr[i] = arr[index];
    arr[index] = tmp;
  }
  return arr;
}
