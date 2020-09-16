const arr = [3, 5, 7, 1, 2, 4];

function sort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(sort(arr));
