/**
 * 选择排序 --- 位置调换
 * 核心思想：将未排序的元素依次插入到已排序空间中，默认第一个元素为已排序空间。
 * @param {Array} arr
 */
function sort(arr) {
  const len = arr.length;
  let count = 0;

  for (let i = 1; i < len; i++) {
    const value = arr[i];

    let j = i - 1;
    for (; j >= 0; j--) {
      count++;
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }

  return { arr, count };
}

module.exports = sort;
