/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const COLOR = {
    RED: 0,
    WHITE: 1,
    BLUE: 2,
  };

  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (mid <= right) {
    // mid가 0일 경우, 가장 앞에 와야하기 때문에 left랑 교환한다.
    if (nums[mid] === COLOR.RED) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
      continue;
    }
    // mid가 1일 경우, 중간에 오는게 맞기 때문에 mid만 1 증가시킨다.
    if (nums[mid] === COLOR.WHITE) {
      mid++;
      continue;
    }
    // mid가 2일 경우, 가장 뒤에 와야하기 때문에 right랑 교환한다.
    if (nums[mid] === COLOR.BLUE) {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
      continue;
    }
  }

  return nums;
};
