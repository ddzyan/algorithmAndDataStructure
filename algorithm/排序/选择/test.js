/**
 * 插入排序
 * 核心思想：在未排序的区间找出最小元素，插入已排序区间。默认已排序区间未为0
 */

const arr = [1, 3, 7, 9, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 第一次循环表示已排序区间大小和当前插入的已排序位置
  for (let i = 0; i < len; i++) {
    count++;
    let index = i;
    // 第二次循环为了找出未排序区间最小值
    for (let j = i + 1; j < len; j++) {
      count++;
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const tmp = arr[index];
    arr[index] = arr[i];
    arr[i] = tmp;
  }
  console.log('count', count);
  return arr;
}

console.log(sort(arr));
