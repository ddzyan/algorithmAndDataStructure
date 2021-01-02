/**
 * 插入排序--选择一个最小下标位置调换
 * 核心思想：在未排序的区间找出最小元素，插入已排序区间。默认已排序区间未为0
 * @param {Array} arr;
 */
function sort(arr) {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    let index = i;
    for (let j = i + 1; j < len; j++) {
      count++;
      if (arr[j] < arr[index]) {
        index = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }

  return { arr, count };
}

module.exports = sort;
