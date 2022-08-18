function merge(left_arr, right_arr) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < left_arr.length && j < right_arr.length) {
    if (left_arr[i] < right_arr[j]) {
      result.push(left_arr[i]);
      i++;
    } else {
      result.push(right_arr[j]);
      j++;
    }
  }

  while (i < left_arr.length) {
    result.push(left_arr[i]);
    i++;
  }
  while (j < right_arr.length) {
    result.push(right_arr[j]);
    j++;
  }

  return result;
}

function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let mid_idx = Math.floor(arr.length / 2);
  let left_arr = merge_sort(arr.slice(0, mid_idx));
  let right_arr = merge_sort(arr.slice(mid_idx));

  return merge(left_arr, right_arr);
}

let arr = [3, 6, 13, 4, 33, 12, 35, 87, 6, 64];
const result = merge_sort(arr);
console.log(result);
