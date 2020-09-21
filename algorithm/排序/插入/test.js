/**
 * 选择排序 --- 位置调换
 * 核心思想：将区间分为未排序区域和已排序区域，然后将未排序区域的数字插入到已排序区域，并且还需要保证已排序区域始终有序，默认第一个元素为已排序区间。
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 选择无序区域元素，插入到有序区域
  for (let i = 1; i < len; i++) {
    count++;
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      count++;
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

  return { arr, count };
}

module.exports = sort;
