/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    // 하나씩 순회하면서 현재 값을 최소값으로 설정
    let minNum = nums[i];
    // left는 최소값의 다음부터, right는 가장 큰 값부터 시작
    let [left, right] = [i + 1, nums.length - 1];

    let sum = 0;
    while (left < right) {
      sum = minNum + nums[left] + nums[right];

      // 만약 현재 sum이 저장되어있는 result 보다 target에 더 가깝다면
      // result 현재 sum으로 교체
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      if (sum < target) {
        left += 1;
      } else if (sum > target) {
        right -= 1;
      } else {
        return sum;
      }
    }
  }

  return result;
};
