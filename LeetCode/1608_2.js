/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const sortedNumberList = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sortedNumberList.at(-1);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;
    for (let i = 0; i < sortedNumberList.length; i++) {
      if (sortedNumberList[i] >= mid) {
        count++;
      }
    }

    if (mid === count) {
      return mid;
    }

    if (count > mid) {
      left = mid + 1;
      continue;
    }
    if (count < mid) {
      right = mid - 1;
      continue;
    }
  }

  return -1;
};
