/**
 * 冒泡排序
 * 核心：从头开始比较相邻元素，将大的元素向后移动。越小的元素会慢慢的浮现到数组头部，像碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  let isSort = false;
  // 有序区间大小
  for (let i = 0; i < len; i++) {
    // 无序区间大小，选择最大数到有序区间
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSort = true;
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    if (!isSort) {
      break;
    }
  }

  console.log('count', count);
  return arr;
}

console.log(sort(arr));
