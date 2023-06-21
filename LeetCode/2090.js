/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  let result = Array.from({ length: nums.length }, () => -1);

  // 반지름이 k일 경우보다 배열의 길이가 작을 경우
  if (nums.length < k) {
    return result;
  }

  for (let i = k; i < nums.length - k; i += 1) {
    let sum = 0;
    for (let j = i - k; j <= i + k; j += 1) {
      sum += nums[j];
    }
    result[i] = Math.floor(sum / (k * 2 + 1));
  }

  return result;
};
