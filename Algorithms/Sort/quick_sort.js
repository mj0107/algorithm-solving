function quickSort1(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort1(left).concat(pivot, quickSort1(right));
}

/* ----------------------------------------------------------*/

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  let pivot = arr[start];
  let swap_idx = start; // 마지막에 위치해야 할 인덱스

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swap_idx++;
      swap(arr, swap_idx, i);
    }
  }
  swap(arr, start, swap_idx);
  return swap_idx;
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot_idx = pivot(arr, left, right);

    // left
    quickSort2(arr, left, pivot_idx - 1);
    // right
    quickSort2(arr, pivot_idx + 1, right);
  }
  return arr;
}

const arr = [3, 6, 13, 4, 33, 12, 35, 87, 6, 64];

console.log(quickSort2(arr));
