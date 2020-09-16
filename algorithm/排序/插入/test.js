/**
 * 选择排序
 * 核心思想：将区间分为未排序区域和已排序区域，然后将未排序区域的数字插入到已排序区域，并且还需要保证已排序区域始终有序，默认第一个元素为已排序区间。
 */

const arr = [1, 3, 7, 2, 4, 6];

function sort(arr) {
  const len = arr.length;
  let count = 0;
  // 默认将数组的一个元素认定为有序区间，也表示有序区间个数
  for (let i = 1; i < len; i++) {
    count++;
    const value = arr[i];
    let j = i - 1;
    // 在有序区间中腾出一个位置，存放元素
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
