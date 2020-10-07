/**
 * 选择排序 --- 位置调换
 * 核心思想：将未排序的元素依次插入到已排序空间中，默认第一个元素为已排序空间。
 * @param {Array} arr
 */
function sort(arr) {
  const len = arr.length;
  let count = 0;

  // 遍历无序空间
  for (let i = 0; i < len; i++) {
    // 拿出无序空间的元素
    const value = arr[i];

    let j = i - 1;
    // 保证有序空间的持续有序，并且腾出一个位置
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
