/**
 * 选择排序
 * 核心思想：将区间分为未排序区域和已排序区域，然后将未排序区域的数字插入到已排序区域，并且还需要保证已排序区域始终有序，默认第一个元素为已排序区间。
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 选择无序区域元素，插入到有序区域
  for (let i = 1; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    // 保证有序区域始终有序，并且腾出一个位置给无序区域元素
    for (; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }
  console.log('count', count);
  return arr;
}

console.log(sort(arr));
