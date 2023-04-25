/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 만약 left의 값이 mid 이하라면,
    // 즉 오름차순으로 잘 정렬이 되어있을 경우라면,
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 만약 left의 값이 mid보다 크다면,
    // 즉 회전으로 인해 오름차순이 되어있지 않은 구간이라면,
    else if (nums[left] > nums[mid]) {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
