/**
 * 插入排序--选择一个最小下标位置调换
 * 核心思想：在未排序的区间找出最小元素，插入已排序区间。默认已排序区间未为0
 */

const arr = [1, 3, 7, 9, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 有序区域位置
  for (let i = 0; i < len; i++) {
    let index = i;
    // 找出最小元素下标
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const tmp = arr[i];
    arr[i] = arr[index];
    arr[index] = tmp;
  }
  console.log('count', count);
  return arr;
}

console.log(sort(arr));
