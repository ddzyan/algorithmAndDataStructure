/**
 * 冒泡排序
 * 空间复杂度 = O(1)
 * 最好时间复杂度 = O(n)
 * 最坏时间复杂度 = O(n^2)
 * 平均时间复杂度 = O(n^2)
 */

const a = [3, 5, 4, 1, 8, 7];

function sort(arr) {
  const len = arr.length;
  if (len === 1) return;
  let count = 0;
  let isSort = false;
  for (let i = 0; i < len; i++) {
    isSort = false;
    for (let j = 0; j < len - 1 - i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSort = true;
      }
    }
    if (!isSort) break; // 没有数据交换则提前退出
  }
  console.log('count', count);
  return arr;
}

sort(a);
console.log(a);
