/**
 * 插入排序--选择一个最小下标位置调换
 * 核心思想：在未排序的区间找出最小元素，插入已排序区间。默认已排序区间未为0
 * @param {Array} arr;
 */
function sort(arr) {
  const len = arr.length;
  let count = 0;

  // 依次在未排序空间中找到最小值，插入到已排序区间
  for (let i = 0; i < len; i++) {
    count++;
    let index = i;
    for (let j = i; j < len; j++) {
      count++;
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }

  return { arr, count };
}

module.exports = sort;
